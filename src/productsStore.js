//coffee : price_1MySjxSDhR3TyBvwS75uxtWr
//sunglasses : price_1MySlhSDhR3TyBvwq2hacMkg
//phone: price_1MySlhSDhR3TyBvwq2hacMkg



import product1 from "./assets/1.png";
import product2 from "./assets/2.png";
import product3 from "./assets/3.png";
import product4 from "./assets/4.png";
import product5 from "./assets/5.png";
import product6 from "./assets/6.webp";
import product7 from "./assets/7.webp";
import product8 from "./assets/8.webp";

 const productsArray = [
  {
    id: "price_1MygOASDhR3TyBvwgFn0BZW9",
    title: "IPhone",
    price: 99999.0,
    productImage: product1,
  },
  {
    id: "price_1MypATSDhR3TyBvw4E5Pyh0W",
    title: "Macbook Pro 2022 (M1)",
    price: 199900.0,
    productImage: product2,
  },
  {
    id: "price_1MypBaSDhR3TyBvwfd5EkfZ5",
    title: "Cannon M50 Camera",
    price: 69900.0,
    productImage: product3,
  },
  {
    id: "price_1MypDXSDhR3TyBvwKpLv0t3O",
    title: "WLS Van Gogh Denim Jacket",
    price: 22800.0,
    productImage: product4,
  },
  {
    id: "price_1MypEUSDhR3TyBvwViQEPE2X",
    title: "LED Light Strips",
    price: 1900.99,
    productImage: product5,
  },
  {
    id: "price_1MypFISDhR3TyBvwIoFIPvFM",
    title: "SPECTRUM LS TEE",
    price: 6800.0,
    productImage: product6,
  },
  {
    id: "price_1MypFySDhR3TyBvwLhlXwIFT",
    title: "AUTO SERVICE SHIRT by GOLF WANG",
    price: 12000.0,
    productImage: product7,
  },
  {
    id: "price_1MypGgSDhR3TyBvwCO11i4tF",
    title: "DON'T TRIP UNSTRUCTURED HAT",
    price: 4000.0,
    productImage: product8,
  },
];
function getProductData(id){
    let productData=productsArray.find(product=>product.id === id);

    if(productData === undefined){
        console.log("Product data doest not exist for ID:"+id);
        return undefined;
    }
    return productData;
}
export {productsArray,getProductData};