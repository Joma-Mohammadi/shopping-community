import { useState } from "react";
import product1 from "../images/product1.png";
import product2 from "../images/product2.png";
import product3 from "../images/product3.png";
import product4 from "../images/product4.png";

import { RxOpenInNewWindow } from "react-icons/rx";

const images = {
  "product1.png": product1,
  "product2.png": product2,
  "product3.png": product3,
  "product4.png": product4,
};

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const activeImage = product.images[activeIndex];

  return (
    <>
      <div>
        <div className="relative flex h-100 items-center justify-center rounded-2xl border border-gray-200
         bg-gray-50 sm:h-105">
          <img src={images[activeImage]} alt={product.title} className="h-full w-full object-contain" />

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full
             bg-white text-green-700 shadow cursor-pointer"
          >
            <RxOpenInNewWindow />
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-3">
          {product.images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-13 w-13 overflow-hidden rounded-md bg-gray-100 ${activeIndex === index ? "border-2 border-green-600" : ""}`}
            >
              <img src={images[image]} alt="" className="h-full w-full object-contain" />
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="relative w-full max-w-4xl rounded-3xl bg-white p-6 sm:p-8">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-7 right-4  z-10 flex h-10 w-10 items-center 
              justify-center rounded-full bg-white text-xl text-gray-700 shadow  cursor-pointer"
            >
              ×
            </button>

            <div className="flex h-105 items-center justify-center rounded-2xl bg-gray-50 sm:h-140">
              <img src={images[activeImage]} alt={product.title} className="h-full w-full object-contain" />
            </div>

            <div className="mt-6 flex justify-center gap-4">
              {product.images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-16 w-16 overflow-hidden rounded-lg bg-gray-100 ${activeIndex === index ? "border-2 border-green-600" : ""}`}
                >
                  <img src={images[image]} alt="" className="h-full w-full object-contain" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}