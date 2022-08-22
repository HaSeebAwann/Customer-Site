import { Carousel } from "react-responsive-carousel";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  color: theme.palette.text.secondary,
}));
export default function Banner() {
  const matches = useMediaQuery('(min-width:1060px)');
  const matches1 = useMediaQuery('(max-width:1060px)');
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    axios
      .get("https://ecommerce-homepage.herokuapp.com/banners/?page=1&limit=10")
      .then((response) => {
        let img = [];
        const images = response.data.result.docs.map((value) => {
          return value.image.map((src) => {
            img.push(src.location);
          });
        });
        setBanners(img);
      });
  }, []);
  return (
    <Box sx={{ flexGrow: 1, margin: " 2% 2% 0% 2%" }}>
      <Grid container spacing={2}>
        {matches && <Grid item xs={3}>
          <Item >
            <Box height="385px">
              <Sidebar />
            </Box>
          </Item>
        </Grid>}
        <Grid item xs={matches ? 9 : 12}>
          <Item>
            <Carousel
              autoPlay={true}
              interval={2000}
              infiniteLoop={true}
              >
              {banners.map((value, index) => (
                <Box key={index} width="100%" sx={{ padding: "10px", height: { xs: "170px", md: "385px", sm: "210px" } }}>
                  <img alt="ok" src={value} height="100%" />
                </Box>
              ))}
            </Carousel>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
