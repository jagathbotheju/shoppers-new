"use client";
import useCart from "@/store/store";
import { Cart, Product } from "@/type";
import { useEffect, useState } from "react";
import {
  emptyCart,
  phoneImg,
  ship1Img,
  ship2Img,
  ship3Img,
  warningImg,
} from "@/public/assets/images";
import Image from "next/image";
import { TbReload } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { HiMinusSm } from "react-icons/hi";
import { MdOutlineAdd } from "react-icons/md";
import FormatAmount from "../components/FormatAmount";
import { IoMdClose } from "react-icons/io";

const CartPage = () => {
  const cart = useCart((state) => state.cart);
  const addQuantity = useCart((state) => state.addQuantity);
  const deleteQuantity = useCart((state) => state.deleteQuantity);
  const emptyCart = useCart((state) => state.emptyCart);
  const deleteItem = useCart((state) => state.deleteItem);
  const totalPrice = useCart((state) => state.totalPrice);

  const [warningMsg, setWarningMsg] = useState(true);
  const [clientCart, setClientCart] = useState<Cart[]>([]);
  const [oldPrice, setOldPrice] = useState(0);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    setClientCart(cart);

    let cOldPrice = 0;
    let cSavings = 0;
    clientCart.map((item) => {
      cOldPrice += item.oldPrice * item.quantity;
      cSavings += item.oldPrice - item.price;
      return;
    });
    setOldPrice(cOldPrice);
    setSavings(cSavings);
  }, [cart]);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto bg-white flex mt-5 p-5">
        <div className="w-full flex gap-10">
          <div className="w-2/3 flex flex-col gap-5">
            <h2 className="text-2xl font-bold text-black">
              Cart{" ("}
              <span className="text-gray-500">
                {clientCart.length}{" "}
                {`${clientCart.length > 1 ? "Items" : "Item"} )`}
              </span>
            </h2>

            {/* PICKUP DETAILS */}
            <div className="">
              <div className="text-xl font-bold flex items-center pag-2 pb-2">
                <Image
                  width={100}
                  height={100}
                  className="w-10"
                  src={phoneImg}
                  alt="phone"
                />
                <p>Pickup and Delivery Options</p>
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
                <div className="flex gap-2 -mt-3">
                  <p className="text-black whitespace-nowrap font-semibold">
                    182/1/2, Negombo Road, Kurunegala
                  </p>
                  <p className="underline underline-offset-2">Change</p>
                </div>
              </div>

              {/* CART ITEMS */}
              <div className="w-full p-5 border-[1px] border-zinc-400 rounded-md flex flex-col gap-4 mt-5">
                <p className="font-semibold text-sm text-zinc-500">
                  Sold and Shipped by <span className="">shoppers.com</span>
                </p>

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
                </div>

                {/* ITEMS */}
                <div>
                  {clientCart.map((item) => (
                    <div
                      key={item._id}
                      className="flex justify-between gap-4 border-b-[1px] border-b-zinc-200 pb-4 shadow-lg rounded-lg p-4 my-5"
                    >
                      <div className="w-3/4 flex items-center gap-2">
                        <div className="min-w-[20%]">
                          <div className="aspect-square relative w-20">
                            <Image
                              fill
                              className="object-cover"
                              src={item.image}
                              alt={item.title}
                            />
                          </div>
                        </div>
                        <div>
                          <h2 className="text-zinc-900">{item.title}</h2>
                          <p className="text-sm text-zinc-500">
                            {item.description}
                          </p>
                          <p className="text-sm text-zinc-500">
                            price : ${item.price}
                          </p>
                          <p className="text-sm text-zinc-500 flex items-center gap-1">
                            <span className="bg-blue rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">
                              <TbReload className="rotate-180" />
                            </span>
                            Free 30-day returns
                          </p>

                          {/* PLUS MINUS BUTTONS */}
                          <div className="flex mt-2 w-28 h-7 border border-zinc-400 rounded-full font-semibold text-black items-center justify-between px-3">
                            <button
                              onClick={() =>
                                deleteQuantity({
                                  quantity: 1,
                                  id: item._id,
                                })
                              }
                              disabled={item.quantity === 1}
                              className="w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white rounded-full flex items-center justify-center cursor-pointer duration-300 transition disabled:bg-gray-100 disabled:hover:text-gray-300 disabled:cursor-default"
                            >
                              <HiMinusSm />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() =>
                                addQuantity({
                                  quantity: 1,
                                  id: item._id,
                                })
                              }
                              className="w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white rounded-full flex items-center justify-center cursor-pointer duration-300 transition"
                            >
                              <MdOutlineAdd />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* BUTTONS */}
                      <div className="w-1/4 flex flex-col relative items-end">
                        <div className="text-right flex flex-col items-end gap-1">
                          <p className="font-bold text-xl text-blue">
                            <FormatAmount amount={item.price * item.quantity} />
                          </p>
                          <p className="text-sm text-zinc-500 line-through">
                            <FormatAmount
                              amount={item.oldPrice * item.quantity}
                            />
                          </p>
                          <div className="flex items-center text-xs gap-2">
                            <p className="bg-green-200 text-xs uppercase px-2 py-[1px]">
                              You Save{" "}
                            </p>
                            <p className="text-blue font-semibold">
                              <FormatAmount
                                amount={
                                  item.oldPrice * item.quantity -
                                  item.price * item.quantity
                                }
                              />
                            </p>
                          </div>
                        </div>

                        {/* DELETE ITEM */}
                        <div
                          onClick={() => deleteItem({ id: item._id })}
                          className="absolute -bottom-2 right-1 cursor-pointer"
                        >
                          <AiFillDelete className="text-xl text-rose-500" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* RESET BUTTON */}
                <button
                  onClick={() => emptyCart()}
                  className="w-40 bg-red-500 text-white h-8 rounded-full font-semibold hover:bg-red-800 duration-300 transition"
                >
                  Reset Cart
                </button>
              </div>
            </div>
          </div>

          {/* SECTION RIGHT COLUMN */}
          <div className="w-1/3">
            <div className="flex flex-col gap-5 p-4 border-[1px] border-zinc-400 rounded-md justify-center">
              <button className="bg-blue hover:bg-hoverBg w-full text-white h-10 rounded font-semibold duration-300 transition">
                Proceed to Checkout
              </button>
              <p className="text-sm text-center text-red-500 -mt-4 font-semibold">
                Please sign in for checkout
              </p>

              {/* SECTION WARNING MESSAGE */}
              {warningMsg && (
                <div className="bg-[#002d58] text-white p-2 rounded-lg flex items-center justify-between gap-4">
                  <div className="w-10 relative aspect-square overflow-hidden">
                    <Image
                      fill
                      className="object-cover h-full w-full"
                      src={warningImg}
                      alt="warning"
                    />
                  </div>
                  <p className="text-sm">
                    Items in your cart have reduced prices. Check out now for
                    extra savings!
                  </p>
                  <IoMdClose
                    onClick={() => setWarningMsg(false)}
                    className="text-3xl hover:text-red-400 cursor-pointer duration-200"
                  />
                </div>
              )}

              <p className="text-sm text-center">
                For the best shipping experience{" "}
                <span className="underline underline-offset-2 decoration-[1px]">
                  Sign In
                </span>
              </p>

              {/* SECTION checkout price */}
              <div className="w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-sm">
                    <p className="font-semibold">
                      Sub Total ( <span>{clientCart.length} items</span>)
                    </p>
                    <p className="line-through text-zinc-500">
                      <FormatAmount amount={oldPrice} />
                    </p>
                  </div>

                  <div className="text-sm flex justify-between">
                    <p className="font-semibold">Savings</p>
                    <p className="text-blue font-bold bg-green-100 py-1 px-[2px] rounded-lg flex">
                      <FormatAmount amount={savings} />
                    </p>
                  </div>

                  <div className="text-sm flex justify-between">
                    <p className="font-semibold">Total Amount</p>
                    <p className="text-zinc-800 text-xl font-bold">
                      <FormatAmount amount={totalPrice} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
