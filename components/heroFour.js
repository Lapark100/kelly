import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroFour() {
    return (
        <section className="w-full">
            <div className="bg-[#F7F6F5] flex flex-col md:flex-row w-full mx-auto">
                {/* Left side */}
                <div className="w-full md:w-1/2 px-4 sm:px-8 md:px-[175px] py-16 md:py-[199px] space-y-6 text-black">
                    <h2 className="text-[28px] sm:text-[36px] md:text-[48px] tracking-wide font-bold max-w-[564px]">
                        Get the world’s best workforce solutions, fit to your local business.
                    </h2>

                    <p className="max-w-[600px] text-[16px] sm:text-[18px] md:text-[20px] pb-3 tracking-wide font-normal">
                        Since inventing the staffing industry, we’ve become experts in both talent solutions and the many local markets we serve. Visit your country's website.
                    </p>

                    {/* Call to action container */}
                    <div className="flex flex-col sm:flex-row sm:space-x-6 items-start sm:items-center space-y-4 sm:space-y-0">
                        <div className="w-full sm:w-[300px] h-[58px] text-[14px] text-black font-bold flex items-center justify-center bg-[#00b142]">
                            <Link href="/">EXPLORE LOCAL SOLUTIONS</Link>
                        </div>
                    </div>
                </div>

                {/* Right side image */}
                <div
                    className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-auto"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/heroFour-img.webp')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            </div>
        </section>
    )
}