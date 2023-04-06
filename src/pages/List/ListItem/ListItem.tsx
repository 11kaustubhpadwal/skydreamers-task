import { Grid, Typography } from "@mui/material";
import { cardDescription, cardImage, cardWrapper } from "./styles";

import { ListItemProps } from "./types";
import React from "react";

const ListItem = ({ imageURL, title, description }: ListItemProps) => {
  return (
    <Grid container sx={cardWrapper}>
      <Grid item xs={12} sm={4} pl={1}>
        <img
          src={imageURL}
          alt="company"
          style={{ ...cardImage, objectFit: "cover" }}
        />
      </Grid>
      <Grid item xs={12} sm={8} pl={2} pt={1}>
        <Typography fontWeight={600} mb={1} fontSize={18}>
          {title}
        </Typography>
        <Typography sx={cardDescription}>{description}</Typography>
      </Grid>
    </Grid>
  );
};

export default React.memo(ListItem);
