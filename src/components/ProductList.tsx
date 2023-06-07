import Product, { IProduct } from "./Product";

interface ProductListProps {
  products: IProduct[];
  changeProductCount: (productID: number, value: number) => void;
}

const ProductList = ({ products, changeProductCount }: ProductListProps) => {
  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          changeProductCount={changeProductCount}
        />
      ))}
    </div>
  );
};

export default ProductList;
