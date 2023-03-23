export type ProductType = {
  id:number;
  name: string;
  image: string;
  price: number;
  description:string,
  rating:number,
  time:number;
  person:number;
  quantity:number;
};

const products: ProductType[] = [
  {id:1,name: "Salmon Stack", image: "/assets/product1.png", price: 12, time:10,person:1,quantity:0,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',rating:3.5},
  {id:2,name: "Chicken with Rice", image: "/assets/product2.png", price: 15, time:10,person:1,quantity:0,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.', rating:4},
  {id:3,name: "Raw Salmon Salad", image: "/assets/product3.png", price: 14, time:10,person:1,quantity:0, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.', rating:3.3},
  {id:4,name: "Salmon Salad", image: "/assets/product4.png", price: 21, time:15,person:2,quantity:0, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.', rating:4.5},
  {id:5, name: "Salmon Stack", image: "/assets/product5.png", price: 16, time:10,person:1 ,quantity:0, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.', rating:5},
  {id:6, name: "Chicken with Rice", image: "/assets/product6.png", price: 19, time:10,person:2,quantity:0, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.', rating:4.7},
  {id:7, name: "Raw Salmon Salad", image: "/assets/product7.png", price: 15, time:15,person:1,quantity:0, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.' , rating:4.8},
  {id:8, name: "Salmon Salad", image: "/assets/product8.png", price: 17, time:20,person:2,quantity:0, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.', rating:4.6},
  {id:9, name: "Salmon Salad", image: "/assets/product9.png", price: 18, time:10,person:1,quantity:0, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.', rating:4.2},
  {id:10, name: "Salmon Salad", image: "/assets/product10.png", price: 13, time:10,person:1,quantity:0, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.', rating:3.8},
  // {id:11, name: "Salmon Salad", image: "/assets/product11.png", price: 60, time:10,person:1,quantity:0, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.', rating:4},
];

export default products;
