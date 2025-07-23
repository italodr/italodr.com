import { Code } from "./utilities/Code";
import { baseStyles } from "./utilities/styles";

export default function AlertDialog() {
  const files = {
    "/App.js": `
    import AlertDialog from "./AlertDialog";

    export default function App() {
      return <AlertDialog />;
    }
    `,
    "/AlertDialog.js": {
      code: `
import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function AlertDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleFocusTrap = (event) => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const focusableElements = dialog.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (event.key === "Tab") {
      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  };

  useEffect(() => {
    const handleKeyDownWrapper = (e) => handleKeyDown(e);
    const handleFocusTrapWrapper = (e) => handleFocusTrap(e);

    if (isOpen) {
      dialogRef.current?.querySelector('[role="document"]')?.focus();
      document.addEventListener("keydown", handleKeyDownWrapper);
      document.addEventListener("keydown", handleFocusTrapWrapper);
    } else {
      triggerRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDownWrapper);
      document.removeEventListener("keydown", handleFocusTrapWrapper);
    };
  }, [isOpen]);

  return (
    <>
      <dialog
        ref={dialogRef}
        role="alertdialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        open={isOpen}>
        <div role="document" tabindex="0">
          <h2 id="dialog-title">Your login session will expire in 5 minutes</h2>
          <p id="dialog-description">To extend your session, click the Extend session button</p>
          <button type="button" onClick={() => setIsOpen(false)}>Extend session</button>
        </div>
      </dialog>
      <button
        type="button"
        className="trigger"
        ref={triggerRef}
        onClick={() => setIsOpen(true)}>
        Open dialog
      </button>
    </>
  );
};`,
      active: true,
    },
    "/styles.css": `
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}

dialog {
  background-color: var(--surface);
  color: var(--foreground);
  border: var(--border);
  padding: 1em;
  position: fixed;
  top: 0;
  z-index: 99;
}

      ${baseStyles}
    `,
  };

  return <Code files={files} />;
}
