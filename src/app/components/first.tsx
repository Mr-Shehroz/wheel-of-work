import Image from "next/image";
import Link from "next/link";

export default function First() {
  return (
    <section className="flex flex-col md:flex-row gap-28 md:gap-6 md:mx-6 md:overflow-hidden">
      {/* Card 1 */}
      <div className="relative w-full md:w-1/2 h-[200px] md:h-screen">
        <Image
          src="/1.jpg"
          alt="1"
          fill
          className="object-cover object-[center_30%] md:py-6"
        />
        <div className="absolute -bottom-28 inset-0 flex items-end justify-center md:top-1/2 md:bottom-0">
          <div className="bg-white p-4 md:py-8 text-center w-[70%] md:w-full lg:w-[70%] xl:w-[60%] space-y-2 md:space-y-4">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="mx-auto w-[150px] md:w-[250px]"
            />
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl leading-tight md:leading-normal md:mt-12">
              Je suis un freelance en Tech ou en Ingénierie ou je souhaite recruter un freelance dans ces domaines.
            </p>
            <Link
              href="/profession"
              className="relative overflow-hidden group inline-block text-sm md:text-lg px-6 py-3 rounded-full border-2 border-black bg-black text-white transition duration-500"
            >
              <span className="relative z-10 group-hover:text-black transition duration-500">
                WoW Métier
              </span>
              <span className="absolute inset-0 bg-white scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative w-full md:w-1/2 h-[200px] md:h-screen">
        <Image
          src="/2.jpg"
          alt="2"
          fill
          className="object-cover object-[center_30%] md:py-6"
        />
        <div className="absolute -bottom-28 inset-0 flex items-end justify-center md:top-1/2 md:bottom-0">
          <div className="bg-white p-4 md:py-8 text-center w-[70%] md:w-full lg:w-[70%] xl:w-[60%] space-y-2 md:space-y-4">
            <Image
              src="/ex-logo.svg"
              alt="ex-logo"
              width={100}
              height={100}
              className="mx-auto w-[150px] md:w-[250px]"
            />
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl leading-tight md:leading-normal">
              Je suis un freelance en Tech ou en Ingénierie ou je souhaite recruter un freelance dans ces domaines.
            </p>
            <Link
              href="#"
              className="relative overflow-hidden group inline-block text-sm md:text-lg px-6 py-3 rounded-full border-2 border-black bg-black text-white transition duration-500"
            >
              <span className="relative z-10 group-hover:text-black transition duration-500">
                WoW Executive
              </span>
              <span className="absolute inset-0 bg-white scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
