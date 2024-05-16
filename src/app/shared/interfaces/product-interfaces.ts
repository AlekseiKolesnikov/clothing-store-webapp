export interface IProduct {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

export interface IFilterParams {
  filterPriceFrom: number
  filterPriceTo: number
  filterRateOption: number
  filterSexOption: {
    male: boolean
    female: boolean
  }
}

export interface IFilterOption {
  text: string,
  isSelected: boolean
}

export interface ISize {
  text: string,
  isSelected: boolean
}

export interface IProductInf {
  title: string
  text: string
  isFolded: boolean
}
