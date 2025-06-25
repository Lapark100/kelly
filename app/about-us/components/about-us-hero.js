

export default function AboutUsHero() {
    return (
        <section className="w-full pt-[88px ]">
            <div className="bg-[#F7F6F5] flex flex-col md:flex-row w-full ">
                {/* Left side */}
                <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-[175px] py-12 md:py-[199px] space-y-6">
                    <h2 className="text-[32px] md:text-[48px] text-[#215834] tracking-wide font-bold max-w-full">
                    Limitless is what we do.
                    </h2>

                    <p className="text-[18px] md:text-[20px] font-bold text-black max-w-full">
                    We empower businesses and people to access limitless opportunities.
                    </p>

                   
                </div>

                {/* Right side image */}
                <div
                    className="w-full md:w-1/2 h-[300px] md:h-auto"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/about-kelly.webp')`,
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                    }}
                />
            </div>
        </section>
    );
}
