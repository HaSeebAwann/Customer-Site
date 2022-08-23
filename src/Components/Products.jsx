import { useState, useEffect } from "react";
import axios from "axios";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";
export default function Products() {
  const [productimg, setProductimg] = useState([]);
  const [price, setPrice] = useState([]);
  const [discription, setDiscription] = useState([]);
  useEffect(() => {
    axios
      .get("https://ecommerce-homepage.herokuapp.com/products/?page=1&limit=12")
      .then((response) => {
        const products = response.data.result.docs.map((imag) => {
          return imag.images[0].location;
        });
        setProductimg(products);
        const price = [];
        const disc = [];
        const details = response.data.result.docs.map((value, index) => {
          price.push(value.price);
          disc.push(value.description);
        });
        setPrice(price);
        setDiscription(disc);
      });
  }, []);
  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  return (
    <Box sx={{ backgroundColor: "white", padding: "20px", margin: "1% 2%" }}>
      <Box sx={containerStyles}>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", marginBottom: "1%" }}
        >
          Life Style
        </Typography>
        <Box>
          <Slider {...settings}>
            {productimg.map((value, index) => (
              <Box key={index}>
                <Box>
                  <img
                    alt="bazaarghar"
                    className="productimg-btn"
                    width="200px"
                    height="200px"
                    src={value}
                  />
                  <Typography
                    sx={{ color: "rgb(255, 131, 25)", textAlign: "start" }}
                  >
                    {price[index] + " PKR"}
                  </Typography>
                  <Typography sx={{ fontSize: "14px", textAlign: "start" }}>
                    {discription[index]}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
        <Button sx={{ margin: "1%", color: "blue" }}>View All</Button>
      </Box>
      <img
        alt="Banner"
        src="https://bazaarghar.com/_next/image?url=%2Fstatic%2Fbanners%2Fhome1.png&w=1920&q=75"
        width="100%"
      />
    </Box>
  );
}
const containerStyles = {
  ".productimg-btn": { borderRadius: "15px" },
  textAlign: "center",
};
