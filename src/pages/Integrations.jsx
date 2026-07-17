import React, { useMemo, useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Search, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useModalStore } from '../data/useModalStore';
import { toSlug } from './IntegrationDetail';

// Custom CSS styling block for premium floating and hover animations
const CustomStyleBlock = () => (
  <style>{`
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-8px) rotate(0.8deg); }
    }
    @keyframes float-medium {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-6px) rotate(-1deg); }
    }
    @keyframes float-fast {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(1.5deg); }
    }
    .animate-float-slow {
      animation: float-slow 5.5s ease-in-out infinite;
    }
    .animate-float-medium {
      animation: float-medium 4.5s ease-in-out infinite;
    }
    .animate-float-fast {
      animation: float-fast 3.5s ease-in-out infinite;
    }
    .card-hover-effect {
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .card-hover-effect:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.04);
      border-color: rgba(26, 26, 26, 0.12);
    }
    .logo-hover-animation img, .logo-hover-animation svg {
      transition: transform 0.3s ease;
    }
    .card-hover-effect:hover .logo-hover-animation svg {
      transform: scale(1.04);
    }
    .card-hover-effect:hover .read-more-btn {
      background-color: #1a1a1a;
      color: #ffffff;
      border-color: #1a1a1a;
    }
    @keyframes scroll-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes scroll-right {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    .animate-scroll-left {
      display: flex;
      width: max-content;
      animation: scroll-left 28s linear infinite;
    }
    .animate-scroll-right {
      display: flex;
      width: max-content;
      animation: scroll-right 28s linear infinite;
    }
    .font-sono {
      font-family: OTSono, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif !important;
    }
  `}</style>
);

