import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

export default function BasicBreadcrumbs() {
  return (
    <div>
      <Breadcrumbs>
        <Link to="/">Home</Link>
        <Link to="/watchlist">WatchList</Link>
      </Breadcrumbs>
    </div>
  );
}
