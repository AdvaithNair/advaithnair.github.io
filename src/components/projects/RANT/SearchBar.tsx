import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import "../../../css/RANT.css";
import { Dialog } from "@material-ui/core";
import { openLink } from "../../../types";

export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = (event: any) => {
    setOpen(true);
  };

  return (
    <div className="search-bar">
      <IconButton onClick={handleSubmit}>
        <SearchIcon />
      </IconButton>
      <Divider orientation="vertical" />
      <InputBase
        placeholder="Search Rantverse"
        value={query}
        onChange={(e: any) => setQuery(e.target.value)}
        onKeyPress={e => {
          if (e.key === "Enter") {
            handleSubmit(e);
          }
        }}
        fullWidth
      />
      <div style={{ paddingRight: "20px" }}></div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className="search-query">
          <h1>You Can't Search Here</h1>
          <h2 style={{ color: "#1677CB" }}>{query}</h2>
          <div className="button" onClick={() => openLink('https://rant-dd853.web.app/')}>Visit RANT Instead</div>
        </div>
      </Dialog>
    </div>
  );
};

export default SearchBar;
