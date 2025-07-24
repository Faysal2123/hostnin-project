import Image from "next/image";
import { partnersData } from "../data/partnersData";

const PartnersSection = () => (
 <div className="bg-[#001143]">
     <section className="max-w-7xl mx-auto  py-16  flex flex-col items-center ">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
      Web Hosting Infrastructure <span className="text-[#FFB800]">Partners</span>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full max-w-7xl">
      {partnersData.map((partner) => (
        <div
          key={partner.name}
          className="bg-white rounded-xl flex items-center justify-center h-32 shadow-md transition-transform hover:scale-105 duration-200"
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            width={160}
            height={80}
            className="object-contain max-h-20"
          />
        </div>
      ))}
    </div>
  </section>
 </div>
);

export default PartnersSection; 