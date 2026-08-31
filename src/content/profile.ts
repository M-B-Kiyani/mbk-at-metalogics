export const PLACEHOLDER = "[MBK TO PROVIDE]";

export const identity = {
  name: "Muhammad Bilal Kiyani",
  short: "MBK",
  title: "Technology & AI Systems Lead",
  foundation: "Electrical & Telecommunications Engineer",
  org: "MetaLogics",
  positioning:
    "I work on how technology behaves once it meets real systems, real data, real users and real operational constraints — not on how it demos.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "MetaLogics", href: "#metalogics" },
];

export const capabilities = [
  {
    index: "01",
    title: "AI Systems",
    summary:
      "Designing AI capability into an existing operation: where it belongs, what it is accountable for, and where a deterministic system remains the correct answer.",
    evidence: ["Conversational agents", "Retrieval-grounded answering", "Human handoff design"],
  },
  {
    index: "02",
    title: "Production AI Reliability",
    summary:
      "Keeping deployed AI consistent under real traffic — behaviour reviewed against actual conversations, failures traced to cause rather than patched with prompt edits.",
    evidence: ["Behaviour review", "Root-cause analysis", "Instruction standards"],
  },
  {
    index: "03",
    title: "AI Automation",
    summary:
      "Automating the parts of a workflow that are stable enough to be automated, and protecting the parts that are not. Scope discipline before tooling.",
    evidence: ["Workflow integrity", "Process mapping", "Escalation rules"],
  },
  {
    index: "04",
    title: "Systems Architecture",
    summary:
      "Structuring data, services and integrations so a solution stays operable after launch — under change, load and imperfect inputs.",
    evidence: ["Data models", "Integration boundaries", "Failure modes"],
  },
  {
    index: "05",
    title: "Technology Solutions",
    summary:
      "Translating a business constraint into a technical decision a stakeholder can understand, defend and fund — delivered through the MetaLogics ecosystem.",
    evidence: ["Solution scoping", "Delivery oversight", "Technical review"],
  },
  {
    index: "06",
    title: "Engineering-led Problem Solving",
    summary:
      "Starting from the system, not the stack. The first deliverable is an accurate diagnosis of the real constraint.",
    evidence: ["Constraint analysis", "Measurement", "Trade-off framing"],
  },
];

export const foundationPoints = [
  {
    from: "Engineering discipline",
    to: "Systems thinking",
    body: "An electrical and telecommunications background trains you to see a system before its parts — signals, dependencies, and what happens at the boundaries.",
  },
  {
    from: "Infrastructure",
    to: "Reliability",
    body: "Networks are judged on behaviour under load and degradation, not on ideal conditions. The same standard applies to software and AI in production.",
  },
  {
    from: "Diagnosis",
    to: "Correct solutions",
    body: "Fault-finding is a discipline: isolate, measure, confirm the cause, then intervene. It is the difference between a fix and a coincidence.",
  },
];

export const method = [
  { step: "01", title: "Understand", body: "Map the system as it actually operates, including the workarounds people already rely on." },
  { step: "02", title: "Diagnose", body: "Identify the real constraint and confirm it with evidence before proposing anything." },
  { step: "03", title: "Design", body: "Choose the appropriate solution for the constraint — the smallest system that holds." },
  { step: "04", title: "Build", body: "Implement with clear boundaries, so each part can be reasoned about and replaced." },
  { step: "05", title: "Validate", body: "Test against real inputs and real edge cases, not curated examples." },
  { step: "06", title: "Improve", body: "Review behaviour in production and correct causes, not symptoms." },
];

export const reliabilityPrinciples = [
  "Behaviour is judged on real conversation transcripts, not on scripted test prompts.",
  "Inconsistency is treated as a defect with a cause, not as a property of AI.",
  "Instructions and prompts are held to a written standard so changes are reviewable.",
  "Agent scope, escalation and handoff are defined before launch, not after complaints.",
  "Workflow integrity comes first: an automation that corrupts a process is a regression.",
  "Knowing when not to automate is part of the engineering judgement.",
];

/**
 * Case studies are anonymised by default. Client names, logos and metrics are
 * only published where explicitly approved. Fields left as PLACEHOLDER are
 * awaiting documented evidence — nothing here is invented.
 */
export const caseStudies = [
  {
    sector: "Deployed conversational AI",
    title: "Production reliability review of a live AI assistant",
    problem: PLACEHOLDER,
    diagnosis: PLACEHOLDER,
    decision: PLACEHOLDER,
    solution: PLACEHOLDER,
    outcome: PLACEHOLDER,
  },
  {
    sector: "Workflow automation",
    title: "Scoping automation around an existing operational process",
    problem: PLACEHOLDER,
    diagnosis: PLACEHOLDER,
    decision: PLACEHOLDER,
    solution: PLACEHOLDER,
    outcome: PLACEHOLDER,
  },
  {
    sector: "Systems architecture",
    title: "Restructuring a system for operability after launch",
    problem: PLACEHOLDER,
    diagnosis: PLACEHOLDER,
    decision: PLACEHOLDER,
    solution: PLACEHOLDER,
    outcome: PLACEHOLDER,
  },
];

export const contact = {
  headline: "Have a technology problem worth solving?",
  body: "The most useful first conversation is usually a short one: what the system does today, where it breaks, and what the constraint actually is. If there is a fit, delivery runs through MetaLogics.",
  email: PLACEHOLDER,
};
