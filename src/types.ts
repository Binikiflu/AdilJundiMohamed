export type NavPage = 'home' | 'about' | 'products' | 'performance' | 'certificates' | 'financials' | 'contact';

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  itemCount: number;
  highlightItems: string[];
}

export interface ProductSection {
  id: string;
  sectionNumber: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  sectionId: string;
  sectionTitle?: string;
  code: string;
  shortDesc: string;
  specs: Record<string, string>;
  standardCompliance: string[];
  primaryApplications: string[];
  imageUrl: string;
  inStock: boolean;
  leadTimeDays: number;
}

export interface PastPerformanceProject {
  id: string;
  title: string;
  client: string;
  clientCategory: 'Ministry' | 'University' | 'Regional Authority' | 'Bank' | 'Private/Industrial';
  year: string;
  valueEstimateUSD?: string;
  valueETB?: string;
  scopeSummary: string;
  deliveredCategories: string[];
  documentRef?: string;
  status: 'Completed' | 'Delivered' | 'Active Support' | 'Bidding Open' | 'In Progress';
  tenderType?: 'Completed Tender' | 'Active Contract' | 'Upcoming Tender Opportunity' | 'Framework Agreement';
  procurementAgency?: string;
  bidClosingDate?: string;
  keyDeliverables?: string[];
  originCountries?: string[];
  location?: string;
  officialLetterText?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuingAuthority: string;
  yearEth: string;
  yearGregorian: string;
  category: 'Tender Recognition' | 'Quality Standard' | 'Capacity & Training' | 'Excellence Award';
  description: string;
  imageUrl?: string;
}

export interface FinancialMetric {
  label: string;
  value: string;
  subtext: string;
  trend?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  department: string;
  experienceYears: number;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
  notes?: string;
}

export interface CurrencyRate {
  code: 'USD' | 'ETB';
  rateToUSD: number;
  symbol: string;
}
