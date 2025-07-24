export interface PricingPlan {
  title: string;
  price: number;
  currency: string;
  billingPeriod: "monthly" | "yearly";
  features: string[];
  badge?: string;
  highlight?: boolean;
  savingsText?: string;
  buttonText?: string;
  infoText?: string;
  icon?: React.ReactNode;
  description?: string;
} 