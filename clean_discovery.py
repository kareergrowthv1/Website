import re

with open('src/pages/ProductDiscovery.jsx', 'r') as f:
    content = f.read()

# We want to replace the sections between:
# {activeFilter === 'All' && (
# and
# {activeFilter !== 'All' && (

# Actually, I'll just remove the redundant card-level conditions {(activeFilter === 'All' || activeFilter === '...') && (
# and their corresponding )}

# Pattern: {(activeFilter === 'All' || activeFilter === '(?P<tag>.*?)') && \(
# and )}
# We need to find the matching )} for each.

def strip_internal_conditions(text):
    # This matches the start of internal conditions
    start_pattern = re.compile(r'\{\(activeFilter === \'All\' \|\| activeFilter === \'.*?\'\) && \(\s*')
    
    # We find all starts
    while True:
        match = start_pattern.search(text)
        if not match:
            break
        
        start_idx = match.start()
        open_idx = match.end()
        
        # Now we need to find the matching )}
        # Since these aren't heavily nested with other ){}, we can count parens/braces or find next )}
        # These specific conditions and cards don't have nested )}.
        end_idx = text.find(')}', open_idx)
        if end_idx == -1:
            break
        
        # Replace the start and end tokens with empty strings
        # Keep the content between start and end.
        text = text[:start_idx] + text[open_idx:end_idx] + text[end_idx+2:]
        
    return text

# Only apply to the bento section
bento_start = content.find("{activeFilter === 'All' && (")
bento_end = content.find("{activeFilter !== 'All' && (")

if bento_start != -1 and bento_end != -1:
    bento_section = content[bento_start:bento_end]
    cleaned_bento = strip_internal_conditions(bento_section)
    
    # Also fix the weird extra div closings I might have left
    # Actually, let's just make sure it ends with ) } exactly.
    # We need to find the last div closing before the condition closing.
    
    # Re-assemble
    new_content = content[:bento_start] + cleaned_bento + content[bento_end:]
    
    with open('src/pages/ProductDiscovery.jsx', 'w') as f:
        f.write(new_content)

