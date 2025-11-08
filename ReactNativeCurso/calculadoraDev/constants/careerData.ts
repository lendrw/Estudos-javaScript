export interface CareerPhase {
  id: string;
  level: string;
  salary: number;
  color: string;
  description: string;
}

export const careerPhases: CareerPhase[] = [
  {
    id: 'junior',
    level: 'Júnior',
    salary: 4500,
    color: '#007AFF',
    description: 'Início da carreira',
  },
  {
    id: 'pleno',
    level: 'Pleno',
    salary: 8000,
    color: '#5856D6',
    description: 'Desenvolvedor experiente',
  },
  {
    id: 'senior',
    level: 'Sênior',
    salary: 14000,
    color: '#10B981',
    description: 'Liderança técnica',
  },
  {
    id: 'techlead',
    level: 'Tech Lead',
    salary: 17000,
    color: '#F59E0B',
    description: 'Gestão técnica',
  },
];

export const interestOptions = [
  { type: 'annual' as const, label: 'Juros Anuais', defaultRate: 12 },
  { type: 'monthly' as const, label: 'Juros Mensais', defaultRate: 1 },
];

export const defaultSavingsPercentage = 30;