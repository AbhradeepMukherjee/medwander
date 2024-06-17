import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Button, Typography, Box } from "@mui/material";
export default function Home() {
  const navigate = useNavigate();
  useEffect(()=>{
    const userInfo = localStorage.getItem("user");
    if(userInfo) navigate("/listing"); 
  },[])
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
        justifyContent="center"
        alignItems="center"
        sx={{display: {xs: "none", md: "flex"}}}
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
        width={{md: "50%", xs: "100%"}}
        height="100vh"
        display="flex"
        flexDirection={{md: "row", xs: "column"}}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          sx={{
            color: "black",
            fontFamily: "",
            fontWeight: "bold",
            fontSize: "3rem",
            display: {md: "none"}
          }}
        >
          Welcome
        </Typography>
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
