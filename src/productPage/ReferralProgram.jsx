import { useState } from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiCopy, FiPlus } from "react-icons/fi";

export default function ReferralProgram() {
    const [copied, setCopied] = useState("");
    const [friends, setFriends] = useState([{ email: "", name: "" }]);
    const [errors, setErrors] = useState([]);
    const [message, setMessage] = useState("");

    const referralUrl = "Referral code is available only to users with at least one order.";
    const couponCode = "Referral code is available only to users with at least one order.";

    const copyText = async (text, type) => {
        await navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(""), 1500);
    };

    const addFriend = () => {
        setFriends((prev) => [...prev, { email: "", name: "" }]);
        setErrors((prev) => [...prev, {}]);
    };

    const updateFriend = (index, field, value) => {
        setFriends((prev) =>
            prev.map((friend, i) =>
                i === index ? { ...friend, [field]: value } : friend
            )
        );
    };

    const validate = () => {
        const newErrors = friends.map((friend) => {
            const error = {};

            if (!friend.email.trim()) {
                error.email = "Email is required";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(friend.email)) {
                error.email = "Enter a valid email";
            }

            if (!friend.name.trim()) {
                error.name = "Name is required";
            }

            return error;
        });

        setErrors(newErrors);
        return newErrors.every((error) => !error.email && !error.name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");

        if (!validate()) return;

        setMessage("Your referral emails have been sent successfully.");

        setFriends([{ email: "", name: "" }]);
        setErrors([]);
    };

    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralUrl)}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(referralUrl)}&text=${encodeURIComponent("Check this out!")}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`Check this out: ${referralUrl}`)}`;

    return (
        <section className="mx-auto w-full rounded-2xl border border-[#F4F4F4] bg-white px-5 py-8 s
        m:px-8 sm:py-10 lg:px-10 lg:py-10">
            <h2 className="text-[20px] font-medium text-[#111827] ">Referral Program</h2>

            <p className="mt-5 max-w-190 text-[16px] leading-7 text-[#717378] ">
                Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.
            </p>

            <div className="mt-8 border-t border-[#F4F4F4] pt-8">
                <ReferralBox
                    title="Your Referral URL"
                    value={referralUrl}
                    copied={copied === "url"}
                    onCopy={() => copyText(referralUrl, "url")}
                />

                <ReferralBox
                    title="Your Coupon Code to share"
                    value={couponCode}
                    copied={copied === "code"}
                    onCopy={() => copyText(couponCode, "code")}
                />
            </div>

            <div className="my-8 border-t border-[#F4F4F4]" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <SocialButton
                    icon={<FaFacebookF />}
                    label="Share Via Facebook"
                    className="text-[#1877f2] bg-[#eef4ff]"
                    href={facebookUrl}
                />

                <SocialButton
                    icon={<FaXTwitter />}
                    label="Share Via Twitter"
                    className="text-[#29bdf2] bg-[#effbff]"
                    href={twitterUrl}
                />

                <SocialButton
                    icon={<FaWhatsapp />}
                    label="Share Via Whatsapp"
                    className="text-[#00c853] bg-[#edfff5]"
                    href={whatsappUrl}
                />
            </div>

            <p className="mt-8 text-center text-xl text-gray-300">Or share via email</p>

            <form onSubmit={handleSubmit} className="mt-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1fr_1fr_auto]">
                    <div>
                        <label className="text-sm font-medium text-gray-600">Email</label>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-600">Name</label>
                    </div>

                    <div className="hidden sm:block" />
                </div>

                <div className="mt-2 space-y-5">
                    {friends.map((friend, index) => (
                        <div key={index} className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr_auto]">
                            <div>
                                <input
                                    type="email"
                                    value={friend.email}
                                    onChange={(e) => updateFriend(index, "email", e.target.value)}
                                    placeholder="Enter your email"
                                    className={`h-13 w-full rounded-xl border px-5 text-sm outline-none
                                         placeholder:text-gray-300 focus:border-green-600 ${errors[index]?.email ? "border-red-400" : "border-gray-100"}`}
                                />

                                {errors[index]?.email && (
                                    <p className="mt-1 text-xs text-red-500">{errors[index].email}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    value={friend.name}
                                    onChange={(e) => updateFriend(index, "name", e.target.value)}
                                    placeholder="Enter your name"
                                    className={`h-13 w-full rounded-xl border px-5 text-sm outline-none
                                         placeholder:text-gray-300 focus:border-green-600 ${errors[index]?.name ? "border-red-400" : "border-gray-100"}`}
                                />

                                {errors[index]?.name && (
                                    <p className="mt-1 text-xs text-red-500">{errors[index].name}</p>
                                )}
                            </div>

                            {index === friends.length - 1 && (
                                <button
                                    type="button"
                                    onClick={addFriend}
                                    className="flex h-13 w-16 items-center justify-center rounded-full 
                                    bg-[#f0fbf4] text-2xl text-green-600 transition hover:bg-[#e2f7e9] sm:mt-0"
                                >
                                    <FiPlus />
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr_auto]">
                    <input
                        type="email"
                        defaultValue="johndoe@example.com"
                        className="h-13 w-full rounded-xl border border-gray-100 px-5 text-sm
                         text-gray-900 outline-none focus:border-green-600"
                    />

                    <input
                        type="text"
                        defaultValue="John Doe"
                        className="h-13 w-full rounded-xl border border-gray-100 px-5 text-sm
                         text-gray-900 outline-none focus:border-green-600"
                    />

                    <div className="hidden w-16 sm:block" />
                </div>

                {message && (
                    <p className="mt-5 text-sm font-medium text-green-600">{message}</p>
                )}

                <button
                    type="submit"
                    className="mt-7 rounded-full bg-[#16b52a] px-10 py-4 text-sm font-semibold
                     text-white transition hover:bg-[#13a425] sm:px-12 sm:py-5"
                >
                    Send Emails
                </button>
            </form>
        </section>
    );
}

function ReferralBox({ title, value, copied, onCopy }) {
    return (
        <div className="mb-6 flex items-center gap-4 rounded-2xl bg-[#f1faf4] px-5 py-5">
            <div className="h-17 w-0.5 shrink-0 bg-red-500" />

            <div className="min-w-0 flex-1">
                <p className="text-[14px text-[#46494F] ">{title}</p>
                <p className="mt-3 text-[16px] font-medium leading-6 text-[#060709]">
                    {value}
                </p>
            </div>

            <button
                type="button"
                onClick={onCopy}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full
                 bg-white text-xl text-green-600 shadow-sm"
            >
                <FiCopy />
            </button>

            {copied && <span className="text-xs font-medium text-green-600">Copied!</span>}
        </div>
    );
}

function SocialButton({ icon, label, className, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-28 flex-col items-center justify-center rounded-xl border border-gray-100 text-sm transition hover:shadow-sm"
        >
            <span className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl ${className}`}>
                {icon}
            </span>
            <span className="mt-3 text-sm text-gray-600">{label}</span>
        </a>
    );
}