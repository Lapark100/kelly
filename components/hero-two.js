import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroTwo() {
    return (
        <section className="w-full pt-[88px]">
            <div className="bg-[#00411F] flex flex-col md:flex-row w-full mx-auto">
                {/* Left side */}
                <div className="w-full md:w-1/2 px-4 sm:px-8 md:px-[175px] py-16 md:py-[199px] space-y-6">
                    <h2 className="text-[28px] sm:text-[36px] md:text-[48px] text-[#AED5AF] tracking-wide font-bold max-w-[564px]">
                        Get the world’s best workforce solutions, fit to your local business.
                    </h2>

                    <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#AED5AF] pb-3 tracking-wide max-w-[600px] font-normal">
                        Since inventing the staffing industry, we’ve become experts in both talent solutions and the many local markets we serve. Visit your country's website.
                    </p>

                    {/* CTA */}
                    <div className="flex space-x-4 items-center">
                        <div className="w-full sm:w-[300px] h-[58px] text-[14px] text-black font-bold flex items-center justify-center bg-[#00b142]">
                            <Link href="/">EXPLORE LOCAL SOLUTIONS</Link>
                        </div>
                    </div>
                </div>

                {/* Right side image */}
                <div
                    className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-auto"
                    style={{
                        backgroundImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/HeroTwo-img.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            </div>
        </section>
    );
}
