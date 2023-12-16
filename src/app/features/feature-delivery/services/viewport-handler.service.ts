import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ViewportHandlerService {
  handleViewport() {
    const currentHeight = window.innerHeight
    document.body.style.height = `${currentHeight}px`;

  }
}
