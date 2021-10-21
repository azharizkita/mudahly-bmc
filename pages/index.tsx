import { Box, Grid, Typography, useTheme } from "@mui/material";
import type { NextPage } from "next";
import Navbar from "../src/components/Navbar";
import Panel from "../src/components/Panel";
import {
  AccountTree,
  AllInbox,
  AttachMoney,
  CardGiftcard,
  CheckBox,
  ConnectWithoutContact,
  Favorite,
  Group,
  Insights,
  Link,
} from "@mui/icons-material";

const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", overflowX: "hidden" }}>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "#E0E0E0",
          flexGrow: 1,
        }}
      >
        <div
          style={{ height: `calc(${theme.mixins.toolbar.minHeight}px - 8px)` }}
        />
        <Box
          style={{
            maxHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px + 8px)`,
            height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px + 8px)`,
          }}
          sx={{
            flexGrow: 1,
            p: 1,
            overflow: "auto",
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12} md={3}>
              <Panel
                title={"Key Partners"}
                avatar={<ConnectWithoutContact />}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Grid container spacing={1} direction={"column"}>
                <Grid item xs={12} md={6}>
                  <Panel title={"Key Activities"} avatar={<CheckBox />} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Panel title={"Key Resources"} avatar={<AllInbox />} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Panel title={"Value Proposition"} avatar={<CardGiftcard />} />
            </Grid>
            <Grid item xs={12} md={3}>
              <Grid container spacing={1} direction={"column"}>
                <Grid item xs={12} md={6}>
                  <Panel
                    title={"Customer Relationships"}
                    avatar={<Favorite />}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Panel title={"Channels"} avatar={<AccountTree />} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <Panel title={"Customer Segments"} avatar={<Group />} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Panel title={"Cost Structure"} avatar={<AttachMoney />} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Panel title={"Revanue Streams"} avatar={<Insights />} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography
                color="GrayText"
                component="div"
                variant="caption"
                align="center"
              >
                {`Updated at ${new Date().toLocaleString()}`}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
