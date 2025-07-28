import Image from "next/image";

const Hero = () => (
  <>
    <div
      className="relative flex flex-col items-center min-h-[70vh] sm:min-h-[110vh] w-full overflow-hidden pt-0 pb-0"
      style={{
        background:
          "radial-gradient(ellipse 60% 60% at 50% 50%,rgb(223, 246, 234) 0%,rgb(194, 247, 219) 20%, #fff 80%)",
      }}
    >
      <div className="relative sm:top-145 top-100">
        {/* 3D Green Shape */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 z-10 sm:w-[580px] sm:h-[586px] h-[476px] w-[376] pointer-events-none select-none">
          <Image
            src="/3d-img.png"
            alt="3D green shape"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        {/* Phone Mockup */}
        <div className="absolute sm:hidden left-[20px] sm:left-[-20px]  top-[30px] sm:top-[-70px]  -translate-x-1/2 -translate-y-1/2 z-20 sm:w-[470px] sm:h-[700px] h-[476px] w-[370px] flex items-center justify-center pointer-events-none select-none">
          <Image
            src="/iphone-2.png"
            alt="Phone mockup"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>{" "}
        <div className="absolute hidden sm:block left-[20px] sm:left-[-20px]  top-[30px] sm:top-[-70px]  -translate-x-1/2 -translate-y-1/2 z-20 sm:w-[1190px] sm:h-[700px] h-[476px] w-[370px] flex items-center justify-center pointer-events-none select-none">
          <Image
            src="/iphone.png"
            alt="Phone mockup"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        {/* Apollo Floating Label */}
        <div className="absolute sm:right-[130px] right-8 top-[-100px] z-30 flex flex-col items-center sm:w-[240px]">
          <div
            className="rounded-full sm:px-3 px-1 py-2 shadow-lg flex flex-row items-center justify-between sm:gap-4 border"
            style={{
              background: "#8C8C8C57",
              borderColor: "#C4C4C4",
              backdropFilter: "blur(15px)",
            }}
          >
            <div className="flex flex-col ">
              <span className="text-xs sm:text-base font-semibold text-white-800">
                $2,951.73
              </span>
              <span className="text-xs font-medium text-black">APL 17</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs sm:text-base font-semibold text-white-800">
                Apollo
              </span>
              <span className="text-xs font-medium text-black">APL</span>
            </div>
            <div className="ml-2  ">
              <img src="/Sparkle.svg" alt="Sparkle" className="min-w-10" />
            </div>
          </div>
        </div>
        {/* Romulus Floating Label */}
        <div className="absolute sm:left-[150px] sm:top-[50px] top-[100px] z-30 flex flex-col items-center w-[240px]">
          <div
            className="rounded-full sm:px-3 px-1 py-2 shadow-lg flex flex-row items-center justify-between sm:gap-4 border"
            style={{
              background: "#8C8C8C57",
              borderColor: "#C4C4C4",
              backdropFilter: "blur(25px)",
            }}
          >
            <div>
              <img src="/spark2.svg" alt="Sparkle" className="min-w-10 " />
            </div>
            <div className="flex flex-col mr-2 ml-1">
              <span className="sm:text-base text-xs font-semibold text-neutral-800">
                Romulus
              </span>
              <span className="text-xs font-medium text-white">RLS</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="sm:text-base text-xs font-semibold text-neutral-800">
                $3,271.20
              </span>
              <span className="text-xs font-medium text-white">RLS 24</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-40 flex flex-col items-center mt-2 mb-0">
        <h1 className="text-[2.8rem]  sm:text-5xl font-extrabold text-center leading-[1.08] text-black mb-2 mt-2">
          AI receipts. <br className="sm:hidden"></br>Simple crypto.
          <br />
          Smart control.
        </h1>
        <p className="text-base hidden sm:block sm:text-lg d-none text-center text-neutral-700 max-w-xl mb-10 font-medium">
          Klip Is Your All-In-One Decentralized Wallet
          <br />
          Designed For Security, Flexibility, And Full Ownership.
        </p>
        <button className="w-[214px] h-[54px] rounded-[28px] bg-[#12ED39] text-black text-base hidden sm:flex flex items-center justify-center">
          GET STARTED
          <svg
            className="ml-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5L19 12L12 19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <div className="flex flex-col items-center mt-2 mb-0">
      <p className="text-base  sm:hidden sm:text-lg d-none text-center text-neutral-700 max-w-xl mb-10 font-medium">
        Klip Is Your All-In-One Decentralized Wallet
        <br />
        Designed For Security, Flexibility, And Full Ownership.
      </p>
      <button className="w-[214px] h-[54px] rounded-[28px] bg-[#12ED39] font-bold text-black text-base  sm:hidden flex items-center justify-center">
        GET STARTED
        <svg
          className="ml-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5L19 12L12 19"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

    </div>
       <div className="max-w-7xl mx-auto sm:border-1 my-10 p-16">
        <div className="flex flex-col sm:flex-row lg:flex-row gap-12 justify-between items-center">
         
          <div className="lg:w-1/2 hidden sm:block relative ">
    
           
             <img src={"/frame.png"} />
          
            
     
            
            
          </div>
           <div className="w-100 h-auto block sm:hidden relative ">
           
           
             <img src={"/Body.png"} />
          
            
     
            
            
          </div>

          
          <div className=" space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              What is KlipAi
            </h2>
            
            <div className="space-y-4 text-lg text-neutral-700">
              <p className="text-base sm:text-lg md:text-xl text-neutral-700  w-100 font-sora font-normal leading-[px] tracking-[0%] capitalize">
                KlipAi Is The All-In-One Smart Wallet Layer For Web3.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-neutral-700  w-100 font-sora font-normal leading-[26px] tracking-[0%] capitalize">
                We Turn Every Crypto Transaction Into A Clean, AI-Powered Receipt.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-neutral-700 sm:w-80 w-100 font-sora font-normal leading-[26px] tracking-[0%] capitalize">
                You Can Also Send Tokens Using A Simple Username.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-neutral-700 sm:w-80 w-100 font-sora font-normal leading-[26px] tracking-[0%] capitalize">
                No TX Hashes. No Wallet Address Mistakes.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-neutral-700 sm:w-80 w-100 font-sora font-normal leading-[26px] tracking-[0%] capitalize">
                Just Clarity, Control, And Convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
  </>
);

export default Hero;  
