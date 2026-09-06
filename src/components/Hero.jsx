import Button from "../components/Button";

import hero from "../data/hero.json";

import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";

import background from "../images/Mask group.png";
import mobileBackground from "../images/Mask group (1).png";

export default function Hero() {
    const productImages = {
        1: image2,
        2: image1,
        3: image3,
    };

    return (
        <section
            className="
                relative
                min-h-[760px]
                overflow-hidden
                bg-[#145b47]
                bg-cover
                bg-center

                sm:min-h-[800px]
                md:min-h-[650px]
                lg:min-h-[700px]
                xl:min-h-[750px]
            "
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            {/* Mobile Background */}
            <img
                src={mobileBackground}
                alt=""
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    md:hidden
                "
            />

            {/* Main Container */}
            <div
                className="
                    relative
                    mx-auto
                    min-h-190
                    max-w-400

                    sm:min-h-200
                    md:min-h-162.5
                    lg:min-h-175
                    xl:min-h-187.5
                "
            >
                {/* ================= CONTENT ================= */}
                <div
                    className="
                        relative
                        z-20
                        px-6
                        pt-20

                        sm:px-8
                        sm:pt-24

                        md:absolute
                        md:left-0
                        md:top-1/2
                        md:w-[52%]
                        md:-translate-y-1/2
                        md:px-10
                        md:pt-0

                        lg:px-12

                        xl:px-16
                    "
                >
                    <span
                        className="
                            mb-4
                            block
                            text-[15px]
                            font-bold
                            tracking-[3px]
                            text-yellow-400

                            sm:text-base
                            sm:tracking-[4px]

                            md:mb-5
                            md:tracking-[5px]
                        "
                    >
                        {hero.eyebrow}
                    </span>

                    <h1
                        className="
                            text-3xl
                            font-bold
                            leading-[1.12]
                            text-white

                            sm:text-4xl

                            md:text-5xl

                            lg:text-6xl
                        "
                    >
                        {hero.title[0]}
                        <br />
                        {hero.title[1]}
                    </h1>

                    <p
                        className="
                            mt-5
                            max-w-[600px]
                            text-base
                            leading-relaxed
                            text-white

                            sm:text-lg

                            md:text-xl

                            lg:text-2xl
                        "
                    >
                        {hero.subtitle}
                    </p>

                    {/* Offers */}
                    <div
                        className="
                            mt-8
                            text-sm
                            font-bold
                            text-white

                            sm:mt-10
                            sm:text-base

                            md:mt-12
                            md:text-lg

                            lg:mt-14
                            lg:text-xl
                        "
                    >
                        {hero.offers.map((offer, index) => (
                            <span
                                key={offer.id}
                                className="inline-block"
                            >
                                {offer.text}

                                {index !== hero.offers.length - 1 && (
                                    <span className="mx-4 text-white/40">
                                        |
                                    </span>
                                )}
                            </span>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="mt-8 sm:mt-10 md:mt-12">
                        <Button to={hero.button.path}>
                            {hero.button.text}
                        </Button>
                    </div>
                </div>

                {/* ================= PRODUCTS ================= */}

                {/* Product 1 */}
                <div
                    className="
                        absolute
                        z-10

                        left-[3%]
                        bottom-[5%]

                        sm:left-[8%]
                        sm:bottom-[4%]

                        md:left-[52%]
                        md:bottom-[10%]

                        lg:left-[55%]
                        lg:bottom-[9%]

                        xl:left-[54%]
                        xl:bottom-[8%]
                    "
                >
                    <img
                        src={productImages[1]}
                        alt={hero.products.find((p) => p.id === 1)?.name}
                        className="
                            h-auto
                            w-[110px]
                            object-contain

                            sm:w-[130px]

                            md:w-[150px]

                            lg:w-[180px]

                            xl:w-[210px]
                        "
                    />
                </div>

                {/* Product 2 - Center */}
                <div
                    className="
                        absolute
                        z-20

                        left-1/2
                        top-[30%]
                        -translate-x-1/2

                        sm:top-[32%]

                        md:left-[72%]
                        md:top-[13%]

                        lg:left-[72%]
                        lg:top-[10%]

                        xl:left-[72%]
                        xl:top-[7%]
                    "
                >
                    <img
                        src={productImages[2]}
                        alt={hero.products.find((p) => p.id === 2)?.name}
                        className="
                            h-auto
                            w-[100px]
                            object-contain

                            sm:w-[120px]

                            md:w-[130px]

                            lg:w-[155px]

                            xl:w-[175px]
                        "
                    />
                </div>

                {/* Product 3 */}
                <div
                    className="
                        absolute
                        z-10

                        right-[4%]
                        bottom-[8%]

                        sm:right-[6%]
                        sm:bottom-[6%]

                        md:right-[1%]
                        md:bottom-[12%]

                        lg:right-[2%]
                        lg:bottom-[10%]

                        xl:right-[2%]
                        xl:bottom-[8%]
                    "
                >
                    <img
                        src={productImages[3]}
                        alt={hero.products.find((p) => p.id === 3)?.name}
                        className="
                            h-auto
                            w-[80px]
                            object-contain

                            sm:w-[100px]

                            md:w-[120px]

                            lg:w-[145px]

                            xl:w-[165px]
                        "
                    />
                </div>
            </div>
        </section>
    );
}