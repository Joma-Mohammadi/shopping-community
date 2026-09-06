import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductPurchase({ product }) {
 const { addToCart } = useCart();

  const [weight, setWeight] = useState(product.weights[0]);
  const [pack, setPack] = useState(product.integraPack[0].title);
  const [quantity, setQuantity] = useState(2);

  const increase = () => setQuantity((value) => value + 1);

  const decrease = () => {
    setQuantity((value) => Math.max(1, value - 1));
  };

  return (


    <div>

      <div className="flex flex-col gap-6 border-b border-gray-100 pb-5 sm:flex-row sm:justify-between">

        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
            Weight
          </p>

          <div className="mt-3 flex gap-3">
            {product.weights.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setWeight(item)}
                className={`rounded-md px-4 py-2 text-xs ${
                  weight === item
                    ? "border border-green-600 bg-white"
                    : "bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
            Add Integra Pack
          </p>

          <div className="mt-3 flex gap-5">
            {product.integraPack.map((item) => (
              <label
                key={item.title}
                className="flex cursor-pointer items-center gap-2 text-xs"
              >
                <input
                  type="radio"
                  name="pack"
                  checked={pack === item.title}
                  onChange={() => setPack(item.title)}
                  className="accent-green-600"
                />

                {item.title} ({item.price})
              </label>
            ))}
          </div>
        </div>

      </div>

      <div className="mt-5 rounded-xl bg-[#fff8e7] px-4 py-2 text-xs">
        Purchase this product now and earn{" "}
        <span className="font-semibold text-red-500">80 Points!</span>
      </div>

      <div className="mt-4 rounded-xl border border-gray-100 p-5">

        <div className="flex justify-between text-sm">
          <span>
            Khalifa Kush (AAAA)
            <span className="ml-3 text-gray-400">2x</span>
          </span>

          <span>$120.00</span>
        </div>

        <div className="mt-3 flex justify-between text-sm">
          <span>Add Integra Pack - 4g</span>
          <span>$2.00</span>
        </div>

        <div className="my-5 border-t border-gray-100" />

        <div className="flex flex-wrap items-center justify-between gap-4">

          <div className="flex items-center rounded-lg border border-gray-100">

            <button
              onClick={decrease}
              className="px-4 py-3"
            >
              −
            </button>

            <span className="bg-gray-100 px-4 py-3 text-sm">
              {quantity}
            </span>

            <button
              onClick={increase}
              className="px-4 py-3"
            >
              +
            </button>

            <span className="px-4 text-xs text-green-600">
              In Stock
            </span>

          </div>

          <button
          onClick={() => addToCart(product)}
            type="button"
            className="rounded-full bg-green-600 px-8  py-4 text-sm font-semibold text-white hover:bg-green-700 sm:px-11"
          >
            Add to Cart
            <span className="mx-4">|</span>
            $242.00
          </button>

        </div>

        <div className="mt-5 space-y-3 border-t border-gray-100 pt-5 text-xs text-gray-600">

          {product.shipping.map((item) => (
            <p key={item} className="flex gap-2">
              <span className="text-green-600">✓</span>
              {item}
            </p>
          ))}

        </div>

      </div>
    </div>
  );
}