import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {SizeIconService} from "./size-icon.service";

export interface ISize {
  text: string,
  isSelected: boolean
}
@Injectable({
  providedIn: 'root'
})
export class SizeOptionStateService {
  private readonly sizeOptionSubject: BehaviorSubject<ISize[]>
  private readonly sizeOptions: ISize[] = new Array<ISize>()

  constructor(
    private readonly sizeIconService: SizeIconService
  ) {
    this.sizeOptions = sizeIconService.getSizeData()
    this.sizeOptionSubject = new BehaviorSubject<ISize[]>(this.sizeOptions)
  }

  getState() {
    return this.sizeOptionSubject.asObservable()
  }

  setState(selectedIndex: number) {
    this.sizeOptions.forEach((item, index) => {
      item.isSelected = index === selectedIndex
    })
    this.sizeIconService.saveSelectedOption(selectedIndex)
    this.sizeOptionSubject.next(this.sizeOptions)
  }
}
