import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndustryApiService {
  DATA_URL = './assets/sample-data';

  constructor(private http: HttpClient) { }

  // GET html template by file name
  template(name) {
    return this.http.get(`${this.DATA_URL}/${name}`,  {responseType: 'text'});
  }

  // GET sample API data
  data() {
    return this.http.get(`${this.DATA_URL}/api-data.json`);
  }
}
