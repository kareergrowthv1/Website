import re

with open('src/pages/ProductDiscovery.jsx', 'r') as f:
    lines = f.readlines()

# Header (up to line 110)
# We make sure 110 correctly closes the Hero's children but keeps the main containers open if needed?
# Actually, Home.jsx has 12 and 13.
# ProductDiscovery has 12 and 13.
# Line 110 CLOSES 13 in the current version.
# So everything after 110 is a child of 12.

# I'll just gather the components and re-build from a clean template.

content = "".join(lines)

# Find components
# 1. Imports and Hero
hero_end = content.find("        {/* HIGH-FIDELITY 1+4 FEATURE GRID - EXPANDED WIDTH */}")
header = content[:hero_end]

# 2. Bento Grid logic (needs to be child of 12)
bento_block = content[content.find("{activeFilter === 'All' && ("):content.find("{/* --- UNIFIED FILTERED GRID")]

# 3. Unified Grid logic
unified_block = content[content.find("{/* --- UNIFIED FILTERED GRID"):content.find("{/* --- DYNAMIC ADDED SECTION")]

# 4. Dynamic Section logic
dynamic_block = content[content.find("{/* --- DYNAMIC ADDED SECTION"):content.find("    </div>\n  );\n};\n\nexport default ProductDiscovery;")]

# Rebuild the outer structure
new_content = header.strip() + "\n\n"
new_content += bento_block.strip() + "\n\n"
new_content += unified_block.strip() + "\n\n"
new_content += dynamic_block.strip() + "\n\n"
new_content += "    </div>\n  );\n};\n\nexport default ProductDiscovery;\n"

# Final sanity check on condition tokens
# I'll make sure no stray )} exist
new_content = new_content.replace("{ /* NEW FEATURE ROW", "/* NEW FEATURE ROW")
new_content = new_content.replace("*/ }", "*/")

# Wait! If I removed {} from comments, I must make sure they aren't siblings
# JSX comments must be { /* */ } if siblings of tags.
# I'll restore them correctly.

with open('src/pages/ProductDiscovery.jsx', 'w') as f:
    f.write(new_content)
