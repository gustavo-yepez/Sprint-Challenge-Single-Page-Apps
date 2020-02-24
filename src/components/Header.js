import React from "react";
import { Link } from "react-router-dom";
import CharacterList from "./CharacterList";

export default function Header() {
  return (
    <header className="ui centered">
      <nav>
        <div className="nav-links">
      </div>
      </nav>
     <Link to="/">
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </Link>
    </header>
  );
}
