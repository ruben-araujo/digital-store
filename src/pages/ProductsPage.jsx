import { useSearchParams } from 'react-router-dom';

function ProductsPage() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get('filter');

  return (
    <div className='flex flex-col text-primary items-center justify-center h-screen'>
      <h1 className='font-bold text-6xl'>Filter:</h1>
      {filterValue ? <h2 className='text-3xl font-semibold'>{filterValue}</h2> : "Undefined"}
    </div>
  );
}

export default ProductsPage;
