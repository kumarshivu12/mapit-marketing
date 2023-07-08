import React from "react";
import {
  Box,
  Typography,
  Grid,
  styled,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";

//Components
import banner from "../../assets/images/Solution3Banner.jpg";
import { Button2 } from "../../components/Buttons/Buttons";

const Solution2 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Box style={{ position: "relative", height: isMobile ? "50vh" : "70vh" }}>
        <img
          src={banner}
          alt="banner"
          width="100%"
          height="100%"
          style={{ opacity: 0.3 }}
        />
        <Stack
          direction="column"
          spacing={4}
          justifyContent="center"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            padding: "20px",
          }}
        >
          <Box>
            <Typography color="secondary" fontWeight={700} variant="h2">
              Customer engagement{" "}
              <Typography
                variant="h2"
                fontWeight={700}
                style={{ color: "black" }}
                component="span"
              >
                in malls or big retail/franchise stores
              </Typography>{" "}
            </Typography>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Redefining customer interactions through Indoor Positioning
            </Typography>
          </Box>
          <Button2 text="Ask for a Demo" />
        </Stack>
      </Box>
      <Box
        style={{ padding: isMobile ? "4vh 3vw 2vh 3vw" : "8vh 5vw 4vh 5vw" }}
      >
        <Box>
          <Typography variant="body1">
            Indoor Positioning Systems (IPS) are needed in hospitals to address
            various challenges and improve operational efficiency.
            <ol>
              <li>
                Tracking Patients:
                <ul style={{ padding: "25px" }}>
                  <li>
                    Hospitals require the ability to track the position of
                    specific patients for various reasons, including monitoring
                    their movements within the facility.
                  </li>
                  <li>
                    {" "}
                    Tracking patients helps enhance patient safety, optimize
                    workflows, and improve care coordination within the
                    hospital.
                  </li>
                </ul>
              </li>
              <li>
                Tracking High-Value Assets:
                <ul style={{ padding: "25px" }}>
                  <li>
                    Hospitals face challenges in tracking high-value assets such
                    as equipment and devices, which can be misplaced or hidden
                    by staff, leading to unnecessary expenses.
                  </li>
                  <li>
                    {" "}
                    Implementing asset tracking solutions helps hospitals
                    efficiently locate and manage these assets, reducing costs,
                    improving asset utilization, and minimizing equipment loss.
                  </li>
                </ul>
              </li>
              <li>
                Visitor Navigation:
                <ul style={{ padding: "25px" }}>
                  <li>
                    Navigating within a hospital can be complex and confusing
                    for visitors, causing inconvenience and potential delays.
                  </li>
                  <li>
                    {" "}
                    Providing a navigation system or mobile app specifically
                    designed for hospitals helps visitors easily find their way,
                    reducing stress and improving the overall visitor
                    experience.
                  </li>
                </ul>
              </li>
              <li>
                Customer Experience and Insurance Ratings:
                <ul style={{ padding: "25px" }}>
                  <li>
                    Hospitals in the US receive insurance ratings based on their
                    customer experience, which impacts the insurance stipends
                    they receive.
                  </li>
                  <li>
                    {" "}
                    Focusing on enhancing customer experience yields a favorable
                    return on investment for hospitals, as higher ratings result
                    in increased insurance reimbursements and improved financial
                    outcomes.
                  </li>
                </ul>
              </li>
            </ol>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Solution2;
