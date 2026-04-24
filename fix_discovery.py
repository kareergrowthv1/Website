import re

with open('src/pages/ProductDiscovery.jsx', 'r') as f:
    content = f.read()

# 1. Row 1 start
# We already have:
# {activeFilter === 'All' && (
#   <div className="space-y-4">
#     <div className="grid ...">

# 2. Row 1 end (Line 223 currently)
# We need to make sure Row 1's grid closes, but space-y-4 stays open.
# Looking at view_file, 222 closes 141, 223 closes 116. Correct.

# 3. Row 2 start (Line 228)
# Row 2 currently starts with <div className="max-w-[1440px]...
# Since it's inside space-y-4, this is fine.

# 4. Row 2 end (Line 301)
# 300 closes grid, 301 closes max-w. Correct.

# 5. Row 3 start (Line 304)
# 6. Row 3 end (Line 340-ish?)
# 340 currently closes grid, 341 closes max-w.

# 7. Row 4 start (Line 344?)
# 8. Row 4 end (Line 463?)

# 9. Row 5 start (Line 467)
# 10. Row 5 end (Line 525-529)
# Currently 527 closes grid, 528 closes max-w, 529 closes condition.

# The issue is that Row 1-5 are siblings but the conditions inside them (e.g. { (activeFilter...) && (...) })
# are seen as siblings of the divs IF they are not wrapped.
# But Row 2 itself starts with a <div>.
# The only things between Row 1 and Row 2 are comments.

# I will wrap EVERY row in the same activeFilter condition block properly.
