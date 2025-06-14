export interface Card {
  _id: string;
  cardName: string;
  bank: string;
  annualFee: number;
  features: string[];
  categories: string[];
  eligibility: string;
  bestFor: string[];
  rewardsRate: string;
  cardType: string;
  foreignTransactionFee: string;
  fees: {
    joining: number;
    renewal: number;
  };
  summary: string;
}