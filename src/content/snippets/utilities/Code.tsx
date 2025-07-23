import type { SandpackFiles, SandpackPredefinedTemplate } from "@codesandbox/sandpack-react";

import { Sandpack } from "@codesandbox/sandpack-react";

export function Code({
  dependencies,
  files,
  template,
}: {
  dependencies?: Record<string, string>;
  files: SandpackFiles;
  template?: SandpackPredefinedTemplate;
}) {
  return (
    <Sandpack
      files={files}
      theme="auto"
      template={template || "react"}
      customSetup={{
        dependencies,
      }}
    />
  );
}
