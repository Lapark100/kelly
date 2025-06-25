import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="w-full pt-[88px]">
            <div className="bg-[#00411F] flex flex-col md:flex-row w-full">
                {/* Left side */}
                <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-[175px] py-12 md:py-[199px] space-y-6">
                    <h2 className="text-[32px] md:text-[48px] text-[#AED5AF] tracking-wide font-bold max-w-full">
                        Connecting people to limitless opportunities.
                    </h2>

                    <p className="text-[18px] md:text-[20px] font-bold text-white max-w-full">
                        Work with the industry leader who's breaking down barriers and helping job seekers worldwide connect with meaningful, transformative work.
                    </p>

                    {/* Call to action container */}
                    <div className="flex flex-row space-x-6 items-center">
                        <div className="w-[200px] sm:w-[250px] h-[50px] sm:h-[58px] text-[16px] sm:text-[18px] font-bold flex items-center justify-center bg-[#AED5AF]">
                            <Link href="https://forms.gle/urR82XMm1WAYiHmm7">HIRE EXPERT TALENT</Link>
                        </div>

                        <div className="flex items-center space-x-2 text-white">
                            <p className="text-[18px] sm:text-[20px] font-bold underline cursor-pointer">
                                Explore jobs
                            </p>
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                {/* Right side image */}
                <div
                    className="w-full md:w-1/2 h-[300px] md:h-auto"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/Hero-Kelly.webp')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            </div>
        </section>
    );
}
