import Product from "./Product";

function FeaturedProducts() {
  return (
    <div className="bg-white w-full">
      <div className="flex items-center ">
        <h2 className="text-2xl font-bold flex gap-2 ml-2">
          <span className="text-red-600">FEATURED</span> PRODUCT
        </h2>
        <div className="h-1 w-[90%] mx-3 bg-black"></div>
      </div>
      <div className="flex gap-4 my-3 overflow-x-auto no-scrollbar whitespace-nowrap flex-shrink-0 flex-nowrap justify-between ">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default FeaturedProducts;
