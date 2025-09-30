// Blue Version Pricing Data
// Represents the current stable pricing structure
export const bluePricingData = {
  version: "Blue-2.1.3",
  environment: "blue",
  title: "Premium Pricing Plans",
  subtitle: "Choose the plan that fits your needs",
  deploymentTimestamp: "2025-09-25T10:00:00Z",
  plans: [
    {
      id: "blue-basic",
      name: "Basic",
      price: 9,
      originalPrice: 12,
      discount: "25% OFF",
      features: [
        "Up to 5 Projects",
        "10GB Storage",
        "Email Support",
        "Basic Analytics",
        "Mobile App Access",
        "24/7 Community Support"
      ],
      popular: false,
      buttonText: "Start Free Trial",
      billingCycle: "month",
      savings: null
    },
    {
      id: "blue-pro",
      name: "Pro",
      price: 29,
      originalPrice: 39,
      discount: "25% OFF",
      features: [
        "Unlimited Projects",
        "100GB Storage",
        "Priority Support",
        "Advanced Analytics",
        "API Access",
        "Custom Integrations",
        "Team Collaboration",
        "Export Options"
      ],
      popular: true,
      buttonText: "Start Free Trial",
      billingCycle: "month",
      savings: "Save $120/year"
    },
    {
      id: "blue-enterprise",
      name: "Enterprise",
      price: 99,
      originalPrice: 129,
      discount: "23% OFF",
      features: [
        "Everything in Pro",
        "Unlimited Storage",
        "Dedicated Support",
        "Custom Branding",
        "Advanced Security",
        "SSO Integration",
        "Admin Dashboard",
        "Custom Development",
        "SLA Guarantee"
      ],
      popular: false,
      buttonText: "Contact Sales",
      billingCycle: "month",
      savings: "Save $360/year"
    }
  ],
  stats: {
    totalUsers: 15420,
    activeProjects: 8340,
    satisfactionRate: 98.5,
    uptime: "99.9%",
    countriesServed: 45,
    avgResponseTime: "1.2s"
  },
  features: {
    security: "Bank-level encryption",
    uptime: "99.9% guaranteed uptime",
    support: "24/7 customer support",
    integration: "50+ integrations available"
  }
};