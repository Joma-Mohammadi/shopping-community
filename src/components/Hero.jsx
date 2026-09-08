import Button from "../components/Button";
import hero from "../data/hero.json";

import desktopBackground from "../images/Frame 1361018365.png";
import mobileBackground from "../images/Frame 1361018366.png";

export default function Hero() {
    return (
        <section className="relative min-h-170 overflow-hidden bg-cover bg-center sm:min-h-180 md:min-h-190 lg:min-h-200 xl:min-h-212.5">
            {/* Desktop Background */}
            <div
                className="absolute inset-0 hidden bg-cover bg-center md:block"
                style={{
                    backgroundImage: `url(${desktopBackground})`,
                }}
            />

            {/* Mobile Background */}
            <div
                className="absolute inset-0 block bg-cover bg-center md:hidden"
                style={{
                    backgroundImage: `url(${mobileBackground})`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-170 w-full max-w-400 items-start pt-16 sm:min-h-180 sm:pt-20 md:min-h-190 md:items-center md:pt-0 lg:min-h-200 xl:min-h-212.5">
                <div className="flex w-full flex-col justify-center px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
                    {/* Eyebrow */}
                    <span className="mb-3 text-[16px] font-bold tracking-[3px] text-yellow-400 sm:mb-4 sm:text-sm sm:tracking-[4px] md:mb-5 md:tracking-[5px]">
                        {hero.eyebrow}
                    </span>

                    {/* Title */}
                    <h1 className="text-2xl font-bold leading-[1.12] text-white sm:text-4xl md:text-5xl lg:text-5xl">
                        {hero.title[0]} <br />
                        {hero.title[1]}
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 max-w-150 text-base leading-relaxed text-white sm:mt-5 sm:text-lg md:text-xl lg:text-2xl">
                        {hero.subtitle}
                    </p>

                    {/* Offers */}
                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm font-bold text-white sm:mt-10 sm:gap-x-5 sm:text-base md:mt-10 md:gap-x-6 md:text-lg lg:mt-15 lg:text-xl">
                        {hero.offers.map((offer, index) => (
                            <div
                                key={offer.id}
                                className="flex items-center gap-4 sm:gap-5 md:gap-6"
                            >
                                <span>{offer.text}</span>

                                {index !== hero.offers.length - 1 && (
                                    <span className="h-5 w-px bg-white/40" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="mt-5 sm:mt-10 md:mt-9">
                        <Button to={hero.button.path}>
                            {hero.button.text}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}