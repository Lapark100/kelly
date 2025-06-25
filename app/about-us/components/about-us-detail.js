import Link from "next/link";

export default function AboutUsDec() {
    return (
        <section className="w-full bg-[#FAFAFA] py-7 md:pt-20 px-4 sm:px-6 md:px-20">
            <div className="text-center md:pt-10 md:pb-16 pt-3 pb-3">
                
                {/* Description Div */}
                <div className="space-y-6 max-w-[885px] text-left mx-auto">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-[0.25rem] text-left">
                        Finding great work for top talent.
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl tracking-[0.25rem] leading-[1.6] text-justify">
                        Kelly helps companies recruit and manage skilled workers and helps job seekers find great work in industries such as accounting and finance, education, engineering, government, manufacturing and production, technology, and more.
                    </p>

                    <p className="text-sm sm:text-base md:text-lg tracking-[0.25rem] leading-[1.6] text-justify">
                        Since inventing the staffing industry in 1946, we’ve become experts in the many specialties and local and global markets we serve. With a network of suppliers and partners around the world, we connect 450,000+ people with work every year. We ensure companies have the people they need, when and where they’re needed most.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:space-x-4 items-start sm:items-center">
                        <Link
                            href="/jobs"
                            className="w-full sm:w-[200px] h-[48px] sm:h-[58px] text-sm sm:text-[18px] uppercase text-white font-bold flex items-center justify-center bg-[#00b142]"
                        >
                            FIND A JOB
                        </Link>
                    </div>
                </div>
                
            </div>
        </section>
    );
}
