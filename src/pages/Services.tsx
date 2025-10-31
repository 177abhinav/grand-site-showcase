import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  Cpu, 
  TrendingUp, 
  ShieldCheck, 
  Network, 
  FileSpreadsheet 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="h-12 w-12 text-accent" />,
      title: "Strategic Advisory",
      description: "Comprehensive strategic planning and business transformation consulting to help you navigate complex challenges and achieve sustainable growth.",
      features: [
        "Business strategy development",
        "Operational excellence",
        "Performance benchmarking",
        "Change management"
      ]
    },
    {
      icon: <Cpu className="h-12 w-12 text-accent" />,
      title: "Digital Transformation",
      description: "End-to-end digital solutions that modernize your operations, enhance customer experiences, and drive innovation across your organization.",
      features: [
        "Technology roadmaps",
        "Digital strategy",
        "Cloud migration",
        "Automation solutions"
      ]
    },
    {
      icon: <Network className="h-12 w-12 text-accent" />,
      title: "Supply Chain Excellence",
      description: "Optimize your supply chain operations with proven methodologies, advanced analytics, and industry best practices.",
      features: [
        "Supply chain optimization",
        "Vendor management",
        "Procurement transformation",
        "Logistics efficiency"
      ]
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-accent" />,
      title: "Risk & Compliance",
      description: "Comprehensive risk management and compliance solutions to protect your business and ensure regulatory adherence.",
      features: [
        "Risk assessment",
        "Compliance management",
        "Internal controls",
        "Audit support"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-accent" />,
      title: "Business Analytics",
      description: "Harness the power of data with advanced analytics solutions that provide actionable insights for informed decision-making.",
      features: [
        "Data analytics",
        "Business intelligence",
        "Predictive modeling",
        "Performance metrics"
      ]
    },
    {
      icon: <FileSpreadsheet className="h-12 w-12 text-accent" />,
      title: "Finance Transformation",
      description: "Transform your finance function with innovative solutions that improve efficiency, accuracy, and strategic value.",
      features: [
        "Financial planning",
        "Process optimization",
        "Systems integration",
        "Cost management"
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive solutions designed to address your unique business challenges 
              and drive measurable results across your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business and 
              achieve your strategic objectives.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="font-semibold">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
