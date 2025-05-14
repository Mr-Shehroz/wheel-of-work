import Image from "next/image";
import Link from "next/link";

export default function Section3() {
    return (
        <div>
            <section className="relative lg:flex justify-end mt-10">
                {/* Rotated heading */}
                <div className="lg:absolute lg:-left-70 lg:-rotate-90 top-[50dvh] mb-10 lg:mb-0">
                    <h2 className="text-4xl md:text-5xl md:w-[40%] lg:w-full lg:text-left mx-auto text-center font-bold leading-tight lg:leading-[100px]">
                        SUPER SELECTIVE MISSIONS
                    </h2>
                </div>

                {/* Mission boxes and image */}
                <div className="flex flex-col md:flex-row items-center">
                    {/* Mission labels */}
                    <div className="flex md:flex-col flex-col-reverse rotate-90 md:rotate-0 md:gap-1">
                        <Link href="#" className="bg-[#a6c3d1] px-14 py-6 md:px-48 md:py-14 xl:px-62 xl:py-14 rounded-l-3xl text-center">
                            ENGINEERING
                        </Link>
                        <Link href="#" className="bg-[#f4ddc5] px-14 py-6 md:px-48 md:py-14 xl:px-62 xl:py-14 rounded-l-3xl text-center">
                            TECH
                        </Link>
                        <Link href="#" className="bg-[#a4bcb0] px-14 py-6 md:px-48 md:py-14  xl:px-62 xl:py-14 rounded-l-3xl text-center">
                            ADVICE
                        </Link>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-auto">
                        <Image
                            className="lg:w-[45dvh] w-full xl:w-[70dvh] lg:h-[110dvh] md:h-[90dvh] object-cover"
                            src="/wow-mission.jpg"
                            width={300}
                            height={200}
                            alt="wow-mission"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
