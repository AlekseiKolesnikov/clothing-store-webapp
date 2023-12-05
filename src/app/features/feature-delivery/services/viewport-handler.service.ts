import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ViewportHandlerService {
  protected pendingUpdate = false

  handleViewport() {
    if (this.pendingUpdate) return;
    this.pendingUpdate = true;

    requestAnimationFrame(() => {
      this.pendingUpdate = false;
      const listBox = document.getElementById("list-box")
      if (listBox && window.visualViewport) {
        listBox.style.transform = `translateY(${Math.max(0, window.visualViewport.offsetTop)}px)`;
      }
    })
  }
}
