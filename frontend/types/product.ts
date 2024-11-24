interface ProductAnalysis {
  metadata: {
    asin: string;
    availability: string;
    category: string;
    brand: string;
  };
  product_details: {
    title: string;
    price: string;
    attributes: string[];
    materials: string;
    colors: string;
    target_audience: string;
    benefits: string;
    description: string;
  };
  dimensions: {
    height: string;
    width: string;
    length: string;
    unit: string;
  };
  item_weight: {
    value: string;
    unit: string;
  };
  additional_info: {
    warranty: string;
  };
} 