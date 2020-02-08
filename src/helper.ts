import { Restaurant, RestaurantRaw } from './types'

const moveDecimal = (num: number): number => num / Math.pow(10, num.toString().length - 1)

const formatRestaurants = (restaurants: RestaurantRaw[]): Restaurant[] => {
  return restaurants.map(restaurant => {
    return {
      deliveryPrice: new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: restaurant.currency,
      }).format(moveDecimal(restaurant.delivery_price)),
      ...restaurant,
    }
  })
}

export { formatRestaurants }
