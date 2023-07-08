import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

const ContactForm = () => {
  const [interest, setInterest] = useState("");

  const handleChange = (event) => {
    setInterest(event.target.value);
  };

  return (
    <Stack direction="column" spacing={4}>
      <Box style={{ display: "flex" }}>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          placeholder="Enter first name here..."
          sx={{ width: "45%" }}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          placeholder="Enter last name here..."
          sx={{ width: "45%" }}
        />
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          placeholder="Enter email here..."
          fullWidth
        />
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="Company"
          variant="outlined"
          sx={{ minWidthidth: "45%", maxWidth: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          placeholder="XXX-XXX-XXXX"
          sx={{ width: "45%" }}
        />
      </Box>
      <Box>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Product Of Interset
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={interest}
            label="Age"
            onChange={handleChange}
            variant="standard"
          >
            <MenuItem value={1}>Solution 1</MenuItem>
            <MenuItem value={2}>Solution 2</MenuItem>
            <MenuItem value={3}>Solution 3</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <TextField
          id="outlined-textarea"
          label="Comments"
          placeholder="Your message here..."
          multiline
          minRows={6}
          fullWidth
        />
      </Box>
    </Stack>
  );
};

export default ContactForm;
