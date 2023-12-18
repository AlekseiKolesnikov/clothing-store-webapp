import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageKeysService {
  private readonly localStorageKeys = {
    channelIconKey: 'channelIcon',
    profileKey: 'profile',
    personalFullName: 'personalFullName',
    personalPhoneNumber: 'personalPhoneNumber',
    pointsCardKey: 'pointsCard',
    frameArrayKey: 'deliveryOptionFrame'
  }

  getKey() {
    return this.localStorageKeys
  }
}
