import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {
  private readonly profileData = {
    image: "assets/images/ui-icons/ghost.svg",
    name: "Aleksei",
    status: "Новичок"
  }

  getData() {
    return this.profileData
  }
}
