import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, maxLength: number): string {
    if (value !== null && value.length <= maxLength) {
      return value
    } else if (value !== null) {
      return value.slice(0, maxLength) + '...'
    } else {
      return ""
    }
  }
}
