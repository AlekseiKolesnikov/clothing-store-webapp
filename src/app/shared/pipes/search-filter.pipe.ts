import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(citiesList: string[], searchCity: string): string[] {
    return citiesList.filter(city => city.toLowerCase().includes(searchCity.toLowerCase()))
  }
}
