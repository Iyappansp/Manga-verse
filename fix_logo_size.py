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
                r'<img src="assets/image\.png(\?v=\d+)?" alt="MangaVerse Logo" class="w-8 h-8 object-contain (.*?)"',
                r'<img src="assets/image.png?v=5" alt="MangaVerse Logo" class="h-10 w-auto max-w-[200px] object-contain \2"',
                content
            )
            
            # For authentication pages (login, register) where it has text "MangaVerse" next to it
            content = re.sub(
                r'<a href="index\.html" class="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-white mb-2">\s*<img src="assets/image\.png(\?v=\d+)?" alt="MangaVerse Logo" class="w-8 h-8 object-contain">\s*MangaVerse\s*</a>',
                r'<a href="index.html" class="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-white mb-2">\n                <img src="assets/image.png?v=5" alt="MangaVerse Logo" class="h-12 w-auto max-w-[250px] object-contain">\n            </a>',
                content
            )
            
            # For 404 and coming-soon pages
            content = re.sub(
                r'<a href="index\.html" class="logo"><img src="assets/image\.png(\?v=\d+)?" alt="MangaVerse Logo" class="logo-icon" style="width: 32px; height: 32px; object-fit: contain; background: transparent;"><span>MangaVerse</span></a>',
                r'<a href="index.html" class="logo"><img src="assets/image.png?v=5" alt="MangaVerse Logo" class="logo-icon" style="height: 40px; width: auto; max-width: 250px; object-fit: contain; background: transparent;"></a>',
                content
            )

            # Footer for 404 and coming soon
            content = re.sub(
                r'<div class="logo" style="margin-bottom: 1rem;"><img src="assets/image\.png(\?v=\d+)?" alt="MangaVerse Logo" class="logo-icon" style="width: 32px; height: 32px; object-fit: contain; background: transparent;"><span>MangaVerse</span></div>',
                r'<div class="logo" style="margin-bottom: 1rem;"><img src="assets/image.png?v=5" alt="MangaVerse Logo" class="logo-icon" style="height: 48px; width: auto; max-width: 250px; object-fit: contain; background: transparent;"></div>',
                content
            )
            
            if content != original:
                with open(path, 'w', encoding='utf-8') as file:
                    file.write(content)
                print(f'Updated {path}')
                count += 1

# Also update main.js
main_js_path = os.path.join('assets', 'js', 'main.js')
if os.path.exists(main_js_path):
    with open(main_js_path, 'r', encoding='utf-8') as file:
        content = file.read()
    original = content
    
    # Header logo
    content = re.sub(
        r'<a href="index\.html" class="flex items-center gap-2 text-xl font-bold tracking-tight text-manga-primary hover:opacity-80 transition-opacity whitespace-nowrap">\s*<img src="assets/image\.png(\?v=\d+)?" alt="MangaVerse Logo" class="w-10 h-10 object-contain">\s*MangaVerse\s*</a>',
        r'<a href="index.html" class="flex items-center hover:opacity-80 transition-opacity">\n                    <img src="assets/image.png?v=5" alt="MangaVerse Logo" class="h-10 w-auto max-w-[200px] object-contain">\n                </a>',
        content
    )
    
    # Footer logo
    content = re.sub(
        r'<a href="index\.html" class="flex items-center gap-2 text-xl font-bold tracking-tight text-manga-primary mb-4">\s*<img src="assets/image\.png(\?v=\d+)?" alt="MangaVerse Logo" class="w-10 h-10 object-contain">\s*MangaVerse\s*</a>',
        r'<a href="index.html" class="flex items-center mb-4 hover:opacity-80 transition-opacity">\n                    <img src="assets/image.png?v=5" alt="MangaVerse Logo" class="h-12 w-auto max-w-[250px] object-contain">\n                </a>',
        content
    )
    
    if content != original:
        with open(main_js_path, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f'Updated {main_js_path}')

print(f'Total updated: {count}')
