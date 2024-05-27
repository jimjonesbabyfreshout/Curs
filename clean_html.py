from bs4 import BeautifulSoup

# Read the HTML file
with open(‘index.html’, ‘r’) as file:
    html_content = file.read()

# Parse the HTML
soup = BeautifulSoup(html_content, ‘html.parser’)

# Clean the HTML (example: remove all <script> tags)
for script in soup([‘script’]):
    script.extract()

# Save the cleaned HTML back to the file
with open(‘dist/index.html’, ‘w’) as file:
    file.write(str(soup))