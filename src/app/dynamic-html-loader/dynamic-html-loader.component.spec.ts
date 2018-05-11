import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicHtmlLoaderComponent } from './dynamic-html-loader.component';

describe('DynamicHtmlLoaderComponent', () => {
  let component: DynamicHtmlLoaderComponent;
  let fixture: ComponentFixture<DynamicHtmlLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicHtmlLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicHtmlLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
