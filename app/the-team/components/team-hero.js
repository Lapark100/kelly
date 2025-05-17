

export default function TeamHero() {
    return (
        <section className="w-full pt-[88px]">
            <div className="bg-[#00411F] flex flex-col md:flex-row w-full">
                {/* Left side */}
                <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-[175px] py-12 md:py-[199px] space-y-6">
                    <h2 className="text-[32px] md:text-[48px] text-[#AED5AF] tracking-wide font-bold max-w-full">
                    Meet the People Behind the Passion
                    </h2>

                    <p className="text-[18px] md:text-[20px] font-bold text-white max-w-full">
                    Our team is made up of dedicated HR professionals committed to helping businesses grow through people-first strategies, industry expertise, and a passion for excellence.
                    </p>

                   
                </div>

                {/* Right side image */}
                <div
                    className="w-full md:w-1/2 h-[300px] md:h-auto"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/team-img.webp')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            </div>
        </section>
    );
}
