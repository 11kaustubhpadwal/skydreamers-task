import { Grid, Typography } from "@mui/material";
import { appFeaturesList, mySkills } from "./constants";

import React from "react";
import { SkillItem } from "./styles";

const Dashboard = () => {
  return (
    <>
      <Typography fontSize={18} fontWeight={500}>
        App features :
      </Typography>
      <Grid container spacing="1rem" mt={1} mb={4}>
        {appFeaturesList.map((feature) => (
          <Grid item key={`app-feature-list-item-${feature.id}`}>
            <SkillItem>{feature.feature}</SkillItem>
          </Grid>
        ))}
      </Grid>
      <Typography fontSize={18} fontWeight={500} mt={3}>
        My skills :
      </Typography>
      <Grid container spacing="1rem" mt={1} mb={4}>
        {mySkills.map((skill) => (
          <Grid item key={`skill-list-item-${skill.id}`}>
            <SkillItem>{skill.skill}</SkillItem>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default React.memo(Dashboard);
