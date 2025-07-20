"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { WaitlistForm } from "@/components/waitlist-form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Menu, X, Verified, Share2, Briefcase, School2, Twitter, Linkedin, Instagram, Lightbulb, Gauge, FileText, BrainCircuit, UserSearch, Gift, Sparkles, Users, Facebook, Scale, ArrowRight, ShieldCheck, Zap, MessageSquare, CheckCircle, Ticket, BotMessageSquare, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { cn } from '@/lib/utils';
import { LogoIcon } from '@/components/logo-icon';
import { TypingAnimation } from "@/components/magicui/typing-animation";
import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { GlareCard } from "@/components/ui/glare-card";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import LegalProfessionalsCards from "@/components/ui/legal-professionals-cards";
import { motion, useInView, useMotionValue, useMotionTemplate } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const navLinks = [
    { name: "Why Turn2Law", href: "#why-turn2law" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Early Access", href: "#early-access" },
    { name: "For Professionals", href: "#for-professionals" },
    { name: "FAQs", href: "#faq" },
  ];

  return (
    <header className="py-3 px-4 md:px-6 sticky top-0 z-50 bg-black/80 backdrop-blur-md shadow-lg border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <LogoIcon className="w-9 h-9 text-white" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))' }} />
          <Image
            src="/images/turn2law_logo.svg"
            alt="Turn2Law Logo"
            width={145}
            height={24}
            priority
          />
        </div>

        <nav
          className="hidden md:flex items-center gap-2 relative rounded-full bg-gray-900/50 p-1 border border-gray-700"
          onMouseLeave={() => setHoveredTab(null)}
        >
          {navLinks.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              onMouseEnter={() => setHoveredTab(tab.name)}
              className={cn(
                "relative z-10 rounded-full px-4 py-1.5 text-sm font-medium text-gray-300 transition-colors duration-300",
                hoveredTab === tab.name ? "text-white" : "hover:text-white/80"
              )}
            >
              {hoveredTab === tab.name && (
                <motion.div
                  layoutId="navbar-pill"
                  className="absolute inset-0 rounded-full bg-gray-800"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-20">{tab.name}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
            <a href="#waitlist-form" className="hidden md:inline-flex bg-primary text-black font-semibold rounded-full uppercase tracking-wider py-2 px-6 text-xs transition duration-300 hover:bg-accent hover:scale-105 transform shadow-lg hover:shadow-xl mr-2">
              Join Waitlist
            </a>
            <button className="md:hidden text-gray-200 hover:text-primary" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm p-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
                <a href={link.href} key={link.href} onClick={() => setIsOpen(false) } className="text-gray-200 hover:text-primary hover:bg-gray-800 p-3 rounded-lg transition-colors">{link.name}</a>
            ))}
             <a href="#waitlist-form" onClick={() => setIsOpen(false)} className="bg-primary text-primary-foreground font-bold p-3 rounded-lg text-center mt-2">Join Waitlist</a>
          </nav>
        </div>
      )}
    </header>
  );
};


