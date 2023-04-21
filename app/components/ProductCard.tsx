import { Product } from "@/type";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col drop-shadow-md group cursor-pointer rounded-md gap-2 bg-lightBlue">
      <div className="aspect-square w-full overflow-hidden h-48 relative">
        <Image
          //width={300}
          //height={250}
          fill
          src={product.image}
          alt="product image"
          className="object-cover h-full w-full group-hover:scale-110 transition duration-300 rounded-md"
        />
      </div>

      <div className="px-3 pb-3 flex flex-col">
        {/* BUTTONS */}
        <div className="flex justify-between py-1">
          <button className="w-20 h-7 text-white rounded-full flex gap-1 items-center justify-center bg-blue hover:bg-[#004f9a] duration-300 transition">
            <span>
              <AiOutlinePlus fill="white" />
            </span>
            Add
          </button>
          <button className="w-24 h-7 bg-white border-[1px] border-black text-black rounded-full flex items-center gap-1 hover:bg-black hover:text-white duration-300 transition justify-center">
            <span>
              <AiOutlinePlus />
            </span>
            Details
          </button>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-lg text-green-700 font-semibold">
            Now ${product.price}
          </p>
          <p className="text-gray-500 line-through decoration-[1px]">
            $ {product.oldPrice}
          </p>
        </div>
        <p className="text-lg font-semibold py-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {product.title}
        </p>
        <p className="line-clamp-2">{product.description}</p>
        <div className="flex text-sm gap-2 items-center">
          <BsStarFill className="fill-orange-500" />
          <BsStarFill className="fill-orange-500" />
          <BsStarFill className="fill-orange-500" />
          <BsStarFill className="fill-orange-500" />
          <p>25</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
