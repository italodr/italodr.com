import { Code } from "./utilities/Code";
import { baseStyles } from "./utilities/styles";

export default function LightGallery() {
  const files = {
    "/App.js": `
    import AlertDialog from "./AlertDialog";

    export default function App() {
      return <AlertDialog />;
    }
    `,
    "/AlertDialog.js": {
      code: `
import { useEffect, useRef, useState } from 'react';
import './styles.css';

const imageUrls = [
  '?random=D39F51', '?random=D66181', '?random=453882', '?random=C48148', '?random=D89682', '?random=C52929', '?random=252322',
  '?random=CB9F5F', '?random=A4A6B4', '?random=9A5C66', '?random=424355', '?random=B4BA91', '?random=79694A', '?random=99A1AB',
  '?random=AC6C7A', '?random=CB9659', '?random=AF9AAE', '?random=927D96', '?random=B44459', '?random=BF9579', '?random=5D4E5A',
];

export default function ExpandableGallery() {
  const listRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [timeout, setTimeoutMs] = useState(300);
  const [layout, setLayout] = useState({ cols: 1, width: 0, gap: 0 });

  useEffect(() => {
    const fav = listRef.current;
    const items = fav?.querySelectorAll('li') || [];

    const getTop = (el) => el.getBoundingClientRect().top;

    const setDataAttrs = () => {
      if (!items.length) return;
      const top = getTop(items[0]);
      const gap = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--gap')) || 16;
      const width = parseFloat(getComputedStyle(items[0]).width);
      let cols = 1;
      for (let i = 1; i < items.length; i++) {
        if (getTop(items[i]) !== top) {
          cols = i;
          break;
        }
      }
      setLayout({ cols, width, gap });
    };

    const updateTimeout = () => {
      const dur = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--duration-expand'));
      setTimeoutMs((dur || 0.3) * 1000);
    };

    const handleResize = () => {
      setDataAttrs();
      setActiveIndex(null);
    };

    updateTimeout();
    setDataAttrs();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleKeyDown = (e) => {
    if (activeIndex === null) return;
    if (e.code === 'Escape') {
      setActiveIndex(null);
    } else if (e.code === 'ArrowLeft' && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (e.code === 'ArrowRight' && activeIndex < imageUrls.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <main>
      <ul className="gallery" ref={listRef}>
        {imageUrls.map((hex, i) => {
          const expanded = i === activeIndex;
          const isLastRow = i + 1 > (imageUrls.length / layout.cols - 1) * layout.cols;
          const isRight = (i + 1) % layout.cols !== 0;
          const transformOrigin = \`\${isLastRow ? 'bottom' : 'top'} \${isRight ? 'left' : 'right'}\`;
          const scale = layout.cols === 1 ? 1 : (layout.width * 2 + layout.gap) / layout.width;

          return (
            <li
              key={hex}
              className={expanded ? 'is-zoomed' : ''}
            >
              <button
                className="unstyled"
                aria-expanded={expanded}
                onClick={() => setActiveIndex(expanded ? null : i)}
                style={{
                  transformOrigin,
                  transform: expanded ? \`scale(\${scale})\` : 'none',
                  zIndex: expanded ? 10 : 0,
                  transition: \`transform \${timeout}ms ease\`
                }}
              >
                <img
                  src={\`https://picsum.photos/400/200?\${hex}\`}
                  alt=""
                />
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}`,
      active: true,
    },
    "/styles.css": `
:root {
  --gap: 1rem;
  --duration-shrink: .5s;
  --duration-expand: .25s;
  --no-duration: 0s;
}

ul {
  all: unset;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
  grid-gap: var(--gap);
}

li {
  all: unset;
  transition-property: transform, opacity;
  transition-timing-function: ease-in-out;
  transition-duration: var(--duration-expand);
}

li.is-zoomed {
  transition-duration: var(--duration-shrink);
}

.is-zoomed li:not(.is-zoomed) {
  opacity: 0.3;
}

button {
  all: initial;
  display: block;
  aspect-ratio: 2/1;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
}

button:focus {
  outline: none;
}

li.is-zoomed button,
ul:not(.is-zoomed) button:focus {
  outline: 2px solid var(--accent);
  outline-offset: 1px;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

@media (prefers-reduced-motion) {
  li,
  li.is-zoomed {
    transition-duration: var(--no-duration);
  }
}

      ${baseStyles}
    `,
  };

  return <Code files={files} />;
}
