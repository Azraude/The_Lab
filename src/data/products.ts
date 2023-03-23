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
  {id:1,name: "Salmon Stack", image: "/assets/product9.png", price: 10, time:10,person:1,quantity:0,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',rating:4},
  {id:2,name: "Chicken with Rice", image: "/assets/product2.png", price: 20, time:10,person:1,quantity:0,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.', rating:4},
  {id:3,name: "Raw Salmon Salad", image: "/assets/product3.png", price: 30, time:10,person:1,quantity:0, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.', rating:4},
  {id:4,name: "Salmon Salad", image: "/assets/product4.png", price: 40, time:10,person:1,quantity:0, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.', rating:4},
  {id:5, name: "Salmon Stack", image: "/assets/product2.png", price: 50, time:10,person:1 ,quantity:0, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.', rating:4},
  {id:6, name: "Chicken with Rice", image: "/assets/product1.png", price: 60, time:10,person:1,quantity:0, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.', rating:4},
  {id:7, name: "Raw Salmon Salad", image: "/assets/product2.png", price: 50, time:10,person:1,quantity:0, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.' , rating:4},
  {id:8, name: "Salmon Salad", image: "/assets/product1.png", price: 60, time:10,person:1,quantity:0, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.', rating:4},
];

export default products;