const floatingApps = [
  // 1. Top-Left (cut off on the left edge, bob -> LinkedIn)
  {
    name: 'linkedin',
    className: 'top-[40px] left-[-35px] md:left-[-25px] lg:left-[-15px] xl:left-[-5px]',
    animation: 'animate-float-slow',
    render: () => (
      <div className="w-16 h-16 xl:w-20 xl:h-20 bg-white border border-black/5 rounded-[22px] shadow-sm flex items-center justify-center p-3.5 xl:p-4.5 transition-all hover:scale-105 hover:rotate-3 duration-300 select-none">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
          alt="LinkedIn"
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
    )
  },
  // 2. Mid-Left (Indeed official square app icon)
  {
    name: 'indeed',
    className: 'top-[180px] left-[8%] xl:left-[10%]',
    animation: 'animate-float-fast',
    render: () => (
      <div className="w-16 h-16 xl:w-20 xl:h-20 bg-white border border-black/5 rounded-[22px] shadow-sm flex items-center justify-center p-3.5 xl:p-4.5 overflow-hidden transition-all hover:scale-105 hover:rotate-3 duration-300 select-none">
        <img
          src="https://iaccessibility.net/wp-content/uploads/2018/04/indeed-employer-logo.png"
          alt="Indeed"
          className="w-full h-full object-contain scale-[1.3] pointer-events-none"
        />
      </div>
    )
  },
  // 3. Bottom-Left (orange loop -> Naukri.com official app icon)
  {
    name: 'naukri',
    className: 'top-[340px] left-[3%] xl:left-[4%]',
    animation: 'animate-float-medium',
    render: () => (
      <div className="w-16 h-16 xl:w-20 xl:h-20 bg-white border border-black/5 rounded-[22px] shadow-sm flex items-center justify-center p-3 xl:p-3.5 transition-all hover:scale-105 hover:rotate-3 duration-300 select-none">
        <img
          src="https://pbs.twimg.com/profile_images/1772331192085274624/PlbkwMwX_400x400.png"
          alt="Naukri"
          className="w-full h-full object-contain rounded-[14px] pointer-events-none"
        />
      </div>
    )
  },
  // 4. Top-Center-Left (31 -> Google Calendar official)
  {
    name: '31',
    className: 'top-[12px] left-[17%] xl:left-[19%]',
    animation: 'animate-float-medium',
    render: () => (
      <div className="w-14 h-14 xl:w-18 xl:h-18 bg-white border border-black/5 rounded-[18px] shadow-sm flex items-center justify-center p-3 xl:p-3.5 transition-all hover:scale-105 hover:-rotate-2 duration-300 select-none">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg"
          alt="Google Calendar"
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
    )
  },
  // 5. Mid-Left-Lower (1 -> Google Meet)
  {
    name: 'googlemeet',
    className: 'top-[270px] left-[17%] xl:left-[19%]',
    animation: 'animate-float-slow',
    render: () => (
      <div className="w-16 h-16 xl:w-20 xl:h-20 bg-white border border-black/5 rounded-[22px] shadow-sm flex items-center justify-center p-3.5 xl:p-4.5 transition-all hover:scale-105 hover:rotate-3 duration-300 select-none">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg"
          alt="Google Meet"
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
    )
  },
  // 6. Bottom-Center-Left (P. -> WhatsApp)
  {
    name: 'whatsapp',
    className: 'top-[350px] left-[28%] xl:left-[30%]',
    animation: 'animate-float-medium',
    render: () => (
      <div className="w-16 h-16 xl:w-20 xl:h-20 bg-white border border-black/5 rounded-[22px] shadow-sm flex items-center justify-center p-3 xl:p-3.5 transition-all hover:scale-105 hover:rotate-3 duration-300 select-none">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
    )
  },
  // 7. Top-Right (Slack -> Slack official)
  {
    name: 'slack',
    className: 'top-[30px] right-[5%] xl:right-[6%]',
    animation: 'animate-float-slow',
    render: () => (
      <div className="w-16 h-16 xl:w-20 xl:h-20 bg-white border border-black/5 rounded-[22px] shadow-sm flex items-center justify-center p-3.5 xl:p-4.5 transition-all hover:scale-105 hover:-rotate-3 duration-300 select-none">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
          alt="Slack"
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
    )
  },
  // 8. Mid-Right (analytics -> Gmail)
  {
    name: 'gmail',
    className: 'top-[110px] right-[14%] xl:right-[16%]',
    animation: 'animate-float-medium',
    render: () => (
      <div className="w-16 h-16 xl:w-20 xl:h-20 bg-white border border-black/5 rounded-[22px] shadow-sm flex items-center justify-center p-3.5 xl:p-4.5 transition-all hover:scale-105 hover:rotate-3 duration-300 select-none">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
          alt="Gmail"
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
    )
  },
  // 9. Mid-Right-Lower (r -> Google Alerts)
  {
    name: 'googlealerts',
    className: 'top-[280px] right-[18%] xl:right-[20%]',
    animation: 'animate-float-fast',
    render: () => (
      <div className="w-16 h-16 xl:w-20 xl:h-20 bg-white border border-black/5 rounded-[22px] shadow-sm flex items-center justify-center p-3.5 xl:p-4.5 overflow-hidden transition-all hover:scale-105 hover:-rotate-3 duration-300 select-none">
        <img
          src="https://play-lh.googleusercontent.com/YqM8H7Vip-UqQmsKXeJKxlvw8UcEc9v7oMEoPOe-8VDh1wKUudK6rdQ5TEaGjv8BkWA"
          alt="Google Alerts"
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
    )
  },
  // 10. Bottom-Right (Shine Jobs / Shine.com square app icon card)
  {
    name: 'shine',
    className: 'top-[350px] right-[8%] xl:right-[10%]',
    animation: 'animate-float-slow',
    render: () => (
      <div className="w-16 h-16 xl:w-20 xl:h-20 bg-white border border-black/5 rounded-[22px] shadow-sm flex items-center justify-center p-3.5 xl:p-4.5 overflow-hidden transition-all hover:scale-105 hover:-rotate-3 duration-300 select-none">
        <img
          src="https://images.seeklogo.com/logo-png/42/1/shine-com-logo-png_seeklogo-427506.png"
          alt="Shine Jobs"
          className="w-full h-full object-contain scale-[1.6] -translate-y-1 pointer-events-none"
        />
      </div>
    )
  },
  // 11. Right-Edge (Zoho Corporation official logo)
  {
    name: 'zoho',
    className: 'top-[215px] right-[4%] xl:right-[5%]',
    animation: 'animate-float-medium',
    render: () => (
      <div className="w-16 h-16 xl:w-20 xl:h-20 bg-white border border-black/5 rounded-[22px] shadow-sm flex items-center justify-center p-3.5 xl:p-4.5 overflow-hidden transition-all hover:scale-105 hover:rotate-3 duration-300 select-none">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsy5z_xdAg28SwbkWx2rkcppOSRkBNige6Iw&s"
          alt="Zoho"
          className="w-full h-full object-contain scale-[1.6] pointer-events-none"
        />
      </div>
    )
  }
];

