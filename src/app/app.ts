import { Component } from "@angular/core";
import { Home } from "./home/home";

@Component({
  selector: "app-root",
  imports: [Home],
  templateUrl: "./app.html",
  styleUrls: ["./app.scss"],
})
export class App {
  title = "homes";
}
