import React from "react";

function Emogis(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.Emogis}
        </span>
        <span>{props.title}</span>
      </dt>
      <dd>{props.content}</dd>
    </div>
  );
}

export default Emogis;