const categories = [
  'All categories',
  'Job Boards',
  'Applicant Tracking Systems',
  'Collaboration & Workspace',
  'Communications & Scheduling'
];

const partners = [
  'All partners',
  'Featured',
  'Standard'
];

const integrationCards = [
  {
    name: 'LinkedIn Talent Solutions',
    logoRender: () => (
      <div className="flex items-center logo-hover-animation select-none">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" className="w-9 h-9 object-contain" alt="LinkedIn" />
      </div>
    ),
    description:
      'Sync KareerGrowth with LinkedIn Talent Solutions to post roles, extract passive candidate profiles, and manage applicants in real time.',
    featured: true,
    size: 'large', // Spans full width
    category: 'Job Boards',
    partnerType: 'Featured'
  },
  {
    name: 'Indeed Sourcing',
    logoRender: () => (
      <div className="flex items-center logo-hover-animation select-none">
        <img src="https://iaccessibility.net/wp-content/uploads/2018/04/indeed-employer-logo.png" className="w-8 h-8 object-contain scale-[1.2] rounded-lg" alt="Indeed" />
      </div>
    ),
    description:
      "Connect KareerGrowth with Indeed, the world's #1 job site, to publish opportunities automatically and process assessment pipelines.",
    size: 'medium', // Spans 50% width
    category: 'Job Boards',
    partnerType: 'Standard'
  },
  {
    name: 'Naukri.com Integration',
    logoRender: () => (
      <div className="flex items-center logo-hover-animation select-none">
        <img src="https://pbs.twimg.com/profile_images/1772331192085274624/PlbkwMwX_400x400.png" className="w-8 h-8 object-contain rounded-lg" alt="Naukri" />
      </div>
    ),
    description:
      "Tap into India's largest employment platform. Automatically screen profiles, match assessments, and pull pre-qualified candidates.",
    size: 'medium', // Spans 50% width
    category: 'Job Boards',
    partnerType: 'Standard'
  },
  {
    name: 'Zoho Recruit',
    logoRender: () => (
      <div className="flex items-center logo-hover-animation select-none">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsy5z_xdAg28SwbkWx2rkcppOSRkBNige6Iw&s" className="w-7 h-7 object-contain scale-[1.3] rounded-md" alt="Zoho" />
      </div>
    ),
    description:
      'Keep database records in perfect sync by automatically migrating candidates and assessment statuses into Zoho Recruit ATS.',
    size: 'small', // Spans 25% width
    category: 'Applicant Tracking Systems',
    partnerType: 'Standard'
  },
  {
    name: 'Slack Alerts',
    logoRender: () => (
      <div className="flex items-center logo-hover-animation select-none">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" className="w-7 h-7 object-contain" alt="Slack" />
      </div>
    ),
    description:
      'Receive instant notification updates in dedicated channels when candidates complete assessments or pass screening tests.',
    size: 'small',
    category: 'Collaboration & Workspace',
    partnerType: 'Standard'
  },
  {
    name: 'WhatsApp Business',
    logoRender: () => (
      <div className="flex items-center logo-hover-animation select-none">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-7 h-7 object-contain" alt="WhatsApp" />
      </div>
    ),
    description:
      'Engage candidates on their phones. Send instant screening invitations, assessment links, and interview feedback.',
    size: 'small',
    category: 'Collaboration & Workspace',
    partnerType: 'Standard'
  },
  {
    name: 'Google Calendar',
    logoRender: () => (
      <div className="flex items-center logo-hover-animation select-none">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" className="w-6 h-6 object-contain" alt="Google Calendar" />
      </div>
    ),
    description:
      'Coordinate interviewer availability instantly. Automatically block schedules and send custom digital invites.',
    size: 'small',
    category: 'Communications & Scheduling',
    partnerType: 'Standard'
  },
  {
    name: 'Google Meet',
    logoRender: () => (
      <div className="flex items-center logo-hover-animation select-none">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg" className="w-6 h-6 object-contain" alt="Google Meet" />
      </div>
    ),
    description:
      'Initiate live video screening and digital interviews directly from KareerGrowth with automatic, custom Meet links.',
    size: 'small',
    category: 'Communications & Scheduling',
    partnerType: 'Standard'
  },
  {
    name: 'Gmail Integration',
    logoRender: () => (
      <div className="flex items-center logo-hover-animation select-none">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" className="w-6 h-6 object-contain" alt="Gmail" />
      </div>
    ),
    description:
      'Manage candidate conversations directly. Set automated templates, follow-ups, and milestone announcements.',
    size: 'small',
    category: 'Communications & Scheduling',
    partnerType: 'Standard'
  },
  {
    name: 'Google Alerts Sourcing',
    logoRender: () => (
      <div className="flex items-center logo-hover-animation select-none">
        <img src="https://play-lh.googleusercontent.com/YqM8H7Vip-UqQmsKXeJKxlvw8UcEc9v7oMEoPOe-8VDh1wKUudK6rdQ5TEaGjv8BkWA" className="w-6 h-6 object-contain scale-[1.2] rounded-md" alt="Google Alerts" />
      </div>
    ),
    description:
      'Track competitors, targeted talent pools, and emerging industry hiring trends dynamically with real-time news feeds.',
    size: 'small',
    category: 'Job Boards',
    partnerType: 'Standard'
  },
  {
    name: 'Shine Jobs Postings',
    logoRender: () => (
      <div className="flex items-center logo-hover-animation select-none">
        <img src="https://images.seeklogo.com/logo-png/42/1/shine-com-logo-png_seeklogo-427506.png" className="w-6 h-6 object-contain scale-[1.3]" alt="Shine Jobs" />
      </div>
    ),
    description:
      'Publish assessment-based roles instantly to Shine.com to source and screen pre-qualified professional profiles.',
    size: 'small',
    category: 'Job Boards',
    partnerType: 'Standard'
  }
];

