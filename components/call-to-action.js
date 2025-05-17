import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="w-full">
      <div className="bg-white w-full flex flex-col items-center justify-center text-center py-[100px]">
        {/* Call to action Content */}
        <div className="space-y-6">
          <h2 className="md:text-[48px] text-[24px] font-[700]">
            Looking for work? Boom.
            <br />
            The right job changes everything.
          </h2>

          <p className="text-black tracking-wider md:text-[22px] text-[16px]">
            Break down barriers and find your next opportunity with Kelly.
          </p>

          <div className="w-[145.63px] h-[50.8px] text-[14px] text-black font-[700] bg-[#00b142] flex items-center justify-center mx-auto">
            <Link href="/">FIND A JOB</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
