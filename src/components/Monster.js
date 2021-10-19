import React from "react";

function Monster({ monsterSvg }) {
  return (
    <section className="MonsterCard">
      <div
        className="Monster"
        dangerouslySetInnerHTML={{ __html: monsterSvg }}
      />
      <h1>Cool SVG Monster</h1>
    </section>
  );
}

export default Monster;
