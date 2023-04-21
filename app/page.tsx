import Image from "next/image";
import { Inter } from "next/font/google";
import { productData } from "@/public/productsdata";
import Products from "./components/Products";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shoppers.com | Save Money. Live Better",
  description: "Shoppers shopping app",
  icons: {
    icon: "/smallLogo.ico",
  },
};

export default function Home() {
  const products = productData;

  return (
    <main className="">
      <Products products={products} />
    </main>
  );
}
