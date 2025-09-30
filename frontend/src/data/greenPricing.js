// Green Version Pricing Data  
// Represents the new experimental pricing structure
export const greenPricingData = {
  version: "Green-2.2.0",
  environment: "green",
  title: "New Enhanced Pricing",
  subtitle: "Updated plans with enhanced value and new features",
  deploymentTimestamp: "2025-09-30T14:30:00Z",
  plans: [
    {
      id: "green-starter",
      name: "Starter",
      price: 12,
      originalPrice: 15,
      discount: "20% OFF",
      features: [
        "Up to 10 Projects",
        "25GB Storage",
        "Priority Email Support",
        "Advanced Analytics",
        "Mobile & Desktop Apps",
        "Live Chat Support",
        "Basic Automation"
      ],
      popular: false,
      buttonText: "Start Free Trial",
      billingCycle: "month",
      savings: null
    },
    {
      id: "green-professional", 
      name: "Professional",
      price: 35,
      originalPrice: 45,
      discount: "22% OFF",
      features: [
        "Unlimited Projects",
        "200GB Storage",
        "24/7 Phone Support",
        "AI-Powered Analytics",
        "Full API Access",
        "Advanced Integrations",
        "Team Collaboration Pro",
        "Custom Workflows",
        "White-label Options",
        "Advanced Automation"
      ],
      popular: true,
      buttonText: "Start Free Trial",
      billingCycle: "month",
      savings: "Save $144/year"
    },
    {
      id: "green-enterprise-plus",
      name: "Enterprise Plus",
      price: 120,
      originalPrice: 149,
      discount: "19% OFF",
      features: [
        "Everything in Professional",
        "Unlimited Storage",
        "Dedicated Account Manager",
        "Custom Branding Suite",
        "Enterprise Security Plus",
        "Advanced SSO & SAML",
        "Executive Dashboard",
        "Custom Development Hours",
        "99.99% SLA Guarantee",
        "Priority Feature Requests",
        "Custom AI Models"
      ],
      popular: false,
      buttonText: "Contact Sales",
      billingCycle: "month",
      savings: "Save $348/year"
    }
  ],
  stats: {
    totalUsers: 18750,
    activeProjects: 12480,
    satisfactionRate: 99.2,
    uptime: "99.99%",
    countriesServed: 52,
    avgResponseTime: "0.8s"
  },
  features: {
    security: "Military-grade encryption",
    uptime: "99.99% guaranteed uptime",
    support: "24/7 premium support with 1hr response",
    integration: "100+ integrations with AI recommendations"
  }
};