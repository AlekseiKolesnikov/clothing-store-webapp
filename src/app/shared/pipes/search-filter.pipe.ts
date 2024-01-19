import {Pipe, PipeTransform} from '@angular/core';
import {ISearchData} from "../../features/feature-delivery/services/cities-handler.service";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(dataList: ISearchData[], item: string): ISearchData[] {
    return dataList.filter(data => data.value.toLowerCase().includes(item.toLowerCase()))
  }
}
