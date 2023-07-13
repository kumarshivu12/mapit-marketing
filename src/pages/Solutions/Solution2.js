import { useTheme } from "@emotion/react";
import {
  Stack,
  Box,
  useMediaQuery,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
//Components
import Loyality from "../../assets/images/Loyality.webp";
import Time from "../../assets/images/Loyality.webp";
import Valuation from "../../assets/images/Loyality.webp";
import Rating from "../../assets/images/Loyality.webp";
import Behaviour from "../../assets/images/Behaviour.webp";
import Sales from "../../assets/images/Sales.webp";
import banner from "../../assets/images/Solution2Banner.webp";
import image1 from "../../assets/images/Solution2(1).webp";
import image2 from "../../assets/images/Solution2(2).webp";
import { Button2 } from "../../components/Buttons/Buttons";
import Contact from "../Contact/Contact";

//Styles
const Tag = styled(Box)`
  background: #ffffff;
  cursor: pointer;
  box-shadow: -2.98231px -2.98231px 37.7759px -9.94102px rgba(0, 0, 0, 0.2),
    2.98231px 2.98231px 37.7759px -9.94102px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 30%;
  aspect-ratio: 1/1;
  transition: box-shadow 0.3s, transform 0.3s;
  margin: 30px 0 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 0 0 15px 3px #00c4f0;
    transform: scale(1.05);
  }
`;

const Solution2 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Box
        style={{
          minHeight: isMobile ? "50vh" : "70vh",
          maxWidth: "100vw",
          clipPath: isMobile
            ? "polygon(49.7% 100%, 100% 90%, 100% 0.3%, 0% 0%, 0% 90%)"
            : "polygon(49.7% 100%, 100% 80%, 100% 0.3%, 0% 0%, 0% 80%)",
          marginBottom: isMobile ? "4vh" : "8vh",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
        }}
      >
        <Box
          style={{
            minHeight: isMobile ? "50vh" : "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#e8e8e8ba",
          }}
        >
          <div>
            <Stack
              direction="column"
              spacing={4}
              justifyContent="center"
              alignItems="center"
              style={{
                padding: "20px",
              }}
            >
              <Box style={{ textAlign: "center" }}>
                <Typography color="secondary" fontWeight={700} variant="h1">
                  Hybrid{" "}
                  <Typography
                    variant="h1"
                    fontWeight={700}
                    style={{ color: "black" }}
                    component="span"
                  >
                    Workspaces
                  </Typography>{" "}
                </Typography>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Revolutionize your work environment with our precise indoor
                  positioning for dynamic hybrid workspaces
                </Typography>
              </Box>
              <Button2 text="Ask for a Demo" />
            </Stack>
          </div>
        </Box>
      </Box>
      <Box style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}>
        <Typography variant="body1">
          <ul>
            <li>
              Common experiences in malls: getting lost, seeking directions,
              missing out on nearby sales.
            </li>
            <li>
              {" "}
              Mall management's perspective raises questions about customer
              management and value to partner stores.
            </li>
            <li>
              {" "}
              Limited customer knowledge: Malls lack insights about their
              customers. ty.
            </li>
            <li>
              Primitive practices: Basic aspects such as footfall counting rely
              on manual counters operated by security personnel.
            </li>
            <li>
              {" "}
              Lack of customer retention strategies: Malls struggle to retain
              customers effectively.
            </li>
            <li>
              {" "}
              Inadequate customer marketing: Malls have minimal marketing
              efforts targeting customers.
            </li>
          </ul>
        </Typography>
      </Box>
      <Grid
        container
        flexDirection={isMobile ? "column-reverse" : "row"}
        style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}
      >
        <Grid
          item
          lg={6}
          md={7}
          sm={12}
          xs={12}
          style={{ padding: "10px" }}
          alignSelf="center"
        >
          <Typography variant="body1">
            <strong>Bluetooth Low Energy (BLE)</strong> devices are a promising
            technology for indoor positioning.
            <ul>
              <li>
                BLE devices are small, low-power devices that can be attached or
                placed throughout a building.
              </li>{" "}
              <li>
                They broadcast signals that can be detected by other BLE devices
                for determining location.
              </li>
            </ul>
          </Typography>
        </Grid>
        <Grid
          item
          lg={6}
          md={5}
          sm={12}
          xs={12}
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            loading="lazy"
            src={image1}
            alt="banner"
            style={{ width: "90%", height: "auto" }}
          />
        </Grid>
      </Grid>
      <Box style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}>
        <Typography
          variant="h5"
          fontWeight={600}
          color="secondary"
          textAlign="center"
        >
          How do we bridge this gap between the people visiting the mall and the
          mall itself?
        </Typography>
      </Box>
      <Box style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}>
        <Typography variant="h6" fontWeight={600}>
          Dedicated Mobile app for the mall
        </Typography>
        <Typography variant="body1">
          Dedicated Mobile app for the mall Customers use a mobile app to
          navigate within the mall, look for sales and offers and get points for
          engagement. Brands and Mall engage directly with the customer.
        </Typography>
      </Box>

      <Box
        style={{
          margin: isMobile ? "4vh 0" : "8vh 0",
          position: "relative",
          height: isMobile ? "50vh" : "75vh",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Box
          style={{
            clipPath: "polygon(0 25%, 100% 0%, 100% 75%, 0% 100%)",
            background: "rgba(73, 169, 190, 1)",
            height: isMobile ? "50vh" : "75vh",
            width: "100%",
          }}
        ></Box>
        <img
          loading="lazy"
          src={image2}
          alt="banner"
          style={{
            position: "absolute",
            width: "90%",
            height: "90%",
            zIndex: 2,
          }}
        />
      </Box>
      <Box style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}>
        <Typography
          variant="h3"
          fontWeight={600}
          color="primary"
          textAlign="center"
        >
          Benefits{" "}
          <Typography
            component="span"
            variant="h3"
            fontWeight={600}
            style={{ color: "#444444" }}
          >
            of workplace seat booking and workstation management
          </Typography>
        </Typography>
      </Box>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        style={{
          padding: isMobile ? "4vh 3vw " : "8vh 5vw ",
        }}
      >
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          style={{
            padding: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Tag>
              <img
                loading="lazy"
                src={Time}
                alt="Time and Energy Saving"
                width="60%"
                height="60%"
              />
            </Tag>
          </Box>
          <Box style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              Time and Energy Saving
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              The dedicated mobile app for the mall enables customers to easily
              navigate within the mall, saving them time and effort in finding
              their desired stores or products. The app provides real-time
              indoor positioning and directions, ensuring a seamless shopping
              experience.
            </Typography>{" "}
          </Box>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          style={{
            padding: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
          }}
        >
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Tag>
              <img
                loading="lazy"
                src={Loyality}
                alt="Increased Customer Loyalty"
                width="60%"
                height="60%"
              />
            </Tag>
          </Box>
          <Box style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              Increased Customer Loyalty
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              By offering features like personalized offers, exclusive
              discounts, and rewards for engagement, the company can enhance
              customer loyalty. The app encourages repeat visits and strengthens
              the bond between customers and the mall.
            </Typography>{" "}
          </Box>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          style={{
            padding: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
          }}
        >
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Tag>
              <img
                loading="lazy"
                src={Valuation}
                alt=" Increased Valuation"
                width="60%"
                height="60%"
              />
            </Tag>
          </Box>
          <Box style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              Increased Valuation
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              The availability of a sophisticated mobile app with advanced
              indoor positioning technology adds value to the mall. Investors
              and stakeholders perceive the mall as being technologically
              advanced, which can positively impact its valuation in the market.
            </Typography>{" "}
          </Box>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          style={{
            padding: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
          }}
        >
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Tag>
              <img
                loading="lazy"
                src={Rating}
                alt="Improved Customer Experience Rating"
                width="60%"
                height="60%"
              />
            </Tag>
          </Box>
          <Box style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              Improved Customer Experience Rating
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              With the dedicated mobile app, customers can easily access
              information about ongoing sales, offers, and events within the
              mall. This enhances their overall experience, leading to higher
              customer satisfaction ratings and positive reviews, further
              boosting the mall's reputation.
            </Typography>{" "}
          </Box>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          style={{
            padding: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
          }}
        >
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Tag>
              <img
                loading="lazy"
                src={Behaviour}
                alt=" Monitoring Customer Behavior"
                width="60%"
                height="60%"
              />
            </Tag>
          </Box>
          <Box style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              Monitoring Customer Behavior
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              The mobile app allows brands and the mall to anonymously aggregate
              and analyze customer behavior data. By understanding customer
              preferences, foot traffic patterns, and shopping habits, brands
              and the mall can gain valuable insights to make data-driven
              decisions, personalize marketing strategies, and provide more
              targeted offerings.
            </Typography>{" "}
          </Box>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          style={{
            padding: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
          }}
        >
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Tag>
              <img
                loading="lazy"
                src={Sales}
                alt="Increased Sales"
                width="60%"
                height="60%"
              />
            </Tag>
          </Box>
          <Box style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              Increased Sales
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              The mobile app facilitates direct engagement between brands, the
              mall, and customers. With personalized offers, notifications, and
              recommendations, the app drives customer engagement, resulting in
              increased footfall, higher conversion rates, and ultimately,
              improved sales for both the brands and the mall.
            </Typography>{" "}
          </Box>
        </Grid>
      </Grid>
      <Contact />
    </Box>
  );
};

export default Solution2;
