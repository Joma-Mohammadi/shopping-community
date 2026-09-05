import { Link } from "react-router-dom";
import {
    FaCheck,
    FaShoppingBag,
    FaBoxOpen,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";
import orderData from "../data/order.json";

// Images
import product2 from "../images/product2.png";
import product3 from "../images/product3.png";
import product4 from "../images/product4.png";
import product5 from "../images/product5.png";
import product6 from "../images/product6.png";
import product7 from "../images/product7.png";
import product8 from "../images/product8.png";

// Product image mapping

const productImages = {
    "product2.png": product2,
    "product3.png": product3,
    "product4.png": product4,
    "product5.png": product5,
    "product6.png": product6,
    "product7.png": product7,
    "product8.png": product8,

    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
};

// Component

export default function OrderPage() {
    const { cartItems } = useCart();

    // Price

    const getPrice = (price) => {
        if (typeof price === "number") {
            return price;
        }

        return (
            Number(
                String(price || "").replace(/[^0-9.]/g, "")
            ) || 0
        );
    };

    // Image

    const getProductImage = (item) => {
        if (!item) return null;
        if (
            item.image &&
            typeof item.image !== "string"
        ) {
            return item.image;
        }

        const image =
            item.image ||
            item.imageName ||
            item.productImage ||
            item.img ||
            item.product?.image;

        if (!image) {
            return null;
        }

        // product2.png
        if (productImages[image]) {
            return productImages[image];
        }

        const fileName = String(image)
            .split("/")
            .pop();

        if (productImages[fileName]) {
            return productImages[fileName];
        }

        if (
            String(image).startsWith("/") ||
            String(image).startsWith("http")
        ) {
            return image;
        }

        return null;
    };

    // Order config

    const orderComplete =
        orderData.orderComplete || {};

    // Subtotal

    const subtotal = cartItems.reduce(
        (total, item) => {
            const price = getPrice(item.price);

            const quantity =
                Number(item.quantity) || 1;

            return total + price * quantity;
        },
        0
    );

    // Costs

    const shippingCost =
        Number(orderComplete.shippingCost) || 0;

    const discount =
        Number(orderComplete.discount) || 0;

    const pointDiscount =
        Number(orderComplete.pointDiscount) || 0;

    const total =
        subtotal +
        shippingCost -
        discount -
        pointDiscount;

    return (
        <main className="min-h-screen bg-white">

            {/* STEPS */}

            <section className="bg-[#f5f5f5]">
                <div className="mx-auto flex w-full items-center justify-center overflow-hidden px-3 py-4 sm:px-6 sm:py-5">

                    {orderData.steps?.map((step, index) => {
                        const isComplete = step.status === "complete";
                        const isActive = step.status === "active";


                        const nextStep = orderData.steps[index + 1];
                        const isNextActive =
                            nextStep &&
                            (nextStep.status === "active" ||
                                nextStep.status === "complete");

                        return (
                            <div
                                key={step.id}
                                className="flex shrink-0 items-center"
                            >

                                {/* STEP */}
                                <div className="flex items-center gap-2 sm:gap-2">

                                    {/* Circle */}
                                    <div
                                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full
                                             ${isComplete
                                                ? "bg-[#C3D2CC] text-[#05422C]"
                                                : isActive
                                                    ? "bg-[#05422C] text-white"
                                                    : ""
                                            }
                            `}
                                    >
                                        {isComplete ? (
                                            <FaCheck size={11} />
                                        ) : isActive ? (
                                            <FaShoppingBag size={11} />
                                        ) : (
                                            <FaBoxOpen size={11} />
                                        )}
                                    </div>

                                    {/* DESKTOP*/}
                                    <span
                                        className={`hidden whitespace-nowrap text-[13px] sm:block
                                              ${isComplete || isActive
                                                ? "font-medium text-green-800"
                                                : "text-gray-400"
                                            }`} >
                                        {step.title}
                                    </span>

                                    {/* MOBILE*/}
                                    {isActive && (
                                        <span className="max-w-28 truncate text-[11px] font-medium text-green-800 sm:hidden">
                                            {step.title}
                                        </span>
                                    )}
                                </div>

                                {/* LINE */}
                                {index < orderData.steps.length - 1 && (
                                    <div className={`mx-2 h-px w-7 shrink-0  sm:mx-4 sm:w-14 lg:w-18
                                       ${isNextActive
                                                ? "bg-[#05422C]"
                                                : "bg-[#C3D2CC]"
                                            }
                            `}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/*  CONTENT */}

            <section
                className=" mx-auto w-full  max-w-250  px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 ">

                {/*  HEADER */}
                <div className="flex flex-col gap-3 border-b
                              border-b-gray-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-xl font-medium text-[#17191d] sm:text-[22px]" >
                        {orderComplete.title}
                    </h1>


                    <div className=" flex items-center gap-2 text-sm font-medium text-green-500">
                        <span className="flex h-3 w-3 items-center justify-center rounded-full bg-green-500 text-white">
                            <FaCheck size={7} />
                        </span>

                        {orderComplete.paid}

                    </div>

                </div>

                {/* PRODUCTS */}

                <div className="divide-y divide-gray-200">

                    {cartItems.length > 0 ? (

                        cartItems.map((item) => {

                            const price =
                                getPrice(item.price);

                            const quantity =
                                Number(item.quantity) || 1;

                            const itemTotal =
                                price * quantity;

                            const image =
                                getProductImage(item);

                            return (
                                <div
                                    key={item.id}
                                    className=" grid grid-cols-1 gap-4 py-5 sm:grid-cols-[1fr_auto] sm:items-center " >

                                    {/* Product */}

                                    <div className=" flex min-w-0 items-start gap-4 " >

                                        {/* Image */}

                                        <div className=" flex h-12 w-12 items-center justify-center overflow-hidden
                                                rounded-md border border-gray-400 bg-white sm:h-14 sm:w-14 ">

                                            {image ? (
                                                <img
                                                    src={image}
                                                    alt={
                                                        item.name ||
                                                        item.title ||
                                                        "Product"
                                                    }
                                                    className=" h-full w-full object-contain " />
                                            ) : (
                                                <FaBoxOpen
                                                    size={20}
                                                    className="text-green-900"
                                                />
                                            )}
                                        </div>

                                        {/* Name + Subtitle */}

                                        <div
                                            className=" min-w-0 flex-1 ">
                                            {/* Product name */}

                                            <p className=" text-[13px] font-medium text-gray-400 sm:text-sm">
                                                {quantity}
                                                {orderComplete.product?.quantitySymbol || "x"}{" "}
                                                {item.name ||
                                                    item.title ||
                                                    "Product"}
                                            </p>


                                            {/* SUBTITLE */}

                                            {item.subtitle && (
                                                <p className=" mt-1 text-xs text-gray-400 sm:text-[13px] ">
                                                    {item.subtitle}
                                                </p>
                                            )}

                                            {/* Alternative subtitle */}

                                            {!item.subtitle &&
                                                item.subTitle && (
                                                    <p className="mt-1 text-xs text-gray-400  " >
                                                        {item.subTitle}
                                                    </p>
                                                )}

                                            {/* Description as fallback */}

                                            {!item.subtitle &&
                                                !item.subTitle &&
                                                item.description && (
                                                    <p className="mt-1 text-xs text-gray-400 ">
                                                        {item.description}
                                                    </p>
                                                )}

                                            {/* Addons */}

                                            {Array.isArray(
                                                item.addons
                                            ) &&
                                                item.addons.map(
                                                    (
                                                        addon,
                                                        addonIndex
                                                    ) => (
                                                        <p key={addon.id || addonIndex}
                                                            className="
                                                                mt-1
                                                                text-xs
                                                                text-gray-400 ">
                                                            {addon.quantity
                                                                ? `${addon.quantity}x `
                                                                : ""}

                                                            {addon.name ||
                                                                addon.title}

                                                            {addon.price
                                                                ? ` - $${getPrice(
                                                                    addon.price
                                                                ).toFixed(
                                                                    2
                                                                )}`
                                                                : ""}
                                                        </p>
                                                    )
                                                )}

                                        </div>

                                    </div>


                                    {/* Price */}

                                    <div className="flex items-center justify-between gap-5 pl-16 sm:justify-end sm:pl-0 ">
                                        <span
                                            className=" text-xs text-[#99999d] ">
                                            {quantity}
                                            {orderComplete.product?.quantitySymbol || "x"}
                                        </span>


                                        <span className=" text-sm font-medium text-[#17191d]">
                                            ${price.toFixed(2)}
                                        </span>

                                        <span className=" min-w-20 text-right text-sm font-semibold text-[#17191d] ">
                                            $ {itemTotal.toFixed(2)}
                                        </span>

                                    </div>

                                </div>
                            );
                        })

                    ) : (

                        <div className=" flex flex-col items-center justify-center py-12 text-center ">
                            <FaBoxOpen
                                size={35}
                                className="text-[#075039]"
                            />
                            <p className=" mt-3 text-sm text-[#99999d] ">
                                {orderComplete.product?.empty}
                            </p>
                        </div>

                    )}

                </div>

                {/*  TOTAL */}

                <div className=" flex items-center justify-between border-t border-[#eeeeee] py-6 ">

                    <span className=" text-sm font-medium text-[#17191d] ">
                        {orderComplete.total?.label}
                    </span>


                    <span className=" text-lg font-semibold text-[#ff3517]">
                        ${subtotal.toFixed(2)}
                    </span>

                </div>


                {/*  ORDER DETAILS */}

                <div className=" grid grid-cols-1 gap-8 border-b border-[#eeeeee] pb- md:grid-cols-2 md:gap-12 ">

                    {/* LEFT */}

                    <div className=" flex flex-col gap-5">

                        {/* Shipping */}

                        <div
                            className="flex itemcenter justify-between gap-5 text-sm ">
                            <span className="text-[#9D9EA2]">
                                {orderComplete.shipping?.title}
                            </span>

                            <span className="text-right text-[#17191d]">
                                {orderComplete.shipping?.value}
                            </span>
                        </div>

                        {/* Shipping options */}

                        <div className=" flex items-center justify-between gap-5  text-sm ">
                            <span className="text-[#9D9EA2]">
                                {orderComplete.shippingOptions?.title}
                            </span>

                            <span className="text-right text-[#17191d]">
                                {orderComplete.shippingOptions?.value}
                            </span>
                        </div>

                        {/* Payment */}

                        <div className=" flex items-center justify-between gap-5 text-sm">
                            <span className="text-[#9D9EA2]">
                                {orderComplete.payment?.title}
                            </span>

                            <span className="text-right text-[#17191d]">
                                {orderComplete.payment?.value}
                            </span>
                        </div>

                    </div>


                    {/* RIGHT */}

                    <div className=" flex flex-col gap-4 " >

                        {/* Subtotal */}

                        <div className=" flex justify-between gap-4 text-sm ">
                            <span className="text-[#9D9EA2]">
                                {orderComplete.summary?.subtotal}
                            </span>

                            <span className="font-medium">
                                ${subtotal.toFixed(2)}
                            </span>
                        </div>


                        {/* Discount */}

                        <div className="flex justify-between gap-4 text-sm">
                            <span className="text-[#9D9EA2]">
                                {orderComplete.summary?.discount}
                            </span>

                            <span className="font-medium">
                                ${discount.toFixed(2)}
                            </span>
                        </div>


                        {/* Shipping */}

                        <div className=" flex justify-between gap-4 text-sm" >
                            <span className="text-[#9D9EA2]">
                                {
                                    orderComplete.summary
                                        ?.shippingCosts
                                }
                            </span>

                            <span className="font-medium">
                                ${shippingCost.toFixed(2)}
                            </span>
                        </div>

                        {/* Point */}

                        <div className=" flex  justify-between gap-4 border-t border-[#eeeeee] pt-4 text-sm ">
                            <span className="text-[#99999d]">
                                {orderComplete.summary?.point}
                            </span>

                            <span className="font-medium">
                                - ${pointDiscount.toFixed(0)}
                            </span>
                        </div>

                        {/* Final total */}

                        <div className=" flex justify-between gap-4  border-t  border-[#eeeeee]  pt-4">
                            <span className=" text-sm font-mediumtext-[#17191d] ">
                                {orderComplete.summary?.total}
                            </span>

                            <span className="text-lg font-semibold text-[#ff3517]">
                                ${total.toFixed(2)}
                            </span>
                        </div>

                    </div>

                </div>


                {/*  NEW ORDER */}

                <div className=" flex flex-col items-center justify-center  gap-5  pt-7 text-center" >

                    <p className=" text-sm text-[#a0a0a4] " >
                        {orderComplete.newOrder?.text}
                    </p>


                    <Link
                        to="/"
                        className="flex h-12 min-w-35 items-center justify-center rounded-full bg-[#17AF26] 
                        px-7 text-sm font-medium text-white transition hover:bg-[#06a825] active:scale-95" >
                        {orderComplete.newOrder?.button}
                    </Link>

                </div>

            </section>

        </main>
    );
}