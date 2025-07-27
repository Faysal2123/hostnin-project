import { PricingPlan } from "../../web-hosting/types/PricingPlan";

const pricingPlans: PricingPlan[] = [
  // Monthly Plans
  {
    title: "WP Basic",
    price: 299,
    currency: "৳",
    billingPeriod: "monthly",
    features: [
      { text: "10GB SSD Storage" },
      { text: "1 WordPress Site" },
      { text: "Free SSL" },
      { text: "Automatic Updates" },
    ],
    icon: "basic",
    description: "Perfect for personal WordPress blogs.",
  },
  {
    title: "WP Pro",
    price: 599,
    currency: "৳",
    billingPeriod: "monthly",
    features: [
      { text: "50GB SSD Storage" },
      { text: "10 WordPress Sites" },
      { text: "Free SSL" },
      { text: "Automatic Updates" },
    ],
    icon: "pro",
    description: "For growing WordPress businesses.",
    highlight: true,
  },
  // Yearly Plans
  {
    title: "WP Basic",
    price: 2990,
    currency: "৳",
    billingPeriod: "yearly",
    features: [
      { text: "10GB SSD Storage" },
      { text: "1 WordPress Site" },
      { text: "Free SSL" },
      { text: "Automatic Updates" },
    ],
    icon: "basic",
    description: "Perfect for personal WordPress blogs.",
    savingsText: "Save 2 months with yearly plan!",
  },
  {
    title: "WP Pro",
    price: 5990,
    currency: "৳",
    billingPeriod: "yearly",
    features: [
      { text: "50GB SSD Storage" },
      { text: "10 WordPress Sites" },
      { text: "Free SSL" },
      { text: "Automatic Updates" },
    ],
    icon: "pro",
    description: "For growing WordPress businesses.",
    highlight: true,
    savingsText: "Save 2 months with yearly plan!",
  },
];

export default pricingPlans; 