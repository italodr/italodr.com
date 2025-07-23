import { Code } from "./utilities/Code";
import { baseStyles } from "./utilities/styles";

export default function Tabs() {
  const files = {
    "/App.js": `
    import Tabs from "./Tabs";

    export default function App() {
      return <Tabs />;
    }
    `,
    "/Tabs.js": {
      code: `
import { useState, useEffect, useRef } from "react";
import "./styles.css";

const tabsData = [
  {
    id: "tabpanel-1",
    label: "Marie Curie",
    content: (
      <p>
        Marie Curie (1867-1934) was a pioneering physicist and chemist who conducted groundbreaking research on radioactivity. She was the first woman to win a Nobel Prize and the only person to win Nobel Prizes in multiple sciences (Physics and Chemistry).
      </p>
    )
  },
  {
    id: "tabpanel-2",
    label: "Rosalind Franklin",
    content: (
      <p>
        Rosalind Franklin (1920-1958) was a chemist and X-ray crystallographer whose work was crucial to understanding the molecular structures of DNA, RNA, viruses, coal, and graphite. Her X-ray diffraction images of DNA were key to identifying its double helix structure.
      </p>
    )
  },
  {
    id: "tabpanel-3",
    label: "Ada Lovelace",
    content: (
      <p>
        Ada Lovelace (1815-1852) was a British mathematician and writer who is often regarded as the first computer programmer. She wrote the first algorithm intended to be processed by a machine while working on Charles Babbage's proposed mechanical general-purpose computer.
      </p>
    )
  },
  {
    id: "tabpanel-4",
    label: "Jane Goodall",
    content: (
      <p>
        Jane Goodall (1934-present) is a primatologist and anthropologist known for her groundbreaking work with chimpanzees. Her 60-year study of wild chimpanzees in Gombe, Tanzania revolutionized our understanding of primate behavior and human evolution.
      </p>
    )
  }
];

export default function Tabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabsRef = useRef([]);

  useEffect(() => {
    tabsRef.current = tabsRef.current.slice(0, tabsData.length);
  }, []);

  const onKeyDown = (e, idx) => {
    let newIndex = idx;
    if (e.key === "ArrowRight") newIndex = (idx + 1) % tabsData.length;
    else if (e.key === "ArrowLeft") newIndex = (idx - 1 + tabsData.length) % tabsData.length;
    else if (e.key === "Home") newIndex = 0;
    else if (e.key === "End") newIndex = tabsData.length - 1;
    else return;

    e.preventDefault();
    setSelectedIndex(newIndex);
    tabsRef.current[newIndex].focus();
  };

  const onClick = idx => {
    setSelectedIndex(idx);
  };

  return (
    <div className="tabs">
      <h3 id="tablist-1">Women in Science</h3>
      <div role="tablist" aria-labelledby="tablist-1">
        {tabsData.map((tab, idx) => (
          <button
            key={tab.id}
            id={\`tab-\${idx + 1}\`}
            role="tab"
            aria-selected={selectedIndex === idx}
            aria-controls={tab.id}
            tabIndex={selectedIndex === idx ? 0 : -1}
            ref={el => (tabsRef.current[idx] = el)}
            onClick={() => onClick(idx)}
            onKeyDown={e => onKeyDown(e, idx)}
          >
            <span className="focus">{tab.label}</span>
          </button>
        ))}
      </div>

      {tabsData.map((tab, idx) => (
        <div
          key={tab.id}
          id={tab.id}
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={\`tab-\${idx + 1}\`}
          className={selectedIndex === idx ? "" : "hidden"}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};`,
      active: true,
    },
    "/styles.css": `
[role="tablist"] {
  display: flex;
  min-width: 100%;
}

[role="tab"],
[role="tab"]:focus,
[role="tab"]:hover {
  all: unset;
  background: var(--background);
  border: var(--border);
  cursor: pointer;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: var(--font-weight-bold);
  padding: 0.5rem 1rem;
  text-align: left;
}

[role="tab"] {
  display: inline-block;

  &[aria-selected="true"] {
    background: var(--accent);
    color: var(--foreground);
  }

  &[aria-selected="false"]:hover,
  &[aria-selected="false"]:focus,
  &[aria-selected="false"]:active {
    color: var(--accent);
  }
}

[role="tabpanel"] {
  background: var(--background);
  border: var(--border);
  min-height: 10em;
  overflow-y: auto;
  padding: 0.5rem 1rem;
  width: 100%;
}

[role="tabpanel"].hidden {
  display: none;
}

      ${baseStyles}
    `,
  };

  return <Code files={files} />;
}
