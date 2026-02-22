import os
import re

dashRegex = re.compile(r'<div class="w-8 h-8 bg-manga-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-manga-primary/20">\s*<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">.*?</svg>\s*</div>', re.DOTALL)

authRegex = re.compile(r'<svg class="w-8 h-8 text-manga-primary" fill="currentColor" viewBox="0 0 24 24">.*?</svg>', re.DOTALL)

count = 0
for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.html'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            original = content
            content = dashRegex.sub('<img src="assets/image.png" alt="MangaVerse Logo" class="w-8 h-8 object-contain group-hover:rotate-12 transition-transform shadow-lg shadow-manga-primary/20 rounded-lg">', content)
            content = authRegex.sub('<img src="assets/image.png" alt="MangaVerse Logo" class="w-8 h-8 object-contain">', content)
            if content != original:
                with open(path, 'w', encoding='utf-8') as file:
                    file.write(content)
                print(f'Updated {path}')
                count += 1
print(f'Total updated: {count}')
