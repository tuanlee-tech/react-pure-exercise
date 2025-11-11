// 1. `inStock = true` + `discount > 0` → hiển thị cả giá gốc và giá giảm, nút active
// 2. `inStock = true` + `discount = 0` → chỉ hiển thị giá bình thường
// 3. `inStock = false` + `discount > 0` → nút disabled, hiển thị giá giảm
// 4. `inStock = false` + `discount = 0` → nút disabled, chỉ hiển thị giá bình thường
// 5. `rating thấp` → test hiển thị sao ít
// 6. `reviews = 0` → test hiển thị khi chưa có đánh giá
const products = [
  // 1. In stock, có giảm giá
  {
    name: "Wireless Headphones",
    price: 99.99,
    currency: "USD",
    inStock: true,
    rating: 4.5,
    reviews: 128,
    discount: 20,
    image: "https://placehold.co/600x400?text=Headphones",
  },
  // 2. In stock, không giảm giá
  {
    name: "Bluetooth Speaker",
    price: 59.99,
    currency: "USD",
    inStock: true,
    rating: 4,
    reviews: 50,
    discount: 0,
    image: "https://placehold.co/600x400?text=Speaker",
  },
  // 3. Out of stock, có giảm giá
  {
    name: "Noise Cancelling Earbuds",
    price: 129.99,
    currency: "USD",
    inStock: false,
    rating: 5,
    reviews: 200,
    discount: 15,
    image: "https://placehold.co/600x400?text=Earbuds",
  },
  // 4. Out of stock, không giảm giá
  {
    name: "Smart Watch",
    price: 199.99,
    currency: "USD",
    inStock: false,
    rating: 3.5,
    reviews: 80,
    discount: 0,
    image: "https://placehold.co/600x400?text=SmartWatch",
  },
  // 5. Low rating, in stock, có giảm giá
  {
    name: "Budget Headphones",
    price: 29.99,
    currency: "USD",
    inStock: true,
    rating: 2,
    reviews: 5,
    discount: 10,
    image: "https://placehold.co/600x400?text=Budget+Headphones",
  },
  // 6. Zero reviews, in stock, no discount
  {
    name: "New Release Earphones",
    price: 49.99,
    currency: "USD",
    inStock: true,
    rating: 0,
    reviews: 0,
    discount: 0,
    image: "https://placehold.co/600x400?text=Earphones",
  },
];
export default products;