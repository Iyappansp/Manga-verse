import os
import re

def update_logo_heights():
    # Define mappings for height classes to increase
    # h-12 -> h-16
    # h-14 -> h-18
    # h-16 -> h-20
    # h-18 -> h-22
    # h-20 -> h-24
    # h-24 -> h-32
    # h-28 -> h-40
    # h-36 -> h-52
    # md:h-14 -> md:h-20
    # md:h-16 -> md:h-22
    # md:h-18 -> md:h-22
    # md:h-20 -> md:h-24
    # md:h-24 -> md:h-32
    # md:h-28 -> md:h-40
    # lg:h-16 -> lg:h-24
    # lg:h-20 -> lg:h-24
    # lg:h-36 -> lg:h-52

    replacements = {
        r'h-12': 'h-16',
        r'h-14': 'h-18',
        r'h-16': 'h-24',
        r'h-18': 'h-22',
        r'h-20': 'h-28',
        r'h-24': 'h-32',
        r'h-28': 'h-40',
        r'h-36': 'h-52',
        r'md:h-14': 'md:h-20',
        r'md:h-16': 'md:h-22',
        r'md:h-18': 'md:h-22',
        r'md:h-20': 'md:h-28',
        r'md:h-24': 'md:h-32',
        r'md:h-28': 'md:h-40',
        r'lg:h-16': 'lg:h-24',
        r'lg:h-20': 'lg:h-24',
        r'lg:h-36': 'lg:h-52',
        r'max-w-\[240px\]': 'max-w-[280px]',
        r'max-w-\[280px\]': 'max-w-[320px]',
        r'max-w-\[400px\]': 'max-w-[500px]',
        r'max-w-\[300px\]': 'max-w-[350px]',
        r'max-w-\[250px\]': 'max-w-[300px]',
        r'max-w-\[200px\]': 'max-w-[250px]'
    }

    files_to_check = [f for f in os.listdir('.') if f.endswith('.html')]
    # assets/js/main.js was already updated, but we can check it again or skip
    files_to_check.append('assets/js/main.js')

    for file_path in files_to_check:
        if not os.path.exists(file_path):
            continue
            
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        new_content = content
        # Only apply replacements to lines containing the logo image
        lines = new_content.split('\n')
        updated_lines = []
        for line in lines:
            if 'assets/logo.png' in line and ('class=' in line or 'style=' in line):
                temp_line = line
                # Sort replacements by length descending to avoid partial matches
                for pattern in sorted(replacements.keys(), key=len, reverse=True):
                    temp_line = re.sub(pattern, replacements[pattern], temp_line)
                updated_lines.append(temp_line)
            else:
                updated_lines.append(line)
        
        new_content = '\n'.join(updated_lines)

        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {file_path}")

if __name__ == "__main__":
    update_logo_heights()
