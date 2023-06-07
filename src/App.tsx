import "./App.css";
import Product, { IProduct } from "./components/Product";
import ProductList from "./components/ProductList";
import { useState } from "react";
import MyForm from "./components/MyForm";

function App() {
  const products: IProduct[] = [
    {
      id: 1,
      name: "Яблоки",
      count: 2,
      inCart: false,
      price: 54,
    },
    {
      id: 2,
      name: "Груша",
      count: 2,
      inCart: false,
      price: 45,
    },
  ];

  const [productList, setProductList] = useState<IProduct[]>([]);

  const addProduct = (product: IProduct) => {
    product.id = Math.max(...productList.map((item) => item.id), 0) + 1;
    setProductList([...productList, product]);
  };

  const changeProductCount = (productID: number, value: number) => {
    const productIdx = productList.findIndex((obj) => obj.id === productID);
    if (productIdx === -1) return;

    setProductList((previosList: IProduct[]) => {
      if (value <= 0) return previosList.filter((item) => item.id != productID);
      previosList[productIdx].count = value;
      return [...previosList];
    });
  };

  return (
    <div>
      <MyForm addProduct={addProduct} />
      <ProductList
        products={productList}
        changeProductCount={changeProductCount}
      />
    </div>
  );
}

export default App;