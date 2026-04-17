import { Component, input } from "@angular/core";
import { HousingLocationInfo } from "../housing-location";

@Component({
  selector: "app-housing-location",
  imports: [],
  templateUrl: "./housing-location.html",
  styleUrl: "./housing-location.scss",
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
