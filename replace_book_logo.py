import os
import re

bookRegex = re.compile(r'<div class="logo-icon">📖</div>')

count = 0
for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.html'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            original = content
            content = bookRegex.sub('<img src="assets/image.png" alt="MangaVerse Logo" class="logo-icon" style="width: 32px; height: 32px; object-fit: contain; background: transparent;">', content)
            if content != original:
                with open(path, 'w', encoding='utf-8') as file:
                    file.write(content)
                print(f'Updated {path}')
                count += 1
print(f'Total updated: {count}')