const Integrations = () => {
  const { openDemoModal } = useModalStore();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [selectedPartner, setSelectedPartner] = useState('All partners');
  
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isPartnerDropdownOpen, setIsPartnerDropdownOpen] = useState(false);

  // Divide floating apps into 2 opposite scrolling rows for mobile responsive infinite carousel
  const row1Double = useMemo(() => {
    const row = floatingApps.filter((_, i) => i % 2 === 0);
    return [...row, ...row, ...row];
  }, []);

  const row2Double = useMemo(() => {
    const row = floatingApps.filter((_, i) => i % 2 !== 0);
    return [...row, ...row, ...row];
  }, []);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleOutsideClick = () => {
      setIsCategoryDropdownOpen(false);
      setIsPartnerDropdownOpen(false);
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  const filteredCards = useMemo(() => {
    return integrationCards.filter((card) => {
      // 1. Search filter
      const searchValue = search.trim().toLowerCase();
      const matchesSearch = !searchValue || 
        card.name.toLowerCase().includes(searchValue) ||
        card.description.toLowerCase().includes(searchValue);

      // 2. Category filter
      const matchesCategory = selectedCategory === 'All categories' || card.category === selectedCategory;

      // 3. Partner filter
      const matchesPartner = selectedPartner === 'All partners' || card.partnerType === selectedPartner;

      return matchesSearch && matchesCategory && matchesPartner;
    });
  }, [search, selectedCategory, selectedPartner]);

  // Distribute cards into their visual sizes
  const largeCards = filteredCards.filter((c) => c.size === 'large');
  const mediumCards = filteredCards.filter((c) => c.size === 'medium');
  const smallCards = filteredCards.filter((c) => c.size === 'small');

  return (
    <main className="min-h-screen bg-white pb-24 font-sono antialiased text-[#1a1a1a]">
      <CustomStyleBlock />

      {/* Hero Header Section - Sits on soft warm cream background matching the navbar */}
      <section className="relative overflow-hidden bg-cream pt-[154px] md:pt-32 lg:pt-36 pb-16 sm:pb-24 lg:pb-28">
        <div className="relative max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 md:min-h-[460px] xl:min-h-[480px] flex flex-col justify-center">
          
          {/* Floating squircle apps - Hidden on mobile, fully animated and pixel-perfect positioned on md+ */}
          {floatingApps.map((app) => (
            <div
              key={`${app.name}-${app.className}`}
              className={`absolute hidden md:block select-none pointer-events-auto z-10 ${app.className} ${app.animation}`}
            >
              {app.render()}
            </div>
          ))}

          {/* Hero text content */}
          <div className="relative z-20 max-w-4xl mx-auto text-center px-4 flex flex-col items-center justify-center">
            {/* Consistent homepage headline font styling */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="title-huge text-perk-black text-center font-medium tracking-[-0.04em] leading-[1.05]"
            >
              AI-Powered Integrations.
              <br />
              Sync & Streamline with AI.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-7 text-[16px] sm:text-[18px] text-[#5f5f59] max-w-[580px] mx-auto leading-[1.4] tracking-tight"
            >
              Browse our marketplace for tools that make travel for work even simpler and smarter—from onboarding to invoicing. Just download, connect, and you're all set.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-9 flex justify-center"
            >
              <button 
                onClick={openDemoModal}
                className="inline-flex items-center gap-1 bg-[#bef33e] text-black px-7 py-3 rounded-full font-bold text-[16px] hover:brightness-95 transition-all border border-black/5 shadow-sm active:scale-95 duration-150 cursor-pointer"
              >
                Book a demo <ChevronRight size={16} className="stroke-[3]" />
              </button>
            </motion.div>
          </div>

          {/* Mobile infinite scrolling logo carousel - Visible only on mobile/tablet screens to cover the empty gap */}
          <div className="w-full md:hidden mt-12 overflow-hidden relative z-20 flex flex-col gap-4">
            
            {/* Absolute gradient overlay fade masks on left and right edges */}
            <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-[#f5f4eb] to-transparent z-30 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#f5f4eb] to-transparent z-30 pointer-events-none" />
            
            {/* Row 1: Scrolling Left */}
            <div className="w-full overflow-hidden py-1">
              <div className="animate-scroll-left flex gap-4">
                {row1Double.map((app, index) => (
                  <div key={`row1-${app.name}-${index}`} className="flex-shrink-0 scale-90">
                    {app.render()}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Row 2: Scrolling Right */}
            <div className="w-full overflow-hidden py-1">
              <div className="animate-scroll-right flex gap-4">
                {row2Double.map((app, index) => (
                  <div key={`row2-${app.name}-${index}`} className="flex-shrink-0 scale-90">
                    {app.render()}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Filters and Search Section - Pure white background */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mt-12 relative z-30">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Left Side: Filter Dropdowns */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
            
            {/* Category Dropdown */}
            <div 
              className="relative w-full sm:w-[280px]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => {
                  setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
                  setIsPartnerDropdownOpen(false);
                }}
                className="w-full h-[52px] rounded-[14px] border border-black/25 bg-white px-4 text-left flex items-center justify-between text-[17px] font-medium tracking-tight text-[#1a1a1a] hover:border-black/50 transition-colors shadow-sm"
              >
                <span>{selectedCategory}</span>
                <ChevronDown size={18} className={`opacity-65 transition-transform duration-200 ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCategoryDropdownOpen && (
                <div className="absolute left-0 right-0 mt-2 bg-white border border-black/10 rounded-[14px] shadow-xl z-50 overflow-hidden py-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsCategoryDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2.5 text-left text-[16px] font-medium hover:bg-black/[0.03] flex items-center justify-between transition-colors text-[#1a1a1a]"
                    >
                      <span>{cat}</span>
                      {selectedCategory === cat && <Check size={16} className="text-black stroke-[3]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Partner Dropdown */}
            <div 
              className="relative w-full sm:w-[220px]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => {
                  setIsPartnerDropdownOpen(!isPartnerDropdownOpen);
                  setIsCategoryDropdownOpen(false);
                }}
                className="w-full h-[52px] rounded-[14px] border border-black/25 bg-white px-4 text-left flex items-center justify-between text-[17px] font-medium tracking-tight text-[#1a1a1a] hover:border-black/50 transition-colors shadow-sm"
              >
                <span>{selectedPartner}</span>
                <ChevronDown size={18} className={`opacity-65 transition-transform duration-200 ${isPartnerDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isPartnerDropdownOpen && (
                <div className="absolute left-0 right-0 mt-2 bg-white border border-black/10 rounded-[14px] shadow-xl z-50 overflow-hidden py-1.5">
                  {partners.map((part) => (
                    <button
                      key={part}
                      onClick={() => {
                        setSelectedPartner(part);
                        setIsPartnerDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2.5 text-left text-[16px] font-medium hover:bg-black/[0.03] flex items-center justify-between transition-colors text-[#1a1a1a]"
                    >
                      <span>{part}</span>
                      {selectedPartner === part && <Check size={16} className="text-black stroke-[3]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Right Side: Search Box */}
          <div className="w-full lg:w-[360px] h-[52px] rounded-[14px] border border-black/25 bg-white px-4 flex items-center gap-3 hover:border-black/50 transition-colors shadow-sm">
            <Search size={18} className="text-black opacity-60" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for your integration"
              className="w-full bg-transparent outline-none text-[17px] text-[#1a1a1a] placeholder:text-black/45 font-medium"
            />
          </div>

        </div>
      </section>

      {/* Integration Cards Section - Sits on pure white page background */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mt-10 space-y-6 relative z-10">
        
        {/* ROW 1: Large Featured Card */}
        {largeCards.map((card) => (
          <motion.article
            key={card.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-[#e4e4dd] bg-white p-8 sm:p-10 lg:p-12 card-hover-effect flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                {card.logoRender()}
              </div>
              <h2 className="mt-6 text-2xl sm:text-[30px] font-sans font-semibold tracking-[-0.03em] leading-none text-black">
                {card.name}
              </h2>
              <p className="mt-4 text-[15px] sm:text-[17px] leading-[1.45] text-[#5f5f5a] max-w-5xl tracking-tight">
                {card.description}
              </p>
            </div>
            <div className="mt-8">
              <button onClick={() => navigate(`/integrations/${toSlug(card.name)}`)} className="read-more-btn inline-flex items-center gap-1.5 rounded-full border border-black/40 px-6 py-2.5 text-[15px] font-bold text-[#1a1a1a] hover:bg-black hover:text-white hover:border-black transition-all shadow-sm">
                Read more <ChevronRight size={14} className="stroke-[2.5]" />
              </button>
            </div>
          </motion.article>
        ))}

        {/* ROW 2: Medium 2-Column Cards */}
        {mediumCards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediumCards.map((card, i) => (
              <motion.article
                key={card.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="rounded-[32px] border border-[#e4e4dd] bg-white p-7 sm:p-9 card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center">
                    {card.logoRender()}
                  </div>
                  <h3 className="mt-5 text-xl sm:text-[24px] font-sans font-semibold tracking-[-0.03em] leading-none text-black">
                    {card.name}
                  </h3>
                  <p className="mt-4 text-[14px] sm:text-[15.5px] leading-[1.45] text-[#5f5f5a] tracking-tight">
                    {card.description}
                  </p>
                </div>
                <div className="mt-8">
                  <button onClick={() => navigate(`/integrations/${toSlug(card.name)}`)} className="read-more-btn inline-flex items-center gap-1.5 rounded-full border border-black/40 px-6 py-2.5 text-[15px] font-bold text-[#1a1a1a] hover:bg-black hover:text-white hover:border-black transition-all shadow-sm">
                    Read more <ChevronRight size={14} className="stroke-[2.5]" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* ROW 3+: Small 4-Column Cards */}
        {smallCards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {smallCards.map((card, i) => (
              <motion.article
                key={card.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="rounded-[28px] border border-[#e4e4dd] bg-white p-6 card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center min-h-[44px]">
                    {card.logoRender()}
                  </div>
                  <h3 className="mt-4 text-lg sm:text-[20px] font-sans font-semibold tracking-[-0.03em] leading-tight text-black">
                    {card.name}
                  </h3>
                  <p className="mt-3 text-[13px] sm:text-[14.5px] leading-[1.4] text-[#676762] tracking-tight">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6">
                  <button onClick={() => navigate(`/integrations/${toSlug(card.name)}`)} className="read-more-btn inline-flex items-center gap-1.5 rounded-full border border-black/40 px-5 py-2 text-[14px] font-bold text-[#1a1a1a] hover:bg-black hover:text-white hover:border-black transition-all shadow-sm">
                    Read more <ChevronRight size={12} className="stroke-[2.5]" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* No Integrations Found State */}
        {filteredCards.length === 0 && (
          <div className="rounded-[24px] border border-[#e4e4dd] bg-white p-12 text-center text-[#676762] text-lg font-bold shadow-sm">
            No integrations found matching your selection. Try clearing your filters!
          </div>
        )}
      </section>
    </main>
  );
};

export default Integrations;
