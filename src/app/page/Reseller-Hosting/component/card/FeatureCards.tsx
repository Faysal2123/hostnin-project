import Image from "next/image";
import { CardFeature } from "../../../web-hosting/types/CardFeature";

interface FeatureCardsProps {
  cards: CardFeature[];
  bottom?: string;
}

const FeatureCards = ({ cards, bottom = "-180px" }: FeatureCardsProps) => (
  <div
    className="absolute left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4"
    style={{ bottom }}
  >
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-stretch">
      {cards.map((card) => (
        <div
          key={card.title}
          className="relative bg-white rounded-xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 flex-1 min-w-0 flex flex-col justify-between overflow-hidden"
        >
          <div className="flex items-center mb-3 sm:mb-4 relative z-10">
            <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white shadow mr-2 sm:mr-3 md:mr-4 flex-shrink-0">
              <Image src={card.icon} alt={card.title} width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </span>
            <span className="font-bold text-base sm:text-lg md:text-xl text-[#03206B]">{card.title}</span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base relative z-10">{card.desc}</p>
          {card.fadedIcon && (
            <span className="absolute right-1 sm:right-2 md:right-4 top-1 sm:top-2 md:top-4 opacity-10 z-0 select-none pointer-events-none">
              <Image src={card.fadedIcon} alt="" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards; 