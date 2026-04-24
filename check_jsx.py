import re

def check_balance(filename):
    with open(filename, 'r') as f:
        content = f.read()
    
    # Simple tag counting
    opens = len(re.findall(r'<div', content))
    closes = len(re.findall(r'</div', content))
    print(f"Divs: {opens} opens, {closes} closes")
    
    # Condition counting
    c_opens = len(re.findall(r'\{.*&& \(', content))
    c_closes = len(re.findall(r'\)\}', content))
    print(f"Conditions: {c_opens} opens, {c_closes} closes")

check_balance('src/pages/ProductDiscovery.jsx')
