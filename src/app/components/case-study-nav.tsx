import { Link } from "react-router";

interface CaseStudyNavItem {
  id: string;
  title: string;
  company: "IBM" | "Sage";
}

const caseStudies: CaseStudyNavItem[] = [
  { id: "ibm-edge-gateway", title: "Edge gateway — from start to finish", company: "IBM" },
  { id: "ibm-gcm", title: "Guardium Cryptography Manager — from chaos to clarity", company: "IBM" },
  { id: "ibm-gdsc", title: "Guardium Data Security Center — Report charts", company: "IBM" },
  { id: "sage-design-system", title: "Design system content — Carbon at Sage", company: "Sage" },
  { id: "sage-crm", title: "CRM Help — product content that drives business value", company: "Sage" },
];

export function CaseStudyNav() {
  return (
    null
  );
}
