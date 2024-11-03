import ProductCard from '../components/ProductCard.jsx';
import ProductItens from '../../src/database/ProductItens.js'

const ProductListing = ({quantidade}) => {
  const limites = ProductItens.slice(0, quantidade);
  const cards = limites.map((item, i) => (
    <ProductCard key={item.id} produto={item} />
  ));

  return <div className='flex flex-wrap gap-4 justify-center'>{cards}</div>;
};

export default ProductListing;