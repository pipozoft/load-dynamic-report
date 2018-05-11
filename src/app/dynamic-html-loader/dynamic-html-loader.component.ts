import {
  Component,
  OnInit,
  Input,
  ViewChild, ViewContainerRef, ComponentRef,
  Compiler, Injector, NgModule, NgModuleRef
} from '@angular/core';


import { DomSanitizer } from '@angular/platform-browser';

import { IndustryApiService } from '../industry-api.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomComponent } from '../custom/custom.component';

@Component({
  selector: 'qio-dynamic-html-loader',
  templateUrl: './dynamic-html-loader.component.html',
  styleUrls: ['./dynamic-html-loader.component.css']
})
export class DynamicHtmlLoaderComponent implements OnInit {
  @Input() reportName: string;
  reportData: any;
  reportSanitizedTemplate: any;

  @ViewChild('container', { read: ViewContainerRef })
  _container: ViewContainerRef;

  private componentRef: ComponentRef<{}>;

  constructor(private _industryApiService: IndustryApiService,
              private _sanitizer: DomSanitizer,
              private _compiler: Compiler,
              private _injector: Injector,
              private _m: NgModuleRef<any>) { }

  ngOnInit() {
    console.log(`reportName = ${this.reportName}`);

    // GET data and templates from API
    this._industryApiService.data().subscribe((response: Response) => {
      const data = <any>response;
      this.reportData = data;
      this.reportSanitizedTemplate = data.sanitizedTemplate;

    }, (error) => {
      console.log('GET data', error);
    });

    this._industryApiService.template(this.reportName).subscribe((response) => {
      // Create "Report" component instance and add it to a module
      const tmpCmp = Component({
        selector: 'qio-custom',
        template: <string>response,
        styleUrls: ['../custom/custom.component.css']
      })(CustomComponent);
      const tmpModule = NgModule({declarations: [tmpCmp], imports: [CommonModule, FormsModule]})(class {});

      // Compile new module
      const mod = this._compiler.compileModuleAndAllComponentsSync(tmpModule);
      const factory = mod.componentFactories.find((comp) =>
        comp.componentType === tmpCmp
      );
      // Add component to DOM
      const component = this._container.createComponent(factory);
      // Pass data for the template
      component.instance.colors = this.reportData.colors;
      component.instance.report = this.reportData.report;
    }, (error) => {
      console.log('GET template', error);
    });
  }
}
