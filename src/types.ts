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
  Ascending = 'ascending',
  Descending = 'descending',
  Unordered = 'unordered',
}

export interface SortRules {
  alphabetically: AlphabeticallyRules
}
