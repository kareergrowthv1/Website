import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Pause } from 'lucide-react';
import TrustedBanner from '../components/home/TrustedBanner';

const ProductDiscovery = () => {

  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto text-center">
        {/* Extreme Fidelity Hero */}
        <div className="mb-2 max-w-5xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-[100px] font-bold text-perk-black mb-10 tracking-tight leading-[0.9]"
          >
            Get down to business with the power of one platform 
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-[22px] text-perk-black/80 font-medium max-w-4xl mx-auto leading-relaxed mb-10"
          >
            Set up employees, rules, and policies just once—and Perk automatically connects your trips, expenses, and invoices. When everything lives in one intelligent platform, it just works. No duplicate data. No blind spots. No manual chasing.
          </motion.p>

          {/* Action Bar with Tightened Gaps */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <button className="bg-white text-perk-black px-10 py-3.5 rounded-full text-[15px] font-bold border border-perk-black shadow-sm flex items-center gap-2 hover:bg-slate-50 transition-colors">
              Get started <ChevronRight size={18} />
            </button>
            <button className="banner-lime text-perk-black px-10 py-3.5 rounded-full text-[15px] font-bold flex items-center gap-2 shadow-sm hover:opacity-90 transition-opacity">
              Book a demo <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Enterprise Social Proof Banner */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 mb-20">
          <TrustedBanner />
        </div>

        {/* New Connected Platform Section - NARROWER */}
        <div className="mt-24 mb-12 max-w-6xl mx-auto flex flex-col items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-8xl font-bold text-perk-black mb-10 tracking-tight leading-[0.9]"
            >
              One connected platform for travel, spend and events
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg md:text-[22px] text-perk-black/80 font-medium max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Real-time visibility. Tighter controls. Zero tool-juggling. Perk gives you the flexibility to decide—start with the modules that fit your business best, or unlock the connect power of the full travel, spend, and events platform.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-video w-full rounded-[25px] overflow-hidden bg-brand-lime shadow-2xl flex items-center justify-center group border border-black/5"
            >
              <div className="absolute top-8 right-8 flex items-center gap-4 z-20">
                <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-perk-black">
                  <Pause size={20} fill="currentColor" />
                </div>
                <button className="flex items-center gap-2 px-8 py-3 bg-white text-perk-black rounded-full text-sm font-bold shadow-xl hover:scale-105 transition-transform">
                  Watch full video
                </button>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/3 aspect-square bg-perk-black/5 blur-[100px] rounded-full animate-pulse" />
                <div className="relative text-perk-black opacity-20 transform -rotate-12 scale-150">
                   <ChevronRight size={300} strokeWidth={4} />
                </div>
              </div>
            </motion.div>
        </div>

        {/* REFINED Persona Filter Bar */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-full border border-perk-black/5 shadow-md flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full">
            {['All', 'Recruiter', 'Institute', 'Candidates'].map((filter, i) => (
              <button 
                key={i}
                className={`px-8 py-2.5 rounded-full text-[15px] font-bold whitespace-nowrap transition-all ${filter === 'All' ? 'bg-brand-lime text-perk-black' : 'text-perk-black/50 hover:text-perk-black hover:bg-black/5'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* HIGH-FIDELITY 1+4 FEATURE GRID - EXPANDED WIDTH */}
        <div className="max-w-[1440px] mx-auto mb-4">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              
              {/* LARGE LEFT CARD: 24/7 Travel Support */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="lg:col-span-5 bg-brand-lime rounded-[25px] p-5 flex flex-col items-start text-left relative overflow-hidden group min-h-[450px] border border-black/5"
              >
                 <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90%] h-[55%] flex items-center justify-center p-2 z-10 pointer-events-none">
                    <img src="/assets/airplane-seats.png" className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-1000" />
                 </div>

                 <div className="z-20 mt-auto w-full">
                    <div className="inline-block rounded-[4px] bg-white/30 px-3 py-1 text-[12px] font-bold text-perk-black mb-3 uppercase tracking-wider backdrop-blur-sm">Travel</div>
                    <h3 className="text-4xl md:text-5xl font-bold text-perk-black mb-4 tracking-tighter leading-[0.9]">24/7 travel support</h3>
                    <p className="text-[17px] text-perk-black/80 font-medium max-w-xl mb-6 leading-normal">Our customer support works around the clock so you don't have to. Powered by real people, we ensure every journey is seamless.</p>
                    <button className="px-8 py-3 bg-brand-lime border border-perk-black rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-white/20 transition-colors shadow-sm">
                      Learn more <ChevronRight size={18}/>
                    </button>
                 </div>
              </motion.div>

              {/* RIGHT CLUSTER: 2x2 Small Cards - REFINED NO-BG */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                 
                 {/* Card 1: Full Spend Visibility */}
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group"
                 >
                    <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                       <img src="/assets/building-facade.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute top-3 left-3 px-2 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black flex items-center gap-1 shadow-sm">
                         <div className="w-4 h-4 rounded-full bg-perk-black flex items-center justify-center">
                            <ChevronRight size={10} className="text-brand-lime" />
                         </div>
                         Perk rate
                       </div>
                    </div>
                    <div className="inline-block px-2 py-1 bg-white rounded-[4px] text-[10px] font-bold text-perk-black/40 uppercase mb-2 tracking-wider">Events</div>
                    <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight">Full spend visibility</h3>
                    <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-4">Search and select properties that fit your budget and get access to exclusive negotiated rates.</p>
                    <button className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16}/></button>
                 </motion.div>

                 {/* Card 2: Perk Lodge Card */}
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.1 }}
                   className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group"
                 >
                    <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full flex items-center justify-center">
                       <img src="/assets/lodge-card.png" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="inline-block px-2 py-1 bg-white rounded-[4px] text-[10px] font-bold text-perk-black/40 uppercase mb-2 tracking-wider">Spend</div>
                    <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight">Perk Lodge Card</h3>
                    <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-4">Use one card for all travel. Our Lodge Card comes with higher spend limits to simplify reporting.</p>
                    <button className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16}/></button>
                 </motion.div>

                 {/* Card 3: All-in-one Platform */}
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 }}
                   className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group"
                 >
                    <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full flex items-center justify-center">
                       <img src="/assets/suitcase-phone.png" className="w-full h-full object-contain group-hover:rotate-6 transition-transform duration-700" />
                    </div>
                    <div className="flex gap-2 mb-2">
                       <span className="px-2 py-1 bg-white rounded-[4px] text-[10px] font-bold text-perk-black/40 uppercase tracking-wider">Travel</span>
                       <span className="px-2 py-1 bg-white rounded-[4px] text-[10px] font-bold text-perk-black/40 uppercase tracking-wider">Spend</span>
                    </div>
                    <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight">All-in-one platform</h3>
                    <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-4">Forget multiple tabs. Book every part of a work trip and see all the details in one Helpful itinerary.</p>
                    <button className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16}/></button>
                 </motion.div>

                 {/* Card 4: Invoice Processing */}
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3 }}
                   className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group"
                 >
                    <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full">
                       <img src="/assets/woman-car-phone.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 shadow-xl" />
                    </div>
                    <div className="inline-block px-2 py-1 bg-white rounded-[4px] text-[10px] font-bold text-perk-black/40 uppercase mb-2 tracking-wider">Spend</div>
                    <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight">Invoice processing</h3>
                    <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-4">Streamline AP with ease from invoice intake to ERP entry. AI checks every bill against your policies.</p>
                    <button className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16}/></button>
                 </motion.div>

              </div>
           </div>
        </div>

        {/* NEW FEATURE ROW 2: 4-Card Expansion */}
        <div className="max-w-[1440px] mx-auto mb-4">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Card 1: Global Travel Inventory */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full"
              >
                 <div className="inline-block px-2 py-1 bg-white rounded-[4px] text-[10px] font-bold text-perk-black/40 uppercase mb-4 tracking-wider">Travel</div>
                 <h3 className="text-4xl font-bold text-perk-black mb-6 tracking-tighter leading-[0.9]">Global travel inventory</h3>
                 <p className="text-[14px] text-perk-black/60 font-medium leading-relaxed mb-6">Amtrak to Z Hotel—find your favorite providers at exclusive rates with access to over 25 NDC connections and 1000s of options across flights, stays, trains and cars. All in one place.</p>
              </motion.div>

              {/* Card 2: Group Bookings & Events */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group"
              >
                 <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full">
                    <img src="/assets/event-booking.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 </div>
                 <div className="inline-block px-2 py-1 bg-white rounded-[4px] text-[10px] font-bold text-perk-black/40 uppercase mb-3 tracking-wider">Events</div>
                 <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Group bookings and events</h3>
                 <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-4">Perk pairs the power of AI with human expertise to make group trips as easy as traveling solo. Source venues and streamline RSVPs with our event management software.</p>
                 <button className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16}/></button>
              </motion.div>

              {/* Card 3: Negotiated Rates */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full"
              >
                 <div className="inline-block px-2 py-1 bg-white rounded-[4px] text-[10px] font-bold text-perk-black/40 uppercase mb-4 tracking-wider">Travel</div>
                 <h3 className="text-4xl font-bold text-perk-black mb-6 tracking-tighter leading-[0.9]">Negotiated rates</h3>
                 <p className="text-[14px] text-perk-black/60 font-medium leading-relaxed mb-6">Save 15% or more when booking over our platform. We've collected a range of global options at negotiated prices—and with a Pro plan, you can add corporate rates on top.</p>
              </motion.div>

              {/* Card 4: Policies and Approvals */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group"
              >
                 <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full">
                    <img src="/assets/approval-workflow.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 </div>
                 <div className="flex gap-2 mb-3">
                    <span className="px-2 py-1 bg-white rounded-[4px] text-[10px] font-bold text-perk-black/40 uppercase tracking-wider">Travel</span>
                    <span className="px-2 py-1 bg-white rounded-[4px] text-[10px] font-bold text-perk-black/40 uppercase tracking-wider">Spend</span>
                 </div>
                 <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Policies and approvals</h3>
                 <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-4">Speed up sign-offs and stay on budget with adaptable workflows. Policies are preset so approvals can be automated, keeping compliance at an average of 95%.</p>
              </motion.div>
           </div>
        </div>

        {/* NEW FEATURE ROW 3: 3-Card Layout */}
        <div className="max-w-[1440px] mx-auto mb-4">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Card 1: Preset per diems */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group"
              >
                 <div className="rounded-[20px] overflow-hidden mb-6 aspect-square w-full flex items-center justify-center p-8 bg-white/50">
                    <img src="/assets/perk_preset_per_diems_3d_1776618439423.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <div className="inline-block px-2 py-1 bg-white rounded-[4px] text-[10px] font-bold text-perk-black/40 uppercase mb-3 tracking-wider">Spend</div>
                 <h3 className="text-2xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Preset per diems</h3>
                 <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6">No more tedious calculations. Automatically assign allowances based on company policies for easy reporting and fast reimbursement.</p>
              </motion.div>

              {/* Card 2: Traveler tracker */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group"
              >
                 <div className="rounded-[20px] overflow-hidden mb-6 aspect-video w-full flex items-center justify-center">
                    <img src="/assets/perk_traveler_tracker_map_1776618457819.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 </div>
                 <div className="inline-block px-2 py-1 bg-white rounded-[4px] text-[10px] font-bold text-perk-black/40 uppercase mb-3 tracking-wider">Travel</div>
                 <h3 className="text-2xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Traveler tracker</h3>
                 <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6">Keep an eye on your teams all over the world. Our built-in, interactive map lets you see where your people are traveling for work.</p>
                 <button className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16}/></button>
              </motion.div>

              {/* Card 3: Invoice matching */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#f0f0e8] rounded-[25px] p-8 flex flex-col items-start border border-black/5 text-left h-full group"
              >
                 <div className="inline-block px-2 py-1 bg-white rounded-[4px] text-[10px] font-bold text-perk-black/40 uppercase mb-6 tracking-wider">Spend</div>
                 <h3 className="text-6xl font-bold text-perk-black mb-auto tracking-tighter leading-[0.9]">Invoice matching</h3>
                 
                 <div className="mt-auto pt-10">
                    <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6">All invoices are automatically matched against your POs and, if relevant, a goods receipt. Not a match? We'll flag it so you don't overspend or underpay.</p>
                    <button className="px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16}/></button>
                 </div>
              </motion.div>
           </div>
        </div>

        {/* NEW FEATURE ROW 4: 5-Card Inverted Matrix */}
        <div className="max-w-[1440px] mx-auto mb-40">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              
              {/* LEFT COLUMN: Stacked Quick Changes & Concierge */}
              <div className="lg:col-span-3 flex flex-col gap-4">
                 
                 {/* Card 1: Quick trip changes */}
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   className="relative rounded-[25px] overflow-hidden group border border-black/5 flex-1 min-h-[300px]"
                 >
                    <img src="/assets/perk_quick_trip_changes_photo_1776618784348.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end">
                       <div className="inline-block self-start px-2 py-1 bg-white/20 backdrop-blur-md rounded-[4px] text-[10px] font-bold text-white uppercase mb-4 tracking-wider">Travel</div>
                       <h3 className="text-2xl font-bold text-white mb-2 tracking-tighter leading-tight">Quick trip changes</h3>
                       <p className="text-[13px] text-white/80 font-medium leading-normal mb-1 opacity-0 group-hover:opacity-100 transition-opacity">Plans change and so can your trips. Rebook or cancel flights and hotels in just a few taps.</p>
                    </div>
                 </motion.div>

                 {/* Card 2: Concierge */}
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className="bg-[#f0f0e8] rounded-[25px] p-5 border border-black/5 text-left flex flex-col h-full"
                 >
                    <div className="inline-block px-2 py-1 bg-white rounded-[4px] text-[10px] font-bold text-perk-black/40 uppercase mb-3 tracking-wider uppercase">Travel</div>
                    <h3 className="text-5xl font-bold text-perk-black mb-8 tracking-tighter leading-[0.9]">Concierge</h3>
                    <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6">Can't find what you need? No problem. With a Premium or Pro plan, you can ask our Concierge to organize trip options that aren't available yet.</p>
                    <button className="mt-auto self-start px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16}/></button>
                 </motion.div>
              </div>

              {/* MIDDLE COLUMN: Stacked Profile & Ad-hoc */}
              <div className="lg:col-span-3 flex flex-col gap-4">
                 
                 {/* Card 3: Personalized profile */}
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className="bg-[#f0f0e8] rounded-[25px] p-5 border border-black/5 text-left flex-1"
                 >
                    <div className="inline-block px-2 py-1 bg-white rounded-[4px] text-[10px] font-bold text-perk-black/40 uppercase mb-3 tracking-wider">Travel</div>
                    <h3 className="text-5xl font-bold text-perk-black mb-8 tracking-tighter leading-[0.9]">Personalized profile</h3>
                    <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed">Booking just got better. With Perk, travelers can save their personal details and loyalty programs so search results are automatically filtered.</p>
                 </motion.div>

                 {/* Card 4: Ad-hoc expenses */}
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group"
                 >
                    <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full">
                       <img src="/assets/perk_ad_hoc_expenses_lifestyle_1776618799708.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="inline-block px-2 py-1 bg-white rounded-[4px] text-[10px] font-bold text-perk-black/40 uppercase mb-2 tracking-wider">Spend</div>
                    <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight">Ad-hoc expenses</h3>
                    <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed">Stop stressing about spontaneous spend, like client dinners or rebooked flights. Perk automatically captures spending.</p>
                 </motion.div>
              </div>

              {/* RIGHT COLUMN: Hero Expert Support */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="lg:col-span-6 bg-[#f0f0e8] rounded-[25px] p-6 flex flex-col items-start border border-black/5 text-left group"
              >
                 <div className="rounded-[20px] overflow-hidden mb-10 aspect-video w-full">
                    <img src="/assets/expert-team.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                 </div>
                 <div className="inline-block px-2 py-1 bg-white rounded-[4px] text-[10px] font-bold text-perk-black/40 uppercase mb-4 tracking-wider">Events</div>
                 <h3 className="text-4xl md:text-7xl font-bold text-perk-black mb-8 tracking-tighter leading-[0.9]">In-house expert support</h3>
                 <p className="text-base text-perk-black/60 font-medium leading-relaxed max-w-2xl mb-10">Need help organizing your next big event? Our committed in-house team of events experts is on hand around the clock to support with complex requests like rate negotiations or special group travel arrangements.</p>
                 <button className="mt-auto px-8 py-3 bg-transparent border border-perk-black/20 rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={18}/></button>
              </motion.div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDiscovery;
