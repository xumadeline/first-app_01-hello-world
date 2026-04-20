import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import { HousingLocationInfo } from "../housing-location";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-details",
  imports: [ReactiveFormsModule],
  templateUrl: "./details.html",
  styleUrl: "./details.scss",
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocationInfo | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });
  changeDetectorRef: any;

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params["id"], 10);
    this.housingService
      .getHousingLocationById(housingLocationId)
      .then((housingLocation) => {
        this.housingLocation = housingLocation;
        this.changeDetectorRef.markForCheck();
      });
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.lastName ?? "",
      this.applyForm.value.email ?? "",
    );
  }
}
