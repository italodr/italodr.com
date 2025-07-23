import { Code } from "./utilities/Code";
import { baseStyles } from "./utilities/styles";
import { htmlTop, htmlBottom } from "./utilities/html";

export default function DefinitionList() {
  const files = {
    "/index.html": {
      code: `
    ${htmlTop("Definition List")}
<h1>Definition List</h1>
<dl aria-label="Nautical terms">
  <dt>Knot</dt>
  <dd>
    A <i>knot</i> is a unit of speed equaling 1
      nautical mile per hour (1.15 miles per hour or 1.852
      kilometers per hour).
  </dd>
  <dt>Port</dt>
  <dd>
    <i>Port</i> is the nautical term (used on
      boats and ships) that refers to the left side
      of a ship, as perceived by a person facing towards
      the bow (the front of the vessel).
  </dd>
  <dt>Starboard</dt>
  <dd>
    <i>Starboard</i> is the nautical term (used
      on boats and ships) that refers to the right
      side of a vessel, as perceived by a person
      facing towards the bow (the front of the vessel).
  </dd>
</dl>
    ${htmlBottom}`,
      active: true,
    },
    "/styles.css": `
dl {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 4fr;
  place-items: start;
}

dt {
  font-weight: 700;
}

dd {
  margin: 0;
}

      ${baseStyles}
    `,
  };

  return <Code files={files} template="static" />;
}
