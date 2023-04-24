"use client";
import { Product } from "@/type";
import Image from "next/image";
import { ship1Img, ship2Img, ship3Img } from "@/public/assets/images";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsInfoCircle, BsStarFill } from "react-icons/bs";
import useCart from "@/store/store";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

interface IProductDetailsPage {
  params: {
    id: string;
  };
  searchParams: Product;
}

const ProductDetailsPage: React.FC<IProductDetailsPage> = ({
  params,
  searchParams,
}) => {
  const product = searchParams;
  const addItemToCart = useCart((state) => state.addItemToCart);
  const cart: Product[] = useCart((state) => state.cart);
  const router = useRouter();

  const handleAddItemToCart = () => {
    const newItem = {
      ...product,
      quantity: 1,
    };
    addItemToCart({ newItem });
    router.push("/");
    toast.success("Item added to the Cart");
  };

  const isExist = () => {
    let exist = false;
    cart.map((item: Product, index: number) => {
      if (+item._id === +product._id) exist = true;
    });
    return exist;
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto bg-white flex items-center my-5 p-5">
        {/* RIGHT */}
        <div className="w-2/3 h-full flex items-center justify-center relative">
          {/* <div className="flex aspect-square relative overflow-hidden rounded-xl">
            <Image
              src={product.image}
              alt="product"
              fill
              className="object-contain h-full w-full "
            />
          </div> */}
          <img
            src={product.image}
            alt="product"
            className="w-[50%] origin-top-left cursor-move duration-500 transition"
          />
        </div>
        <div className="w-1/3 h-full flex flex-col gap-2">
          <p className="p-2 text-blue text-sm font-semibold border border-gray-400 rounded-md">
            500+ bought since yesterday
          </p>

          <div className="px-2 py-4 border border-gray-400 rounded-md flex flex-col gap-6">
            {/* BUTTONS */}
            <div className="flex justify-between">
              <div className="flex gap-2">
                <button className="px-2 py-[1px] text-blue text-sm border-[1px] border-blue rounded-sm">
                  Best Seller
                </button>
                <button className="px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-600 rounded-sm">
                  Rollback
                </button>
              </div>
              <IoMdHeartEmpty className="text-gray-600 text-2xl" />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm underline underline-offset-4">
                {product.brand}
              </p>
              <h2 className="text-xl font-semibold text-black">
                {product.title}
              </h2>
              <p className="text-zinc-500 text-justify">
                {product.description}
              </p>
              <div className="flex gap-2 items-center text-xs mt-2">
                <div className="flex gap-1">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <p>25</p>
              </div>

              {/* PRICE */}
              <div className="flex items-end gap-2">
                <p className="text-semibold text-green-500 text-2xl">
                  Now ${product.price}
                </p>
                <p className="text-sm text-zinc-500 line-through flex items-center gap-1">
                  ${product.oldPrice}{" "}
                  <span>
                    <BsInfoCircle />
                  </span>
                </p>
              </div>

              <div className="text-sm text-black flex flex-col gap-1">
                <p>
                  <span className="font-semibold">$18/mo</span>
                  <span className="font-bold">withAffirm</span>
                  <span className="underline underline-offset-2">
                    Learn how
                  </span>
                </p>
                <p className="text-xs text-zinc-500 flex items-center gap-1">
                  Price when purchased online
                  <span>
                    <BsInfoCircle />
                  </span>
                </p>
              </div>

              {/* ADD TO CART */}
              <div className="border-b-[1px] border-b-zinc-500 pb-4">
                <button
                  onClick={handleAddItemToCart}
                  disabled={isExist()}
                  className="w-32 h-10 bg-blue text-white rounded-full hover:bg-[#004f9a] duration-300 transition disabled:bg-gray-400"
                >
                  Add to Cart
                </button>
              </div>

              {/* DELIVERY OPTIONS */}
              <div>
                <p className="font-semibold">How do you want your item?</p>
              </div>
              <div className="w-full grid grid-cols-3 gap-4 text-xs">
                <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2">
                  <Image
                    src={ship1Img}
                    alt="ship"
                    width={100}
                    height={100}
                    className="w-10"
                  />
                  <p>Shipping</p>
                  <p>Tomorrow</p>
                  <p>Free</p>
                </div>
                <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2">
                  <Image
                    src={ship2Img}
                    alt="ship"
                    width={100}
                    height={100}
                    className="w-10"
                  />
                  <p>Pickup</p>
                  <p>Tomorrow</p>
                  <p>Free</p>
                </div>
                <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2">
                  <Image
                    src={ship3Img}
                    alt="ship"
                    width={100}
                    height={100}
                    className="w-10"
                  />
                  <p>Delivery</p>
                  <p>Tomorrow</p>
                </div>
                <div className="py-2 flex gap-2">
                  <p className="text-black whitespace-nowrap font-semibold">
                    182/1/2, Negombo Road, Kurunegala
                  </p>
                  <p className="underline underline-offset-2">Change</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
