import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import { Image } from "@mui/icons-material";

function Header({ sections }) {
  return (
    <React.Fragment>
      <Toolbar
        component="nav"
        sx={{ display:"flex", 
        width:"100%",
        height:"100px",
        gap:"10px", justifyContent:"center",textAlign:"center", overflowX: "auto" }}
      >
        <Image src/>
        {sections?.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section?.title}
            variant="body2"
            href={section?.url}
            sx={{p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;
