import { Link, useNavigate } from "react-router-dom";
import {
  FaMinus,
  FaPlus,
  FaTrash,
  FaShoppingBag,
  FaBoxOpen,
  FaTruck,
  FaUndo,
  FaCreditCard,
} from "react-icons/fa";

//  file
import { useCart } from "../context/CartContext";
import cartData from "../data/cartPage.json";

// pictures
import product2 from "../images/product2.png";
import product3 from "../images/product3.png";
import product4 from "../images/product4.png";
import product5 from "../images/product5.png";
import product6 from "../images/product6.png";
import product7 from "../images/product7.png";
import product8 from "../images/product8.png";

// Icons

import mastercard from "../icons/mastercard.png";
import mastercard1 from "../icons/mastercard1.png";
import mastercard2 from "../icons/mastercard2.png";
import mastercard3 from "../icons/mastercard3.png";

const productImages = {
  "product2.png": product2,
  "product3.png": product3,
  "product4.png": product4,
  "product5.png": product5,
  "product6.png": product6,
  "product7.png": product7,
  "product8.png": product8,
};

const getPrice = (price) => {
  if (typeof price === "number") return price;

  return Number(String(price).replace(/[^0-9.]/g, "")) || 0;
};

const getImage = (image) => {
  return productImages[image] || image;
};

