# Stealth URL Extractor

A lightweight Chrome extension that automatically extracts URLs and endpoints from a webpage and its JavaScript files.

## Features

* Extract URLs from the current webpage source.
* Scan external JavaScript files.
* Collect hidden endpoints and paths.
* Display extracted URLs inside the extension popup.
* Copy all extracted URLs with one click.
* Store extracted results locally.

## Project Structure

```text
Stealth URL Extractor/
├── manifest.json
├── background.js
├── content.js
├── popup.html
├── popup.js
├── icon-16.png
├── icon-48.png
└── icon-128.png
```

## Installation

1. Download or clone this repository.

```bash
git clone https://github.com/your-username/Stealth-URL-Extractor.git
```

2. Open Chrome.

3. Navigate to:

```text
chrome://extensions
```

4. Enable **Developer Mode**.

5. Click **Load unpacked**.

6. Select the project folder.

## How It Works

1. Open any website.
2. The extension automatically scans the page.
3. JavaScript files are analyzed.
4. URLs and endpoints are extracted.
5. Results are stored locally.
6. Open the extension popup to view and copy them.

## Technologies

* JavaScript
* HTML
* Chrome Extension Manifest V3

## Permissions

The extension uses:

* `storage`
* `host_permissions: <all_urls>`

## Disclaimer

This tool is intended for educational purposes and authorized security assessments only.

Do not use this extension against systems or websites without explicit permission.

## License

MIT License
