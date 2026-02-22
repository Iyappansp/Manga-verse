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
            
            # For dashboard pages
            content = re.sub(
                r'<img src="assets/logo\.png(\?v=\d+)?" alt="MangaVerse Logo" class="h-32 w-auto max-w-\[400px\] object-contain (.*?)"',
                r'<img src="assets/logo.png?v=12" alt="MangaVerse Logo" class="h-48 w-auto max-w-[600px] object-contain \2"',
                content
            )
            
            # For authentication pages (login, register)
            content = re.sub(
                r'<img src="assets/logo\.png(\?v=\d+)?" alt="MangaVerse Logo" class="h-40 w-auto max-w-\[400px\] object-contain">',
                r'<img src="assets/logo.png?v=12" alt="MangaVerse Logo" class="h-64 w-auto max-w-[600px] object-contain">',
                content
            )
            
            # For 404 and coming-soon pages
            content = re.sub(
                r'<img src="assets/logo\.png(\?v=\d+)?" alt="MangaVerse Logo" class="logo-icon" style="height: 120px; width: auto; max-width: 400px; object-fit: contain; background: transparent;">',
                r'<img src="assets/logo.png?v=12" alt="MangaVerse Logo" class="logo-icon" style="height: 200px; width: auto; max-width: 600px; object-fit: contain; background: transparent;">',
                content
            )

            # Footer for 404 and coming soon
            content = re.sub(
                r'<img src="assets/logo\.png(\?v=\d+)?" alt="MangaVerse Logo" class="logo-icon" style="height: 140px; width: auto; max-width: 400px; object-fit: contain; background: transparent;">',
                r'<img src="assets/logo.png?v=12" alt="MangaVerse Logo" class="logo-icon" style="height: 250px; width: auto; max-width: 600px; object-fit: contain; background: transparent;">',
                content
            )
            
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
    
    # Header logo
    content = re.sub(
        r'<img src="assets/logo\.png(\?v=\d+)?" alt="MangaVerse Logo" class="h-24 md:h-32 w-auto max-w-\[400px\] object-contain">',
        r'<img src="assets/logo.png?v=12" alt="MangaVerse Logo" class="h-32 md:h-48 w-auto max-w-[600px] object-contain">',
        content
    )
    
    # Footer logo
    content = re.sub(
        r'<img src="assets/logo\.png(\?v=\d+)?" alt="MangaVerse Logo" class="h-32 w-auto max-w-\[400px\] object-contain">',
        r'<img src="assets/logo.png?v=12" alt="MangaVerse Logo" class="h-48 w-auto max-w-[600px] object-contain">',
        content
    )
    
    # Try one more fallback replacement just in case
    content = re.sub(
        r'class="h-16 w-auto max-w-\[250px\] object-contain"',
        r'class="h-32 md:h-48 w-auto max-w-[600px] object-contain"',
        content
    )
    content = re.sub(
        r'class="h-20 w-auto max-w-\[300px\] object-contain"',
        r'class="h-48 w-auto max-w-[600px] object-contain"',
        content
    )
    
    if content != original:
        with open(main_js_path, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f'Updated {main_js_path}')

print(f'Total updated: {count}')
