// Get a reference to the Markdown file
const markdownFile = 'markdown.md';

// Fetch the Markdown content
fetch(markdownFile)
  .then(response => response.text())
  .then(markdown => {
    // Initialize Showdown converter
    const converter = new showdown.Converter();

    // Convert Markdown to HTML
    const html = converter.makeHtml(markdown);

    // Get a reference to the target element
    const targetElement = document.getElementById('target-element');

    // Add the HTML content to the target element
    targetElement.innerHTML = html;
  })
  .catch(error => {
    console.error('Error fetching or converting Markdown:', error);
  });