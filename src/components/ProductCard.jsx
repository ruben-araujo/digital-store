import { Link } from "react-router-dom";


const ProductCard = ({ produto }) => {
  let css = '';
  let discount = '';

  if (produto.price && produto.priceDiscount && produto.price > produto.priceDiscount) {
    css = 'line-through text-light-gray';
    discount = '$' + produto.priceDiscount;
  }

  return (
    <Link to={`/product-view/${produto.id}`}>
      <div>
        <img className='h-80 w-72' src={produto.image[0]} alt='' />
        <div>
          <h1 className='text-2xl text-dark-gray-3'>{produto.name}</h1>
          <h3 className='text-sm text-dark-gray-3'>{produto.type}</h3>
          <div className='flex gap-4'>
            <span className={'text-2xl text-dark-gray  ' + css}>
              ${produto.price}
            </span>
            <span className='text-2xl text-dark-gray'>{discount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;