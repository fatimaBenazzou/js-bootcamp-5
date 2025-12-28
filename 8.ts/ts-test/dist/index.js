"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status["pending"] = "Pending";
    Status["published"] = "Published";
    Status["archived"] = "Archived";
})(Status || (Status = {}));
const product = {
    name: "Shampoo",
    price: 2.99,
    images: ["image-1.png", "image-2.png"],
    status: Status.pending,
};
console.log(`the price is: $${product.price}`);
//# sourceMappingURL=index.js.map