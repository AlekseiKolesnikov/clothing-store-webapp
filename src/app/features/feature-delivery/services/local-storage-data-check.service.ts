import {Injectable} from "@angular/core";
import {LocalStorageService} from "../../../local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageDataCheckService {
  constructor(
    private readonly localStorageService: LocalStorageService
  ) { }

  checkDefaultValue(data: string, defaultValue: string, dataKey: string): string {
    const storageItem = this.localStorageService.getItem(dataKey)
    return storageItem !== null ? storageItem : (data === "" ? defaultValue : data)
  }
}
