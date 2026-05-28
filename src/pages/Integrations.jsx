import React, { useMemo, useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Search, Check } from 'lucide-react';

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
  'Finance & Spend',
  'Workspaces',
  'HR & Payroll',
  'Travel & Transport'
];

const partners = [
  'All partners',
  'Featured',
  'Standard'
];

const integrationCards = [
  {
    name: 'Ramp',
    logoRender: () => (
      <div className="flex items-center gap-2 logo-hover-animation">
        <span className="text-[32px] sm:text-[38px] font-black tracking-[-0.04em] text-black select-none lowercase leading-none">ramp</span>
        <svg viewBox="0 0 100 100" className="w-7 h-7 sm:w-8 sm:h-8 fill-black">
          <path d="M25,20 C45,20 65,30 75,55 C78,63 74,70 65,70 C55,70 45,55 35,40 C28,30 22,25 25,20 Z" />
        </svg>
      </div>
    ),
    description:
      'Complement Perk with Ramp and get an all-in-one travel, corporate card, and expense management solution for free.',
    featured: true,
    size: 'large', // Spans full width
    category: 'Finance & Spend',
    partnerType: 'Featured'
  },
  {
    name: 'BILL Spend & Expense',
    logoRender: () => (
      <div className="flex items-center logo-hover-animation">
        <span className="text-[#f05a28] text-[28px] sm:text-[34px] font-black tracking-[-0.05em] select-none lowercase leading-none">bill</span>
      </div>
    ),
    description:
      'With Bill Spend & Expense, powered by Perk, SMBs in the US will enjoy a centralized portal where they can easily book, manage, and report on travel.',
    size: 'medium', // Spans 50% width
    category: 'Finance & Spend',
    partnerType: 'Standard'
  },
  {
    name: 'Pleo',
    logoRender: () => (
      <div className="flex items-center logo-hover-animation">
        <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center p-1.5 shadow-sm">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
            <path d="M20,20 L80,20 L80,45 L45,45 L45,80 L20,80 Z" />
          </svg>
        </div>
      </div>
    ),
    description:
      'Pleo now seamlessly integrates with Perk, to give you a state-of-the-art business spending solution.',
    size: 'medium', // Spans 50% width
    category: 'Finance & Spend',
    partnerType: 'Standard'
  },
  {
    name: 'Bolt Business',
    logoRender: () => (
      <div className="flex items-center logo-hover-animation">
        <div className="w-9 h-9 bg-[#00cd73] rounded-lg flex items-center justify-center p-1.5 shadow-sm">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
            <polygon points="60,10 20,55 50,55 40,90 80,45 50,45" />
          </svg>
        </div>
      </div>
    ),
    description:
      'Pair your Perk trips with Bolt Business for seamless, reliable ground transport wherever your team travels.',
    size: 'small', // Spans 25% width
    category: 'Travel & Transport',
    partnerType: 'Standard'
  },
  {
    name: 'WeWork',
    logoRender: () => (
      <div className="w-9 h-9 rounded-full border-[2px] border-black flex items-center justify-center p-1 font-black text-black text-[12px] logo-hover-animation">
        we
      </div>
    ),
    description:
      'WeWork delivers inspiring, flexible workspaces around the world so Perk travellers can work, meet and focus anywhere.',
    size: 'small',
    category: 'Workspaces',
    partnerType: 'Standard'
  },
  {
    name: 'HiBob',
    logoRender: () => (
      <div className="flex items-center gap-0.5 select-none leading-none logo-hover-animation">
        <span className="text-[#e92e68] text-[18px] font-extrabold">Hi</span>
        <span className="text-black text-[18px] font-black tracking-[-0.02em]">Bob</span>
      </div>
    ),
    description:
      "HiBob's intuitive HR platform now seamlessly integrates with the business travel management platform Perk.",
    size: 'small',
    category: 'HR & Payroll',
    partnerType: 'Standard'
  },
  {
    name: 'Deel',
    logoRender: () => (
      <div className="bg-black text-white px-3 py-1 rounded font-serif italic font-extrabold text-[13px] select-none shadow-sm logo-hover-animation">
        deel.
      </div>
    ),
    description:
      'Deel simplifies global hiring, payroll and compliance, helping distributed teams travel and work confidently with Perk.',
    size: 'small',
    category: 'HR & Payroll',
    partnerType: 'Standard'
  },
  {
    name: 'GetYourGuide',
    logoRender: () => (
      <div className="w-9 h-9 bg-[#ff551f] rounded-lg flex flex-col items-center justify-center p-0.5 text-center leading-none text-white font-extrabold text-[7px] tracking-tighter shadow-sm select-none logo-hover-animation">
        <span>GET</span>
        <span>YOUR</span>
        <span>GUIDE</span>
      </div>
    ),
    description:
      'GetYourGuide helps Perk travellers discover and book unforgettable experiences, tours and activities in thousands of destinations worldwide.',
    size: 'small',
    category: 'Travel & Transport',
    partnerType: 'Standard'
  },
  {
    name: 'Croissant',
    logoRender: () => (
      <div className="flex items-center leading-none logo-hover-animation">
        <span className="text-black text-[22px] font-extrabold tracking-[-0.05em] select-none lowercase">croissant</span>
      </div>
    ),
    description:
      'Croissant provides flexible, pay-as-you-go workspace access in 500+ global locations, helping Perk customers work productively worldwide.',
    size: 'small',
    category: 'Workspaces',
    partnerType: 'Standard'
  },
  {
    name: 'Freenow for Business',
    logoRender: () => (
      <div className="flex flex-col select-none leading-none logo-hover-animation">
        <div className="flex items-center gap-0.5">
          <span className="text-[#e11948] text-[15px] font-black lowercase tracking-tighter">freenow</span>
          <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-[#e11948]">
            <path d="M50,15 A35,35 0 0,0 15,50 C15,75 50,90 50,90 C50,90 85,75 85,50 A35,35 0 0,0 50,15 Z" />
          </svg>
        </div>
        <span className="text-[9px] text-gray-500 font-bold ml-0.5 mt-0.5 lowercase tracking-wider">by lyt</span>
      </div>
    ),
    description:
      'Freenow for Business offers Perk travellers seamless access to taxis and ride services with company-wide billing and control.',
    size: 'small',
    category: 'Travel & Transport',
    partnerType: 'Standard'
  },
  {
    name: 'Lounge Pass',
    logoRender: () => (
      <div className="flex items-center gap-1 select-none leading-none logo-hover-animation">
        <svg viewBox="0 0 100 100" className="w-4 h-4 fill-red-400 opacity-60">
          <path d="M20,50 C20,30 50,20 80,40 C60,25 35,35 30,50 Z" />
        </svg>
        <span className="text-gray-400 font-serif italic text-[13px] uppercase tracking-wider font-semibold">Lounge Pass</span>
      </div>
    ),
    description:
      'With Lounge Pass, Perk users can relax, recharge and work in comfort with single-use access to 800+ airport lounges across 350 airports.',
    size: 'small',
    category: 'Travel & Transport',
    partnerType: 'Standard'
  }
];

const Integrations = () => {
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
    <main className="min-h-screen bg-white pb-24 font-sans antialiased text-[#1a1a1a]">
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
            <h1 className="title-huge text-perk-black text-center font-medium tracking-[-0.04em] leading-[1.05]">
              Sync your apps.
              <br />
              Streamline your system.
            </h1>
            <p className="mt-7 text-[16px] sm:text-[18px] text-[#5f5f59] max-w-[580px] mx-auto leading-[1.4] tracking-tight">
              Browse our marketplace for tools that make travel for work even simpler and smarter—from onboarding to invoicing. Just download, connect, and you're all set.
            </p>
            <div className="mt-9 flex justify-center">
              <button className="inline-flex items-center gap-1 bg-[#bef33e] text-black px-7 py-3 rounded-full font-bold text-[16px] hover:brightness-95 transition-all border border-black/5 shadow-sm active:scale-95 duration-150">
                Book a demo <ChevronRight size={16} className="stroke-[3]" />
              </button>
            </div>
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
          <article
            key={card.name}
            className="rounded-[32px] border border-[#e4e4dd] bg-white p-8 sm:p-10 lg:p-12 card-hover-effect flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                {card.logoRender()}
              </div>
              <h2 className="mt-6 text-2xl sm:text-[30px] font-black tracking-[-0.03em] leading-none text-black">
                {card.name}
              </h2>
              <p className="mt-4 text-[15px] sm:text-[17px] leading-[1.45] text-[#5f5f5a] max-w-5xl tracking-tight">
                {card.description}
              </p>
            </div>
            <div className="mt-8">
              <button className="read-more-btn inline-flex items-center gap-1.5 rounded-full border border-black/40 px-6 py-2.5 text-[15px] font-bold text-[#1a1a1a] hover:bg-black hover:text-white hover:border-black transition-all shadow-sm">
                Read more <ChevronRight size={14} className="stroke-[2.5]" />
              </button>
            </div>
          </article>
        ))}

        {/* ROW 2: Medium 2-Column Cards */}
        {mediumCards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediumCards.map((card) => (
              <article
                key={card.name}
                className="rounded-[32px] border border-[#e4e4dd] bg-white p-7 sm:p-9 card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center">
                    {card.logoRender()}
                  </div>
                  <h3 className="mt-5 text-xl sm:text-[24px] font-black tracking-[-0.03em] leading-none text-black">
                    {card.name}
                  </h3>
                  <p className="mt-4 text-[14px] sm:text-[15.5px] leading-[1.45] text-[#5f5f5a] tracking-tight">
                    {card.description}
                  </p>
                </div>
                <div className="mt-8">
                  <button className="read-more-btn inline-flex items-center gap-1.5 rounded-full border border-black/40 px-6 py-2.5 text-[15px] font-bold text-[#1a1a1a] hover:bg-black hover:text-white hover:border-black transition-all shadow-sm">
                    Read more <ChevronRight size={14} className="stroke-[2.5]" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* ROW 3+: Small 4-Column Cards */}
        {smallCards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {smallCards.map((card) => (
              <article
                key={card.name}
                className="rounded-[28px] border border-[#e4e4dd] bg-white p-6 card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center min-h-[44px]">
                    {card.logoRender()}
                  </div>
                  <h3 className="mt-4 text-lg sm:text-[20px] font-black tracking-[-0.03em] leading-tight text-black">
                    {card.name}
                  </h3>
                  <p className="mt-3 text-[13px] sm:text-[14.5px] leading-[1.4] text-[#676762] tracking-tight">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6">
                  <button className="read-more-btn inline-flex items-center gap-1.5 rounded-full border border-black/40 px-5 py-2 text-[14px] font-bold text-[#1a1a1a] hover:bg-black hover:text-white hover:border-black transition-all shadow-sm">
                    Read more <ChevronRight size={12} className="stroke-[2.5]" />
                  </button>
                </div>
              </article>
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
