"use client";
import { Product } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import useCart from "@/store/store";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItemToCart = useCart((state) => state.addItemToCart);
  const cart: Product[] = useCart((state) => state.cart);

  const [clientCart, setClientCart] = useState<Product[]>([]);
  useEffect(() => {
    setClientCart(cart);
  }, [cart]);

  const handleAddItemToCart = () => {
    const newItem = {
      ...product,
      quantity: 1,
    };

    addItemToCart({ newItem });
    toast.success("Item added to Cart");
  };

  const isExist = () => {
    let exist = false;
    clientCart.map((item: Product, index: number) => {
      if (+item._id === +product._id) exist = true;
    });
    return exist;
  };

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
          <button
            disabled={isExist()}
            onClick={handleAddItemToCart}
            className="w-20 h-7 text-white rounded-full flex gap-1 items-center justify-center bg-blue hover:bg-[#004f9a] duration-300 transition disabled:bg-gray-400"
          >
            <span>
              <AiOutlinePlus fill="white" />
            </span>
            Add
          </button>
          <Link
            href={{
              pathname: `/product/${product._id}`,
              query: {
                _id: product._id,
                title: product.title,
                description: product.description,
                price: product.price,
                oldPrice: product.oldPrice,
                brand: product.brand,
                category: product.brand,
                image: product.image,
                isNew: product.isNew,
              },
            }}
            //as={`/product/${product._id}`}
          >
            <button className="w-24 h-7 bg-white border-[1px] border-black text-black rounded-full flex items-center gap-1 hover:bg-black hover:text-white duration-300 transition justify-center">
              <span>
                <AiOutlinePlus />
              </span>
              Details
            </button>
          </Link>
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
