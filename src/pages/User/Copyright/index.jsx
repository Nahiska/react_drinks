import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Copyright() {
  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
  };

  return (
    <Box py={4} >
      <Typography variant="body1" color="white" align="center">
        {'© '}
        <Link style={linkStyle} to="https://github.com/Nahiska">
          Nahiska
        </Link>{' '}
        {new Date().getFullYear()}
        {' All Rights Reserved'}
      </Typography>
    </Box>
  );
}