import React from "react";
import { Grid } from "@mui/material";
import TrashCanSidebar from "../components/TrashCanSidebar";

const TrashCanPage = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TrashCanSidebar />
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={9}>
          {/* Rest of your page content goes here */}
        </Grid>
      </Grid>
    </div>
  );
};

export default TrashCanPage;
