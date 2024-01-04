import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(dataList: string[], item: string): string[] {
    return dataList.filter(data => data.toLowerCase().includes(item.toLowerCase()))
  }
}
