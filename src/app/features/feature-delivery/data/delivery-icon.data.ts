export interface IDeliveryIconData {
  icon: string,
  iconName: string,
  text: string,
  className: string,
  frameClassName: string
}

export const deliveryIconData: IDeliveryIconData[] = [
  {
    icon: "assets/delivery_icons/store.svg",
    iconName: "store icon",
    text: "Забрать из магазина",
    className: "store-icon",
    frameClassName: "empty-frame"
  },
  {
    icon: "assets/delivery_icons/location.svg",
    iconName: "location icon",
    text: "Самовывоз из ПВЗ",
    className: "location-icon",
    frameClassName: "empty-frame"
  },
  {
    icon: "assets/delivery_icons/carton-box.svg",
    iconName: "carton box icon",
    text: "Доставка курьером",
    className: "carton-box-icon",
    frameClassName: "empty-frame"
  }
]
