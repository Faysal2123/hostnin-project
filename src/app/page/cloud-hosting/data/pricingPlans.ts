import { PricingPlan } from "../../web-hosting/types/PricingPlan";

const pricingPlans: PricingPlan[] = [
  // Monthly Plans
  {
    title: "Cloud Basic",
    price: 499,
    currency: "৳",
    billingPeriod: "monthly",
    features: [
      { text: "10 GB SSD Storage" },
      { text: "1 Website" },
      { text: "Free SSL" },
      { text: "Unlimited Bandwidth" },
    ],
    icon: "basic",
    description: "Entry-level cloud hosting for small sites.",
  },
  {
    title: "Cloud Pro",
    price: 999,
    currency: "৳",
    billingPeriod: "monthly",
    features: [
      { text: "50 GB SSD Storage" },
      { text: "10 Websites" },
      { text: "Free SSL" },
      { text: "Unlimited Bandwidth" },
    ],
    icon: "pro",
    description: "Advanced cloud hosting for growing businesses.",
    highlight: true,
  },
  // Yearly Plans
  {
    title: "Cloud Basic",
    price: 4990,
    currency: "৳",
    billingPeriod: "yearly",
    features: [
      { text: "10 GB SSD Storage" },
      { text: "1 Website" },
      { text: "Free SSL" },
      { text: "Unlimited Bandwidth" },
    ],
    icon: "basic",
    description: "Entry-level cloud hosting for small sites.",
    savingsText: "Save 2 months with yearly plan!",
  },
  {
    title: "Cloud Pro",
    price: 9990,
    currency: "৳",
    billingPeriod: "yearly",
    features: [
      { text: "50 GB SSD Storage" },
      { text: "10 Websites" },
      { text: "Free SSL" },
      { text: "Unlimited Bandwidth" },
    ],
    icon: "pro",
    description: "Advanced cloud hosting for growing businesses.",
    highlight: true,
    savingsText: "Save 2 months with yearly plan!",
  },
];

export default pricingPlans;
