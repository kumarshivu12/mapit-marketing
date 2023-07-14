import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import MuiAlert from "@mui/material/Alert";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const initialState = {
    name: "",
    email: "",
    company: "",
    phoneNumber: "",
    interest: "",
    message: "",
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [interest, setInterest] = useState("");
  const [data, setData] = useState(initialState);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleChange = (event) => {
    setInterest(event.target.value);
  };

  const handleReset = () => {
    setData(initialState);
    setInterest("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSnackbarOpen = (severity, message) => {
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Check for form validation
    if (
      !data.name ||
      !data.email ||
      !data.company ||
      !data.phoneNumber ||
      !data.message
    ) {
      handleSnackbarOpen("error", "Please fill in all required fields");
      return;
    }
    // Send email using emailjs
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data, "YOUR_USER_ID")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          // Reset form
          setData(initialState);
          setInterest("");
          event.target.reset(); // Reset the form fields
          handleSnackbarOpen(
            "success",
            "Congratulations! Your message has been sent successfully!"
          );
        },
        (error) => {
          console.log("FAILED...", error);
          handleSnackbarOpen(
            "error",
            "Failed to send the message. Please try again later."
          );
        }
      );
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Stack direction="column" spacing={4}>
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={isMobile ? 4 : null}
            style={{ justifyContent: "space-between" }}
          >
            <TextField
              id="outlined-basic"
              name="name"
              label="First Name"
              variant="outlined"
              placeholder="First Name"
              sx={{ width: isMobile ? "100%" : "45%" }}
              value={data.name}
              onChange={handleInputChange}
              required
            />
            <TextField
              id="outlined-basic"
              name="lastName"
              label="Last Name"
              variant="outlined"
              placeholder="Last Name"
              sx={{ width: isMobile ? "100%" : "45%" }}
              value={data.lastName}
              onChange={handleInputChange}
              required
            />
          </Stack>
          <Box>
            <TextField
              id="outlined-basic"
              name="email"
              label="Email"
              variant="outlined"
              placeholder="abc@gmail.com"
              fullWidth
              value={data.email}
              onChange={handleInputChange}
              type="email"
              required
            />
          </Box>
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={isMobile ? 4 : null}
            style={{ justifyContent: "space-between" }}
          >
            <TextField
              id="outlined-basic"
              name="company"
              label="Company"
              variant="outlined"
              sx={{ width: isMobile ? "100%" : "45%" }}
              value={data.company}
              onChange={handleInputChange}
              required
            />
            <TextField
              id="outlined-basic"
              name="phoneNumber"
              label="Phone Number"
              variant="outlined"
              placeholder="XXX-XXX-XXXX"
              sx={{ width: isMobile ? "100%" : "45%" }}
              value={data.phoneNumber}
              onChange={handleInputChange}
              type="number"
              required
            />
          </Stack>
          <Box>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Product Of Interest
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="interest"
                value={interest}
                label="Age"
                onChange={handleChange}
                variant="standard"
                required
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
              name="message"
              label="Comments"
              placeholder="Your message here..."
              multiline
              minRows={6}
              fullWidth
              value={data.message}
              onChange={handleInputChange}
              required
            />
          </Box>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              type="reset"
              variant="contained"
              style={{
                backgroundColor: "#ff0000c9",
                textTransform: "none",
                borderRadius: "30px",
                padding: "5px 25px",
              }}
              onClick={handleReset}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                style={{ color: "#fff" }}
              >
                Reset
              </Typography>{" "}
            </Button>
            <Button
              type="submit"
              variant="contained"
              style={{
                textTransform: "none",
                backgroundColor: "#1B93AE",
                borderRadius: "30px",
                padding: "5px 25px",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                style={{ color: "#fff" }}
              >
                Submit
              </Typography>{" "}
            </Button>
          </Box>
        </Stack>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default ContactForm;

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   Stack,
//   TextField,
//   Typography,
//   styled,
//   useMediaQuery,
// } from "@mui/material";
// import { useTheme } from "@emotion/react";

// const ContactForm = () => {
//   const initialState={
//     name:'',
//     email:'',
//     company:'',
//     phoneNumber:'',
//     interest:'',
//     message:'',
//   }
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [interest, setInterest] = useState("");
//   const [data,setData]=useState(initialState)
//   const handleChange = (event) => {
//     setInterest(event.target.value);
//   };

//   return (
//     <Stack direction="column" spacing={4}>
//       <Stack
//         direction={isMobile ? "column" : "row"}
//         spacing={isMobile ? 4 : null}
//         style={{ justifyContent: "space-between" }}
//       >
//         <TextField
//           id="outlined-basic"
//           label="First Name"
//           variant="outlined"
//           placeholder="First Name"
//           sx={{ width: isMobile ? "100%" : "45%" }}
//         />
//         <TextField
//           id="outlined-basic"
//           label="Last Name"
//           variant="outlined"
//           placeholder="Last Name"
//           sx={{ width: isMobile ? "100%" : "45%" }}
//         />
//       </Stack>
//       <Box>
//         <TextField
//           id="outlined-basic"
//           label="Email"
//           variant="outlined"
//           placeholder="abc@gmail.com"
//           fullWidth
//         />
//       </Box>
//       <Stack
//         direction={isMobile ? "column" : "row"}
//         spacing={isMobile ? 4 : null}
//         style={{ justifyContent: "space-between" }}
//       >
//         <TextField
//           id="outlined-basic"
//           label="Company"
//           variant="outlined"
//           sx={{ width: isMobile ? "100%" : "45%" }}
//         />
//         <TextField
//           id="outlined-basic"
//           label="Phone Number"
//           variant="outlined"
//           placeholder="XXX-XXX-XXXX"
//           sx={{ width: isMobile ? "100%" : "45%" }}
//         />
//       </Stack>
//       <Box>
//         <FormControl fullWidth>
//           <InputLabel id="demo-simple-select-label">
//             Product Of Interset
//           </InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={interest}
//             label="Age"
//             onChange={handleChange}
//             variant="standard"
//           >
//             <MenuItem value={1}>Solution 1</MenuItem>
//             <MenuItem value={2}>Solution 2</MenuItem>
//             <MenuItem value={3}>Solution 3</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>
//       <Box>
//         <TextField
//           id="outlined-textarea"
//           label="Comments"
//           placeholder="Your message here..."
//           multiline
//           minRows={6}
//           fullWidth
//         />
//       </Box>
//       <Box style={{ display: "flex", justifyContent: "space-between" }}>
//         <Button
//           variant="contained"
//           style={{
//             backgroundColor: "#ff0000c9",
//             textTransform: "none",
//             borderRadius: "30px",
//             padding: "5px 25px",
//           }}
//         >
//           <Typography variant="h6" fontWeight={600} style={{ color: "#fff" }}>
//             Reset
//           </Typography>{" "}
//         </Button>
//         <Button
//           variant="contained"
//           style={{
//             textTransform: "none",
//             backgroundColor: "#1B93AE",
//             borderRadius: "30px",
//             padding: "5px 25px",
//           }}
//         >
//           <Typography variant="h6" fontWeight={600} style={{ color: "#fff" }}>
//             Submit
//           </Typography>{" "}
//         </Button>
//       </Box>
//     </Stack>
//   );
// };

// export default ContactForm;
