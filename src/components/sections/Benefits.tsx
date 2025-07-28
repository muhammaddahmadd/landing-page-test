import Image from "next/image";

const Benefits = () => {
  return (
    <section className="relative w-full py-20 bg-white">
      <div className="max-w-7xl sm:mx-auto mx-3 sm:px-6">
        {/* Section Header */}
        <button 
          className="w-[96px] h-[40px] text-black font-bold rounded-[30px] px-[15px] py-[10px] flex items-center justify-center gap-[10px]"
          style={{
            background: '#11920030',
            border: '1px solid #119200',
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
            Just enter the handle, select your token, and confirm. No copy-paste. No errors. No friction.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="flex relative flex-col lg:flex-row gap-8">
          {/* Left Side - Token Support Card (Rectangle) */}
          <div className="lg:w-1/3">
           <div 
              className="absolute top-10 inset-0 w-40 h-40"
              style={{
                background:
                  "radial-gradient(ellipse 60% 60% at 50% 50%,rgb(223, 246, 234) 0%,rgb(194, 247, 219) 20%, #fff 80%)",
              }}
            ></div>
       
            {/* Token Support Card */}
            <div className="bg-neutral-900 rounded-[20px] p-6 shadow-xl relative overflow-hidden w-[411px] h-[838px]" >
              
              <div className="flex justify-between mb-4">
                  <img src={"/token-support.svg"} />
                  <img src={"/Vector.svg"} />                  
              </div>
              <h3 className="text-[36px] font-normal text-white leading-[100%] tracking-[0%] font-sora">Token <br/>Support</h3>

              <div className="absolute w-[800px] left-[-85px] top-30 z-20"
              >
                <Image
                  src="/first.png"
                  alt="KlipAI Dashboard"
                  width={600}
                  height={838}
                  className="w-full h-auto rounded-lg"
                />
                {/* <div className="absolute bottom-0 left-20 right-0 h-16 bg-gradient-to-t from-neutral-900 to-transparent"></div> */}
              </div>
              <div className="mt-4 absolute left-4 bottom-0">
                <Image
                  src="/lines.png"
                  alt="Background graphics"
                  width={300}
                  height={150}
                  className="w-full h-20"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Stacked Square Cards */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            {/* Secure Transfers Card */}
            <div className="bg-neutral-900 rounded-[20px] p-6 shadow-xl relative overflow-hidden w-[411px] h-[409px]">
              <div className="flex flex-col my-5 items-center">
               
                            
             
               <h3 className="text-[36px] font-normal mb-10 text-white leading-[100%] tracking-[0%] font-sora">Secure Transfer</h3>
              <div className="relative">
                <Image
                  src="/two-card.png"
                  alt="Secure Transfers Interface"
                  width={411}
                  height={409}
                  className="sm:w-100 w-300 h-auto rounded-lg"
                />
              </div>
               </div>
            </div>
            
            {/* Unique Identity Card */}
            <div className="bg-neutral-900 rounded-[20px] p-6 shadow-xl relative overflow-hidden w-[411px] h-[409px]">
               <div className="flex justify-end mb-4">
                 
                  <img src={"/Vector.svg"} />                  
              </div>
              <div className="relative">
                <Image
                  src="/fourth.png"
                  alt="Exchange Interface"
                  width={411}
                  height={409}
                  className="w-85 absolute top-[-20px] left-2 h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
           <div className="lg:w-2/3 flex flex-col gap-6">
            {/* Secure Transfers Card */}
            <div className="bg-neutral-900 rounded-[20px] p-6 shadow-xl relative overflow-hidden w-[411px] h-[409px]">
              <div className="flex justify-end mb-4">
                 
                  <img src={"/Vector.svg"} />                  
              </div>
              <div className="relative">
                <Image
                  src="/third-p1.png"
                  alt="Secure Transfers Interface"
                  width={411}
                  height={409}
                  className="w-78 absolute h-auto rounded-lg"
                />
                 <Image
                  src="/third.png"
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
                  src="/fifth.png"
                  alt="Exchange Interface"
                  width={411}
                  height={409}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
       
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-900 rounded-2xl p-6 shadow-xl text-center">
            <h4 className="text-green-500 font-bold text-lg mb-4">Performance</h4>
            <Image
              src="/fourth.png"
              alt="Performance Gauge"
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>
          
          <div className="bg-neutral-900 rounded-2xl p-6 shadow-xl text-center">
            <h4 className="text-green-500 font-bold text-lg mb-4">Speed</h4>
            <Image
              src="/fifth.png"
              alt="Speed Indicator"
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>
          
          <div className="bg-neutral-900 rounded-2xl p-6 shadow-xl text-center">
            <h4 className="text-green-500 font-bold text-lg mb-4">Security</h4>
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Benefits; 