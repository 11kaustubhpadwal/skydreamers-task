import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box sx={{ textAlign: "center" }} mt={2} mb={2}>
      <CircularProgress
        sx={{ "&.MuiCircularProgress-root": { color: "black" } }}
      />
    </Box>
  );
};

export default Loader;
