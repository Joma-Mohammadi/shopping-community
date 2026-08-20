import Button from '../components/Button'
import hero from "../data/hero.json";

import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import background from "../images/Mask group.png";
import mobileBackground from "../images/Mask group (1).png";

export default function Hero() {
    const productImages = {
        2: image1,
        1: image2,
        3: image3,
    };

    return (
        <section
            className=" relative min-h-138.75overflow-hidden bg-[#145b47] bg-cover bg-center sm:min-h-180 md:min-h-200 lg:min-h-250"
            style={{ backgroundImage: `url(${background})` }} >
            <img
                src={mobileBackground}
                alt=""
                className="absolute inset-0 h-full w-full object-cover md:hidden"
            />

            <div
                className="mx-auto grid min-h-138.75 w-full grid-cols-1
                    sm:min-h-180 md:min-h-200 md:w-450 md:grid-cols-2 lg:min-h-250 ">
                {/* Content */}
                <div
                    className="relative z-20 flex flex-col justify-center px-8 py-6 sm:px-8 md:px-10 lg:px-12">
                    <span
                        className=" mb-3 text-xs font-bold tracking-[3px] text-yellow-400 sm:mb-4 sm:text-sm sm:tracking-[4px] md:mb-5 md:tracking-[5px] ">
                        {hero.eyebrow}
                    </span>

                    <h1
                        className=" max-w-162.5  text-3xl font-bold leading-[1.12] text-white  sm:text-4xl md:text-5xllg:text-6xl">
                        {hero.title}
                    </h1>

                    <p className="mt-4 text-lg text-white sm:mt-5 sm:text-xl md:text-2xl">
                        {hero.subtitle}
                    </p>

                    {/* Offers */}
                    <div className=" mt-8 flex items-center  gap-4 text-base font-bold text-white sm:mt-12
                         sm:gap-5 sm:text-lg md:mt-20 md:gap-6 md:text-xl" >
                        {hero.offers.map((offer, index) => (
                            <div
                                key={offer.id}
                                className="flex items-center gap-4 sm:gap-5 md:gap-6" >
                                <span>{offer.text}</span>

                                {index !== hero.offers.length - 1 && (
                                    <span className="h-5 w-px bg-white/40" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <Button
                        to={hero.button.path}>
                        {hero.button.text}</Button>
                </div>

                {/* Products */}
                <div
                    className="relative min-h-85 sm:min-h-100 md:min-h-150 lg:min-h-200">
                    {hero.products.map((product) => (
                        <div
                            key={product.id}
                            className={`absolute ${product.position === "center"
                                ? "right-[29%] top-[6%] sm:right-[30%] sm:top-[15%] md:right-[35%] md:top-[37%]"
                                : product.position === "left"
                                    ? "left-[-4%] bottom-[13%] sm:left-[10%] sm:bottom-[18%] md:left-[12%] md:bottom-[18%]"
                                    : "right-[3%] bottom-[23%] sm:right-[5%] sm:bottom-[22%] md:right-[5%] md:bottom-[25%]"
                                }`}
                        >
                            <div className="flex h-37.5 w-47.5 items-end justify-center">
                                <img
                                    src={productImages[product.id]}
                                    alt={product.name}
                                    className={
                                        product.id === 1
                                            ? "h-auto w-35 object-contain sm:w-75 md:w-40 lg:w-90"
                                            : product.id === 2
                                                ? "h-auto w-24 object-contain sm:w-30 md:w-35 lg:w-40"
                                                : "h-auto w-23 object-contain sm:w-28 md:w-32 lg:w-37.5"
                                    }
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}