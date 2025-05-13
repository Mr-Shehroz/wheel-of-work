import Image from "next/image";

export default function Section8() {
    return (
        <section className="px-6 py-10">
            <div className="grid lg:grid-cols-2 gap-4">
                {/* LEFT - Image with Title */}
                <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
                    <Image
                        src="/street.jpg"
                        alt="Lille and the economic revival of Hauts-de-France"
                        fill
                        className="object-cover"
                    />
                    <h2 className="absolute top-6 left-6 text-white text-xl sm:text-2xl font-semibold w-3/4">
                        LILLE AND THE ECONOMIC REVIVAL OF HAUTS-DE-FRANCE
                    </h2>
                </div>

                {/* RIGHT - Grid of Boxes */}
                <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-[1fr_1fr] lg:grid-cols-2 gap-4">
                    <div className="bg-[#a6c3d1] p-6 rounded-2xl flex flex-col justify-between transition hover:shadow-lg cursor-pointer">
                        <h4 className="text-black text-base font-medium">
                            RELOCATION AND REINDUSTRIALIZATION IN HAUTS-DE-FRANCE
                        </h4>
                        <span className="text-2xl self-end hover:translate-x-1 transition">→</span>
                    </div>
                    <div className="bg-[#a4bcb0] p-6 rounded-2xl flex flex-col justify-between transition hover:shadow-lg cursor-pointer">
                        <h4 className="text-black text-base font-medium">
                            TALENT SHORTAGE: FREELANCERS AS A SOLUTION?
                        </h4>
                        <span className="text-2xl self-end hover:translate-x-1 transition">→</span>
                    </div>
                    <div className="bg-[#f4ddc5] p-6 rounded-2xl flex flex-col justify-between col-span-1 lg:col-span-2 transition hover:shadow-lg cursor-pointer">
                        <h4 className="text-black text-base font-medium">
                            RETAIL CHALLENGES IN THE SECOND HALF OF 2024
                        </h4>
                        <span className="text-2xl self-end hover:translate-x-1 transition">→</span>
                    </div>
                </div>
            </div>

            {/* Button */}
            <div className="text-center mt-20">
                <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
                    Our blog
                </button>
            </div>
        </section>
    );
}
