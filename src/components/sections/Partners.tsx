import Image from "next/image";

const Partners = () => {
  const partners = [
    { src: "/images/Logo01.svg", alt: "Partner Logo 1" },
    { src: "/images/Logo02.png", alt: "Partner Logo 2" },
    { src: "/images/Logo03.png", alt: "Partner Logo 3" },
    { src: "/images/Logo04.png", alt: "Partner Logo 4" },
    { src: "/images/Logo05.png", alt: "Partner Logo 5" },
    { src: "/images/Logo06.png", alt: "Partner Logo 6" },
  ];

  return (
    <section className="relative w-full py-20">
      <div>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-[24px] font-medium text-neutral mb-8 text-center font-sora leading-[120%]"
            style={{
              letterSpacing: "-4%",
            }}
          >
            Partnered with worldwide leading companies.
          </h2>
        </div>

        {/* Partners Logos Grid */}
        <div className="flex justify-center items-center mx-auto sm:gap-[87px]">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center gap-3">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={205}
                height={59}
                className="w-[100%] h-[59px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
