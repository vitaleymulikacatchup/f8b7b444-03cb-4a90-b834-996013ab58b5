"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Activity, Brain, Calendar, CheckCircle, Cloud, Code, MessageCircle, Package, Quote, Settings, Shield, Trophy, Users, Zap } from 'lucide-react';

const assetMap: { id: string; url: string; alt?: string }[] = [{"id":"hero-tech-team","url":"https://images.pexels.com/photos/8866716/pexels-photo-8866716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two call center agents wearing face masks working on computers in a modern office."},{"id":"about-tech-office","url":"https://images.pexels.com/photos/34332317/pexels-photo-34332317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"modern tech office workspace - Photo by Pew Nguyen"},{"id":"feature-cloud-computing","url":"https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a modern server unit in a blue-lit data center environment."},{"id":"feature-cybersecurity","url":"https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up view of a mouse cursor over digital security text on display."},{"id":"feature-ai-machine-learning","url":"https://images.pexels.com/photos/8566445/pexels-photo-8566445.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Small toy robot on a desk beside a laptop, symbolizing technology and innovation."},{"id":"product-erp-software","url":"https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a professional audio and video editing software interface with waveform displays."},{"id":"product-crm-system","url":"https://images.pexels.com/photos/7736029/pexels-photo-7736029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A real estate transaction with a handshake and key exchange, highlighting a home insurance document."},{"id":"product-mobile-app","url":"https://images.pexels.com/photos/7947951/pexels-photo-7947951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Hands holding a smartphone displaying business stages in a cozy indoor setting."},{"id":"team-ceo-portrait","url":"https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."},{"id":"team-cto-portrait","url":"https://images.pexels.com/photos/5716042/pexels-photo-5716042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Businesswoman presenting data on a large digital screen in a modern office setting."},{"id":"team-lead-dev-portrait","url":"https://images.pexels.com/photos/7653460/pexels-photo-7653460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two young professionals in an office setting, collaborating on a project using a laptop."},{"id":"testimonial-client-1","url":"https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businessman in suit shaking hands at office desk, symbolizing successful partnership."},{"id":"testimonial-client-2","url":"https://images.pexels.com/photos/13443801/pexels-photo-13443801.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A cheerful woman receives a package from a courier at her door, showcasing friendly delivery service."},{"id":"testimonial-client-3","url":"https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."},{"id":"testimonial-client-4","url":"https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Young woman with curly hair working on her laptop in a cozy home setting, exuding confidence and focus."},{"id":"faq-support-image","url":"https://images.pexels.com/photos/7689884/pexels-photo-7689884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Friendly woman in a call center environment, wearing a headset and smiling."},{"id":"contact-tech-consultation","url":"https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A doctor consulting with a patient in an office, discussing a medical chart."}];

export default function Home() {
  const resolveAsset = (assetId: string) => {
    const _a = assetMap.find(a => a.id === assetId);
    return {
      url: _a?.url ?? "/public/images/placeholder.webp",
      alt: _a?.alt ?? "Decorative image"
    };
  };

  const heroAsset = resolveAsset("hero-tech-team");
  const productErpAsset = resolveAsset("product-erp-software");
  const productCrmAsset = resolveAsset("product-crm-system");
  const productMobileAsset = resolveAsset("product-mobile-app");
  const teamCeoAsset = resolveAsset("team-ceo-portrait");
  const teamCtoAsset = resolveAsset("team-cto-portrait");
  const teamLeadAsset = resolveAsset("team-lead-dev-portrait");
  const testimonialClient1Asset = resolveAsset("testimonial-client-1");
  const testimonialClient2Asset = resolveAsset("testimonial-client-2");
  const testimonialClient3Asset = resolveAsset("testimonial-client-3");
  const testimonialClient4Asset = resolveAsset("testimonial-client-4");
  const contactAsset = resolveAsset("contact-tech-consultation");

  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="TechPro"
          button={{
            text: "Get Quote",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Transform Your Business with Cutting-Edge IT Solutions"
          description="We deliver innovative technology solutions that drive growth, enhance efficiency, and secure your digital future. From cloud migration to AI implementation, we're your trusted IT partner."
          tag="IT Excellence"
          tagIcon={Zap}
          buttons={[
            {
              text: "Start Your Project",
              href: "contact"
            },
            {
              text: "View Our Services",
              href: "feature"
            }
          ]}
          imageSrc={heroAsset.url}
          imageAlt={heroAsset.alt}
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About TechPro"
          description={[
            "We are a premier IT consulting company with over 15 years of experience helping businesses leverage technology for competitive advantage.",
            "Our team of certified experts specializes in digital transformation, cloud solutions, cybersecurity, and custom software development."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "team"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Our Core Services"
          description="Comprehensive IT solutions designed to accelerate your business growth and digital transformation"
          tag="Services"
          tagIcon={Settings}
          features={[
            {
              title: "Cloud Migration & Management",
              description: "Seamlessly migrate your infrastructure to the cloud with our expert guidance. We ensure minimal downtime and maximum security.",
              icon: Cloud,
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "Cybersecurity Solutions",
              description: "Protect your business with enterprise-grade security measures. From threat detection to compliance management.",
              icon: Shield,
              button: {
                text: "Get Protected",
                href: "contact"
              }
            },
            {
              title: "AI & Machine Learning",
              description: "Harness the power of artificial intelligence to automate processes and gain valuable business insights.",
              icon: Brain,
              button: {
                text: "Explore AI",
                href: "contact"
              }
            },
            {
              title: "Custom Software Development",
              description: "Build tailored applications that perfectly fit your business needs. From web apps to mobile solutions.",
              icon: Code,
              button: {
                text: "Start Building",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Our Software Solutions"
          description="Proven software products trusted by businesses worldwide"
          tag="Products"
          tagIcon={Package}
          products={[
            {
              id: "1",
              brand: "TechPro",
              name: "Enterprise Resource Planning Suite",
              price: "Contact for Pricing",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: productErpAsset.url,
              imageAlt: productErpAsset.alt
            },
            {
              id: "2",
              brand: "TechPro",
              name: "Customer Relationship Management",
              price: "Starting at $99/month",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: productCrmAsset.url,
              imageAlt: productCrmAsset.alt
            },
            {
              id: "3",
              brand: "TechPro",
              name: "Mobile App Development Platform",
              price: "Contact for Pricing",
              rating: 5,
              reviewCount: "950",
              imageSrc: productMobileAsset.url,
              imageAlt: productMobileAsset.alt
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Our Track Record"
          description="Proven results that speak for our expertise and commitment to excellence"
          tag="Achievements"
          tagIcon={Trophy}
          metrics={[
            {
              id: "1",
              value: "500+",
              title: "projects",
              description: "Successfully completed IT projects across various industries",
              icon: CheckCircle
            },
            {
              id: "2",
              value: "99.9%",
              title: "uptime",
              description: "Average system uptime for our managed services clients",
              icon: Activity
            },
            {
              id: "3",
              value: "15+",
              title: "years",
              description: "Years of experience in IT consulting and development",
              icon: Calendar
            },
            {
              id: "4",
              value: "50+",
              title: "experts",
              description: "Certified IT professionals on our dedicated team",
              icon: Users
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Leadership"
          description="The experienced professionals driving our mission to deliver exceptional IT solutions"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Michael Chen",
              role: "CEO & Founder",
              imageSrc: teamCeoAsset.url,
              imageAlt: teamCeoAsset.alt
            },
            {
              id: "2",
              name: "Sarah Rodriguez",
              role: "CTO",
              imageSrc: teamCtoAsset.url,
              imageAlt: teamCtoAsset.alt
            },
            {
              id: "3",
              name: "David Kim",
              role: "Lead Developer",
              imageSrc: teamLeadAsset.url,
              imageAlt: teamLeadAsset.alt
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real feedback from businesses who have transformed their operations with our IT solutions"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Jennifer Walsh",
              role: "CEO",
              company: "InnovateCorp",
              rating: 5,
              imageSrc: testimonialClient1Asset.url,
              imageAlt: testimonialClient1Asset.alt
            },
            {
              id: "2",
              name: "Robert Thompson",
              role: "CTO",
              company: "DataFlow Solutions",
              rating: 5,
              imageSrc: testimonialClient2Asset.url,
              imageAlt: testimonialClient2Asset.alt
            },
            {
              id: "3",
              name: "Lisa Park",
              role: "Operations Manager",
              company: "CloudTech Industries",
              rating: 5,
              imageSrc: testimonialClient3Asset.url,
              imageAlt: testimonialClient3Asset.alt
            },
            {
              id: "4",
              name: "Ahmed Hassan",
              role: "Director of IT",
              company: "SecureNet Systems",
              rating: 5,
              imageSrc: testimonialClient4Asset.url,
              imageAlt: testimonialClient4Asset.alt
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          faqs={[
            {
              id: "1",
              title: "What types of IT services do you offer?",
              content: "We offer comprehensive IT services including cloud migration, cybersecurity, custom software development, AI implementation, system integration, and managed IT support."
            },
            {
              id: "2",
              title: "How long does a typical IT project take?",
              content: "Project timelines vary depending on scope and complexity. Small projects may take 2-4 weeks, while large enterprise implementations can take 3-6 months. We provide detailed timelines during our initial consultation."
            },
            {
              id: "3",
              title: "Do you provide ongoing support after project completion?",
              content: "Yes, we offer comprehensive post-implementation support including maintenance, updates, training, and 24/7 technical assistance to ensure your systems run smoothly."
            },
            {
              id: "4",
              title: "Can you work with our existing IT infrastructure?",
              content: "Absolutely. We specialize in integrating with existing systems and can help modernize your current infrastructure without disrupting your business operations."
            }
          ]}
          sideTitle="Frequently Asked Questions"
          sideDescription="Get answers to common questions about our IT services and solutions"
          buttons={[
            {
              text: "Contact Support",
              href: "contact"
            }
          ]}
          textPosition="left"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={MessageCircle}
          title="Ready to Transform Your Business?"
          description="Contact us today to discuss your IT needs and discover how we can help drive your business forward with innovative technology solutions."
          imageSrc={contactAsset.url}
          imageAlt={contactAsset.alt}
          inputPlaceholder="Enter your business email"
          buttonText="Start Consultation"
          termsText="By submitting, you agree to our Terms of Service and Privacy Policy. We'll contact you within 24 hours."
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Cloud Solutions",
                  href: "feature"
                },
                {
                  label: "Cybersecurity",
                  href: "feature"
                },
                {
                  label: "AI Development",
                  href: "feature"
                },
                {
                  label: "Custom Software",
                  href: "feature"
                }
              ]
            },
            {
              title: "Products",
              items: [
                {
                  label: "ERP Suite",
                  href: "product"
                },
                {
                  label: "CRM System",
                  href: "product"
                },
                {
                  label: "Mobile Platform",
                  href: "product"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Careers",
                  href: "contact"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Help Center",
                  href: "faq"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Documentation",
                  href: "contact"
                }
              ]
            }
          ]}
          copyrightText="© 2025 TechPro. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}