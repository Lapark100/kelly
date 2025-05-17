import Link from "next/link";

export default function HeroThree() {
    return (
        <section className="w-full">
            <div className="bg-[#AED5AF] flex flex-col md:flex-row w-full mx-auto">
                {/* Left side image */}
                <div
                    className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-auto"
                    style={{
                        backgroundImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('images/heroThree-img.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                {/* Right side text */}
                <div className="w-full md:w-1/2 px-4 sm:px-8 md:px-[175px] py-16 md:py-[199px] space-y-6">
                    <h2 className="text-[28px] sm:text-[36px] md:text-[48px] text-[#00411F] tracking-wide font-bold max-w-[564px]">
                        Transform your global talent strategy with KellyOCG.
                    </h2>

                    <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#00411F] pb-3 tracking-wide max-w-[600px] font-normal">
                        Stay ahead of your most complex talent needs with KellyOCG—a leading provider of global solutions for managed services, workforce outsourcing, and consulting.
                    </p>

                    {/* Call to action */}
                    <div className="flex space-x-4 items-center">
                        <div className="w-full sm:w-[300px] h-[58px] text-[14px] text-white font-bold flex items-center justify-center bg-[#00b142]">
                            <Link href="/">EXPLORE GLOBAL SOLUTIONS</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
