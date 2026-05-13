export type Faq = {
  id: string;
  category: "scope" | "pricing" | "engagement" | "vendor" | "credentials" | "logistics";
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  // SCOPE
  {
    id: "scope-size",
    category: "scope",
    q: "How small / how large of an organization is in scope?",
    a: "Sweet spot is 10–250 employees. I've worked across that range. Above 250 the engagement tends to want a team of consultants; below 10 the founder is usually doing AI implementation themselves and doesn't need a partner.",
  },
  {
    id: "scope-vertical",
    category: "scope",
    q: "Do you only work with healthcare?",
    a: "No. Healthcare is the lead vertical because of the 83% adoption case study and HIPAA depth. But the framework is portable. Strong fits: venture-backed startups, distributed/international employers, nonprofits, financial services SMBs.",
  },
  {
    id: "scope-geography",
    category: "scope",
    q: "Where do you work geographically?",
    a: "Based in Berkeley. Remote-first by default — the entire practice runs from a laptop. Happy to travel for kickoffs, board presentations, or in-person workshops at premium rates.",
  },
  // PRICING
  {
    id: "pricing-discounts",
    category: "pricing",
    q: "Do you discount for nonprofits or mission-aligned orgs?",
    a: "Yes — typically 15–20% off the catalog price for 501(c)(3)s and FQHCs, on engagements above $25k. The discount is documented as a mission-aligned pricing line on the SOW.",
  },
  {
    id: "pricing-payment",
    category: "pricing",
    q: "What are your payment terms?",
    a: "Fixed-fee engagements: 50% on signing, 50% on delivery. Retainers: monthly invoice, net 15. All invoices via Stripe or ACH.",
  },
  {
    id: "pricing-payment-plans",
    category: "pricing",
    q: "Can we spread the engagement fee across multiple months?",
    a: "Yes, for engagements above $40k. Default split is 50% on signing, then equal monthly installments across the engagement length.",
  },
  // ENGAGEMENT
  {
    id: "engagement-start",
    category: "engagement",
    q: "How quickly can we start?",
    a: "The audit can usually start within 1–2 weeks of contract signing. Implementation engagements have a 2–4 week ramp depending on stakeholder availability and existing diligence work.",
  },
  {
    id: "engagement-coownership",
    category: "engagement",
    q: "Will you work with our existing IT, compliance, and HR teams?",
    a: "Always. The engagement is designed for co-ownership with your in-house teams — they're the people who'll keep the program alive after I leave.",
  },
  {
    id: "engagement-nda",
    category: "engagement",
    q: "Do you sign an NDA?",
    a: "Yes, before the first interview. I sign your NDA; I don't ask you to sign mine.",
  },
  // VENDOR
  {
    id: "vendor-which-llm",
    category: "vendor",
    q: "Will you recommend Claude or GPT?",
    a: "Whichever fits your environment. I have partner-program relationships with Anthropic, OpenAI, AWS (Bedrock — hosts Claude), and Microsoft (Azure OpenAI — hosts GPT). The recommendation depends on your existing cloud stack, your compliance constraints, your use cases, and your procurement preferences.",
  },
  {
    id: "vendor-conflict",
    category: "vendor",
    q: "Don't your partner relationships bias your recommendations?",
    a: "They could, which is why I have structured relationships with all four major providers — not just one. Any commission or referral fee earned on a customer engagement is disclosed at the time the recommendation is made.",
  },
  // CREDENTIALS
  {
    id: "credentials-mnhc",
    category: "credentials",
    q: "Will you connect us with the FQHC from your case study for a reference?",
    a: "Yes, after we've signed a contract and the case study org has cleared the call (they're not on retainer to act as my reference, so I respect their time). Pre-signing, I can share anonymized artifacts and connect you with operator references from other engagements.",
  },
  {
    id: "credentials-insurance",
    category: "credentials",
    q: "Do you carry errors & omissions insurance?",
    a: "Yes — $2M / $4M policy. Certificate available on request.",
  },
  // LOGISTICS
  {
    id: "logistics-mnhc-conflict",
    category: "logistics",
    q: "Are you still employed full-time at the FQHC?",
    a: "Yes. My current role is Director of HR at MNHC, an SF Federally Qualified Health Center. External engagements operate under written approval from the MNHC CEO and legal counsel, with conflict-of-interest disclosure. Engagement availability is currently moonlight-capacity; the practice will move to full-time concurrent with a structured transition.",
  },
  {
    id: "logistics-confidentiality",
    category: "logistics",
    q: "How do you handle our confidential data?",
    a: "Per the engagement NDA, plus standard practice: nothing leaves your environment except the deliverables we agree on. No data in shared drives. No use of your data for any model training. Cyber-liability insurance carried as a backstop.",
  },
];

export const FAQ_CATEGORIES: Record<Faq["category"], string> = {
  scope: "Scope",
  pricing: "Pricing & payment",
  engagement: "Engagement",
  vendor: "Vendors & technology",
  credentials: "Credentials & references",
  logistics: "Logistics",
};

export function faqsByCategory(category: Faq["category"]): Faq[] {
  return faqs.filter((f) => f.category === category);
}