export default function Cart() {
  const navigate = useNavigate();

  const {
    cartItems,
    cartCount,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + getPrice(item.price) * item.quantity,
    0
  );

  const shipping =
    subtotal >= cartData.shipping.freeShippingLimit
      ? 0
      : cartData.shipping.shippingCost;

  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-white">

      {/* Steps */}
      <div className=" bg-gray-100">
        <div className="mx-auto flex h-20 max-w-400 items-center justify-center gap-4 ">

          <div className="flex items-center gap-2 ">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#075039] text-white">
              <FaShoppingBag size={14} />
            </span>

            <span className="hidden text-sm font-semibold sm:block">
              {cartData.steps[0]}
            </span>
          </div>

          <div className=" w-16 bg-gray-300" />

          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#075039]">
              <FaCreditCard size={14} />
            </span>

            <span className="hidden text-sm text-gray-500 sm:block">
              {cartData.steps[1]}
            </span>
          </div>

          <div className="h-px w-16 bg-gray-300" />

          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#075039]">
              <FaBoxOpen size={14} />
            </span>

            <span className="hidden text-sm text-gray-500 sm:block">
              {cartData.steps[2]}
            </span>
          </div>

        </div>
      </div>

      {/* Cart */}
      <section className="mx-auto max-w-310 px-5 py-10 pb-60">

        <div className="grid gap-10 lg:grid-cols-[1fr_450px]">

          {/* Products */}
          <div>

            <div className="flex justify-between border-b pb-6">
              <h1 className="text-2xl font-medium">
                Your Cart
              </h1>

              <span className="text-gray-400">
                ({cartCount})
              </span>
            </div>

            {cartItems.map((item) => {
              const price = getPrice(item.price);

              return (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b py-5"
                >

                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg border">
                    <img
                      src={getImage(item.image)}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-400">
                      {item.quantity}x {item.title}
                    </p>

                    {item.strain && (
                      <p className="mt-1 text-sm text-gray-400">
                        {item.strain}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-1">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="h-8 w-8 rounded-md hover:bg-gray-100"
                    >
                      <FaMinus size={10} className="mx-auto" />
                    </button>

                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 text-sm">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="h-8 w-8 rounded-md hover:bg-gray-100"
                    >
                      <FaPlus size={10} className="mx-auto" />
                    </button>

                  </div>

                  <span className="hidden w-20 text-right text-sm font-medium sm:block">
                    ${price.toFixed(2)}
                  </span>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-300 hover:text-red-500"
                  >
                    <FaTrash size={12} />
                  </button>

                </div>
              );
            })}

            <div className="flex justify-between border-b py-5 text-sm">
              <span className="text-gray-400">
                Subtotal
              </span>

              <span className="font-medium">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            {/* Delivery */}
            <div className="mt-10 grid gap-5 md:grid-cols-3">

              {cartData.delivery.map((item, index) => (
                <div key={index}>

                  {item.title && (
                    <h3 className="mb-5 text-lg text-green-600">
                      {item.title}
                    </h3>
                  )}

                  <div className="min-h-62.5 rounded-xl border p-5 ">

                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f1f7f4] text-[#075039]">
                      {item.icon === "truck" && <FaTruck />}
                      {item.icon === "box" && <FaBoxOpen />}
                      {item.icon === "return" && <FaUndo />}
                    </div>

                    <h4 className="text-lg leading-7">
                      {item.eading}
                    </h4>

                    {item.description && (
                      <p className="mt-5 text-sm leading-6 text-gray-500">
                        {item.description}
                      </p>
                    )}

                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Summary */}
          <aside className="h-fit rounded-2xl border p-6">

            <div className="flex justify-between">
              <span className="text-sm text-gray-400">
                Subtotal
              </span>

              <strong>
                ${subtotal.toFixed(2)}
              </strong>
            </div>

            <div className="mt-6 flex justify-between">
              <span className="text-sm text-gray-400">
                Discount
              </span>

              <strong>$0.00</strong>
            </div>

            <div className="mt-6 flex justify-between">
              <span className="text-sm text-gray-400">
                Shipping Costs
              </span>

              <strong>
                {shipping === 0
                  ? "FREE"
                  : `$${shipping.toFixed(2)}`}
              </strong>
            </div>

            {/* Coupon */}
            <div className="mt-6 flex gap-3">

              <input
                type="text"
                placeholder={cartData.coupon.placeholder}
                className="h-12 min-w-0 flex-1 rounded-xl border px-4 outline-none"
              />

              <button className="rounded-full bg-[#f1faf3] px-5 text-sm text-green-600">
                {cartData.coupon.button}
              </button>

            </div>

            {/* Shipping progress */}
            <div className="mt-7">

              <div className="h-1.5 rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-green-500"
                  style={{
                    width: `${Math.min(
                      (subtotal /
                        cartData.shipping.freeShippingLimit) *
                      70,
                      100
                    )}%`,
                  }}
                />
              </div>

              <p className="mt-5 text-sm text-gray-500">
                Get{" "}
                <b className="text-gray-800">
                  Free Shipping
                </b>{" "}
                for orders over{" "}
                <span className="text-red-500">
                  $100.00
                </span>
              </p>

            </div>

            {/* Continue */}
            <Link
              to="/"
              className="mt-3 inline-block text-sm font-medium underline"
            >
              {cartData.buttons.continueShopping}
            </Link>

            {/* Checkout */}
            <button
              onClick={() => navigate("/checkout")}
              className="mt-6 flex h-14 w-full items-center justify-center gap-4 rounded-full bg-[#c8c8c8] text-white transition hover:bg-[#075039]"
            >
              <span>
                {cartData.buttons.checkout}
              </span>

              <span>|</span>

              <span>
                ${total.toFixed(2)}
              </span>
            </button>

            {/* Payment */}
            <div className="mt-6 border-t pt-6">

              <p className="text-xs uppercase tracking-wider text-gray-400">
                {cartData.payment.title}
              </p>

              <div className="mt-4 flex items-center gap-6">

                {/* Mastercard */}
                <Link
                  href="https://www.mastercard.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-4 items-center">
                    <img
                      src={mastercard}
                      alt="Mastercard"
                      className="h-6 w-10 "
                    />

                    <img
                      src={mastercard1}
                      alt=""
                      className="h-6 w-10 "
                    />

                    <img
                      src={mastercard2}
                      alt=""
                      className=" h-6 w-10 "
                    />

                    <img
                      src={mastercard3}
                      alt=""
                      className="h-6 w-10"
                    />
                  </div>
                </Link>

              </div>

            </div>

          </aside>
        </div>
      </section>
    </main>
  );
}