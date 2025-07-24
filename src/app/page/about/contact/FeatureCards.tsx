import React from "react";
import { MdCall, MdAttachEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { CardFeature } from "../../web-hosting/types/CardFeature";

const iconMap: Record<string, React.ReactElement> = {
  MdCall: <MdCall />,
  MdAttachEmail: <MdAttachEmail />,
  FaHome: <FaHome />,
};

interface FeatureCardsProps {
  cards: (Omit<CardFeature, "icon"> & { iconName: string })[];
  bottom?: string;
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ cards, bottom = "-180px" }) => {
  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl"
      style={{ bottom }}
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch">
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative bg-white rounded-xl shadow-xl p-6 sm:p-8 lg:p-10 flex-1 min-w-0 flex flex-col justify-between overflow-hidden"
          >
            <div className="flex items-center mb-4 z-60">
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 shadow mr-3 sm:mr-4 flex-shrink-0 text-white text-xl sm:text-2xl -top-14 relative">
                {iconMap[card.iconName] || null}
              </span>
              <span className="font-bold text-lg sm:text-xl text-[#03206B]">
                {card.title}
              </span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base relative z-10 whitespace-pre-line">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
