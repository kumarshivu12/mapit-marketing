import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";

//Styles
const StyledButton = styled(Button)`
  text-transform: none;
  padding: 10px 50px;
`;

const ContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [interest, setInterest] = useState("");

  const handleChange = (event) => {
    setInterest(event.target.value);
  };

  return (
    <Stack direction="column" spacing={4}>
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={isMobile ? 4 : null}
        style={{ justifyContent: "space-between" }}
      >
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          placeholder="First Name"
          sx={{ width: isMobile ? "100%" : "45%" }}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          placeholder="Last Name"
          sx={{ width: isMobile ? "100%" : "45%" }}
        />
      </Stack>
      <Box>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          placeholder="abc@gmail.com"
          fullWidth
        />
      </Box>
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={isMobile ? 4 : null}
        style={{ justifyContent: "space-between" }}
      >
        <TextField
          id="outlined-basic"
          label="Company"
          variant="outlined"
          sx={{ width: isMobile ? "100%" : "45%" }}
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          placeholder="XXX-XXX-XXXX"
          sx={{ width: isMobile ? "100%" : "45%" }}
        />
      </Stack>
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
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <StyledButton
          variant="contained"
          style={{ backgroundColor: "#ff0000c9" }}
        >
          <Typography variant="h6" fontWeight={600}>
            Reset
          </Typography>{" "}
        </StyledButton>
        <StyledButton variant="contained">
          <Typography variant="h6" fontWeight={600}>
            Submit
          </Typography>{" "}
        </StyledButton>
      </Box>
    </Stack>
  );
};

export default ContactForm;
