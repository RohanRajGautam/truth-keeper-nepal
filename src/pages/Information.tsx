import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertCircle, Shield, Search, FileCheck, Lock, Users, TrendingUp } from "lucide-react";

const Information = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-navy-dark to-slate-800 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Understanding Corruption & Our Process
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Learn how we verify information, what constitutes corruption, and how you can contribute to transparency.
              </p>
            </div>
          </div>
        </section>

        {/* What is Corruption Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">What is Corruption?</h2>
              </div>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Corruption is the abuse of entrusted power for private gain. In the context of public service, 
                    it represents a betrayal of the public trust and includes various forms of misconduct.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">Types of Corruption We Track:</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-l-primary pl-4">
                      <h4 className="font-semibold text-foreground mb-1">Bribery</h4>
                      <p className="text-sm text-muted-foreground">
                        Offering, giving, receiving, or soliciting something of value to influence the actions of an official.
                      </p>
                    </div>
                    <div className="border-l-4 border-l-primary pl-4">
                      <h4 className="font-semibold text-foreground mb-1">Embezzlement</h4>
                      <p className="text-sm text-muted-foreground">
                        Theft or misappropriation of funds placed in one's trust or belonging to one's employer.
                      </p>
                    </div>
                    <div className="border-l-4 border-l-primary pl-4">
                      <h4 className="font-semibold text-foreground mb-1">Nepotism & Favoritism</h4>
                      <p className="text-sm text-muted-foreground">
                        Favoritism granted to relatives or friends regardless of merit, especially in hiring or contract awards.
                      </p>
                    </div>
                    <div className="border-l-4 border-l-primary pl-4">
                      <h4 className="font-semibold text-foreground mb-1">Conflict of Interest</h4>
                      <p className="text-sm text-muted-foreground">
                        Situations where personal interests improperly influence professional duties and decisions.
                      </p>
                    </div>
                    <div className="border-l-4 border-l-primary pl-4">
                      <h4 className="font-semibold text-foreground mb-1">Abuse of Public Resources</h4>
                      <p className="text-sm text-muted-foreground">
                        Misuse of public funds, assets, or authority for personal benefit or unauthorized purposes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Vetting Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">How We Verify Information</h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We maintain rigorous standards for verification to ensure accuracy and reliability. Every case undergoes 
                a multi-stage review process before publication.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="h-5 w-5 text-primary" />
                      1. Source Collection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We gather information from government records, media reports, NGO investigations, public 
                      documents, and credible whistleblowers.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-primary" />
                      2. Cross-Verification
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Multiple independent sources are required. Claims must be corroborated through official documents, 
                      witness accounts, or verifiable evidence.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      3. Team Review
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Our moderation team reviews each case for accuracy, legal compliance, and ethical standards 
                      before approval.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      4. Continuous Updates
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Cases are monitored for developments. Updates, responses from accused entities, and investigation 
                      outcomes are added as they emerge.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    Verification Standards
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Minimum of two independent, credible sources for each allegation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Official documentation or verifiable evidence whenever possible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Clear distinction between verified facts, allegations, and ongoing investigations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Right to respond granted to all accused entities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Protection of sources and sensitive information</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    How can I report a corruption case?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-3">
                      You can report a case through our "Report Allegation" form. Please provide as much detail and 
                      supporting documentation as possible. You can choose to submit anonymously or with your identity.
                    </p>
                    <p className="text-muted-foreground">
                      All submissions are reviewed by our moderation team before being published. We may contact you 
                      for additional verification if needed.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    What happens after I submit a report?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Your submission enters our verification queue. Our team will review the information, verify through 
                      multiple sources, and determine if it meets our publication standards. This process typically takes 
                      7-14 days depending on case complexity. You'll be notified of the outcome if you provided contact information.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Is my identity protected if I report anonymously?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes. We take contributor privacy seriously. Anonymous submissions do not store any identifying 
                      information, and we have measures to protect all contributors from retaliation. Personal data 
                      like phone numbers and national ID numbers are never published.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Can accused entities respond to allegations?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Absolutely. We believe in fair representation. Accused individuals and organizations can submit 
                      responses through our "Entity Response" portal. These responses are verified for authenticity and 
                      published alongside the allegations to provide complete context.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    What if information on the platform is inaccurate?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Despite our rigorous verification process, errors can occur. If you find inaccurate information, 
                      please contact us immediately through our feedback form with supporting evidence. We will review 
                      and correct any verified inaccuracies promptly. All corrections are documented in the case's 
                      audit trail.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    How is this platform funded?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      The Public Accountability Platform is funded through partnerships with civic organizations and 
                      potential grants from transparency-focused foundations. We maintain editorial independence and 
                      do not accept funding from government entities or organizations that could compromise our integrity.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">
                    Can I use information from this platform?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes! All information on this platform is publicly accessible and can be freely used for research, 
                      journalism, advocacy, or educational purposes. We encourage proper attribution and responsible use 
                      of the data.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Information;
