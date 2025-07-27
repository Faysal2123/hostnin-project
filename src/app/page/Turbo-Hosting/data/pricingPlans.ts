import { PricingPlan } from "../../web-hosting/types/PricingPlan";

const pricingPlans: PricingPlan[] = [
  // Monthly Plans
  {
    title: "Turbo Basic",
    price: 799,
    currency: "৳",
    billingPeriod: "monthly",
    features: [
      { text: "20GB NVMe Storage" },
      { text: "Unlimited Bandwidth" },
      { text: "Free SSL" },
      { text: "LiteSpeed Server" },
    ],
    icon: "basic",
    description: "Fast and affordable turbo hosting for small sites.",
  },
  {
    title: "Turbo Pro",
    price: 1499,
    currency: "৳",
    billingPeriod: "monthly",
    features: [
      { text: "100GB NVMe Storage" },
      { text: "Unlimited Bandwidth" },
      { text: "Free SSL" },
      { text: "LiteSpeed Server" },
    ],
    icon: "pro",
    description: "High-performance turbo hosting for demanding sites.",
    highlight: true,
  },
  // Yearly Plans
  {
    title: "Turbo Basic",
    price: 7990,
    currency: "৳",
    billingPeriod: "yearly",
    features: [
      { text: "20GB NVMe Storage" },
      { text: "Unlimited Bandwidth" },
      { text: "Free SSL" },
      { text: "LiteSpeed Server" },
    ],
    icon: "basic",
    description: "Fast and affordable turbo hosting for small sites.",
    savingsText: "Save 2 months with yearly plan!",
  },
  {
    title: "Turbo Pro",
    price: 14990,
    currency: "৳",
    billingPeriod: "yearly",
    features: [
      { text: "100GB NVMe Storage" },
      { text: "Unlimited Bandwidth" },
      { text: "Free SSL" },
      { text: "LiteSpeed Server" },
    ],
    icon: "pro",
    description: "High-performance turbo hosting for demanding sites.",
    highlight: true,
    savingsText: "Save 2 months with yearly plan!",
  },
];

export default pricingPlans; 