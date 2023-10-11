import { useRouter } from 'next/router'
// import { products } from "../../data/products.json";
import { Rating } from "./../../components/rating";
export default function Products() {

    const router = useRouter()
    const product = router.query

    const ProductCard = ({ product }) => {
        return (
          <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col cursor-pointer">
            <div className="w-full aspect-w-1 aspect-h-1">
              <img
                src={product.imageSrc}
                alt={product.name+"hello"}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex-grow">
              <h3 className="text-lg font-semibold text-black">{product.name}</h3>
              <div className="flex items-center mt-1 mb-2">
                <Rating value={product.rating} />
                <span className="ml-2 text-gray-500">
                  {product.numReviews} reviews
                </span>
              </div>
              <p className="text-black font-medium text-lg mt-auto">
                ${product.price}
              </p>
            </div>
          </div>
        );
      };
    return (
      <div className="max-w-screen-xl mx-auto my-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
            <ProductCard product={product} />
          
        </div>
        
        
      </div>
    );
  };

  