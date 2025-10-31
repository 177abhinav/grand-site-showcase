import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Globe, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-10 w-10 text-accent" />,
      title: "Excellence",
      description: "Committed to delivering exceptional quality in everything we do",
    },
    {
      icon: <Award className="h-10 w-10 text-accent" />,
      title: "Integrity",
      description: "Building trust through transparent and ethical business practices",
    },
    {
      icon: <Globe className="h-10 w-10 text-accent" />,
      title: "Global Reach",
      description: "Local expertise with a worldwide perspective and presence",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-accent" />,
      title: "Innovation",
      description: "Pioneering solutions that drive meaningful transformation",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 text-foreground">About The Hackett Group</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A global leader in strategic advisory and technology solutions, empowering 
              organizations to achieve operational excellence and sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded over 25 years ago, The Hackett Group has grown from a pioneering 
                benchmarking firm to a comprehensive strategic advisory and technology solutions 
                provider serving Fortune 1000 companies worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our journey has been defined by innovation, client success, and an unwavering 
                commitment to helping organizations transform their operations and achieve 
                measurable business outcomes.
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                To empower organizations with the insights, strategies, and technologies 
                they need to operate at peak performance and navigate complex business challenges 
                with confidence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We combine deep industry expertise with cutting-edge technology and best 
                practices to deliver solutions that drive real, sustainable value for our clients.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6 text-center">
                    <div className="flex justify-center mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-muted rounded-2xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-foreground text-center">Leadership Excellence</h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Our leadership team brings together decades of experience across consulting, 
              technology, and industry sectors. This diverse expertise enables us to provide 
              comprehensive solutions that address the full spectrum of our clients' business needs, 
              from strategy development to technology implementation.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
