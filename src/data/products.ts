export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Chocolate Latte",
    price: 4.50,
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    name: "Strawberry Smoothie",
    price: 5.00,
    image: "https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "Chocolate Cake",
    price: 6.50,
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    name: "Strawberry Cheesecake",
    price: 7.00,
    image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    name: "Hot Chocolate",
    price: 4.00,
    image: "https://images.pexels.com/photos/5946971/pexels-photo-5946971.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 6,
    name: "Strawberry Milkshake",
    price: 5.50,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 7,
    name: "Chocolate Croissant",
    price: 3.50,
    image: "https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 8,
    name: "Strawberry Tart",
    price: 5.50,
    image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 9,
    name: "Chocolate Brownie",
    price: 4.00,
    image: "https://images.pexels.com/photos/1750000/pexels-photo-1750000.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 10,
    name: "Strawberry Ice Cream",
    price: 4.50,
    image: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 11,
    name: "Chocolate Muffin",
    price: 3.00,
    image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 12,
    name: "Strawberry Waffle",
    price: 6.00,
    image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];
