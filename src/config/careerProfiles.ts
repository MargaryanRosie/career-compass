export interface CareerProfile {
  career: string;
  weightedTraits: { trait: string; weight: number }[];
}

export const careerProfiles: CareerProfile[] = [
  { career: "Software Engineer", weightedTraits: [
    { trait: "Problem-Solving", weight: 5 },
    { trait: "Attention to Detail", weight: 5 },
    { trait: "Collaboration", weight: 4 }
  ]},
  { career: "Data Scientist", weightedTraits: [
    { trait: "Critical Thinking", weight: 5 },
    { trait: "Creativity", weight: 4 },
    { trait: "Communication", weight: 4 }
  ]},
  { career: "UX Designer", weightedTraits: [
    { trait: "Creativity", weight: 5 },
    { trait: "Empathy", weight: 5 },
    { trait: "Communication", weight: 4 }
  ]},
  { career: "Product Manager", weightedTraits: [
    { trait: "Leadership", weight: 5 },
    { trait: "Strategic Vision", weight: 5 },
    { trait: "Communication", weight: 4 }
  ]},
  { career: "Marketing Specialist", weightedTraits: [
    { trait: "Creativity", weight: 5 },
    { trait: "Adaptability", weight: 4 },
    { trait: "Motivation", weight: 4 }
  ]},
  { career: "Sales Executive", weightedTraits: [
    { trait: "Communication", weight: 5 },
    { trait: "Initiative", weight: 5 },
    { trait: "Resilience", weight: 4 }
  ]},
  { career: "HR Manager", weightedTraits: [
    { trait: "Empathy", weight: 5 },
    { trait: "Integrity", weight: 5 },
    { trait: "Emotional Intelligence", weight: 4 }
  ]},
  { career: "Financial Analyst", weightedTraits: [
    { trait: "Critical Thinking", weight: 5 },
    { trait: "Attention to Detail", weight: 5 },
    { trait: "Accountability", weight: 4 }
  ]},
  { career: "Operations Manager", weightedTraits: [
    { trait: "Time Management", weight: 5 },
    { trait: "Decision-Making", weight: 5 },
    { trait: "Leadership", weight: 4 }
  ]},
  { career: "Business Consultant", weightedTraits: [
    { trait: "Strategic Vision", weight: 5 },
    { trait: "Communication", weight: 4 },
    { trait: "Problem-Solving", weight: 4 }
  ]},
  { career: "Teacher/Educator", weightedTraits: [
    { trait: "Empathy", weight: 5 },
    { trait: "Communication", weight: 5 },
    { trait: "Motivation", weight: 4 }
  ]},
  { career: "Healthcare Professional", weightedTraits: [
    { trait: "Empathy", weight: 5 },
    { trait: "Resilience", weight: 5 },
    { trait: "Integrity", weight: 4 }
  ]},
  { career: "Research Scientist", weightedTraits: [
    { trait: "Critical Thinking", weight: 5 },
    { trait: "Innovation", weight: 5 },
    { trait: "Attention to Detail", weight: 4 }
  ]},
  { career: "Entrepreneur", weightedTraits: [
    { trait: "Initiative", weight: 5 },
    { trait: "Resilience", weight: 5 },
    { trait: "Strategic Vision", weight: 4 }
  ]},
  { career: "Project Manager", weightedTraits: [
    { trait: "Leadership", weight: 5 },
    { trait: "Time Management", weight: 5 },
    { trait: "Accountability", weight: 4 }
  ]},
  { career: "Architect", weightedTraits: [
    { trait: "Creativity", weight: 5 },
    { trait: "Attention to Detail", weight: 5 },
    { trait: "Strategic Vision", weight: 4 }
  ]},
  { career: "Civil Engineer", weightedTraits: [
    { trait: "Problem-Solving", weight: 5 },
    { trait: "Accountability", weight: 5 },
    { trait: "Collaboration", weight: 4 }
  ]},
  { career: "Lawyer", weightedTraits: [
    { trait: "Critical Thinking", weight: 5 },
    { trait: "Communication", weight: 5 },
    { trait: "Integrity", weight: 4 }
  ]},
  { career: "Journalist", weightedTraits: [
    { trait: "Communication", weight: 5 },
    { trait: "Initiative", weight: 4 },
    { trait: "Adaptability", weight: 4 }
  ]},
  { career: "Graphic Designer", weightedTraits: [
    { trait: "Creativity", weight: 5 },
    { trait: "Innovation", weight: 4 },
    { trait: "Attention to Detail", weight: 4 }
  ]},
  { career: "Cybersecurity Analyst", weightedTraits: [
    { trait: "Problem-Solving", weight: 5 },
    { trait: "Integrity", weight: 5 },
    { trait: "Attention to Detail", weight: 4 }
  ]},
  { career: "Supply Chain Manager", weightedTraits: [
    { trait: "Time Management", weight: 5 },
    { trait: "Decision-Making", weight: 4 },
    { trait: "Collaboration", weight: 4 }
  ]},
  { career: "Customer Success Manager", weightedTraits: [
    { trait: "Empathy", weight: 5 },
    { trait: "Communication", weight: 5 },
    { trait: "Resilience", weight: 4 }
  ]},
  { career: "AI/ML Engineer", weightedTraits: [
    { trait: "Innovation", weight: 5 },
    { trait: "Critical Thinking", weight: 5 },
    { trait: "Problem-Solving", weight: 4 }
  ]},
  { career: "Public Relations Officer", weightedTraits: [
    { trait: "Communication", weight: 5 },
    { trait: "Adaptability", weight: 4 },
    { trait: "Emotional Intelligence", weight: 4 }
  ]}
];
