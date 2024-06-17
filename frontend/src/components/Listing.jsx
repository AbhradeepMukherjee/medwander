import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axios from "axios";
export default function Listing() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const fetchData = async () => {
    const resp = await axios.get("http://localhost:8000/api/v1");
    setData(resp.data);
  };
  const headers = ["Id", "Form Type", "Name", "Country Code", "Phone Number"];
  const handleRefresh = () => {
    setRefresh(!refresh);
  };
  useEffect(() => {
    fetchData();
  }, [refresh]);
  return (
    <div style={{ textAlign: "center", height: "100vh", position: "relative" }}>
      <button
        onClick={handleRefresh}
        style={{ position: "absolute", right: "30px", bottom: "30px" }}
      >
        <RefreshIcon />
      </button>
      {data.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((header, index) => (
                  <TableCell
                    key={index}
                    style={{ fontWeight: "bold", fontSize: "larger" }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(1).map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <TableCell key={cellIndex}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

const RefreshIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-refresh-cw"
    >
      <polyline points="23 4 23 10 17 10"></polyline>
      <polyline points="1 20 1 14 7 14"></polyline>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
    </svg>
  );
};
