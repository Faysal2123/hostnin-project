// app/data/cardData.ts
import { PricingPlan } from "../../web-hosting/types/PricingPlan";

const resellerPricingPlans: PricingPlan[] = [
  {
    title: "Reseller Starter",
    price: 2999,
    currency: "৳",
    billingPeriod: "monthly",
    features: [
      "50 GB NVMe SSD Storage",
      "1000 GB Bandwidth",
      "50 cPanel Account",
      "1 GB RAM Per cPanel",
      "1 Core CPU Per cPanel",
      "20 Entry Process Per cPanel",
      "Whitelabel Reseller",
      "Private Name Servers"
    ],
    buttonText: "Buy Now"
  },
  {
    title: "Reseller Standard",
    price: 4999,
    currency: "৳",
    billingPeriod: "monthly",
    features: [
      "100 GB NVMe Storage",
      "Unlimited Bandwidth",
      "100 cPanel Account",
      "1 GB RAM Per cPanel",
      "1 Core CPU Per cPanel",
      "20 Entry Process Per cPanel",
      "Whitelabel Reseller",
      "Private Name Servers"
    ],
    buttonText: "Buy Now"
  },
  {
    title: "Reseller Ultimate",
    price: 9999,
    currency: "৳",
    billingPeriod: "monthly",
    features: [
      "250 GB SSD Storage",
      "Unlimited Bandwidth",
      "200 cPanel Account",
      "2 GB RAM Per cPanel",
      "2 Core CPU Per cPanel",
      "30 Entry Process Per cPanel",
      "Whitelabel Reseller",
      "Private Name Servers"
    ],
    buttonText: "Buy Now"
  }
];

export default resellerPricingPlans;
