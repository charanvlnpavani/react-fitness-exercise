import React from "react";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{
          gap: { xm: "122px", xs: "40px" },
          mt: { xs: "20px", sm: "32px" },
          justifyContent: "none",
          px: "20px",
        }}
      >
        <Link to="/">
          {" "}
          <img
            src={Logo}
            style={{
              minWidth: "18px",
              maxWidth: "100px",
              margin: "0px",
              padding: "20px",
            }}
          />
        </Link>
        <Stack direction="row" gap="40px" fontSize="20px" alignItems="flex-end">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#3A1212",
              borderBottom: "3px solid #FF2625",
            }}
          >
            Home
          </Link>
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            Execrise
          </a>
        </Stack>
      </Stack>
    </div>
  );
};

export default Navbar;
