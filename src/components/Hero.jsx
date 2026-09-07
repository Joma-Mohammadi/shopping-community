import Button from "../components/Button";
import hero from "../data/hero.json";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import background from "../images/Mask group.png";
import mobileBackground from "../images/Mask group (1).png";

export default function Hero() {
    const productImages = { 2: image1, 1: image2, 3: image3 };

    return (
        <section
            className="relative min-h-170 overflow-hidden bg-[#145b47] bg-cover bg-center sm:min-h-180 md:min-h-190 
            lg:min-h-200 xl:min-h-212.5"
            style={{ backgroundImage: `url(${background})` }}
        >
            <img src={mobileBackground} alt="" className="absolute inset-0 h-full w-full object-cover md:hidden" />

            <div className="mx-auto grid min-h-170 w-full max-w-400 grid-cols-1 sm:min-h-180 md:min-h-190 md:grid-cols-2
             lg:min-h-200 xl:min-h-212.5">
                {/* Content */}
                <div className="relative z-20 flex flex-col justify-center px-6 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-12 xl:px-16">
                    <span className="mb-3 text-[16px] font-bold tracking-[3px] text-yellow-400 sm:mb-4 sm:text-sm sm:tracking-[4px] md:mb-5 md:tracking-[5px]">
                        {hero.eyebrow}
                    </span>

                    <h1 className="text-3xl font-bold leading-[1.12] text-white sm:text-4xl md:text-5xl lg:text-5xl">
                        {hero.title[0]} <br />
                        {hero.title[1]}
                    </h1>

                    <p className="mt-4 max-w-150 text-base leading-relaxed text-white sm:mt-5 sm:text-lg md:text-xl lg:text-2xl">
                        {hero.subtitle}
                    </p>

                    {/* Offers */}
                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm font-bold text-white sm:mt-10 sm:gap-x-5 sm:text-base md:mt-10 md:gap-x-6 md:text-lg lg:mt-15 lg:text-xl">
                        {hero.offers.map((offer, index) => (
                            <div key={offer.id} className="flex items-center gap-4 sm:gap-5 md:gap-6">
                                <span>{offer.text}</span>
                                {index !== hero.offers.length - 1 && <span className="h-5 w-px bg-white/40" />}
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="mt-5 sm:mt-10 md:mt-9 ">
                        <Button className="  " to={hero.button.path}>{hero.button.text}</Button>
                    </div>
                </div>

                {/* Products */}
                <div className="relative min-h-75 sm:min-h-90 md:min-h-0">
                    {hero.products.map((product) => (
                        <div
                            key={product.id}
                            className={`absolute ${product.position === "center"
                                    ? "left-[48%] top-[-14%] -translate-x-1/2 sm:top-[7%] md:left-[50%] md:top-[30%] lg:top-[27%] xl:top-[20%] xl:left-[53%] "
                                    : product.position === "left"
                                        ? "left-[1.5%] bottom-[19%] sm:left-[5%] sm:bottom-[8%] md:left-[2%] md:bottom-[12%] lg:left-[5%] lg:bottom-[18%] xl:left-[6%] "
                                        : "right-[8%] bottom-[29%] sm:right-[3%] sm:bottom-[10%] md:right-[0%] md:bottom-[15%] lg:right-[3%] lg:bottom-[25%] xl:right-[2%] "
                                }`}>
                            <div className="flex h-40 w-36 items-end justify-center sm:h-48 sm:w-44 md:h-52 md:w-48 lg:h-60 lg:w-56 xl:h-72 xl:w-64">
                                <img
                                    src={productImages[product.id]}
                                    alt={product.name}
                                    className={
                                        product.id === 1
                                            ? "h-auto w-32 object-contain sm:w-36 md:w-40 lg:w-48 xl:w-56"
                                            : product.id === 2
                                                ? "h-auto w-24 object-contain sm:w-28 md:w-32 lg:w-36 xl:w-40"
                                                : "h-auto w-20 object-contain sm:w-24 md:w-28 lg:w-32 xl:w-40"
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