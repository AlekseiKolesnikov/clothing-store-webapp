import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class InputResultStateService {
    private phoneInputResultSubject = new BehaviorSubject<boolean>(false)
    private nameInputResultSubject = new BehaviorSubject<boolean>(false)

    getPhoneInputResultState() {
        return this.phoneInputResultSubject.asObservable()
    }

    getNameInputResultState() {
        return this.nameInputResultSubject.asObservable()
    }

    setPhoneInputResultState(newState: boolean) {
        this.phoneInputResultSubject.next(newState)
    }

    setNameInputResultState(newState: boolean) {
        this.nameInputResultSubject.next(newState)
    }

}
