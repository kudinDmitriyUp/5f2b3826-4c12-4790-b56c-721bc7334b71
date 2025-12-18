"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroShowcaseSplitOverlay from '@/components/sections/hero/HeroShowcaseSplitOverlay';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="large"
      background="aurora"
      cardStyle="frosted-heavy"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="minimal"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "About", id: "about" },
            { name: "Investments", id: "investments" },
            { name: "Team", id: "team" },
            { name: "Insights", id: "insights" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get In Touch",
            href: "contact"
          }}
          brandName="Joule Ventures"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022691049-k1fimqpt.jpg"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroShowcaseSplitOverlay
          title="Capital for founders building the future"
          description="We invest in exceptional founders with transformative ideas. From early stage to growth, we provide strategic capital and operational expertise to help you scale."
          tags={["Early Stage", "Growth", "Technology", "Innovation"]}
          buttons={[
            { text: "Start Conversations", href: "contact" },
            { text: "View Portfolio", href: "investments" }
          ]}
          showcaseImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022693557-7sbjitqg.jpg"
          showcaseImageAlt="Venture capital investment meeting"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022692791-3khft7zl.jpg"
          imageAlt="Tech startup office environment"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="Our Mission"
          title="Fuel the next generation of category-defining companies"
          description="At Joule Ventures, we believe the best companies are built by exceptional founders with bold visions. We partner with these visionaries from inception through scale, providing not just capital but strategic guidance, network access, and operational support to help them achieve their full potential."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022694491-i3mh4wcc.jpg",
            imageAlt: "Investment portfolio dashboard"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022695068-dumz0c9b.jpg",
            imageAlt: "Portfolio management interface"
          }}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="investments" data-section="investments">
        <ProductCardOne
          title="Recent Investments"
          description="A curated selection of exceptional companies we believe will define their categories"
          tag="Portfolio"
          products={[
            {
              id: "1",
              name: "TechCore AI",
              price: "$Series B",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022695863-bo3l62ne.jpg",
              imageAlt: "AI machine learning company"
            },
            {
              id: "2",
              name: "PayFlow Finance",
              price: "$Series A",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022696864-1u1ri90y.jpg",
              imageAlt: "Fintech platform"
            },
            {
              id: "3",
              name: "Enterprise+ Cloud",
              price: "$Series B",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022697621-vw0mxz5b.jpg",
              imageAlt: "SaaS platform"
            },
            {
              id: "4",
              name: "GreenShift Energy",
              price: "$Series A",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022698810-hhbf6bzf.jpg",
              imageAlt: "Climate tech company"
            }
          ]}
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTen
          title="Meet the partners guiding your journey"
          tag="Leadership Team"
          members={[
            {
              id: "1",
              name: "Sarah Chen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022699576-xrxaqzvq.jpg"
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022700292-sl8ckioy.jpg"
            },
            {
              id: "3",
              name: "David Park",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022700975-b9rgqy0f.jpg"
            },
            {
              id: "4",
              name: "Jessica Martinez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022701698-gyha2q2u.jpg"
            }
          ]}
          memberVariant="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",
              name: "Alex Thompson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022702705-0fnobqvm.jpg"
            },
            {
              id: "2",
              name: "Emma Wilson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022703481-5t3vyodf.jpg"
            },
            {
              id: "3",
              name: "James Liu",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022704334-ncaj1h02.jpg"
            },
            {
              id: "4",
              name: "Priya Kapoor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022704967-m42t2p2p.jpg"
            }
          ]}
          cardTitle="Joule Ventures backed 500+ founders building tomorrow's leaders"
          cardTag="Founder Community"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofThree
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022705910-mepu0tlf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022706511-boz1pqo5.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022707770-2372j1lu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022708775-d12e1k4z.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022709499-62mgv73y.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022710266-634ar2g8.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022711178-i0944xxm.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022711828-md21lqpv.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022712621-j16rrq0q.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766022713163-vl6r2z9f.jpg"
          ]}
          title="Trusted by innovative founders"
          description="Our portfolio companies have collectively raised over $2B in follow-on funding and achieved multiple exits"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="insights" data-section="insights">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about partnering with Joule Ventures"
          tag="FAQ"
          faqs={[
            {
              id: "1",
              title: "What stage of companies do you invest in?",
              content: "We invest across seed, Series A, and Series B stages. Our sweet spot is exceptional founding teams with validated product-market fit or strong indicators of product demand."
            },
            {
              id: "2",
              title: "What industries do you focus on?",
              content: "We focus on B2B SaaS, AI/ML, fintech, climate tech, and deep tech. We believe the most impactful companies solve significant problems with technology."
            },
            {
              id: "3",
              title: "What's your typical investment size?",
              content: "Our investment range is $500K to $5M per round. We often lead or co-lead rounds and can participate in follow-on funding as companies scale."
            },
            {
              id: "4",
              title: "How do you support portfolio companies beyond capital?",
              content: "We provide hands-on operational support, strategic guidance, access to our network of 200+ corporate partners and investors, and introductions to customers and talent."
            },
            {
              id: "5",
              title: "What's the typical decision timeline?",
              content: "From first meeting to investment decision, the timeline is typically 4-8 weeks. We move fast for exceptional teams."
            },
            {
              id: "6",
              title: "How do I apply for funding?",
              content: "You can submit your pitch deck and a brief overview through our website, or request an introduction through one of our partners. We review all applications."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to build something extraordinary? We want to hear about your vision. Let's start a conversation."
          animationType="background-highlight"
          buttons={[
            { text: "Schedule a Call", href: "https://calendly.com/jouleventures" },
            { text: "Send Pitch Deck", href: "mailto:invest@jouleventures.com" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseSocial
          columns={[
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Portfolio", href: "investments" },
                { label: "Team", href: "team" },
                { label: "Careers", href: "careers" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Founder Guides", href: "guides" },
                { label: "Blog", href: "blog" },
                { label: "Events", href: "events" },
                { label: "News", href: "news" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "privacy" },
                { label: "Terms of Service", href: "terms" },
                { label: "Disclaimers", href: "disclaimers" }
              ]
            }
          ]}
          description="Joule Ventures partners with exceptional founders to build the next generation of category-defining companies. We provide capital, expertise, and network to fuel transformation."
          socialLinks={[
            { icon: Linkedin, href: "https://linkedin.com/company/jouleventures", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com/jouleventures", ariaLabel: "Twitter" },
            { icon: Mail, href: "mailto:hello@jouleventures.com", ariaLabel: "Email" }
          ]}
          logoText="Joule Ventures"
          copyrightText="© 2025 Joule Ventures. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}