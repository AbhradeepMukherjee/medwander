import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Button, Typography, Box } from "@mui/material";
export default function Home() {
  const navigate = useNavigate();
  return (
    <Box
      minHeight="100vh"
      width="100%"
      textAlign="center"
      display="flex"
      flexDirection="row"
    >
      <Box
        height="100vh"
        width="50%"
        bgcolor="#686D76"
        borderRight="1px solid black"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          sx={{
            color: "black",
            fontFamily: "",
            fontWeight: "bold",
            fontSize: "5rem",
          }}
        >
          Welcome
        </Typography>
      </Box>
      <Box
        width="50%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          gap={5}
          border="1px solid black"
          paddingX={4}
          paddingY={2}
          height="30%"
          width="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius={5}
        >
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "#5A639C",
              border: "1px solid #1A2130",
              color: "white",
              borderRadius: "20px",
              boxShadow: "10px",
              height: "45px"
            }}
            onClick={() => {
              navigate("/form-a");
            }}
          >
            Form A
          </Button>
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "#5A639C",
              border: "1px solid #1A2130",
              color: "white",
              borderRadius: "20px",
              boxShadow: "10px",
              height: "45px"
            }}
            onClick={() => {
              navigate("/form-b");
            }}
          >
            Form B
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
