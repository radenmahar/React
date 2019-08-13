import React from "react";
import News from "./ListNews";

export default function Category({ match }) {
  return (
    <div>
      <News value={match.params.source_name} />
    </div>
  );
}
