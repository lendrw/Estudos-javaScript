export interface CalculatorState {
  interestType: 'annual' | 'monthly';
  interestRate: number;
  initialAmount: number;
  savingsPercentage: number;
  phaseYears: [number, number, number, number];
}

export interface PhaseResult {
  phase: string;
  yearsInPhase: number;
  monthlySavings: number;
  totalInvested: number;
  accumulatedAmount: number;
}

export interface CalculationResult {
  phases: PhaseResult[];
  totalInvested: number;
  totalReturns: number;
  finalAmount: number;
  totalYears: number;
}