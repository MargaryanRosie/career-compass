export interface Question {
  id: number;
  text: string;
  traits: string[];
  sampleAnswers: { answer: string; traits: string[] }[];
}

export const questionLibrary: Question[] = [
  {
    id: 1,
    text: "Describe a time you overcame a major challenge.",
    traits: ["Resilience", "Problem-Solving"],
    sampleAnswers: [
      { answer: "I reorganized a failing project team and delivered results.", traits: ["Resilience", "Leadership"] },
      { answer: "I solved a critical bug under tight deadlines.", traits: ["Problem-Solving", "Attention to Detail"] },
      { answer: "I adapted quickly when resources were cut.", traits: ["Adaptability", "Initiative"] },
      { answer: "I motivated my team after setbacks.", traits: ["Motivation", "Collaboration"] }
    ]
  },
  {
    id: 2,
    text: "How do you handle conflict within a team?",
    traits: ["Collaboration", "Communication"],
    sampleAnswers: [
      { answer: "I listen to both sides and mediate fairly.", traits: ["Empathy", "Communication"] },
      { answer: "I propose solutions that benefit the group.", traits: ["Collaboration", "Problem-Solving"] },
      { answer: "I encourage open dialogue to resolve issues.", traits: ["Leadership", "Communication"] },
      { answer: "I remain calm and focus on common goals.", traits: ["Emotional Intelligence", "Flexibility"] }
    ]
  },
  {
    id: 3,
    text: "Tell me about a project where you had to innovate.",
    traits: ["Creativity", "Innovation"],
    sampleAnswers: [
      { answer: "I introduced a new workflow that saved time.", traits: ["Innovation", "Initiative"] },
      { answer: "I designed a creative solution to a client problem.", traits: ["Creativity", "Problem-Solving"] },
      { answer: "I applied emerging technology to improve efficiency.", traits: ["Innovation", "Strategic Vision"] },
      { answer: "I encouraged brainstorming sessions to spark ideas.", traits: ["Leadership", "Collaboration"] }
    ]
  },
  {
    id: 4,
    text: "What motivates you to perform at your best?",
    traits: ["Motivation", "Initiative"],
    sampleAnswers: [
      { answer: "Achieving goals drives me forward.", traits: ["Motivation", "Accountability"] },
      { answer: "Helping others succeed inspires me.", traits: ["Empathy", "Collaboration"] },
      { answer: "Learning new skills keeps me engaged.", traits: ["Initiative", "Innovation"] },
      { answer: "Recognition for hard work motivates me.", traits: ["Leadership", "Integrity"] }
    ]
  },
  {
    id: 5,
    text: "How do you prioritize tasks when deadlines compete?",
    traits: ["Time Management", "Decision-Making"],
    sampleAnswers: [
      { answer: "I use a structured schedule to allocate time.", traits: ["Time Management", "Accountability"] },
      { answer: "I focus on tasks with the highest impact.", traits: ["Decision-Making", "Strategic Vision"] },
      { answer: "I delegate responsibilities when needed.", traits: ["Leadership", "Collaboration"] },
      { answer: "I adapt priorities as situations change.", traits: ["Flexibility", "Adaptability"] }
    ]
  },
  {
    id: 6,
    text: "Give an example of when you showed leadership.",
    traits: ["Leadership", "Accountability"],
    sampleAnswers: [
      { answer: "I guided my team through a critical deadline.", traits: ["Leadership", "Accountability"] },
      { answer: "I delegated tasks effectively to maximize efficiency.", traits: ["Decision-Making", "Collaboration"] },
      { answer: "I inspired colleagues by setting a clear vision.", traits: ["Strategic Vision", "Motivation"] },
      { answer: "I resolved conflicts and kept morale high.", traits: ["Emotional Intelligence", "Communication"] }
    ]
  },
  {
    id: 7,
    text: "How do you adapt to unexpected changes?",
    traits: ["Adaptability", "Flexibility"],
    sampleAnswers: [
      { answer: "I quickly restructured my workflow to meet new goals.", traits: ["Adaptability", "Flexibility"] },
      { answer: "I embraced new tools when the old ones failed.", traits: ["Initiative", "Innovation"] },
      { answer: "I stayed calm and focused on priorities.", traits: ["Resilience", "Time Management"] },
      { answer: "I collaborated with others to adjust plans.", traits: ["Collaboration", "Communication"] }
    ]
  },
  {
    id: 8,
    text: "Describe a situation where you failed and what you learned.",
    traits: ["Resilience", "Integrity"],
    sampleAnswers: [
      { answer: "I missed a deadline but improved my planning skills.", traits: ["Accountability", "Time Management"] },
      { answer: "I failed a pitch but learned resilience.", traits: ["Resilience", "Motivation"] },
      { answer: "I made a mistake and strengthened my attention to detail.", traits: ["Integrity", "Attention to Detail"] },
      { answer: "I lost a client but improved communication strategies.", traits: ["Communication", "Problem-Solving"] }
    ]
  },
  {
    id: 9,
    text: "How do you ensure clear communication in a group?",
    traits: ["Communication", "Collaboration"],
    sampleAnswers: [
      { answer: "I summarize discussions and share notes.", traits: ["Communication", "Accountability"] },
      { answer: "I encourage questions to avoid misunderstandings.", traits: ["Empathy", "Collaboration"] },
      { answer: "I use structured tools like project boards.", traits: ["Initiative", "Time Management"] },
      { answer: "I adapt my style to different audiences.", traits: ["Flexibility", "Emotional Intelligence"] }
    ]
  },
  {
    id: 10,
    text: "Tell me about a time you solved a complex problem.",
    traits: ["Problem-Solving", "Critical Thinking"],
    sampleAnswers: [
      { answer: "I broke the issue into smaller tasks.", traits: ["Problem-Solving", "Critical Thinking"] },
      { answer: "I collaborated with experts to find solutions.", traits: ["Collaboration", "Communication"] },
      { answer: "I applied creative thinking to overcome obstacles.", traits: ["Creativity", "Innovation"] },
      { answer: "I analyzed data thoroughly before deciding.", traits: ["Attention to Detail", "Decision-Making"] }
    ]
  },
  {
    id: 11,
    text: "How do you balance creativity with practicality?",
    traits: ["Creativity", "Strategic Vision"],
    sampleAnswers: [
      { answer: "I brainstorm ideas, then test feasibility.", traits: ["Creativity", "Critical Thinking"] },
      { answer: "I consult stakeholders to align vision with reality.", traits: ["Communication", "Strategic Vision"] },
      { answer: "I prioritize innovative ideas that add value.", traits: ["Innovation", "Accountability"] },
      { answer: "I adapt creative solutions to fit constraints.", traits: ["Flexibility", "Problem-Solving"] }
    ]
  },
  {
    id: 12,
    text: "Describe a time you had to make a tough decision.",
    traits: ["Decision-Making", "Accountability"],
    sampleAnswers: [
      { answer: "I chose between two projects based on impact.", traits: ["Decision-Making", "Strategic Vision"] },
      { answer: "I made a call under pressure and took responsibility.", traits: ["Accountability", "Resilience"] },
      { answer: "I consulted my team before finalizing.", traits: ["Collaboration", "Leadership"] },
      { answer: "I weighed risks carefully before acting.", traits: ["Critical Thinking", "Integrity"] }
    ]
  },
  {
    id: 13,
    text: "How do you maintain attention to detail under pressure?",
    traits: ["Attention to Detail", "Resilience"],
    sampleAnswers: [
      { answer: "I double-check work even when rushed.", traits: ["Attention to Detail", "Accountability"] },
      { answer: "I use checklists to avoid errors.", traits: ["Initiative", "Time Management"] },
      { answer: "I stay calm and focused despite stress.", traits: ["Resilience", "Emotional Intelligence"] },
      { answer: "I prioritize accuracy over speed when necessary.", traits: ["Integrity", "Problem-Solving"] }
    ]
  },
  {
    id: 14,
    text: "Tell me about a time you motivated others.",
    traits: ["Motivation", "Leadership"],
    sampleAnswers: [
      { answer: "I recognized team achievements publicly.", traits: ["Motivation", "Leadership"] },
      { answer: "I encouraged colleagues during setbacks.", traits: ["Empathy", "Resilience"] },
      { answer: "I set ambitious goals to inspire performance.", traits: ["Strategic Vision", "Initiative"] },
      { answer: "I created a supportive environment for growth.", traits: ["Collaboration", "Emotional Intelligence"] }
    ]
  },
    {
    id: 15,
    text: "How do you manage multiple responsibilities?",
    traits: ["Time Management", "Initiative"],
    sampleAnswers: [
      { answer: "I create a structured schedule to stay organized.", traits: ["Time Management", "Accountability"] },
      { answer: "I delegate tasks when possible.", traits: ["Leadership", "Collaboration"] },
      { answer: "I prioritize based on urgency and importance.", traits: ["Decision-Making", "Flexibility"] },
      { answer: "I balance responsibilities by staying adaptable.", traits: ["Adaptability", "Resilience"] }
    ]
  },
  {
    id: 16,
    text: "Describe a time you worked across diverse teams.",
    traits: ["Collaboration", "Empathy"],
    sampleAnswers: [
      { answer: "I coordinated between engineers and designers to align goals.", traits: ["Collaboration", "Communication"] },
      { answer: "I adapted my style to different cultural backgrounds.", traits: ["Flexibility", "Empathy"] },
      { answer: "I encouraged inclusivity during group discussions.", traits: ["Emotional Intelligence", "Leadership"] },
      { answer: "I built trust by respecting diverse perspectives.", traits: ["Integrity", "Collaboration"] }
    ]
  },
  {
    id: 17,
    text: "How do you ensure ethical standards in your work?",
    traits: ["Integrity", "Accountability"],
    sampleAnswers: [
      { answer: "I follow compliance guidelines strictly.", traits: ["Integrity", "Accountability"] },
      { answer: "I raise concerns when I see unethical practices.", traits: ["Leadership", "Integrity"] },
      { answer: "I prioritize transparency in all decisions.", traits: ["Communication", "Integrity"] },
      { answer: "I balance business goals with ethical responsibility.", traits: ["Strategic Vision", "Accountability"] }
    ]
  },
  {
    id: 18,
    text: "Tell me about a time you had to persuade others.",
    traits: ["Communication", "Leadership"],
    sampleAnswers: [
      { answer: "I presented data to convince stakeholders.", traits: ["Communication", "Critical Thinking"] },
      { answer: "I built consensus through empathy and listening.", traits: ["Empathy", "Emotional Intelligence"] },
      { answer: "I inspired my team with a clear vision.", traits: ["Leadership", "Motivation"] },
      { answer: "I negotiated successfully by finding common ground.", traits: ["Collaboration", "Problem-Solving"] }
    ]
  },
  {
    id: 19,
    text: "How do you approach long-term planning?",
    traits: ["Strategic Vision", "Critical Thinking"],
    sampleAnswers: [
      { answer: "I set milestones aligned with strategic goals.", traits: ["Strategic Vision", "Accountability"] },
      { answer: "I analyze risks before committing resources.", traits: ["Critical Thinking", "Decision-Making"] },
      { answer: "I involve stakeholders to ensure buy-in.", traits: ["Communication", "Collaboration"] },
      { answer: "I adapt plans as conditions evolve.", traits: ["Flexibility", "Resilience"] }
    ]
  },
  {
    id: 20,
    text: "Describe a time you showed emotional intelligence.",
    traits: ["Emotional Intelligence", "Empathy"],
    sampleAnswers: [
      { answer: "I calmed a colleague during a stressful situation.", traits: ["Emotional Intelligence", "Empathy"] },
      { answer: "I recognized when a teammate needed support.", traits: ["Empathy", "Collaboration"] },
      { answer: "I managed my own emotions under pressure.", traits: ["Resilience", "Integrity"] },
      { answer: "I adapted my communication to suit others’ feelings.", traits: ["Flexibility", "Communication"] }
    ]
  },
  {
    id: 21,
    text: "How do you handle high-pressure deadlines?",
    traits: ["Resilience", "Time Management"],
    sampleAnswers: [
      { answer: "I break tasks into manageable steps.", traits: ["Time Management", "Problem-Solving"] },
      { answer: "I stay calm and focus on priorities.", traits: ["Resilience", "Emotional Intelligence"] },
      { answer: "I delegate effectively to meet deadlines.", traits: ["Leadership", "Collaboration"] },
      { answer: "I adapt quickly when plans change.", traits: ["Flexibility", "Adaptability"] }
    ]
  },
  {
    id: 22,
    text: "Tell me about a time you took initiative.",
    traits: ["Initiative", "Motivation"],
    sampleAnswers: [
      { answer: "I proposed a new project idea that was adopted.", traits: ["Initiative", "Innovation"] },
      { answer: "I volunteered to lead a challenging assignment.", traits: ["Leadership", "Motivation"] },
      { answer: "I solved a problem before it escalated.", traits: ["Problem-Solving", "Accountability"] },
      { answer: "I created a new process to improve efficiency.", traits: ["Creativity", "Strategic Vision"] }
    ]
  },
  {
    id: 23,
    text: "How do you foster innovation in your work?",
    traits: ["Innovation", "Creativity"],
    sampleAnswers: [
      { answer: "I encourage brainstorming sessions regularly.", traits: ["Creativity", "Collaboration"] },
      { answer: "I experiment with new tools and methods.", traits: ["Innovation", "Initiative"] },
      { answer: "I reward creative contributions from my team.", traits: ["Leadership", "Motivation"] },
      { answer: "I adapt ideas from other industries.", traits: ["Flexibility", "Critical Thinking"] }
    ]
  },
  {
    id: 24,
    text: "Describe a time you collaborated successfully.",
    traits: ["Collaboration", "Communication"],
    sampleAnswers: [
      { answer: "I worked with cross-functional teams to deliver a product.", traits: ["Collaboration", "Communication"] },
      { answer: "I shared credit for success with my colleagues.", traits: ["Integrity", "Empathy"] },
      { answer: "I coordinated tasks to avoid duplication.", traits: ["Accountability", "Time Management"] },
      { answer: "I built strong relationships through trust.", traits: ["Emotional Intelligence", "Leadership"] }
    ]
  },
  {
    id: 25,
    text: "How do you handle setbacks?",
    traits: ["Resilience", "Adaptability"],
    sampleAnswers: [
      { answer: "I reflect on lessons learned and move forward.", traits: ["Resilience", "Integrity"] },
      { answer: "I adapt strategies to overcome obstacles.", traits: ["Adaptability", "Problem-Solving"] },
      { answer: "I stay motivated despite challenges.", traits: ["Motivation", "Emotional Intelligence"] },
      { answer: "I seek feedback to improve after failure.", traits: ["Communication", "Accountability"] }
    ]
  },
  {
    id: 26,
    text: "Tell me about a time you balanced multiple stakeholders.",
    traits: ["Communication", "Strategic Vision"],
    sampleAnswers: [
      { answer: "I aligned client and team expectations through clear communication.", traits: ["Communication", "Accountability"] },
      { answer: "I negotiated priorities between management and staff.", traits: ["Leadership", "Empathy"] },
      { answer: "I created a roadmap that satisfied all parties.", traits: ["Strategic Vision", "Collaboration"] },
      { answer: "I adapted plans when stakeholders had conflicting needs.", traits: ["Flexibility", "Problem-Solving"] }
    ]
  },
  {
    id: 27,
    text: "How do you ensure accountability in projects?",
    traits: ["Accountability", "Leadership"],
    sampleAnswers: [
      { answer: "I set clear deliverables and track progress.", traits: ["Accountability", "Time Management"] },
      { answer: "I take responsibility for mistakes and correct them.", traits: ["Integrity", "Resilience"] },
      { answer: "I assign roles with measurable outcomes.", traits: ["Leadership", "Decision-Making"] },
      { answer: "I communicate updates regularly to stakeholders.", traits: ["Communication", "Collaboration"] }
    ]
  },
  {
    id: 28,
    text: "Describe a time you solved a technical problem.",
    traits: ["Problem-Solving", "Critical Thinking"],
    sampleAnswers: [
      { answer: "I debugged a system crash under pressure.", traits: ["Problem-Solving", "Resilience"] },
      { answer: "I researched solutions and implemented a fix.", traits: ["Initiative", "Critical Thinking"] },
      { answer: "I collaborated with experts to resolve the issue.", traits: ["Collaboration", "Communication"] },
      { answer: "I documented the solution for future use.", traits: ["Accountability", "Attention to Detail"] }
    ]
  },
    {
    id: 29,
    text: "How do you manage stress effectively?",
    traits: ["Resilience", "Emotional Intelligence"],
    sampleAnswers: [
      { answer: "I break tasks into smaller steps.", traits: ["Time Management", "Problem-Solving"] },
      { answer: "I practice mindfulness to stay calm.", traits: ["Emotional Intelligence", "Resilience"] },
      { answer: "I seek support from colleagues when needed.", traits: ["Collaboration", "Empathy"] },
      { answer: "I adapt priorities to reduce pressure.", traits: ["Flexibility", "Decision-Making"] }
    ]
  },
  {
    id: 30,
    text: "Tell me about a time you adapted to a new role.",
    traits: ["Adaptability", "Initiative"],
    sampleAnswers: [
      { answer: "I quickly learned new skills to succeed.", traits: ["Initiative", "Adaptability"] },
      { answer: "I asked for mentorship to accelerate growth.", traits: ["Collaboration", "Motivation"] },
      { answer: "I embraced challenges and stayed resilient.", traits: ["Resilience", "Flexibility"] },
      { answer: "I communicated openly to build trust.", traits: ["Communication", "Integrity"] }
    ]
  },
  {
    id: 31,
    text: "How do you ensure continuous learning?",
    traits: ["Motivation", "Innovation"],
    sampleAnswers: [
      { answer: "I take online courses regularly.", traits: ["Initiative", "Motivation"] },
      { answer: "I learn from feedback and apply it.", traits: ["Accountability", "Resilience"] },
      { answer: "I explore new technologies to stay updated.", traits: ["Innovation", "Critical Thinking"] },
      { answer: "I collaborate with peers to share knowledge.", traits: ["Collaboration", "Communication"] }
    ]
  },
  {
    id: 32,
    text: "Describe a time you showed empathy in leadership.",
    traits: ["Empathy", "Emotional Intelligence"],
    sampleAnswers: [
      { answer: "I supported a teammate struggling personally.", traits: ["Empathy", "Emotional Intelligence"] },
      { answer: "I adjusted workloads to reduce stress.", traits: ["Flexibility", "Leadership"] },
      { answer: "I listened actively to team concerns.", traits: ["Communication", "Integrity"] },
      { answer: "I motivated others by understanding their needs.", traits: ["Motivation", "Collaboration"] }
    ]
  },
  {
    id: 33,
    text: "How do you balance short-term vs long-term goals?",
    traits: ["Strategic Vision", "Decision-Making"],
    sampleAnswers: [
      { answer: "I prioritize immediate tasks while planning ahead.", traits: ["Time Management", "Strategic Vision"] },
      { answer: "I allocate resources for both urgent and future needs.", traits: ["Decision-Making", "Accountability"] },
      { answer: "I adapt strategies as conditions change.", traits: ["Flexibility", "Resilience"] },
      { answer: "I communicate trade-offs clearly to stakeholders.", traits: ["Communication", "Integrity"] }
    ]
  },
  {
    id: 34,
    text: "Tell me about a time you improved efficiency.",
    traits: ["Problem-Solving", "Time Management"],
    sampleAnswers: [
      { answer: "I automated repetitive tasks to save time.", traits: ["Innovation", "Initiative"] },
      { answer: "I reorganized workflows to reduce delays.", traits: ["Problem-Solving", "Time Management"] },
      { answer: "I eliminated unnecessary steps in a process.", traits: ["Critical Thinking", "Accountability"] },
      { answer: "I collaborated with others to streamline operations.", traits: ["Collaboration", "Leadership"] }
    ]
  },
  {
    id: 35,
    text: "How do you ensure collaboration across departments?",
    traits: ["Collaboration", "Communication"],
    sampleAnswers: [
      { answer: "I set up regular cross-team meetings.", traits: ["Communication", "Accountability"] },
      { answer: "I built trust by respecting different roles.", traits: ["Empathy", "Integrity"] },
      { answer: "I created shared goals to align efforts.", traits: ["Leadership", "Strategic Vision"] },
      { answer: "I adapted communication styles for diverse groups.", traits: ["Flexibility", "Emotional Intelligence"] }
    ]
  },
  {
    id: 36,
    text: "Describe a time you showed flexibility in work.",
    traits: ["Flexibility", "Adaptability"],
    sampleAnswers: [
      { answer: "I adjusted my schedule to meet urgent needs.", traits: ["Flexibility", "Time Management"] },
      { answer: "I switched roles temporarily to support the team.", traits: ["Adaptability", "Collaboration"] },
      { answer: "I embraced new methods when old ones failed.", traits: ["Innovation", "Initiative"] },
      { answer: "I stayed resilient when plans changed suddenly.", traits: ["Resilience", "Motivation"] }
    ]
  },
  {
    id: 37,
    text: "How do you ensure integrity in decision-making?",
    traits: ["Integrity", "Accountability"],
    sampleAnswers: [
      { answer: "I disclose conflicts of interest openly.", traits: ["Integrity", "Communication"] },
      { answer: "I prioritize fairness over convenience.", traits: ["Integrity", "Leadership"] },
      { answer: "I take responsibility for tough calls.", traits: ["Accountability", "Resilience"] },
      { answer: "I align decisions with ethical standards.", traits: ["Integrity", "Strategic Vision"] }
    ]
  },
  {
    id: 38,
    text: "Tell me about a time you solved a customer issue.",
    traits: ["Empathy", "Communication"],
    sampleAnswers: [
      { answer: "I listened carefully to the customer’s concerns.", traits: ["Empathy", "Communication"] },
      { answer: "I provided a quick solution and follow-up.", traits: ["Problem-Solving", "Accountability"] },
      { answer: "I collaborated with other teams to resolve it.", traits: ["Collaboration", "Leadership"] },
      { answer: "I turned a negative experience into loyalty.", traits: ["Resilience", "Motivation"] }
    ]
  },
  {
    id: 39,
    text: "How do you foster creativity in your team?",
    traits: ["Creativity", "Leadership"],
    sampleAnswers: [
      { answer: "I encourage brainstorming sessions regularly.", traits: ["Creativity", "Collaboration"] },
      { answer: "I reward innovative ideas publicly.", traits: ["Leadership", "Motivation"] },
      { answer: "I provide resources for experimentation.", traits: ["Initiative", "Innovation"] },
      { answer: "I adapt structures to allow freedom.", traits: ["Flexibility", "Strategic Vision"] }
    ]
  },
  {
    id: 40,
    text: "Describe a time you showed resilience in adversity.",
    traits: ["Resilience", "Motivation"],
    sampleAnswers: [
      { answer: "I stayed positive despite repeated setbacks.", traits: ["Resilience", "Motivation"] },
      { answer: "I adapted strategies until success was achieved.", traits: ["Adaptability", "Problem-Solving"] },
      { answer: "I motivated my team during tough times.", traits: ["Leadership", "Empathy"] },
      { answer: "I learned from failure and grew stronger.", traits: ["Integrity", "Resilience"] }
    ]
  }
];

    