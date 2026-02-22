import os
import re

count = 0
for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.html'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            original = content
            content = re.sub(r'assets/image\.png\?v=\d+', 'assets/image copy.png?v=6', content)
            
            if content != original:
                with open(path, 'w', encoding='utf-8') as file:
                    file.write(content)
                print(f'Updated {path}')
                count += 1

main_js_path = os.path.join('assets', 'js', 'main.js')
if os.path.exists(main_js_path):
    with open(main_js_path, 'r', encoding='utf-8') as file:
        content = file.read()
    original = content
    content = re.sub(r'assets/image\.png\?v=\d+', 'assets/image copy.png?v=6', content)
    if content != original:
        with open(main_js_path, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f'Updated {main_js_path}')

print(f'Total updated: {count}')
