import Image from "next/image";
import { CardFeature } from "../../../web-hosting/types/CardFeature";

interface FeatureCardsProps {
  cards: CardFeature[];
  bottom?: string;
}

const FeatureCards = ({ cards, bottom = "-180px" }: FeatureCardsProps) => (
  <div
    className="absolute left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl "
    style={{ bottom }}
  >
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch">
      {cards.map((card) => (
        <div
          key={card.title}
          className="relative bg-white rounded-xl shadow-xl p-6 sm:p-8 lg:p-10 flex-1 min-w-0 flex flex-col justify-between overflow-hidden"
        >
          <div className="flex items-center mb-4 relative z-10">
            <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow mr-3 sm:mr-4 flex-shrink-0">
              <Image src={card.icon} alt={card.title} width={24} height={24} className="sm:w-8 sm:h-8" />
            </span>
            <span className="font-bold text-lg sm:text-xl text-[#03206B]">{card.title}</span>
          </div>
          <p className="text-gray-600 text-sm sm:text-base relative z-10">{card.desc}</p>
          {/* Faded Icon */}
          {card.fadedIcon && (
            <span className="absolute right-2 sm:right-4 top-2 sm:top-4 opacity-10 z-0 select-none pointer-events-none">
              <Image src={card.fadedIcon} alt="" width={48} height={48} className="sm:w-16 sm:h-16" />
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards; 