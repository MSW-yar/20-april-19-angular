import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "protodrop";
  name = "MSW";
  age = 20;
  bachi = "ERROR 404 not found";
  message = "";
  info=''
  public date = new Date ();
  // constructor() {
  //   fetch("http://192.168.1.106/taha")
  //     .then(response => response.json())
  //     .then(json => (this.info = json));
  // }
}
