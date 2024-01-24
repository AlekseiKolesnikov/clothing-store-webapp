export interface IDeliveryData {
  fullName: string,
  phoneNumber: string,
  city: string,
  address: string
}

export interface IApiData {
  status: string,
  code: number,
  total: number,
  data: IAddress[]
}

export interface IAddress {
  id: number,
  street: string,
  streetName: string,
  buildingNumber: string,
  city: string,
  zipcode: string,
  country: string,
  county_code: string,
  latitude: number,
  longitude: number,
}

export interface ISearchData {
  value: string,
  id: number
}

export interface IDeliveryOptions {
  icon: string,
  iconName: string
  text: string,
  option: number,
  isSelected: boolean
}

export interface IUSCities {
  data: string[]
}
