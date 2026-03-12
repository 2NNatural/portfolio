import type { ResumeSection } from "@/types";

export const resumeSections: ResumeSection[] = [
  {
    id: "education",
    label: "Education",
    entries: [
      {
        id: "usc",
        title: "Bachelor's, Business",
        organization: "University of Southern California",
        location: "Los Angeles, CA",
        startDate: "Jan 2024",
        endDate: "May 2026",
        highlight: "GPA: 3.34",
        bullets: [],
      },
    ],
  },
  {
    id: "experience",
    label: "Experience",
    entries: [
      {
        id: "passes",
        title: "Creator Acquisitions & Success Intern",
        organization: "Passes",
        location: "Los Angeles, CA",
        startDate: "May 2025",
        endDate: "Aug 2025",
        bullets: [
          "Built and scaled outreach analytics, improving response times by 3000% and meeting bookings by 900%, establishing a new benchmark for engagement within the team.",
          "Orchestrated impactful product demos that fostered strategic creator partnerships, driving alignment with the company's revenue growth initiatives.",
          "Designed comprehensive incentive models and contracts that effectively balanced aggressive growth objectives with sustainable long-term partnerships.",
        ],
      },
      {
        id: "helium",
        title: "Campus Ambassador",
        organization: "Helium Mobile",
        location: "Los Angeles, CA",
        startDate: "Jan 2025",
        endDate: "Jun 2025",
        bullets: [
          "Orchestrated strategic outreach initiatives, successfully negotiating terms with local partners to amplify brand visibility and expand market reach.",
        ],
      },
      {
        id: "quokka",
        title: "Sales and Partnerships Manager",
        organization: "Quokka Brew",
        location: "Remote",
        startDate: "Jun 2023",
        endDate: "Jul 2024",
        highlight: "#1 SDR → Promoted",
        bullets: [
          "Achieved recognition as the #1 Top Performing SDR Intern, leading to a full-time promotion for exceptional contributions to B2B sales efforts.",
          "Established and nurtured long-term relationships with potential clients, significantly enhancing customer retention through tailored support.",
          "Executed end-to-end negotiations with suppliers, optimizing supply chain operations and bolstering overall efficiency.",
        ],
      },
    ],
  },
  {
    id: "leadership",
    label: "Leadership",
    entries: [
      {
        id: "blockchain-usc",
        title: "President",
        organization: "Blockchain at USC",
        location: "Los Angeles, CA",
        startDate: "Sep 2024",
        endDate: "Present",
        highlight: "$10M+ Governance",
        bullets: [
          "Drove the establishment of multiple quantitative departments and strategic alliances, setting new standards in the university blockchain landscape.",
          "Secured over $10 million in governance delegations, enhancing the influence and reach of the blockchain initiative.",
        ],
      },
      {
        id: "phi-delt",
        title: "Philanthropy Coordinator",
        organization: "Phi Delta Theta",
        location: "Los Angeles, CA",
        startDate: "Apr 2024",
        endDate: "Apr 2025",
        highlight: "Iron Phi",
        bullets: [
          "Achieved the prestigious Iron Phi standing by raising over $10,000 for the Live Like Lou Foundation, significantly contributing to ALS awareness and support initiatives.",
        ],
      },
      {
        id: "avenues",
        title: "Finance Associate",
        organization: "USC Avenues Consulting Group",
        location: "Los Angeles, CA",
        startDate: "Sep 2024",
        endDate: "Apr 2025",
        bullets: [],
      },
      {
        id: "eagle-scout",
        title: "Eagle Scout",
        organization: "Boy Scouts of America",
        location: "Santa Clarita, CA",
        startDate: "Sep 2016",
        endDate: "Dec 2021",
        bullets: [],
      },
    ],
  },
];
