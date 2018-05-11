import { Component, OnInit } from '@angular/core';

export class CustomComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  setMyStyles(r, g, b) {
    return {
      'background-color': `rgb(${r}, ${g}, ${b})`
    };
  }

}
