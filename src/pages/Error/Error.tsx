import { Box, Typography } from "@mui/material";

import { Routes } from "../routes";
import { StyledButton } from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" m={3}>
      <Typography fontSize={18} fontWeight={500} mb={2}>
        Page not found {`:(`}
      </Typography>
      <StyledButton onClick={() => navigate(Routes.Home)}>
        Back to Home
      </StyledButton>
    </Box>
  );
};

export default Error;
