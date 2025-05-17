import { Facebook, Linkedin, X } from "lucide-react";

export default function FooterInner() {
    return (
        <section className="w-full">
            <div className="bg-[#333] px-4 md:px-6 py-8 w-full space-y-6">
                
                {/* Links and social icons */}
                <div className="flex flex-col lg:flex-row justify-between gap-6">
                    
                    {/* Policy Links */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {[
                            "Cookies Declaration",
                            "Sitemap",
                            "Code of Conduct",
                            "Corporate Sustainability Policy Statement",
                            "Human Rights Policy",
                            "UK Modern Slavery Transparency Act",
                            "Privacy Statement",
                        ].map((text, index) => (
                            <p
                                key={index}
                                className="text-[#d7d2cb] text-sm md:text-base underline pr-2 border-r border-[#d7d2cb] last:border-none"
                            >
                                {text}
                            </p>
                        ))}
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4 justify-start lg:justify-end text-[#d7d2cb]">
                        <Facebook className="w-6 h-6 md:w-7 md:h-7" />
                        <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
                        <X className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                </div>

                {/* Footer Bottom Text */}
                <p className="text-[#d7d2cb] text-center lg:text-left text-sm md:text-base">
                    © Copyright 2025 Kelly Services Inc.
                </p>
            </div>
        </section>
    );
}
