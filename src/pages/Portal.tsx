import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Shield, FileText, Clock } from "lucide-react";

const Portal = () => {
  const handleLoginRedirect = () => {
    window.location.href = "https://at-development-hgv7q18y.launchpad.cfapps.us10.hana.ondemand.com/fab33ba7-83a6-40da-b784-6f901b0d563c.VendorPortalservice.vendorportal-0.0.1/index.html#";
  };

  const features = [
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "Secure Access",
      description: "Enterprise-grade security for your vendor data",
    },
    {
      icon: <FileText className="h-6 w-6 text-accent" />,
      title: "Manage Requests",
      description: "Track and respond to procurement requests",
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Real-Time Updates",
      description: "Instant notifications on order status",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <Card className="border-border shadow-xl animate-fade-in">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold mb-4 text-foreground">
                    Supplier Portal
                  </h1>
                  <p className="text-muted-foreground leading-relaxed">
                    Access your supplier dashboard, manage requests, and update 
                    vendor information securely.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-muted rounded-lg animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex justify-center mb-2">{feature.icon}</div>
                      <h3 className="font-semibold text-sm mb-1 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={handleLoginRedirect}
                  size="lg"
                  className="w-full md:w-auto font-semibold group"
                >
                  Go to Login
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Need help accessing the portal?{" "}
                    <a href="/contact" className="text-primary hover:underline font-medium">
                      Contact Support
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <p>© 2025 The Hackett Group. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portal;
