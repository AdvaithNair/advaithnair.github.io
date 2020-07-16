import React from "react";
import secret from "../content/secret.json";
import { openLink } from "../types";

const Secret: React.FC = () => {
  return (
    <div className="text-center">
      <h1>Secret</h1>
      <div
        className="button"
        onClick={() => openLink(secret.link)}
      >
        Secret
      </div>
    </div>
  );
};

export default Secret;
