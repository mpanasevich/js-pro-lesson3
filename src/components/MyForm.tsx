import { useState } from "react";
import MyInput from "./MyInput";
import MyButton from "./MyButton";
import { IProduct } from "./Product";

interface MyFormProps {
    addProduct:  (product: IProduct) => void
}

const initValue: IProduct = {
  id: 0,
  name: "",
  count: 0,
  price: 0,
  inCart: false,
};

const MyForm = ({addProduct} : MyFormProps) => {
  const [product, setProduct] = useState<IProduct>(initValue);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setProduct({ ...product,  [e.target.name]: e.target.value });
  };

  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addProduct({...product});
    setProduct(initValue)
  }

  return (
    <form onSubmit = {handleSubmit}>
      <MyInput handleChange={handleChange} name="name" value={product.name} />
      <MyInput handleChange={handleChange} name="price" type = "number" value={product.price} />
      <MyInput handleChange={handleChange} name="count" type = "number" value={product.count} />
      <MyButton type = "submit">Добавить товар</MyButton>
    </form>
  );
};

export default MyForm;
