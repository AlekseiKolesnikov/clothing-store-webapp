import {Pipe, PipeTransform} from '@angular/core';
import {ICdekCity} from "../../features/feature-delivery/services/cdek-cities.service";

@Pipe({
  name: 'searchFilter'
})

export class SearchFilterPipe implements PipeTransform {
  transform(citiesList: ICdekCity[], searchCity: string): ICdekCity[] {
    return citiesList.filter(city => city.cityName.toLowerCase().includes(searchCity.toLowerCase()))
  }
}
