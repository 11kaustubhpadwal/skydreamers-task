import { Box, Grid, Typography } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";

import React from "react";
import { navLinks } from "./constants";

const Home = () => {
  const location = useLocation();

  return (
    <>
      <Grid container p={4} spacing="1rem">
        {navLinks.map((navLink, index) => (
          <Grid item key={`nav-link-item-${index}`}>
            <Link to={navLink.href}>
              <Typography
                sx={{
                  color: "black",
                  ":hover": {
                    opacity: location.pathname === navLink.href ? "1" : ".5",
                  },
                  borderBottom:
                    location.pathname === navLink.href
                      ? ".188rem solid black"
                      : "none",
                }}
                fontWeight={location.pathname === navLink.href ? 500 : 400}
                fontSize={18}
              >
                {navLink.name}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Box pl={4} pr={4} pb={4}>
        <Outlet />
      </Box>
    </>
  );
};

export default React.memo(Home);
