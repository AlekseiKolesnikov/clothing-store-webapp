import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DeliveryIconLayoutModel {
  private clickedElements: HTMLElement[] = []

  getLayout(element: HTMLElement) {
    this.clickedElements.push(element)

    if (this.clickedElements.length > 1) {
      this.clickedElements[0].classList.remove('gradientFrame')
      this.clickedElements.splice(0, 1)

      element.classList.toggle('gradientFrame')
      console.log(this.clickedElements);
    } else {
      element.classList.toggle('gradientFrame')
      console.log(this.clickedElements);
    }
  }
}
