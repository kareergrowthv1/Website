import re
import json

with open('src/pages/ProductDiscovery.jsx', 'r') as f:
    text = f.read()

# We look for motion.div cards
card_pattern = r'<motion\.div[^>]*className="[^"]*?(bg-brand-lime|bg-\[#f0f0e8\]|relative rounded-\[25px\]).*?".*?>(.*?)</motion\.div>'
cards = re.findall(card_pattern, text, re.DOTALL)

parsed_cards = []
for c_class, inner in cards:
    # Title
    title_match = re.search(r'<h3[^>]*>(.*?)</h3>', inner, re.DOTALL)
    title = title_match.group(1).strip() if title_match else ""
    
    # Description
    desc_match = re.search(r'<p[^>]*>(.*?)</p>', inner, re.DOTALL)
    desc = desc_match.group(1).strip() if desc_match else ""
    
    # Image
    img_match = re.search(r'src="(/assets/[^"]+)"', inner)
    img = img_match.group(1) if img_match else ""
    
    # Tag
    # It usually has text like 'Candidates', 'Recruiters', 'Institutes' in a div with bg-brand-lime
    tag_match = re.search(r'> *(Candidates|Recruiters|Institute|Institutes) *<', inner)
    tag = tag_match.group(1) if tag_match else ""
    if tag == "Institute": tag = "Institutes"
    
    if title:
        parsed_cards.append({
            "title": title,
            "description": desc,
            "image": img,
            "tag": tag
        })

print(json.dumps(parsed_cards, indent=2))
