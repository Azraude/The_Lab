export type ProductType = {
  id:number;
  name: string;
  image: string;
  price: number;
  time:number;
  person:number;
  quantity:number;
};

const products: ProductType[] = [
  {id:1,name: "Produit 1", image: "assets/product1.png", price: 10, time:10,person:1,quantity:0},
  {id:2,name: "Produit 2", image: "assets/product2.png", price: 20, time:10,person:1,quantity:0},
  {id:3,name: "Produit 3", image: "assets/product3.png", price: 30, time:10,person:1,quantity:0},
  {id:4,name: "Produit 4", image: "assets/product4.png", price: 40, time:10,person:1,quantity:0},
  {id:5, name: "Produit 5", image: "assets/product2.png", price: 50, time:10,person:1 ,quantity:0},
  {id:6, name: "Produit 6", image: "assets/product1.png", price: 60, time:10,person:1,quantity:0},
  {id:7, name: "Produit 7", image: "assets/product2.png", price: 50, time:10,person:1,quantity:0 },
  {id:8, name: "Produit 8", image: "assets/product1.png", price: 60, time:10,person:1,quantity:0},
];

export default products;
