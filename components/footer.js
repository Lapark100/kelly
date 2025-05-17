import logoWhite from "@/public/logo-white.svg";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <section className="w-full bg-[#47433f] py-12 px-6 md:px-12">
            <div className="max-w-screen-2xl md:pl-[130px] w-full flex flex-col md:flex-row justify-between ">
                
                {/* Left: Logo & Text */}
                <div className="flex flex-col space-y-4 max-w-xl">
                    <Link href="/">
                        <Image
                            width={85}
                            height={40}
                            src={logoWhite}
                            alt="kelly-logo"
                            className="object-contain"
                        />
                    </Link>

                    <p className="text-white text-base leading-relaxed">
                        We create limitless opportunities by connecting people to work in ways that enrich their lives, and companies to people who drive innovation and growth.
                    </p>
                </div>

                {/* Right: Links section */}
                <div className="flex flex-col sm:flex-row gap-12 pt-4 md:pt-0">

                    {/* Column 1 */}
                    <div className="flex flex-col space-y-6">
                        <p className="text-white text-base font-bold uppercase border-b border-[hsla(36,14%,93%,0.25)] pb-2">
                            About Kelly
                        </p>
                        <div className="space-y-3">
                            <p className="text-sm text-white">75 years of Innovation</p>
                            <p className="text-sm text-white">Kelly Talent Promise</p>
                            <p className="text-sm text-white">Investor Relations</p>
                            <p className="text-sm text-white">Careers at Kelly</p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col space-y-6">
                        <p className="text-white text-base font-bold uppercase border-b border-[hsla(36,14%,93%,0.25)] pb-2">
                            Contact Us
                        </p>
                        <div className="space-y-3">
                            <p className="text-sm text-white">Email Us</p>
                            <p className="text-sm text-white">Phone: +1 201-477-0362
</p>
                            <p className="text-sm text-white">Media Inquiries</p>
                            <p className="text-sm text-white">Stop by a Kelly Office</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
