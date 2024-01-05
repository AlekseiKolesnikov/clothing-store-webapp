import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setPrimitiveItem(key: string, value: string) {
    localStorage.setItem(key, value)
  }

  getPrimitiveItem<TYPE>(key: string, typeConverter: (stringValue: string) => TYPE): TYPE {
    const stringValue = localStorage.getItem(key)
    if (stringValue !== null) {
      return typeConverter(stringValue)
    } else {
      return typeConverter("")
    }
  }

  setItem(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log('Error')
    }
  }

  getItem(key: string): any {
    const storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
