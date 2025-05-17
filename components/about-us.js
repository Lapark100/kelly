import Image from "next/image";
import aboutimg from "@/public/images/about-img.webp";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
    return (
        <section className="pt-16 md:py-[100px]">
            <div className="px-4 sm:px-6 md:px-[175px] mx-auto">
                {/* about us container */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* image container */}
                    <div className="w-full md:w-1/2">
                        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[672px]">
                            <Image
                                src={aboutimg}
                                alt="about-us-image"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                    </div>

                    {/* text container */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 mt-8 md:mt-0">
                        <h2 className="font-bold text-[28px] sm:text-[36px] md:text-[48px] tracking-wide leading-tight">
                            Named one of the world's best companies—with good reason.
                        </h2>

                        <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium tracking-wide">
                            At Kelly, we create limitless opportunities every day. We do it by connecting people to work that enriches their lives, and by connecting companies to the people they need to drive innovation and growth. These human connections create a ripple effect—improving people’s lives and the way businesses run. We bring specialized expertise together with true partnership like no one else can.
                        </p>

                        <div className="flex items-center space-x-2 text-[#00411F]">
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-bold underline cursor-pointer">
                                The Kelly Advantage
                            </p>
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}