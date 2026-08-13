export interface ProductDerivative {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: 'Alimenticio' | 'Bio-material' | 'Cosmético / Cuidado';
  iconName: string;
  highlights: string[];
  usage: string;
  circularPart: 'Pulpa' | 'Agua' | 'Cáscara' | 'Fibra (Capacho)';
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface CircularStep {
  stepNumber: number;
  part: string;
  title: string;
  description: string;
  derivedProducts: string[];
  iconName: string;
  color: string;
}

export interface TargetPersona {
  id: string;
  role: string;
  tagline: string;
  description: string;
  keyNeeds: string[];
  quote: string;
  avatarSeed: string;
  matchScore: string;
}

export interface PacificProducerZone {
  id: string;
  region: string;
  department: string;
  impactFocus: string;
  description: string;
  communityPartners: string;
}

export interface InterestValidationVote {
  id: string;
  actionType: 'interest' | 'more_info' | 'intent_to_buy';
  presentationPreference?: string;
  consumptionFrequency?: string;
  valuedAspect?: string;
  userRole?: string;
  comments?: string;
  timestamp: string;
}

export interface ValuePropPillar {
  title: string;
  description: string;
  iconName: string;
  benefit: string;
}
