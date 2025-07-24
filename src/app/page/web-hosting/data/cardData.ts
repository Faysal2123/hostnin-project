import { CardFeature } from "../types/CardFeature";
import ArrowDark from "../../../assets/arrow-dark.webp";
import ManAttending from "../../../assets/man-attending-online-meeting.png";
import SuccessDone from "../../../assets/successfully-done.png";

const cardData: CardFeature[] = [
  {
    icon: ArrowDark,
    fadedIcon: ArrowDark,
    title: "Fastest Loading Speed",
    desc: "You create your website and we take care of the rest. This is the promise of NVMe SSD of super fast enhanced website performance.",
  },
  {
    icon: ManAttending,
    fadedIcon: ManAttending,
    title: "24/7 Dedicated Support",
    desc: "We provide 24/7 LiveChat support for you to help anytime you need. Support is provided through calls, chat, and ticket systems.",
  },
  {
    icon: SuccessDone,
    fadedIcon: SuccessDone,
    title: "99.9% Uptime Guarantee",
    desc: "There is no way a professional website can go down. Stay always online with our web hosting with a 99.9% uptime guarantee.",
  },
];

export default cardData; 