import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PointsCardService {
  private readonly pointsCardData = {
    points: 0
  }

  getPoints() {
    return this.pointsCardData.points
  }
}
