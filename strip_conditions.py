import re

with open('src/pages/ProductDiscovery.jsx', 'r') as f:
    content = f.read()

# Remove patterns like {(activeFilter === 'All' || activeFilter === '...') && (
# and their matching )}
# This is complex with regex, so I'll do it carefully.

# Use a specific marker to avoid stripping the OUTER wrapper.
content = content.replace("activeFilter === 'All' && (", "OUTER_ALL_WRAPPER_OPEN_MARKER")

# Match card-level conditions
# Pattern: {(activeFilter === 'All' || activeFilter === '...') && ( ... )}
# We need to extract the inner content.
# Since these are nested, I'll use a more surgical approach.
