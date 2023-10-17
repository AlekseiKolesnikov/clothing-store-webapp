import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
      providedIn: 'root'
})
export class InputFieldStateService {
      private phoneInputSubject = new BehaviorSubject<boolean>(false)
      private nameInputSubject = new BehaviorSubject<boolean>(false)

      getPhoneInputState() {
            return this.phoneInputSubject.asObservable()
      }

      getNameInputState() {
            return this.nameInputSubject.asObservable()
      }

      setPhoneInputState(newState: boolean) {
            this.phoneInputSubject.next(newState)
      }

      setNameInputState(newState: boolean) {
            this.nameInputSubject.next(newState)
      }

}
