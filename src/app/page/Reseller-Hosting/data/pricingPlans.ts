import { PricingPlan } from "../../web-hosting/types/PricingPlan";

const pricingPlans: PricingPlan[] = [
  // Monthly Plans
  {
    title: "Reseller Basic",
    price: 1599,
    currency: "৳",
    billingPeriod: "monthly",
    features: [
      "25GB SSD Storage",
      "30 cPanel Accounts",
      "500GB Bandwidth",
      "Free SSL",
    ],
    icon: "basic",
    description: "Start your reseller business with essential features.",
  },
  {
    title: "Reseller Pro",
    price: 2999,
    currency: "৳",
    billingPeriod: "monthly",
    features: [
      "100GB SSD Storage",
      "100 cPanel Accounts",
      "2TB Bandwidth",
      "Free SSL",
    ],
    icon: "pro",
    description: "Advanced reseller plan for growing businesses.",
    highlight: true,
  },
  // Yearly Plans
  {
    title: "Reseller Basic",
    price: 15990,
    currency: "৳",
    billingPeriod: "yearly",
    features: [
      "25GB SSD Storage",
      "30 cPanel Accounts",
      "500GB Bandwidth",
      "Free SSL",
    ],
    icon: "basic",
    description: "Start your reseller business with essential features.",
    savingsText: "Save 2 months with yearly plan!",
  },
  {
    title: "Reseller Pro",
    price: 29990,
    currency: "৳",
    billingPeriod: "yearly",
    features: [
      "100GB SSD Storage",
      "100 cPanel Accounts",
      "2TB Bandwidth",
      "Free SSL",
    ],
    icon: "pro",
    description: "Advanced reseller plan for growing businesses.",
    highlight: true,
    savingsText: "Save 2 months with yearly plan!",
  },
];

export default pricingPlans; 