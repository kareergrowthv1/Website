import re

with open('src/pages/ProductDiscovery.jsx', 'r') as f:
    content = f.read()

# We need to find the main return block and rebuild it.
# The structure should be:
# return (
#   <div main>
#     <div sub>
#        Hero...
#     </div> (Closes sub 110)
#     
#     {activeFilter === 'All' && (
#       <div space-y-4>
#         Row 1...Row 5
#       </div>
#     )}
#
#     {activeFilter !== 'All' && (
#       Unified Grid...
#     )}
#
#     Dynamic Section...
#   </div> (Closes main 12)
# )

# I will use a very robust approach: extract components and re-stitch.

# Extract Hero (lines 1-110 approx)
# Find the first </div></div> after the nav loop.
hero_end_marker = "            })}\n          </div>\n        </div>"
hero_end_idx = content.find(hero_end_marker) + len(hero_end_marker)
header = content[:hero_end_idx]

# Extract Dynamic Section (The part that starts with "DYNAMIC ADDED SECTION")
dynamic_marker = "{/* --- DYNAMIC ADDED SECTION (STAYS FOR ALL VIEW) --- */}"
dynamic_idx = content.find(dynamic_marker)
dynamic_part = content[dynamic_idx:]

# Extract Unified Grid (The part that starts with "UNIFIED FILTERED GRID")
unified_marker = "{/* --- UNIFIED FILTERED GRID (FOR PERSONA VIEWS) --- */}"
unified_idx = content.find(unified_marker)
unified_part = content[unified_idx:dynamic_idx]

# Extract Bento Grid (Everything between hero and unified)
bento_part = content[hero_end_idx:unified_idx]

# CLEAN BENTO: Remove ALL redundant conditionals and make sure every row has 2 closed divs.
# Row dividers: {/* NEW FEATURE ROW ... */}
rows = re.split(r'(\/\* --- STATIC BENTO GRID .*? \*\/|\/\* NEW FEATURE ROW \d+.*? \*\/|\/\* ROW 4:.*? \*\/)', bento_part)

# Rebuild Bento
clean_bento = "\n\n        {/* --- STATIC BENTO GRID (ONLY FOR ALL VIEW) --- */}\n"
clean_bento += "        {activeFilter === 'All' && (\n"
clean_bento += "          <div className=\"space-y-4\">\n"

# Process rows
for i in range(1, len(rows), 2):
    row_comment = rows[i]
    row_content = rows[i+1]
    
    # Strip internal card conditions from row_content
    # Pattern: {(activeFilter === 'All' || activeFilter === '...') && ( ... )}
    row_content = re.sub(r'\{\(activeFilter === \'All\' \|\| activeFilter === \'.*?\'\) && \(\s*', '', row_content)
    row_content = re.sub(r'\)\}\s*(?=\s*<motion.div|\s*<div|\s*<\/*div|\s*<\/*motion.div)', '', row_content)
    # Also catch the ones before closing divs
    row_content = re.sub(r'\)\}\s*(?=\s*<\/div>)', '', row_content)

    clean_bento += "            " + row_comment + "\n"
    clean_bento += row_content.strip() + "\n"

clean_bento += "          </div>\n"
clean_bento += "        )}\n"

# CLEAN UNIFIED: Ensure balance
unified_part = re.sub(r'\}\s*</div>\s*</div>\s*</div>\s*\}\s*', '', unified_part) # cleaning previous mess
# I'll just write it from scratch
unified_clean = """
            {/* --- UNIFIED FILTERED GRID (FOR PERSONA VIEWS) --- */}
            {activeFilter !== 'All' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-20">
                {productFeatures
                  .filter(f => f.tag === activeFilter)
                  .map((card, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="bg-[#f0f0e8] rounded-[25px] p-8 flex flex-col items-start border border-black/5 text-left h-full group"
                    >
                      <div className="rounded-[20px] overflow-hidden mb-8 aspect-video w-full relative">
                        <img src={card.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                        <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">{card.tag}</div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent group-hover:bg-black/60 transition-colors duration-500 pointer-events-none" />
                      </div>
                      <h3 className="text-2xl font-bold text-perk-black mb-4 tracking-tighter leading-tight">{card.title}</h3>
                      <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6 line-clamp-6">{card.desc}</p>
                      <button className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">
                        Learn more <ChevronRight size={16}/>
                      </button>
                    </motion.div>
                  ))}
              </div>
            )}
"""

# CLEAN DYNAMIC: Ensure balance
dynamic_clean = f"""
        {dynamic_marker}
        <div className="max-w-[1440px] mx-auto mb-16">
            {{activeFilter === 'All' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-0 pb-12">
              {{productFeatures
                .filter(f => {{
                   const isDuplicate = [
                     'Automated Round Coordination',
                     'Deep Competency Analytics',
                     'Real-time Candidate Tracking',
                     'Human-like AI Interviews',
                     'Comprehensive Talent Insights',
                     'Centralized Placement Dashboard',
                     'Massive Batch Vetting',
                     'AI Proctoring for Institutions',
                     'Industry Readiness Scoring',
                     'Skill workshops',
                     'Dynamic portfolio',
                     'Smart job matching',
                     'Global talent availability',
                     'Verified competency profiles',
                     'Quick timeline changes',
                     'Dedicated account manager',
                     'Expert interview panels',
                     'Institutional-grade AI Proctoring',
                     'Personalized profile highlights',
                     'Complete role based login access'
                   ].includes(f.title);
                   return !isDuplicate && (activeFilter === 'All' || f.tag === activeFilter);
                }})
                .map((card, i) => (
                 <motion.div 
                   key={{i}}
                   initial={{{{ opacity: 0, y: 20 }}}}
                   whileInView={{{{ opacity: 1, y: 0 }}}}
                   className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group"
                 >
                    <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                       <img src={{card.image}} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 shadow-xl" />
                       <div className="absolute top-3 right-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">
                         {{card.tag}}
                       </div>
                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent group-hover:bg-black/60 transition-colors duration-500 pointer-events-none z-0" />
                    </div>
                    <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight line-clamp-1">{{card.title}}</h3>
                    <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-4 line-clamp-6">{{card.desc}}</p>
                    <button className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">
                      Learn more <ChevronRight size={16}/>
                    </button>
                 </motion.div>
              ))}}
              </div>
            )}}
        </div>
"""

# FINAL RE-STITCH
final_content = header + clean_bento + unified_clean + dynamic_clean + "\n    </div>\n  );\n};\n\nexport default ProductDiscovery;\n"

with open('src/pages/ProductDiscovery.jsx', 'w') as f:
    f.write(final_content)
