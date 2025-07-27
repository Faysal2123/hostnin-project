export interface PricingPlan {
  title: string;
  price: number;
  currency: string;
  billingPeriod: "monthly" | "yearly";
  features: Array<{
    text: string;
    tooltip?: string;
  }>;
  expandedFeatures?: {
    general: Array<{
      text: string;
      included: boolean;
      tooltip?: string;
    }>;
    server: Array<{
      text: string;
      included: boolean;
      tooltip?: string;
    }>;
    security: Array<{
      text: string;
      included: boolean;
      tooltip?: string;
    }>;
    support: Array<{
      text: string;
      included: boolean;
      tooltip?: string;
    }>;
  };
  badge?: string;
  highlight?: boolean;
  savingsText?: string;
  buttonText?: string;
  infoText?: string;
  icon?: React.ReactNode;
  description?: string;
} 