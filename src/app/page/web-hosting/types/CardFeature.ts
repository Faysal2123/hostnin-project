import { StaticImageData } from "next/image";

export interface CardFeature {
  icon: StaticImageData;
  fadedIcon?: StaticImageData;
  title: string;
  desc: string;
} 