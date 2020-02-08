export interface Restaurant {
  name: string
  image: string
  city: string
  delivery_price: number
  description: string
  currency: string
  tags: Array<string>
}

export enum AlphabeticallyRules {
  Ascending = 'Ascending',
  Descending = 'Descending',
  Unordered = 'Unordered',
}

export interface SortRules {
  alphabetically: AlphabeticallyRules
}
