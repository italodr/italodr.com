import { Code } from "./utilities/Code";
import { baseStyles } from "./utilities/styles";

export default function GroupedCheckbox() {
  const files = {
    "/App.js": `
    import GroupedCheckbox from "./GroupedCheckbox";

    export default function App() {
      return <GroupedCheckbox />;
    }
    `,
    "/GroupedCheckbox.js": {
      code: `
import React, { useRef, useState, useEffect } from "react";

const initialChecks = [false, false, false];

export default function CheckboxMixedGroup() {
  const [checks, setChecks] = useState(initialChecks);
  const [parentState, setParentState] = useState("false");
  const parentRef = useRef(null);

  useEffect(() => {
    const allChecked = checks.every(Boolean);
    const allUnchecked = checks.every((x) => !x);
    if (allChecked) setParentState("true");
    else if (allUnchecked) setParentState("false");
    else setParentState("mixed");
  }, [checks]);

  function handleParentClick() {
    if (parentState === "true") {
      setChecks([false, false, false]);
    } else {
      setChecks([true, true, true]);
    }
  }

  function handleChildChange(idx) {
    setChecks((prev) =>
      prev.map((val, i) => (i === idx ? !val : val))
    );
  }

  function handleParentKeyDown(e) {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      handleParentClick();
    }
  }

  return (
    <div className="checkbox-group-demo">
      <fieldset>
        <legend>Condimentos para el sándwich</legend>
        <div
          role="checkbox"
          aria-checked={parentState}
          aria-controls="lettuce tomato mustard"
          tabIndex={0}
          className="parent-checkbox"
          ref={parentRef}
          onClick={handleParentClick}
          onKeyDown={handleParentKeyDown}
        >
          <span className="parent-checkbox-box">
            <svg
              className="checkbox-icon"
              viewBox="0 0 24 24"
              style={{ display: parentState === "true" ? "block" : "none" }}
            >
              <polyline
                points="20 6 10 18 4 12"
                style={{
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 2
                }}
              />
            </svg>
            <span
              className="checkbox-mixed"
              style={{
                display: parentState === "mixed" ? "block" : "none"
              }}
            />
          </span>
          <span>Seleccionar todo</span>
        </div>
        <div>
          <label className="child-checkbox">
            <input
              id="lettuce"
              type="checkbox"
              checked={checks[0]}
              onChange={() => handleChildChange(0)}
            />
            Lechuga
          </label>
          <label className="child-checkbox">
            <input
              id="tomato"
              type="checkbox"
              checked={checks[1]}
              onChange={() => handleChildChange(1)}
            />
            Tomate
          </label>
          <label className="child-checkbox">
            <input
              id="mustard"
              type="checkbox"
              checked={checks[2]}
              onChange={() => handleChildChange(2)}
            />
            Mostaza
          </label>
        </div>
      </fieldset>
    </div>
  );
};`,
      active: true,
    },
    "/styles.css": `
.parent-checkbox {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5em;
  user-select: none;
  margin-bottom: 1em;
}

.parent-checkbox-box {
  width: 1.5rem;
  height: 1.5rem;
  border: var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.15rem;
  background: var(--background);
}

.parent-checkbox[aria-checked="true"] .parent-checkbox-box {
  background: var(--accent);
  border-color: var(--accent);
}

.parent-checkbox[aria-checked="true"] .checkbox-icon,
.parent-checkbox[aria-checked="mixed"] .checkbox-mixed {
  display: block;
}

.checkbox-icon, .checkbox-mixed {
  display: none;
}

.checkbox-icon {
  width: 1rem;
  height: 1rem;
  color: var(--foreground);
}

.checkbox-mixed {
  width: 1rem;
  height: 0.15rem;
  background: var(--foreground);
  border-radius: 0.15rem;
}

fieldset {
  all: unset;
}

legend {
  all: unset;
  font-weight: var(--font-weight-bold);
  margin-bottom: 1.5rem;
}

.child-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 0.5em;
}

      ${baseStyles}
    `,
  };

  return <Code files={files} />;
}
