import { CalculatorState, CalculationResult, PhaseResult } from '../types/calculator';
import { careerPhases } from '../constants/careerData';

export const calculateCompoundInterest = (
  principal: number,
  monthlyContribution: number,
  annualRate: number,
  months: number,
  isMonthlyRate: boolean = false
): number => {
  const monthlyRate = isMonthlyRate ? annualRate / 100 : annualRate / 100 / 12;
  
  // Fórmula de juros compostos com aportes mensais
  // FV = PV * (1 + r)^n + PMT * [((1 + r)^n - 1) / r]
  const futureValuePrincipal = principal * Math.pow(1 + monthlyRate, months);
  const futureValueContributions = monthlyContribution * 
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  
  return futureValuePrincipal + futureValueContributions;
};

export const calculateRetirement = (state: CalculatorState): CalculationResult => {
  const { interestRate, interestType, initialAmount, savingsPercentage, phaseYears } = state;
  const isMonthlyRate = interestType === 'monthly';
  
  let currentAmount = initialAmount;
  let totalInvested = initialAmount;
  const phases: PhaseResult[] = [];
  
  careerPhases.forEach((phase, index) => {
    const yearsInPhase = phaseYears[index];
    const monthsInPhase = yearsInPhase * 12;
    const monthlySalary = phase.salary;
    const monthlySavings = (monthlySalary * savingsPercentage) / 100;
    const totalInvestedInPhase = monthlySavings * monthsInPhase;
    
    // Calcula o montante acumulado ao final desta fase
    const accumulatedAmount = calculateCompoundInterest(
      currentAmount,
      monthlySavings,
      interestRate,
      monthsInPhase,
      isMonthlyRate
    );
    
    phases.push({
      phase: phase.level,
      yearsInPhase,
      monthlySavings,
      totalInvested: totalInvestedInPhase,
      accumulatedAmount,
    });
    
    // Atualiza valores para próxima fase
    currentAmount = accumulatedAmount;
    totalInvested += totalInvestedInPhase;
  });
  
  const finalAmount = phases[phases.length - 1]?.accumulatedAmount || 0;
  const totalReturns = finalAmount - totalInvested;
  const totalYears = phaseYears.reduce((sum, years) => sum + years, 0);
  
  return {
    phases,
    totalInvested,
    totalReturns,
    finalAmount,
    totalYears,
  };
};