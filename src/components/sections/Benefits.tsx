import Image from "next/image";

const Benefits = () => {
  return (
    <section className="relative w-full py-20 bg-white">
      <div className="max-w-7xl sm:mx-auto mx-3 sm:px-6">
        {/* Section Header */}
        <button
          className="w-[96px] h-[40px] text-black font-bold rounded-[30px] px-[15px] py-[10px] flex items-center justify-center gap-[10px]"
          style={{
            background: "#11920030",
            border: "1px solid #119200",
            opacity: 1,
          }}
        >
          Benefit
        </button>
        <div className="flex flex-col sm:flex-row justify-between my-10">
          <h2 className="text-4xl font-bold w-90 text-black mb-6">
            Say goodbye to Wallet Addresses.
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 sm:w-80 w-100 ">
            Just enter the handle, select your token, and confirm. No
            copy-paste. No errors. No friction.
          </p>
        </div>

        <div className="flex relative flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div
              className="absolute top-10 inset-0 w-40 h-40"
              style={{
                background:
                  "radial-gradient(ellipse 60% 60% at 50% 50%,rgb(223, 246, 234) 0%,rgb(194, 247, 219) 20%, #fff 80%)",
              }}
            ></div>

            <div className="bg-neutral-900 rounded-[20px] p-6 shadow-xl relative overflow-hidden w-[411px] h-[838px]">
              <div className="flex justify-between mb-4">
                <img src={"/images/token-support.svg"} />
                <img src={"/images/Vector.svg"} />
              </div>
              <h3 className="text-[36px] font-normal text-white leading-[100%] tracking-[0%] font-sora">
                Token <br />
                Support
              </h3>

              <div className="absolute w-[800px] left-[-85px] top-30 z-20">
                <Image
                  src="/images/first.png"
                  alt="KlipAI Dashboard"
                  width={600}
                  height={838}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="mt-4 absolute left-4 bottom-0">
                <Image
                  src="/images/lines.png"
                  alt="Background graphics"
                  width={300}
                  height={150}
                  className="w-full h-20"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-6">
            <div className="bg-neutral-900 rounded-[20px] p-6 shadow-xl relative overflow-hidden w-[411px] h-[409px]">
              <div className="flex flex-col my-5 items-center">
                <h3 className="text-[36px] font-normal mb-10 text-white leading-[100%] tracking-[0%] font-sora">
                  Secure Transfer
                </h3>
                <div className="relative">
                  <Image
                    src="/images/two-card.png"
                    alt="Secure Transfers Interface"
                    width={411}
                    height={409}
                    className="sm:w-100 w-300 h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 rounded-[20px] p-6 shadow-xl relative overflow-hidden w-[411px] h-[409px]">
              <div className="flex justify-end mb-4">
                <img src={"/images/Vector.svg"} />
              </div>
              <div className="relative">
                <Image
                  src="/images/fourth.png"
                  alt="Exchange Interface"
                  width={411}
                  height={409}
                  className="w-85 absolute top-[-20px] left-2 h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-6">
            <div className="bg-neutral-900 rounded-[20px] p-6 shadow-xl relative overflow-hidden w-[411px] h-[409px]">
              <div className="flex justify-end mb-4">
                <img src={"/images/Vector.svg"} />
              </div>
              <div className="relative">
                <Image
                  src="/images/third-p1.png"
                  alt="Secure Transfers Interface"
                  width={411}
                  height={409}
                  className="w-78 absolute h-auto rounded-lg"
                />
                <Image
                  src="/images/third.png"
                  alt="Secure Transfers Interface"
                  width={401}
                  height={409}
                  className="w-40 z-20 top-[150px] right-0 absolute h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Unique Identity Card */}
            <div className="bg-neutral-900 rounded-[20px] p0 shadow-xl relative overflow-hidden w-[411px] h-[409px]">
              <div className="relative">
                <Image
                  src="/images/fifth.png"
                  alt="Exchange Interface"
                  width={411}
                  height={409}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
