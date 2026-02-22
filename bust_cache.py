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
            
            # Add cache buster to script tags and inline image paths
            content = re.sub(r'assets/js/main\.js(\?v=\d+)?', 'assets/js/main.js?v=3', content)
            content = re.sub(r'assets/image\.png(\?v=\d+)?', 'assets/image.png?v=3', content)
            
            if content != original:
                with open(path, 'w', encoding='utf-8') as file:
                    file.write(content)
                print(f'Updated cache buster in {path}')
                count += 1

# Also update main.js
main_js_path = os.path.join('assets', 'js', 'main.js')
if os.path.exists(main_js_path):
    with open(main_js_path, 'r', encoding='utf-8') as file:
        content = file.read()
    original = content
    content = re.sub(r'assets/image\.png(\?v=\d+)?', 'assets/image.png?v=3', content)
    
    # Let's also increase the size of the logo in main.js to make it more visible!
    content = content.replace('class="w-8 h-auto object-contain"', 'class="w-10 h-10 object-contain"')
    
    if content != original:
        with open(main_js_path, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f'Updated cache buster and size in {main_js_path}')

print(f'Total updated: {count}')
