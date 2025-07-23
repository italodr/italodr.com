export const baseStyles = `
  /* Base demo styles */

  :root {
    --background: #141414;
    --surface: #2d2d2d;
    --foreground: #f1f1f1;
    --foreground-dimmed: #c5c5c5;
    --highlight: #a4a212;
    --highlight-foreground: #141414;
    --accent: #ff5d37;
    --accent-hover: #ff7e5b;
    --success: #2ecd71;
    --border: 1px solid #2d2d2d;

    --font-weight-light: 100;
    --font-weight-normal: 200;
    --font-weight-bold: 500;

    @media (prefers-color-scheme: light) {
      --background: #f9fafb;
      --surface: #f1f1f1;
      --foreground: #111827;
      --foreground-dimmed: #383c43;
      --highlight: #a4a212;
      --highlight-foreground: #111827;
      --accent: #ce3e1d;
      --accent-hover: #af3317;
      --success: #24a148;
      --border: 1px solid #aca7a7;
    }
  }

  * {
    box-sizing: border-box;

    &:focus-visible {
      outline: 2px solid var(--success) !important;
      outline-offset: 0.25rem !important;
      z-index: 99 !important;
    }
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: var(--background);
    color: var(--foreground);
  }

  button:not(.unstyled), .button {
    all: unset;
    background-color: var(--accent);
    color: var(--foreground);
    padding: 0.5em 1em;
    border-radius: 0.25em;
    cursor: pointer;
  }
`;
