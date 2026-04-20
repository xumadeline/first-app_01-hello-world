import { Component, inject } from "@angular/core";
import { HousingLocation } from "../housing-location/housing-location";
import { HousingLocationInfo } from "../housing-location";
import { HousingService } from "../housing.service";

@Component({
  selector: "app-home",
  imports: [HousingLocation],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocationInfo[] = [];
  changeDetectorRef: any;

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationInfo[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
        this.changeDetectorRef.markForCheck();
      });
  }
}
