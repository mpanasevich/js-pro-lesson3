import { on } from "events";
import MyButton from "./MyButton";

export interface IProduct {
  id: number;
  name: string;
  count: number;
  price: number;
  inCart: boolean;
}

interface ProductProps {
  product: IProduct;
  changeProductCount: (productID: number, value: number) => void;
}

const Product = ({ product, changeProductCount }: ProductProps) => {
  const { count, inCart, name, price, id } = product;
  return (
    <div>
      <span>
        <span className="span">{id}</span>

        <span className="span">{inCart && "✔"}</span>
        <span className="span">{name}</span>
        <span className="span">{price}</span>
        <span className="span">{count}</span>
        <span className="span">{price * count}</span>
      </span>
      <MyButton
        onClick={() => {
          changeProductCount(id, count + 1);
        }}
      >
        +1
      </MyButton>
      <MyButton
        onClick={() => {
          changeProductCount(id, count - 1);
        }}
      >
        -1
      </MyButton>
      <MyButton onClick={() => changeProductCount(id, 0)}>Удалить</MyButton>
    </div>
  );
};

export default Product;