const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    gsap.from(el.querySelectorAll(".hero-content > *"), {
      duration: 0.8, opacity: 0, y: 30, stagger: 0.2, ease: "power2.out", delay: 0.3
    });
    gsap.from(el.querySelector(".hero-visual"), {
      duration: 1, opacity: 0, scale: 0.9, ease: "power2.out", delay: 0.5
    });
  }, []);

  const TrustTag = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
      <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-flex items-center border border-primary/30">
          {icon} {text}
      </span>
  );

  return (
    <section ref={heroRef} className="pt-24 pb-32 md:pt-32 md:pb-40 px-4 md:px-8 bg-black">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-16">
        <div className="text-center md:text-left hero-content">
          <h2 className="text-5xl md:text-6xl font-headline font-black mb-6 leading-tight text-white">
            Legal Help. <span className="animated-gradient-text">Simplified.</span>
          </h2>
          <style jsx>{`
            .animated-gradient-text {
              background: linear-gradient(90deg, #FFFFFF, hsl(var(--primary)), #FFFFFF);
              background-size: 200% 200%;
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
              animation: gradient-animation 5s ease infinite;
            }
            @keyframes gradient-animation {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl mx-auto md:mx-0">
            Turn2Law offers AI-powered legal guidance, connects you with expert attorneys, and simplifies legal document management. Get clear, affordable, and accessible legal solutions.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <TrustTag icon={<Verified className="w-4 h-4 mr-1.5" />} text="Secure Platform" />
            <TrustTag icon={<Sparkles className="w-4 h-4 mr-1.5" />} text="AI-Powered Insights" />
            <TrustTag icon={<Users className="w-4 h-4 mr-1.5" />} text="Vetted Lawyers" />
          </div>
        </div>
        <div className="relative h-80 md:h-[450px] hero-visual shadow-2xl rounded-xl min-h-[400px] overflow-hidden">
          <Image
            src="/images/hero.png"
            alt="Scales of justice and a gavel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};


const MarqueeSection = () => {
  const MarqueeItem = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center flex-shrink-0 w-full py-4 gap-20">
      {children}
    </div>
  );
  
  const LogoItem = ({ 
    src, 
    alt, 
    width = 200, 
    height = 80, 
    className = "" 
  }: { 
    src: string; 
    alt: string; 
    width?: number; 
    height?: number; 
    className?: string; 
  }) => (
    <div className="flex items-center justify-center min-w-[280px]">
      <Image 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        className={`h-20 w-auto object-contain transition-all duration-300 hover:scale-105 ${className}`}
      />
    </div>
  );
  
  const content = (
    <>
      <LogoItem 
        src="/images/Bootstrappers.png" 
        alt="Bootstrappers Research Council"
        width={240} 
        height={96}
      />
      <LogoItem 
        src="/images/MARQUEE 4.png" 
        alt="Partner Logo"
        width={240} 
        height={96}
      />
      <LogoItem 
        src="/images/MARQUEE 5.png" 
        alt="Partner Logo"
        width={240} 
        height={96}
      />
      <LogoItem 
        src="/images/MARQUEE 6.png" 
        alt="Partner Logo"
        width={240} 
        height={96}
      />
    </>
  );

  return (
    <section className="relative w-full overflow-hidden bg-black py-6">
      <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-black via-black/80 to-transparent" />
      <div className="flex animate-marquee">
        <MarqueeItem>{content}</MarqueeItem>
        <MarqueeItem>{content}</MarqueeItem>
      </div>
    </section>
  );
};

const WhyTurn2LawSection = () => {
    const whyRef = useRef(null);
    const isInView = useInView(whyRef, { once: true, amount: 0.3 });

    const features = [
      {
        title: "Understand Your Options",
        description: "Get AI-driven insights into your legal situation and understand the paths available to you, explained in simple language.",
        icon: <BotMessageSquare />,
      },
      {
        title: "Connect with Experts",
        description: "Easily find and connect with qualified, vetted lawyers specializing in your specific needs when you need personalized advice.",
        icon: <UserSearch />,
      },
      {
        title: "Save Time & Money",
        description: "Our efficient platform streamlines processes, reducing costs and helping you resolve legal matters faster.",
        icon: <Gauge />,
      },
    ];

    return (
        <section ref={whyRef} id="why-turn2law" className="py-20 md:py-32 px-4 md:px-8 bg-black">
            <div className="container mx-auto text-center">
                <TypingAnimation
                    parts={[
                        { text: "Why " },
                        { text: "TURN2LAW?", className: "text-primary" }
                    ]}
                    containerClassName="text-4xl md:text-5xl font-headline font-black mb-4 justify-center"
                    cursorClassName="hidden"
                />
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-16">
                    Navigating legal issues can be complex and intimidating. Turn2Law makes it easier by providing clear, accessible, and affordable legal assistance. We combine smart technology with human expertise to guide you every step of the way.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <BackgroundGradient
                            key={index}
                            containerClassName="rounded-3xl"
                            className="p-8 rounded-[24px] bg-card text-left h-full"
                        >
                            <div className="text-primary mb-4">
                                {React.cloneElement(feature.icon, { className: "w-10 h-10" })}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </BackgroundGradient>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HowItWorksSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
      if (isInView) {
        const interval = setInterval(() => {
          setActiveStep((prev) => (prev < 4 ? prev + 1 : 1));
        }, 2000);
        return () => clearInterval(interval);
      }
    }, [isInView]);


    const steps = [
        {
            icon: FileText,
            title: "Describe Your Legal Issue",
            content: "Start by telling us about your situation in simple terms. Our AI will analyze your case and provide preliminary insights and options."
        },
        {
            icon: BrainCircuit,
            title: "Get AI-Powered Guidance",
            content: "Receive an instant, easy-to-understand breakdown of your legal position, potential outcomes, and next steps."
        },
        {
            icon: Users,
            title: "Connect with a Lawyer",
            content: "If you need personalized advice, we'll connect you with a vetted lawyer who specializes in your area of need for a consultation."
        },
        {
            icon: ShieldCheck,
            title: "Resolve Your Matter",
            content: "Move forward with confidence, armed with the information and expert support you need to achieve the best possible outcome."
        }
    ];

    return (
        <section ref={ref} id="how-it-works" className="py-20 md:py-32 px-4 md:px-8 bg-black">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <TypingAnimation
                        parts={[
                            { text: "How It " },
                            { text: "Works", className: "text-primary" }
                        ]}
                        containerClassName="text-4xl md:text-5xl font-headline font-black mb-4 justify-center"
                        cursorClassName="hidden"
                    />
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Four simple steps to clarity and resolution. Our streamlined process is designed to be intuitive and efficient.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <Timeline activeStep={activeStep}>
                        {steps.map((step, index) => (
                            <TimelineItem key={index} step={index + 1}>
                                <TimelineSeparator isLast={index === steps.length - 1}>
                                    <TimelineIndicator>
                                        <step.icon className="w-5 h-5" />
                                    </TimelineIndicator>
                                </TimelineSeparator>
                                <TimelineHeader>
                                    <TimelineTitle>{step.title}</TimelineTitle>
                                    <TimelineContent>{step.content}</TimelineContent>
                                </TimelineHeader>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </div>
            </div>
        </section>
    );
};


const EarlyAccessPerksSection = () => {
  const perks = [
    {
      icon: <Scale className="w-6 h-6 text-primary" />,
      title: "Discounted Services",
      description: "Get up to 50% off on legal consultations and premium features for the first 6 months."
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-primary" />,
      title: "Priority Access",
      description: "Skip the waitlist and be among the first to access new features and AI-powered tools."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Shape the Future",
      description: "Provide feedback and help us build the features that matter most to you."
    }
  ];

  return (
    <section id="early-access" className="py-20 md:py-32 px-4 md:px-8 bg-black">
      <div className="container mx-auto">
        <div className="w-full p-5">
          <div className="w-full bg-gradient-to-br from-gray-900/30 to-black border border-gray-800/50 p-10 text-center rounded-2xl min-h-[400px] flex flex-col items-center justify-center shadow-2xl backdrop-blur-sm">
            <TypingAnimation
                parts={[
                  { text: "Unlock Exclusive " },
                  { text: "Early Access Perks", className: "text-primary" }
                ]}
                containerClassName="text-3xl md:text-4xl font-headline font-black mb-6 justify-center text-white"
                cursorClassName="hidden"
            />
            
            <p className="mx-auto mt-2 text-lg text-gray-300 max-w-2xl mb-12 leading-relaxed">
              Join our waitlist and be among the first to experience Turn2Law. Early members get exclusive benefits that set you up for success.
            </p>

            <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
              {perks.map((perk, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    {perk.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{perk.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const WaitlistSection = () => {
    return (
        <section id="waitlist-form" className="py-20 md:py-32 px-4 md:px-8 bg-black">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                     <TypingAnimation
                        parts={[
                            { text: "Join the " },
                            { text: "Waitlist", className: "text-primary" }
                        ]}
                        containerClassName="text-4xl md:text-5xl font-headline font-black mb-6 justify-center"
                        cursorClassName="hidden"
                    />
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Be the first to know when Turn2Law goes live. Secure your spot to get early access and exclusive launch-day perks.
                    </p>
                </div>
                <WaitlistForm />
            </div>
        </section>
    );
};

const ForProfessionalsSection = () => {
    return (
        <section id="for-professionals" className="py-20 md:py-24 px-4 md:px-8 bg-gray-900/50">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                     <TypingAnimation
                        parts={[
                            { text: "For " },
                            { text: "Legal Professionals", className: "text-primary" }
                        ]}
                        containerClassName="text-3xl md:text-4xl font-headline font-black mb-4 justify-center md:justify-start"
                        cursorClassName="hidden"
                    />
                    <p className="text-lg text-gray-400 mb-8">
                        Are you a lawyer or law student? We're building tools to help you grow your legal practice and career. Join our exclusive partner program for early access to our professional suite.
                    </p>
                </div>
                <div>
                    <LegalProfessionalsCards />
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Our mission at Turn2Law is to democratize access to legal services. We believe everyone deserves clear, reliable, and affordable legal help, and we're leveraging technology to make that a reality.",
      name: "Yash Phoghat",
      designation: "Founder & CEO, Turn2Law",
      src: "/images/Yash.jpeg",
      'data-ai-hint': "man portrait",
      objectPosition: "object-top"
    },
    {
      quote:
        "At Turn2Law, we're building more than just a legal-tech platform, we're building confidence for anyone facing legal uncertainty. Our goal is to make legal support as easy and approachable as ordering a cab or sending a message, and we're committed to designing that experience with empathy, clarity, and impact.",
      name: "Adhyayan Dubey",
      designation: "Co-Founder, Turn2Law",
      src: "/images/Adhyayan.jpg",
      'data-ai-hint': "man portrait",
      objectPosition: "object-center"
    },
    {
      quote:
        "Strategy isn’t just about planning, it’s about anticipating needs, solving real problems, and scaling with purpose. My role is to align our vision with actionable steps that create long-term impact, whether it's for the users seeking justice or the lawyers delivering it. We're not just building a product, we’re shaping the future of legal access in India.",
      name: "Atharv Dwivedi",
      designation: "Chief Strategy Officer, Turn2Law",
      src: "/images/Majnu.jpg",
      'data-ai-hint': "man portrait",
      objectPosition: "object-top"
    },
    {
      quote:
        "Our focus is not just on building a powerful platform, it’s on delivering a seamless experience for every user who reaches out in need. From internal workflows to external support systems, I ensure our operations stay efficient, secure, and deeply human. Because when it comes to legal help, trust and reliability are everything.",
      name: "Aditi Prasanth",
      designation: "Chief Operations Officer, Turn2Law",
      src: "/images/Aditi.jpg",
      'data-ai-hint': "woman portrait",
      objectPosition: "object-center"
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-black">
        <div className="container mx-auto">
            <div className="text-center mb-4">
                <TypingAnimation
                    parts={[
                        { text: "Meet the " },
                        { text: "Team", className: "text-primary" }
                    ]}
                    containerClassName="text-4xl md:text-5xl font-headline font-black mb-4 justify-center"
                    cursorClassName="hidden"
                />
            </div>
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} showNavigation={false} />
        </div>
    </section>
  );
};


const FaqSection = () => {
    const faqs = [
        {
            question: "Is this a law firm?",
            answer: "No, Turn2Law is a technology platform, not a law firm. We provide AI-powered legal information and connect you with independent, licensed attorneys for personalized legal advice. We do not provide legal services ourselves."
        },
        {
            question: "Is this free to use?",
            answer: "Our basic AI guidance and information tools will be available for free. Connecting with a lawyer for a consultation and using our premium features will have transparent, affordable pricing."
        },
        {
            question: "How will I know when it’s live?",
            answer: "By joining our waitlist, you'll be the first to receive an email notification as soon as we launch. You'll also get exclusive early access and special offers."
        },
        {
            question: "I’m a lawyer. Can I join early?",
            answer: "Yes! We are actively looking for legal professionals to join our partner program. Please fill out the waitlist form, select 'Lawyer/Legal Professional' as your role, and we'll be in touch with details about our early access program for professionals."
        }
    ];

    return (
        <section id="faq" className="py-20 md:py-32 px-4 md:px-8 bg-black">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <TypingAnimation
                        parts={[
                            { text: "Frequently Asked " },
                            { text: "Questions", className: "text-primary" }
                        ]}
                        containerClassName="text-4xl md:text-5xl font-headline font-black mb-4 justify-center"
                        cursorClassName="hidden"
                    />
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Get answers to common questions about Turn2Law and how our platform works.
                    </p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index} className="">
                            <AccordionTrigger className="text-lg md:text-xl font-semibold text-left text-white hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-gray-400 pt-2">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

// Custom Animated Input Component for Footer
const AnimatedFooterInput = ({ 
  placeholder, 
  value, 
  onChange, 
  className, 
  ...props 
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [visible, setVisible] = useState(false);
  const radius = 100;
  
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  
  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
            hsl(var(--primary)),
            transparent 80%
          )
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="group/input rounded-lg p-[2px] transition duration-300"
    >
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          "flex h-10 w-full rounded-md border-none bg-gray-800/50 px-4 py-2 text-sm text-gray-300 transition duration-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-800/50 dark:text-gray-300 backdrop-blur-sm",
          className
        )}
        {...props}
      />
    </motion.div>
  );
};

const NewsletterSection = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (email) {
            console.log("Subscribing:", email);
            setEmail("");
        }
    };

    return (
        <section className="bg-black py-16">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Subscribe to our Newsletter
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Get exclusive legal tips, expert insights, and the latest updates delivered straight to your inbox!
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                        <div className="flex-1">
                            <AnimatedFooterInput
                                type="email"
                                placeholder="Enter your Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full"
                            />
                        </div>
                        <button 
                            onClick={handleSubscribe}
                            className="px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 whitespace-nowrap"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "For Clients", href: "#for-clients" },
        { name: "For Lawyers", href: "#for-professionals" },
    ];

    const resources = [
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" },
        { name: "Services", href: "#services" },
        { name: "FAQ", href: "#faq" },
    ];

    const connectLinks = [
        { name: "Instagram", href: "https://www.instagram.com/turn2law/?utm_source=ig_web_button_share_sheet" },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/turn2law" },
        { name: "Twitter", href: "#twitter" },
        { name: "Facebook", href: "#facebook" },
    ];

    return (
        <>
            <NewsletterSection />
            <footer className="bg-primary/5 border-t border-primary/10">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="md:col-span-1">
                            <div className="flex items-center gap-3 mb-4">
                                <LogoIcon className="w-9 h-9 text-white" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))' }} />
                                <Image
                                    src="/images/turn2law_logo.svg"
                                    alt="Turn2Law Logo"
                                    width={145}
                                    height={24}
                                    priority
                                />
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Turn2Law is here to make legal help simple and caring. Stay connected with us!
                            </p>
                            
                            {/* Social Media Icons */}
                            <div className="flex space-x-4">
                                <a href="#twitter" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                                    <Twitter className="w-4 h-4 text-gray-400 hover:text-primary" />
                                </a>
                                <a href="https://www.linkedin.com/company/turn2law" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                                    <Linkedin className="w-4 h-4 text-gray-400 hover:text-primary" />
                                </a>
                                <a href="#facebook" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                                    <Facebook className="w-4 h-4 text-gray-400 hover:text-primary" />
                                </a>
                                <a href="https://www.instagram.com/turn2law/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                                    <Instagram className="w-4 h-4 text-gray-400 hover:text-primary" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <a 
                                            href={link.href} 
                                            className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                {resources.map((link) => (
                                    <li key={link.href}>
                                        <a 
                                            href={link.href} 
                                            className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                            <div className="space-y-3">
                                <div className="flex items-center text-gray-400 text-sm">
                                    <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                                    <span>+91 99060 102527</span>
                                </div>
                                <div className="flex items-center text-gray-400 text-sm">
                                    <Mail className="w-4 h-4 mr-2 text-primary" />
                                    <span>turntwolaw@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-800 mt-8 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                            <p>&copy; {new Date().getFullYear()} EFFIVIA TURN2LAW LEGAL PRIVATE LIMITED. All rights reserved</p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
                                <a href="#terms" className="hover:text-primary transition-colors">Terms and Conditions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};


export default function Home() {
  return (
    <div className="antialiased bg-black">
      <Header />
      <main>
        <HeroSection />
        <MarqueeSection />
        <WhyTurn2LawSection />
        <HowItWorksSection />
        <EarlyAccessPerksSection />
        <TestimonialsSection />
        <WaitlistSection />
        <ForProfessionalsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
