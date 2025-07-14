import { products } from "../../constants";
import { Bounded } from "../shared/Bounded";
import { Heading } from "../shared/Heading";
import { SlideIn } from "../shared/SlideIn";
import { SkateboardProduct } from "./SkateboardProduct";
 
const ProductGrid = ( ) => {
  return (
    <Bounded className="bg-texture bg-brand-gray text-black/60">
      <SlideIn>
        <Heading className="text-center ~mb-4/6" as="h2">
          Latest Drop
        </Heading>
      </SlideIn>
      <SlideIn>
        <div className="text-center ~mb-6/10">
          Grab our freshest designs before they sell out!
        </div>
      </SlideIn>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {!!products&& products.map(product=>(
            <SkateboardProduct key={product.id} product={product}   />
        )
        )}
      </div>
    </Bounded>
  );
};

export default ProductGrid;
