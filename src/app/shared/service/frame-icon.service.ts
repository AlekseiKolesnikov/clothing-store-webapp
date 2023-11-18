import {deliveryIconData} from "../../features/feature-delivery/data/delivery-icon.data";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FrameIconService {
  setState(elementIndex: number, frameState: string) {
    deliveryIconData[elementIndex].frameClassName = frameState
  }
}
