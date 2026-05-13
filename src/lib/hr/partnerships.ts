export type Provider = "anthropic" | "openai" | "aws" | "microsoft";

export type Partnership = {
  id: string;
  provider: Provider;
  programName: string;
  // What this program does
  what: string;
  // What it gives the client
  clientBenefit: string;
  // What it gives the practice
  practiceBenefit: string;
  // Status of the relationship
  status: "applied" | "in-progress" | "exploring" | "structured";
  // The procurement path it unlocks
  procurementPath: string;
};

export const partnerships: Partnership[] = [
  {
    id: "anthropic-solution-partners",
    provider: "anthropic",
    programName: "Anthropic Solution Partners",
    what: "Anthropic's services-partner program for consultancies and implementation firms helping customers deploy Claude. Healthcare is a stated priority vertical for the program.",
    clientBenefit:
      "Direct Solutions Architect access during implementation. Cleaner contract terms on Claude API. Co-marketing eligibility for case studies. Early access to product previews.",
    practiceBenefit:
      "Pipeline introductions from Anthropic's account teams. Listed in the public partner directory. Marketing co-op funds for joint case studies.",
    status: "in-progress",
    procurementPath:
      "Direct Claude API · AWS Bedrock · Google Vertex AI",
  },
  {
    id: "anthropic-customer-stories",
    provider: "anthropic",
    programName: "Anthropic Customer Stories",
    what: "Anthropic's program to feature customer deployments — published on the Anthropic blog and used in their sales and marketing.",
    clientBenefit:
      "Industry visibility for your AI program. Editorial review by Anthropic's content team. Inclusion in conference talks and sales decks.",
    practiceBenefit:
      "Co-marketing credibility lift. Inclusion in Anthropic's customer-story library. The MNHC 83% adoption story is in flight for this program.",
    status: "in-progress",
    procurementPath: "Pure credentialing — no procurement implications.",
  },
  {
    id: "openai-consulting-partners",
    provider: "openai",
    programName: "OpenAI Consulting Partners",
    what: "OpenAI's services-partner program. Implementation firms helping customers deploy GPT, ChatGPT Enterprise, and the OpenAI API.",
    clientBenefit:
      "ChatGPT Enterprise / Teams deployment guidance. Multi-model optionality (not Claude-only). Enterprise-tier procurement path.",
    practiceBenefit:
      "Customer leads from OpenAI sales reps. Reseller margin on Enterprise licenses at higher tiers.",
    status: "applied",
    procurementPath:
      "Direct OpenAI API · ChatGPT Enterprise · Azure OpenAI Service",
  },
  {
    id: "aws-partner-network",
    provider: "aws",
    programName: "AWS Partner Network — Generative AI Competency",
    what: "AWS's partner program with a specialized GenAI competency. Bedrock hosts Claude + Llama + Titan + Cohere, making AWS a model-agnostic implementation channel.",
    clientBenefit:
      "AWS co-sell motion (powerful for enterprise customers). Marketing Development Funds reimburse co-marketing spend. AWS Marketplace listing for productized services.",
    practiceBenefit:
      "Healthcare Industry Practice team introductions. MDF reimbursement on joint marketing. Customer referrals from AWS account teams.",
    status: "exploring",
    procurementPath:
      "AWS Bedrock — the dominant enterprise procurement path for healthcare and financial services in 2026.",
  },
  {
    id: "microsoft-partner-network",
    provider: "microsoft",
    programName: "Microsoft Partner Network — Azure OpenAI + Copilot",
    what: "Microsoft's partner program. Azure OpenAI is the Microsoft-distributed GPT model family; Copilot is the bundled productivity layer that ~80% of mid-market US businesses are already buying.",
    clientBenefit:
      "Microsoft co-sell with enterprise account teams. Copilot rollout expertise. Azure Marketplace listing for procured services.",
    practiceBenefit:
      "Customer leads from Microsoft sales reps. Copilot license reselling margin at higher tiers. The most predictable enterprise-sales channel in the world.",
    status: "exploring",
    procurementPath:
      "Microsoft Azure OpenAI Service · Microsoft Copilot · Azure Marketplace",
  },
];

export const PROVIDER_LABELS: Record<Provider, string> = {
  anthropic: "Anthropic",
  openai: "OpenAI",
  aws: "Amazon Web Services",
  microsoft: "Microsoft",
};

export const STATUS_LABELS: Record<Partnership["status"], string> = {
  applied: "Application submitted",
  "in-progress": "In progress",
  exploring: "Exploring",
  structured: "Structured partnership",
};
