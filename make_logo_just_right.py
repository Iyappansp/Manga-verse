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
            
            # For dashboard pages (from h-10 md:h-12 -> h-12 md:h-16)
            content = re.sub(
                r'<img src="assets/logo\.png(\?v=\d+)?" alt="MangaVerse Logo" class="h-10 md:h-12 w-auto max-w-\[200px\] object-contain (.*?)"',
                r'<img src="assets/logo.png?v=14" alt="MangaVerse Logo" class="h-12 md:h-16 w-auto max-w-[250px] object-contain \2"',
                content
            )
            
            # For authentication pages (login, register) (from h-16 md:h-20 -> h-20 md:h-24)
            content = re.sub(
                r'<img src="assets/logo\.png(\?v=\d+)?" alt="MangaVerse Logo" class="h-16 md:h-20 w-auto max-w-\[250px\] object-contain">',
                r'<img src="assets/logo.png?v=14" alt="MangaVerse Logo" class="h-20 md:h-24 w-auto max-w-[300px] object-contain">',
                content
            )
            
            # For 404 and coming-soon pages
            content = re.sub(
                r'<img src="assets/logo\.png(\?v=\d+)?" alt="MangaVerse Logo" class="logo-icon" style="height: auto; max-height: 80px; width: auto; max-width: 250px; object-fit: contain; background: transparent;">',
                r'<img src="assets/logo.png?v=14" alt="MangaVerse Logo" class="logo-icon" style="height: auto; max-height: 100px; width: auto; max-width: 300px; object-fit: contain; background: transparent;">',
                content
            )

            # Footer for 404 and coming soon
            content = re.sub(
                r'<img src="assets/logo\.png(\?v=\d+)?" alt="MangaVerse Logo" class="logo-icon" style="height: auto; max-height: 100px; width: auto; max-width: 250px; object-fit: contain; background: transparent;">',
                r'<img src="assets/logo.png?v=14" alt="MangaVerse Logo" class="logo-icon" style="height: auto; max-height: 120px; width: auto; max-width: 300px; object-fit: contain; background: transparent;">',
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
    
    # Header logo (from h-10 md:h-14 -> h-14 md:h-16)
    content = re.sub(
        r'<img src="assets/logo\.png(\?v=\d+)?" alt="MangaVerse Logo" class="h-10 md:h-14 w-auto max-w-\[200px\] object-contain">',
        r'<img src="assets/logo.png?v=14" alt="MangaVerse Logo" class="h-14 md:h-16 w-auto max-w-[250px] object-contain">',
        content
    )
    
    # Footer logo (from h-12 md:h-16 -> h-16 md:h-20)
    content = re.sub(
        r'<img src="assets/logo\.png(\?v=\d+)?" alt="MangaVerse Logo" class="h-12 md:h-16 w-auto max-w-\[250px\] object-contain">',
        r'<img src="assets/logo.png?v=14" alt="MangaVerse Logo" class="h-16 md:h-20 w-auto max-w-[300px] object-contain">',
        content
    )
    
    if content != original:
        with open(main_js_path, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f'Updated {main_js_path}')

print(f'Total updated: {count}')
