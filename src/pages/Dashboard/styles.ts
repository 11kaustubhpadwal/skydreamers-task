import { Typography } from "@mui/material";
import styled from "styled-components";

export const SkillItem = styled(Typography)`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0.125rem 0.125rem 0.125rem 0.125rem rgba(0, 0, 0, 0.05);
  padding: 0.5rem 1rem;
  transition: 0.3s;

  :hover {
    cursor: pointer;
    background-color: black;
    color: white;
    box-shadow: none;
  }
`;
