enum Status {
  pending = "Pending",
  published = "Published",
  archived = "Archived",
}

interface Product {
  name: string;
  price: number;
  images: string[];
  status: Status;
}

const product: Product = {
  name: "Shampoo",
  price: 2.99,
  images: ["image-1.png", "image-2.png"],
  status: Status.pending,
};

console.log(`the price is: $${product.price}`);
