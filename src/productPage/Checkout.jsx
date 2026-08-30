import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCheck, FaShoppingBag, FaBoxOpen } from "react-icons/fa";

import { useCart } from "../context/CartContext";
import checkoutData from "../data/checkout.json";

// Payment icons
import mastercardIcon from "../icons/mastercard.png";
import visaIcon from "../icons/mastercard1.png";
import bitcoinIcon from "../icons/mastercard2.png";
import interacIcon from "../icons/mastercard3.png";

import FieldError from "../productPage/FieldError";

const paymentIcons = {
    mastercard: mastercardIcon,
    visa: visaIcon,
    bitcoin: bitcoinIcon,
    interac: interacIcon,
};

export default function Checkout() {
    const navigate = useNavigate();
    const { cartItems, cartCount } = useCart();

    // FORM STATE

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        country: "Singapore",
        address: "",
        apartment: "",
        city: "",
        province: "",
        postcode: "",
        phone: "",
        email: "",

        // Different shipping address
        differentAddress: false,

        differentFirstName: "",
        differentLastName: "",
        differentCountry: "Singapore",
        differentAddressLine: "",
        differentApartment: "",
        differentCity: "",
        differentProvince: "",
        differentPostcode: "",

        orderNotes: "",
        outOfStock: "Contact me (With delay)",
        heardAboutUs: "",

        confirmAddress: false,
        emailUpdates: false,

        coupon: "",
    });

    const [errors, setErrors] = useState({});

    const [couponApplied, setCouponApplied] = useState(false);

    // POINTS

    const [usePoints, setUsePoints] = useState(false);


    const [points, setPoints] = useState(10850);

    // PRICE

    const getPrice = (price) => {
        if (typeof price === "number") {
            return price;
        }

        return (
            Number(String(price).replace(/[^0-9.]/g, "")) || 0
        );
    };

    const subtotal = cartItems.reduce((total, item) => {
        return (
            total +
            getPrice(item.price) * item.quantity
        );
    }, 0);

    const shippingCost =
        Number(checkoutData.summary.shippingCost) || 0;

    const discount = couponApplied ? 0 : 0;


    const pointsDiscount = 0;

    const total =
        subtotal +
        shippingCost -
        discount -
        pointsDiscount;

    // UPDATE FIELD

    const updateField = (field, value) => {
        setForm((current) => ({
            ...current,
            [field]: value,
        }));

        if (errors[field]) {
            setErrors((current) => ({
                ...current,
                [field]: "",
            }));
        }
    };

    // VALIDATION

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePostcode = (postcode) => {
        return /^[a-zA-Z0-9\s-]{3,10}$/.test(
            postcode.trim()
        );
    };

    const validateForm = () => {
        const newErrors = {};

        // Main address

        if (!form.firstName.trim()) {
            newErrors.firstName = "First name is required.";
        }

        if (!form.lastName.trim()) {
            newErrors.lastName = "Last name is required.";
        }

        if (!form.country.trim()) {
            newErrors.country = "Country is required.";
        }

        if (!form.address.trim()) {
            newErrors.address = "Address is required.";
        }

        if (!form.city.trim()) {
            newErrors.city = "Town / City is required.";
        }

        if (!form.province.trim()) {
            newErrors.province = "Province is required.";
        }

        if (!form.postcode.trim()) {
            newErrors.postcode = "Postcode / ZIP is required.";
        } else if (!validatePostcode(form.postcode)) {
            newErrors.postcode =
                "Please enter a valid postcode.";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email address is required.";
        } else if (!validateEmail(form.email)) {
            newErrors.email =
                "Please enter a valid email address.";
        }

        // Different address

        if (form.differentAddress) {
            if (!form.differentFirstName.trim()) {
                newErrors.differentFirstName =
                    "First name is required.";
            }

            if (!form.differentLastName.trim()) {
                newErrors.differentLastName =
                    "Last name is required.";
            }

            if (!form.differentCountry.trim()) {
                newErrors.differentCountry =
                    "Country is required.";
            }

            if (!form.differentAddressLine.trim()) {
                newErrors.differentAddressLine =
                    "Address is required.";
            }

            if (!form.differentCity.trim()) {
                newErrors.differentCity =
                    "Town / City is required.";
            }

            if (!form.differentProvince.trim()) {
                newErrors.differentProvince =
                    "Province is required.";
            }

            if (!form.differentPostcode.trim()) {
                newErrors.differentPostcode =
                    "Postcode / ZIP is required.";
            } else if (
                !validatePostcode(form.differentPostcode)
            ) {
                newErrors.differentPostcode =
                    "Please enter a valid postcode.";
            }
        }

        // Confirm address


        if (!form.confirmAddress) {
            newErrors.confirmAddress =
                "Please confirm that your address is correct.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // SUBMIT

    const handleSubmit = (event) => {
        event.preventDefault();

        const valid = validateForm();

        if (!valid) {
            return;
        }

        navigate("/order-complete");
    };

    // COUPON

    const handleCoupon = () => {
        if (!form.coupon.trim()) {
            return;
        }

        setCouponApplied(true);
    };

    // INPUT CLASS

    const inputClass = (field) => ` h-[44px] w-full rounded-[7px]  border  px-4 text-sm outline-none transition
    ${errors[field] ? "border-red-400 bg-red-50/20" : "border-[#eeeeee] bg-white"}  focus:border-[#075039] `;

    //   UI 
    return (
        <main className="min-h-screen bg-white">

            {/* Steps */}

            <div className="bg-[#f5f5f5]">
                <div className="mx-auto flex w-full max-w-200 items-center justify-center px-3 py-4 sm:px-5 sm:py-5">
                    {checkoutData.steps.map((step, index) => {
                        const isComplete = step.status === "complete";
                        const isActive = step.status === "active";

                        return (
                            <div
                                key={step.title}
                                className="flex min-w-0 items-center justify-center"
                            >
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    {/* Icon */}
                                    <div
                                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full
                                             ${isComplete
                                                ? "bg-[#d5e4df] text-[#075039]"
                                                : isActive
                                                    ? "bg-[#075039] text-white"
                                                    : "border border-[#d8dedb] bg-white text-[#075039]"
                                            }`}
                                    >
                                        {isComplete ? (
                                            <FaCheck size={11} />
                                        ) : isActive ? (
                                            <FaShoppingBag size={11} />
                                        ) : (
                                            <FaBoxOpen size={11} />
                                        )}
                                    </div>

                                    {/* Desktop Text */}
                                    <span
                                        className={`hidden text-[13px] sm:block ${isActive || isComplete
                                            ? "font-medium text-[#075039]"
                                            : "text-[#88888c]"
                                            }`}
                                    >
                                        {step.title}
                                    </span>

                                    {/* Mobile - Active Text Only */}
                                    {isActive && (
                                        <span className="block max-w-30 truncate text-[11px] font-medium text-[#075039] sm:hidden">
                                            {step.title}
                                        </span>
                                    )}
                                </div>

                                {/* Equal Lines */}
                                {index < checkoutData.steps.length - 1 && (
                                    <div className="mx-2 h-px w-8 shrink-0 bg-[#cfd8d4] sm:mx-4 sm:w-[74.5px]" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ---------------- Main ----------- */}

            <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-10">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">

                    {/* ------------- MAIN LEFT ------------- */}

                    <form id="checkout-form"
                        onSubmit={handleSubmit}
                        className="min-w-0">

                        {/*  ----- Header ----- */}

                        <div className="flex items-center justify-between border-b border-[#d9d9d9] pb-6">

                            <h1 className="text-[22px] font-medium text-[#17191d]">
                                {checkoutData.shipping.title}
                            </h1>

                            <span className="text-[15px] text-[#a0a0a4]">
                                ({cartCount})
                            </span>

                        </div>

                        {/* FIRST / LAST NAME */}

                        <div className="grid grid-cols-1 gap-5 pt-7 sm:grid-cols-2">

                            <div>
                                <label className="mb-2 block text-[11px] font-medium uppercase tracking-[1.2px] text-[#55565a]">
                                    FIRST NAME *
                                </label>

                                <input
                                    type="text"
                                    value={form.firstName}
                                    onChange={(e) => updateField("firstName", e.target.value)}
                                    className={inputClass("firstName")}
                                    placeholder={checkoutData.shipping.placeholders.firstName}

                                />

                                <FieldError name="firstName" errors={errors} />
                            </div>

                            <div>
                                <label className="mb-2 block text-[11px] font-medium uppercase tracking-[1.2px] text-[#55565a]">
                                    LAST NAME *
                                </label>

                                <input
                                    type="text"
                                    value={form.lastName}
                                    onChange={(e) =>
                                        updateField(
                                            "lastName",
                                            e.target.value
                                        )}
                                    className={inputClass("lastName")}
                                    placeholder={
                                        checkoutData.shipping.placeholders.lastName
                                    } />

                                <FieldError name="lastName" errors={errors} />
                            </div>

                        </div>

                        {/* COUNTRY */}

                        <div className="mt-5">

                            <label className="mb-2 block text-[11px] font-medium uppercase tracking-[1.2px] text-[#55565a]">
                                COUNTRY / REGION *
                            </label>

                            <select
                                value={form.country}
                                onChange={(e) =>
                                    updateField(
                                        "country",
                                        e.target.value
                                    )
                                }
                                className={inputClass("country")}
                            >
                                {checkoutData.shipping.countries.map(
                                    (country) => (
                                        <option
                                            key={country}
                                            value={country}
                                        >
                                            {country}
                                        </option>
                                    )
                                )}
                            </select>

                            <FieldError name="country" errors={errors} />

                        </div>

                        {/* ADDRESS */}

                        <div className="mt-5">

                            <label className="mb-2 block text-[11px] font-medium uppercase tracking-[1.2px] text-[#55565a]">
                                ADDRESS *
                            </label>

                            <input
                                type="text"
                                value={form.address}
                                onChange={(e) =>
                                    updateField(
                                        "address",
                                        e.target.value
                                    )
                                }
                                placeholder={
                                    checkoutData.shipping.placeholders.address
                                }
                                className={inputClass("address")}
                            />
                            <FieldError name="address" errors={errors} />

                            <input
                                type="text"
                                value={form.apartment}
                                onChange={(e) =>
                                    updateField(
                                        "apartment",
                                        e.target.value
                                    )
                                }
                                placeholder={
                                    checkoutData.shipping.placeholders.apartment
                                }
                                className="mt-2 h-11 w-full rounded-[7px] border border-[#eeeeee] px-4 text-sm outline-none focus:border-[#075039]"
                            />

                        </div>

                        {/* CITY / PROVINCE / POSTCODE */}

                        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">

                            <div>

                                <label className="mb-2 block text-[11px] font-medium uppercase tracking-[1.2px] text-[#55565a]">
                                    TOWN / CITY *
                                </label>

                                <input
                                    type="text"
                                    value={form.city}
                                    onChange={(e) =>
                                        updateField(
                                            "city",
                                            e.target.value
                                        )
                                    }
                                    placeholder={
                                        checkoutData.shipping.placeholders.city
                                    }
                                    className={inputClass("city")}
                                />

                                <FieldError name="city" errors={errors} />

                            </div>

                            <div>

                                <label className="mb-2 block text-[11px] font-medium uppercase tracking-[1.2px] text-[#55565a]">
                                    PROVINCE *
                                </label>

                                <select
                                    value={form.province}
                                    onChange={(e) =>
                                        updateField(
                                            "province",
                                            e.target.value
                                        )
                                    }
                                    className={inputClass("province")}
                                >

                                    <option value="">
                                        Select province
                                    </option>

                                    {checkoutData.shipping.provinces.map(
                                        (province) => (
                                            <option
                                                key={province}
                                                value={province}
                                            >
                                                {province}
                                            </option>
                                        )
                                    )}

                                </select>

                                <FieldError name="province" errors={errors} />

                            </div>

                            <div>

                                <label className="mb-2 block text-[11px] font-medium uppercase tracking-[1.2px] text-[#55565a]">
                                    POSTCODE / ZIP *
                                </label>

                                <input
                                    type="text"
                                    value={form.postcode}
                                    onChange={(e) =>
                                        updateField(
                                            "postcode",
                                            e.target.value
                                        )
                                    }
                                    placeholder={
                                        checkoutData.shipping.placeholders.postcode
                                    }
                                    className={inputClass("postcode")}
                                />

                                <FieldError name="postcode" errors={errors} />
                            </div>

                        </div>

                        {/* PHONE / EMAIL */}

                        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

                            <div>

                                <label className="mb-2 block text-[11px] font-medium uppercase tracking-[1.2px] text-[#55565a]">
                                    PHONE (OPTIONAL)
                                </label>

                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={(e) =>
                                        updateField(
                                            "phone",
                                            e.target.value
                                        )
                                    }
                                    placeholder={
                                        checkoutData.shipping.placeholders.phone
                                    }
                                    className={inputClass("phone")}
                                />

                            </div>

                            <div>

                                <label className="mb-2 block text-[11px] font-medium uppercase tracking-[1.2px] text-[#55565a]">
                                    EMAIL ADDRESS *
                                </label>

                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) =>
                                        updateField(
                                            "email",
                                            e.target.value
                                        )
                                    }
                                    placeholder={
                                        checkoutData.shipping.placeholders.email
                                    }
                                    className={inputClass("email")}
                                />

                                <FieldError name="email" errors={errors} />

                            </div>

                        </div>

                        <div className="my-7 border-t border-[#dddddd]" />

                        {/* --------- DIFFERENT ADDRESS TOGGLE ---------- */}

                        <label className="flex cursor-pointer items-center gap-3">

                            <input
                                type="checkbox"
                                checked={form.differentAddress}
                                onChange={(e) =>
                                    updateField(
                                        "differentAddress",
                                        e.target.checked
                                    )
                                }
                                className="h-5 w-5 text-white accent-[#17AF26]"
                            />

                            <span className="text-sm text-[#17191d]">
                                {checkoutData.differentAddress.title}
                            </span>

                        </label>

                        {/* -----------  DIFFERENT ADDRESS FORM  ----------*/}

                        {form.differentAddress && (
                            <div className="mt-7">

                                <div className="mb-6 border-l-2 border-[#075039] pl-4">
                                    <h2 className="text-[15px] font-medium text-[#17191d]">
                                        Shipping to a different address
                                    </h2>

                                    <p className="mt-1 text-xs text-[#99999d]">
                                        Enter the address where you want your
                                        order to be delivered.
                                    </p>
                                </div>

                                {/* First / Last */}

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                                    <div>

                                        <label className="mb-2 block text-[11px] font-medium uppercase tracking-[1.2px] text-[#55565a]">
                                            FIRST NAME *
                                        </label>

                                        <input
                                            type="text"
                                            value={form.differentFirstName}
                                            onChange={(e) =>
                                                updateField(
                                                    "differentFirstName",
                                                    e.target.value
                                                )
                                            }
                                            className={inputClass(
                                                "differentFirstName"
                                            )}
                                        />

                                        <FieldError name="firstName" errors={errors} />

                                    </div>

                                    <div>

                                        <label className="mb-2 block text-[11px] font-medium uppercase tracking-[1.2px] text-[#55565a]">
                                            LAST NAME *
                                        </label>

                                        <input
                                            type="text"
                                            value={form.differentLastName}
                                            onChange={(e) =>
                                                updateField(
                                                    "differentLastName",
                                                    e.target.value
                                                )
                                            }
                                            className={inputClass(
                                                "differentLastName"
                                            )}
                                        />

                                        <FieldError name="lastName" errors={errors} />

                                    </div>

                                </div>

                                {/* Country */}

                                <div className="mt-5">

                                    <label className="mb-2 block text-[11px] font-medium uppercase tracking-[1.2px] text-[#55565a]">
                                        COUNTRY / REGION *
                                    </label>

                                    <select
                                        value={form.differentCountry}
                                        onChange={(e) =>
                                            updateField(
                                                "differentCountry",
                                                e.target.value
                                            )
                                        }
                                        className={inputClass(
                                            "differentCountry"
                                        )}
                                    >

                                        {checkoutData.shipping.countries.map(
                                            (country) => (
                                                <option
                                                    key={country}
                                                    value={country}
                                                >
                                                    {country}
                                                </option>
                                            )
                                        )}

                                    </select>

                                    <FieldError name="country" errors={errors} />

                                </div>

                                {/* Address */}

                                <div className="mt-5">

                                    <label className="mb-2 block text-[11px] font-medium uppercase tracking-[1.2px] text-[#55565a]">
                                        ADDRESS *
                                    </label>

                                    <input
                                        type="text"
                                        value={form.differentAddressLine}
                                        onChange={(e) =>
                                            updateField(
                                                "differentAddressLine",
                                                e.target.value
                                            )
                                        }
                                        className={inputClass(
                                            "differentAddressLine"
                                        )}
                                    />

                                    <FieldError name="firstName" errors={errors} />

                                    <input
                                        type="text"
                                        value={form.differentApartment}
                                        onChange={(e) =>
                                            updateField(
                                                "differentApartment",
                                                e.target.value
                                            )
                                        }
                                        placeholder={
                                            checkoutData.shipping.placeholders.apartment
                                        }
                                        className="mt-2 h-11 w-full rounded-[7px] border border-[#C8C9CB] px-4 text-sm outline-none focus:border-[#075039]"
                                    />

                                </div>

                                {/* City / Province / Postcode */}

                                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">

                                    <div>

                                        <label className="mb-2 block text-[11px] font-medium uppercase tracking-[1.2px] text-[#55565a]">
                                            TOWN / CITY *
                                        </label>

                                        <input
                                            type="text"
                                            value={form.differentCity}
                                            onChange={(e) =>
                                                updateField(
                                                    "differentCity",
                                                    e.target.value
                                                )
                                            }
                                            className={inputClass(
                                                "differentCity"
                                            )}
                                        />

                                        <FieldError name="city" errors={errors} />

                                    </div>

                                    <div>

                                        <label className="mb-2 block text-[11px] font-medium uppercase tracking-[1.2px] text-[#55565a]">
                                            PROVINCE *
                                        </label>

                                        <select
                                            value={form.differentProvince}
                                            onChange={(e) =>
                                                updateField(
                                                    "differentProvince",
                                                    e.target.value
                                                )
                                            }
                                            className={inputClass(
                                                "differentProvince"
                                            )}
                                        >

                                            <option value="">
                                                Select province
                                            </option>

                                            {checkoutData.shipping.provinces.map(
                                                (province) => (
                                                    <option
                                                        key={province}
                                                        value={province}
                                                    >
                                                        {province}
                                                    </option>
                                                )
                                            )}

                                        </select>

                                        <FieldError name="province" errors={errors} />

                                    </div>

                                    <div>

                                        <label className="mb-2 block text-[11px] font-medium uppercase tracking-[1.2px] text-[#55565a]">
                                            POSTCODE / ZIP *
                                        </label>

                                        <input
                                            type="text"
                                            value={form.differentPostcode}
                                            onChange={(e) =>
                                                updateField(
                                                    "differentPostcode",
                                                    e.target.value
                                                )
                                            }
                                            className={inputClass(
                                                "differentPostcode"
                                            )}
                                        />

                                        <FieldError name="diffrentPostcode" errors={errors} />

                                    </div>

                                </div>

                            </div>
                        )}

                             {/* -------  ORDER NOTES ---------- */}

                        <div className="mt-7">

                            <label className="mb-3 block text-[11px] font-medium uppercase tracking-[1.2px] text-[#55565a]">
                                {checkoutData.orderNotes.title}
                            </label>

                            <textarea
                                value={form.orderNotes}
                                onChange={(e) =>
                                    updateField(
                                        "orderNotes",
                                        e.target.value
                                    )
                                }
                                placeholder={
                                    checkoutData.orderNotes.placeholder
                                }
                                className="min-h-22.5 w-full resize-none rounded-[7px] border border-[#C8C9CB] px-4 py-4 text-sm outline-none focus:border-[#075039]"
                            />

                        </div>

                        <div className="my-7 border-t border-[#C8C9CB]" />

                          {/* ---------- OUT OF STOCK   ------------- */}

                        <div>

                            <h2 className="text-[15px] font-medium text-[#17191d]">
                                {checkoutData.outOfStock.title}
                            </h2>

                            <select
                                value={form.outOfStock}
                                onChange={(e) =>
                                    updateField(
                                        "outOfStock",
                                        e.target.value
                                    )
                                }
                                className="mt-5 h-11 w-full rounded-[7px] border border-[#C8C9CB] bg-white px-4 text-sm outline-none focus:border-[#075039]"
                            >

                                {checkoutData.outOfStock.options.map(
                                    (option) => (
                                        <option
                                            key={option}
                                            value={option}
                                        >
                                            {option}
                                        </option>
                                    )
                                )}

                            </select>

                        </div>

                        <div className="my-7 border-t border-[#C8C9CB]" />

                        {/* ----------  HEARD ABOUT US ------------- */}

                        <div>

                            <h2 className="text-[15px] font-medium text-[#17191d]">
                                {checkoutData.heardAboutUs.title}
                            </h2>

                            <textarea
                                value={form.heardAboutUs}
                                onChange={(e) =>
                                    updateField(
                                        "heardAboutUs",
                                        e.target.value
                                    )
                                }
                                placeholder={
                                    checkoutData.heardAboutUs.placeholder
                                }
                                className="mt-5 min-h-22.5 w-full resize-none rounded-[7px] border border-[#C8C9CB] px-4 py-4 text-sm outline-none focus:border-[#075039]"
                            />

                        </div>

                    </form>

                    {/* ----------- RIGHT - SUMMARY ----------- */}

                    <aside className="h-fit rounded-[17px] border border-[#C8C9CB] bg-white p-6 lg:sticky lg:top-6">

                        {/* Subtotal */}

                        <div className="flex justify-between">

                            <span className="text-[14px] text-[#99999d]">
                                {checkoutData.summary.subtotal}
                            </span>

                            <span className="text-[14px] font-semibold">
                                ${subtotal.toFixed(2)}
                            </span>

                        </div>

                        {/* Shipping */}

                        <div className="mt-5 flex justify-between">

                            <span className="text-[14px] text-[#99999d]">
                                {checkoutData.summary.shipping}
                            </span>

                            <span className="text-[14px] text-[#17191d]">
                                {form.city
                                    ? `${form.city}, ${form.country}`
                                    : "New York, US"}
                            </span>

                        </div>

                        {/* Discount */}

                        <div className="mt-5 flex justify-between">

                            <span className="text-[14px] text-[#99999d]">
                                {checkoutData.summary.discount}
                            </span>

                            <span className="text-[14px] font-semibold">
                                ${discount.toFixed(2)}
                            </span>

                        </div>

                        {/* Shipping Costs */}

                        <div className="mt-5 flex justify-between">

                            <span className="text-[14px] text-[#99999d]">
                                {checkoutData.summary.shippingCosts}
                            </span>

                            <span className="text-[14px] font-semibold">
                                ${shippingCost.toFixed(2)}
                            </span>

                        </div>

                        <div className="my-5 border-t border-[#C8C9CB]" />

                        {/* Payment method */}

                        <div className="flex items-center justify-between">

                            <span className="text-[14px] text-[#99999d]">
                                {checkoutData.summary.emailMoneyTransfer}
                            </span>

                            <img
                                src={interacIcon}
                                alt="Interac"
                                className="h-6 w-auto object-contain"
                            />

                        </div>

                        {/* Coupon */}

                        <div className="mt-5 flex gap-3">

                            <input
                                type="text"
                                value={form.coupon}
                                onChange={(e) =>
                                    updateField(
                                        "coupon",
                                        e.target.value
                                    )
                                }
                                placeholder={
                                    checkoutData.summary.couponPlaceholder
                                }
                                className="h-10.75 min-w-0 flex-1 rounded-lg border border-[#C8C9CB] 
                                px-4 text-sm outline-none focus:border-[#075039]"
                            />

                            <button
                                type="button"
                                onClick={handleCoupon}
                                className="rounded-full bg-[#f0faf3] px-5 text-xs font-medium text-[#08ad2a]"
                            >
                                {checkoutData.summary.couponButton}
                            </button>

                        </div>

                        {/* Confirm address */}

                        <label className="mt-6 flex cursor-pointer gap-3 border-t border-[#C8C9CB] pt-6">

                            <input
                                type="checkbox"
                                checked={form.confirmAddress}
                                onChange={(e) =>
                                    updateField(
                                        "confirmAddress",
                                        e.target.checked
                                    )
                                }
                                className="mt-1 h-5 w-5 shrink-0 accent-[#17AF26]"
                            />

                            <span className="text-[13px] leading-5 text-[#737379]">
                                {checkoutData.summary.addressConfirmation}
                            </span>

                        </label>

                        <FieldError name="confirmAddress" />

                        {/* Email updates */}

                        <label className="mt-5 flex cursor-pointer gap-3">

                            <input
                                type="checkbox"
                                checked={form.emailUpdates}
                                onChange={(e) =>
                                    updateField(
                                        "emailUpdates",
                                        e.target.checked
                                    )
                                }
                                className="mt-1 h-5 w-5 shrink-0 accent-[#17AF26]"
                            />

                            <span className="text-[13px] leading-5 text-[#737379]">
                                {checkoutData.summary.emailUpdates}
                            </span>

                        </label>

                        {/* --------------  POINTS - CONTROLLED BY USER -------------------- */}

                        <div className="mt-5 border-t border-[#C8C9CB] pt-5">

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-2">

                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f7c600] text-[10px] font-bold text-white">
                                        $
                                    </span>

                                    <span className="text-[13px] text-[#99999d]">
                                        {checkoutData.summary.points}
                                    </span>

                                    <span className="text-[13px] font-medium">
                                        {points.toLocaleString()}
                                    </span>

                                </div>

                                {/* Toggle */}

                                <button
                                    type="button"
                                    role="switch"
                                    aria-checked={usePoints}
                                    onClick={() =>
                                        setUsePoints((current) => !current)
                                    }
                                    className={` relative h-6 w-11 rounded-full p-0.5 transition  ${usePoints
                                        ? "bg-[#08b52a]"
                                        : "bg-[#c8c9cb]"
                                        }`}>

                                    <span
                                        className={`block h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${usePoints
                                            ? "translate-x-5"
                                            : "translate-x-0"
                                            }`} />

                                </button>

                            </div>

                            {/* point */}

                            {usePoints && (
                                <div className="mt-4">

                                    <label className="mb-2 block text-[11px] font-medium uppercase tracking-[1px] text-[#777]">
                                        Points to use
                                    </label>

                                    <input
                                        type="number"
                                        min="0"
                                        max={points}
                                        value={points}
                                        onChange={(e) => {
                                            const value = Math.min(
                                                Math.max( Number(e.target.value) || 0, 0 ),
                                                points
                                            );

                                            setPoints(value);
                                        }}
                                        className="h-10 w-full rounded-[7px] border border-[#C8C9CB] px-3 text-sm outline-none
                                         focus:border-[#075039]" />
                                </div>
                            )}
                        </div>

                        {/* Place Order */}

                        <button
                            type="submit"
                            form="checkout-form"
                            className="mt-5 flex h-13 w-full items-center justify-center gap-4 rounded-full bg-[#08b52a] text-[15px] font-medium text-white transition hover:bg-[#06a825]"
                        >

                            <span>
                                {checkoutData.summary.placeOrder}
                            </span>

                            <span className="h-5 w-px bg-white/50" />

                            <span>
                                ${total.toFixed(2)}
                            </span>

                        </button>

                        {/* Payment methods */}

                        <div className="mt-6 border-t border-[#C8C9CB] pt-5">

                            <p className="mb-4 text-[11px] uppercase tracking-[1.3px] text-[#88888c]">
                                {checkoutData.summary.securePayments}
                            </p>

                            <div className="flex items-center gap-3">

                                {checkoutData.payment.methods.map(
                                    (method) => (
                                        <div
                                            key={method}
                                            className="flex h-8 w-12 items-center justify-center rounded-md border border-[#C8C9CB] bg-white"
                                        >

                                            <img
                                                src={paymentIcons[method]}
                                                alt={method}
                                                className="max-h-5 max-w-8.5 object-contain"
                                            />

                                        </div>
                                    )
                                )}

                            </div>

                        </div>

                    </aside>

                </div>
            </div>
        </main>
    );
}