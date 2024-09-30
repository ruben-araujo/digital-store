function ProductCard({ image, name, price, priceDiscount }) {
  return (
    <div className="my-3">
      <img
        className="bg-[var(--white)] mb-3"
        src={image}
        alt=""
        style={{ width: 292, height: 321 }}
      />
      <p>{name}</p>

      <div className="space-x-2">
        <span className="w-6 text-[var(--light-gray)] line-through">
          {priceDiscount}
        </span>
        <span className="w-6 text-[var(--dark-gray)] ">{price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
