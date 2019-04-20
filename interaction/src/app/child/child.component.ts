import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  template: `
    <h2>{{ "Salam" + parentData + parentDatam }}</h2>
    <h3>{{ privacy }}</h3>
    <button (click)="fireevent('Hey Baby Girl What u Doin Tonight')">
      Send Event
    </button>
    <p> {{getfetch}} </p>
  `,
  styleUrls: ["./child.component.scss"]
})
export class ChildComponent implements OnInit {
  @Input() public parentData;
  @Input() parentDatam;
  @Input() privacy;
  @Output() public childEvent = new EventEmitter();
  // @Output() public fetchevent = new EventEmitter();
  getfetch = ''

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.fetching();
      // fetch("http://192.168.1.106:3000").then(res=>res.json()).then(res => {this.getfetch = res;})
    }, 3000);
  }
  fetching() {
    fetch("http://192.168.1.106:3000/taha")
      .then(response => response.json())
      .then(json => (this.getfetch=json));
  }
  fireevent(value) {
    this.childEvent.emit(value);
  }
}
