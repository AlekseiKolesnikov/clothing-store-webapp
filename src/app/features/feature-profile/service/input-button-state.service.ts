import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
      providedIn: 'root'
})
export class InputButtonStateService {
      private phoneButtonSubject = new BehaviorSubject<boolean>(false)
      private nameButtonSubject = new BehaviorSubject<boolean>(false)

      getPhoneButtonState() {
            return this.phoneButtonSubject.asObservable()
      }

      getNameButtonState() {
            return this.nameButtonSubject.asObservable()
      }

      setPhoneButtonState(newState: boolean) {
            this.phoneButtonSubject.next(newState)
      }

      setNameButtonState(newState: boolean) {
            this.nameButtonSubject.next(newState)
      }

}
