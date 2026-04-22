import { Injectable } from "@angular/core";
import { HousingLocationInfo } from "./housing-location";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  url = "http://localhost:3000/locations";
  fallbackUrl = "/public/locations.json";

  private async getHousingLocations(): Promise<HousingLocationInfo[]> {
    try {
      const data = await fetch(this.url);
      if (!data.ok) {
        throw new Error(`Request failed with status ${data.status}`);
      }
      return (await data.json()) ?? [];
    } catch {
      const fallbackData = await fetch(this.fallbackUrl);
      return (await fallbackData.json()) ?? [];
    }
  }

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    return this.getHousingLocations();
  }

  async getHousingLocationById(
    id: number,
  ): Promise<HousingLocationInfo | undefined> {
    const housingLocations = await this.getHousingLocations();
    return housingLocations.find((location) => location.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
