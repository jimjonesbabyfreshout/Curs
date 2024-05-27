Sure, here’s an example of an updated GitHub Pages `main.yml` file that incorporates advanced features, including code to parse the HTML and clean it automatically using Python’s BeautifulSoup library:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: ‘3.x’

      - name: Install dependencies
        run: pip install beautifulsoup4

      - name: Parse and clean HTML
        run: |
          python clean_html.py

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Make sure to create a `clean_html.py` file in the root of your repository with the code to parse and clean the HTML. Here’s a basic example of what that file might look like:

```python
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
```

This example assumes your HTML file is named `index.html`, and it will clean the HTML by removing all `<script>` tags. Adjust the cleaning process as needed for your specific requirements. Make sure to adjust the paths and cleaning process according to your project structure and HTML content.