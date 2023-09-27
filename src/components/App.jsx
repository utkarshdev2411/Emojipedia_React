import React from "react";
import Emogis from "./Emogis";
import emogipedia from "../emojipedia";

function createCard(card) {
  return (
    <Emogis
      key={card.id}
      Emogis={card.emoji}
      title={card.name}
      content={card.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emogipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
