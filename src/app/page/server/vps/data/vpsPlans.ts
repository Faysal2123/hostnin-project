import { VpsPlan } from "../types/VpsPlan";

export const vpsPlans: VpsPlan[] = [
  {
    name: "Starter Plus",
    price: 2999,
    features: [
      {
        icon: "/file.svg",
        title: "Shared vCPU",
        value: "3 vCPU Cores",
      },
      {
        icon: "/window.svg",
        title: "Dedicated RAM",
        value: "4 GB RAM",
      },
      {
        icon: "/next.svg",
        title: "NVMe Storage",
        value: "80 GB NVMe",
      },
      {
        icon: "/globe.svg",
        title: "Port Speed",
        value: "1 GBit",
      },
    ],
  },
  
]; 