export interface Feature {
  label: string;
  values: string[];
}

export interface Section {
  features: Feature[];
}

export interface Plan {
  name: string;
  price: number;
  priceUnit: string;
}

export interface ComparisonTableData {
  plans: Plan[];
  sections: Section[];
}
