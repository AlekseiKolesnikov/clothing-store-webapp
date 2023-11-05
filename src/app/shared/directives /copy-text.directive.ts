import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[copyClipboard]'
})
export class CopyTextDirective {
  @Input("copyClipboard")
  public payload: string = "";

  @HostListener("click", ["$event"])
  public onClick(event: MouseEvent): void {
    event.preventDefault();
    if (!this.payload)
      return;
    navigator.clipboard.writeText(this.payload.toString());
  }
}
