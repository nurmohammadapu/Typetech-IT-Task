import Navbar from './Navbar';

export default function HeroSection() {
  return (
    <div>
      <div
        className="h-[558px] sm:h-[558px] md:h-[871px] lg:h-[871px] xl:h-[1000px] 2xl:h-[1200px] bg-cover bg-center object-cover overflow-hidden "
        style={{
          backgroundImage: 
          'linear-gradient(180deg, rgba(47, 47, 47, 0.00) 0%, rgba(0, 0, 0, 0.48) 100%), url("/golden-gate.jpeg")',
        }}
      >
      <div>
        <Navbar/>
          <main className="flex justify-center items-center text-center gap-[14px] mx-auto px-4 pt-32 md:pt-48">
            <div className=" max-w-[348px] md:max-w-[1107px] flex flex-col justify-center items-center gap-[10px] md:gap-[14px]">
              <div className="flex items-center gap-[9px] justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                >
                  <path
                    d="M8.20763 0.459035C8.0201 0.273916 7.7658 0.169922 7.50063 0.169922C7.23547 0.169922 6.98116 0.273916 6.79363 0.459035L0.146632 7.02165C0.100144 7.06755 0.0632674 7.12205 0.0381083 7.18203C0.0129492 7.242 0 7.30629 0 7.37121C0 7.43612 0.0129492 7.50041 0.0381083 7.56039C0.0632674 7.62036 0.100144 7.67486 0.146632 7.72076C0.240518 7.81347 0.367856 7.86556 0.500632 7.86556C0.566375 7.86556 0.631476 7.85277 0.692215 7.82793C0.752954 7.80308 0.808144 7.76667 0.854632 7.72076L7.50063 1.15716L14.1466 7.72076C14.2405 7.81347 14.3679 7.86556 14.5006 7.86556C14.6334 7.86556 14.7607 7.81347 14.8546 7.72076C14.9485 7.62806 15.0013 7.50232 15.0013 7.37121C15.0013 7.2401 14.9485 7.11436 14.8546 7.02165L12.5006 4.69817V1.44649C12.5006 1.31554 12.448 1.18996 12.3542 1.09737C12.2604 1.00478 12.1332 0.952761 12.0006 0.952761H11.0006C10.868 0.952761 10.7408 1.00478 10.6471 1.09737C10.5533 1.18996 10.5006 1.31554 10.5006 1.44649V2.72326L8.20763 0.459035Z"
                    fill="white"
                  />
                  <path
                    d="M7.5 2.23047L13.5 8.15519V12.3094C13.5 12.7022 13.342 13.079 13.0607 13.3568C12.7794 13.6345 12.3978 13.7906 12 13.7906H3C2.60218 13.7906 2.22064 13.6345 1.93934 13.3568C1.65804 13.079 1.5 12.7022 1.5 12.3094V8.15519L7.5 2.23047Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white text-sm md:text-base font-nunito">
                  Real Estate Agency
                </p>
              </div>
              <p className="text-[30px] leading-[33px] md:text-[96px] md:leading-[95px] font-bold md:tracking-[-3.84px] text-white">
                Miami Real Estate Specialists
              </p>
              <p className="text-white max-w-[819px] leading-[25px]  font-nunito     text-sm md:text-base">
                Your specialists in residential and commercial properties. From
                dream homes to prime business spaces, trust our unique expertise
                to guide you in Miami South Florida&apos;s dynamic market.
              </p>
            </div>
          </main>
      </div>

      </div>
    </div>
  );
}
