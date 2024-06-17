import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { countryCodes } from "../../public/countryCode";
import { phoneFormat } from "../../public/phoneFormat";
import { useNavigate } from "react-router-dom";
export default function Form({ fType }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    formType: fType,
    name: "",
    countryCode: "",
    phoneNumber: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const selectedCode = e.target.value;
    setFormData((prev) => ({ ...prev, countryCode: selectedCode }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (formData.countryCode.trim() === "") {
      newErrors.countryCode = "Country Code is required";
    }
    if (formData.phoneNumber.trim() === "") {
      newErrors.phoneNumber = "Phone Number is required";
    } else {
      const regex = phoneFormat[formData.countryCode];
      if (!regex.test(formData.phoneNumber)) {
        newErrors.phoneNumber = `Invalid phone number format for ${formData.countryCode}`;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const createUser = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!validateForm()) return;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/submit",
        {
          formType: formData.formType,
          name: formData.name,
          countryCode: formData.countryCode,
          phoneNumber: formData.phoneNumber,
        },
        config
      );
      localStorage.setItem("user", data);
      navigate("/listing");
    } catch (err) {
      console.log(err);
    }
  };
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
        sx={{display: {xs: "none", md: "flex"}}}
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
        width={{md: "50%", xs: "100%"}}
        height="100vh"
        display="flex"
        flexDirection={{md: "row", xs: "column"}}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          component="form"
          gap={4}
          border="1px solid black"
          paddingX={4}
          paddingY={2}
          height="70%"
          width="50%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          borderRadius={5}
          onSubmit={createUser}
          autoComplete="off"
        >
          <Typography
            sx={{
              color: "#373A40",
              fontWeight: "medium",
              fontSize: "3rem",
            }}
          >
            Form {fType}
          </Typography>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            type="text"
            size="small"
            fullWidth
            required
            sx={{
              "& .MuiInputLabel-root": {
                fontSize: { xs: "12px", md: "14px" },
                paddingLeft: "8px",
                paddingRight: "8px",
              },
              "& .MuiInputBase-root": {
                fontSize: { xs: "12px", md: "14px" },
                paddingLeft: "8px",
                paddingRight: "8px",
              },
            }}
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            error={!!(formSubmitted && errors.name)}
            helperText={formSubmitted && errors.name}
          />
          <Box
            width="100%"
            display="flex"
            justifyContent="start"
            alignItems="center"
            gap={4}
          >
            <InputLabel id="country-code" sx={{fontSize: {xs: "12px", md: "14px"}}} required>
              Country Code
            </InputLabel>
            <Select
              id="countryCode"
              width="70%"
              required
              value={formData.countryCode}
              displayEmpty
              onChange={handleChange}
              sx={{
                fontSize: { xs: "12px", md: "14px" },
                minWidth: 120,
                backgroundColor: "inherit",
                color: "black",
                "& .MuiInputLabel-root": {
                  color: "black",
                },
              }}
            >
              {Object.entries(countryCodes).map(([country, code]) => (
                <MenuItem key={country} value={code}>
                  {`${country}: ${code}`}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <TextField
            id="phonenumber"
            label="Phone Number"
            variant="outlined"
            type="text"
            size="small"
            fullWidth
            required
            sx={{
              "& .MuiInputLabel-root": {
                fontSize: { xs: "12px", md: "14px" },
                paddingLeft: "8px",
                paddingRight: "8px",
              },
              "& .MuiInputBase-root": {
                fontSize: { xs: "12px", md: "14px" },
                paddingLeft: "8px",
                paddingRight: "8px",
              },
            }}
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))
            }
            error={!!(formSubmitted && errors.phoneNumber)}
            helperText={formSubmitted && errors.phoneNumber}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "#5A639C",
              border: "1px solid #1A2130",
              color: "white",
              borderRadius: "20px",
              boxShadow: "10px",
              height: "45px",
              marginTop: "10px",
            }}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
