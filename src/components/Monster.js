import React from "react";

function Monster({ monsterSvg }) {
  return (
    <section className="MonsterCard">
      <div
        className="Monster"
        dangerouslySetInnerHTML={{ __html: monsterSvg }}
      />
    </section>
  );
}

export default Monster;
