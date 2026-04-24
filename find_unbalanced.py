import re

with open('src/pages/ProductDiscovery.jsx', 'r') as f:
    lines = f.readlines()

div_stack = []
cond_stack = []

for i, line in enumerate(lines):
    line_num = i + 1
    
    # Check for div starts/ends
    for m in re.finditer(r'<div', line):
        div_stack.append(line_num)
    for m in re.finditer(r'</div', line):
        if not div_stack:
            print(f"Extra </div> at {line_num}")
        else:
            div_stack.pop()
            
    # Check for motion.div
    for m in re.finditer(r'<motion.div', line):
        div_stack.append(line_num)
    for m in re.finditer(r'</motion.div', line):
        if not div_stack:
            print(f"Extra </motion.div> at {line_num}")
        else:
            div_stack.pop()

    # Check for condition starts
    if '{' in line and '&& (' in line:
        cond_stack.append(line_num)
    
    # Check for condition ends
    if ')}' in line:
        if not cond_stack:
             # Wait, onClick might have )} too.
             if 'onClick' not in line:
                 print(f"Extra )}} at {line_num}")
        else:
            cond_stack.pop()

print(f"Unclosed divs: {len(div_stack)} (Started at: {div_stack})")
print(f"Unclosed conditions: {len(cond_stack)} (Started at: {cond_stack})")
