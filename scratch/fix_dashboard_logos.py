import os
import re

def fix_dashboard_logos():
    replacements = {
        r'h-\d+ md:h-\d+': 'h-14 md:h-18',
        r'h-\d+ md:h-\d+ lg:h-\d+': 'h-14 md:h-18 lg:h-20'
    }

    files = [
        'dashboard-activity.html',
        'dashboard-bookmarks.html',
        'dashboard-history.html',
        'dashboard-league.html',
        'dashboard-projects.html',
        'dashboard.html'
    ]

    for file_path in files:
        if not os.path.exists(file_path):
            continue
            
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        new_content = content
        # Targeted replacement for the logo line
        lines = new_content.split('\n')
        updated_lines = []
        for line in lines:
            if 'assets/logo.png' in line and 'class=' in line:
                # Replace the height classes
                temp_line = re.sub(r'h-\d+', 'h-14', line)
                temp_line = re.sub(r'md:h-\d+', 'md:h-18', temp_line)
                temp_line = re.sub(r'lg:h-\d+', 'lg:h-20', temp_line)
                # Ensure max-width is also reasonable
                temp_line = re.sub(r'max-w-\[\d+px\]', 'max-w-[280px]', temp_line)
                updated_lines.append(temp_line)
            else:
                updated_lines.append(line)
        
        new_content = '\n'.join(updated_lines)

        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed {file_path}")

if __name__ == "__main__":
    fix_dashboard_logos()
