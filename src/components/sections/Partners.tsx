import Image from "next/image";

const Partners = () => {
  return (
    <section className="relative w-full py-20 ">
      <div className="">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-[24px] font-medium text-neutral-700 mb-8 text-center font-sora leading-[120%]"
            style={{
              letterSpacing: "-4%",
            }}
          >
            Partnered with worldwide leading companies.
          </h2>
        </div>

        {/* Partners Logos Grid */}
        <div className="flex justify-center items-center mx-auto sm:gap-[87px]">
          {/* Logo 1 */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/Logo01.svg"
              alt="Partner Logo 1"
              width={205}
              height={59}
              className="w-[100%] h-[59px]"
            />
          </div>

          {/* Logo 2 */}
          <div className="flex items-center ">
            <Image
              src="/images/Logo02.png"
              alt="Partner Logo 2"
              width={205}
              height={59}
              className="w-[100%] h-[59px]"
            />
          </div>

          {/* Logo 3 */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/Logo03.png"
              alt="Partner Logo 3"
              width={205}
              height={59}
              className="w-[100%] h-[59px]"
            />
          </div>

          {/* Logo 4 */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/Logo04.png"
              alt="Partner Logo 4"
              width={205}
              height={59}
              className="w-[100%] h-[59px]"
            />
          </div>

          {/* Logo 5 */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/Logo05.png"
              alt="Partner Logo 5"
              width={205}
              height={59}
              className="w-[100%] h-[59px]"
            />
          </div>

          {/* Logo 6 */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/Logo06.png"
              alt="Partner Logo 6"
              width={205}
              height={100}
              className="w-[100%] h-[59px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
