"use client";

import { useRouter } from "next/navigation";

function OrderProduct() {
  const router = useRouter();

  const handleclick = () => {
    console.log(`place you order`);
    router.push("/");
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">Order product </h1>
      <button
        onClick={handleclick}
        className="text-2xl cursor-pointer bg-gray-800 text-white p-4"
      >
        Place Order
      </button>
    </div>
  );
}

export default OrderProduct;
