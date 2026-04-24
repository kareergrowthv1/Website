import re

with open('src/pages/ProductDiscovery.jsx', 'r') as f:
    lines = f.readlines()

# Extract the part before the static section
header = lines[:113]
# Extract the part after the static section (Row 5 end is around 529)
footer = lines[529:]

# Create the new static section
static_content = [
    "        {/* --- STATIC BENTO GRID (ONLY FOR ALL VIEW) --- */}\n",
    "        {activeFilter === 'All' && (\n",
    "          <div className=\"space-y-4\">\n"
]

# We need to collect Row 1, 2, 3, 4, 5 content but CLEANED of condition wrappers where unnecessary?
# Actually, I'll keep them to minimize risk.
# I just need to make sure EVERY outer row container is a sibling inside space-y-4.

# Let's try a different approach. I'll just use a series of replace_file_content calls.
