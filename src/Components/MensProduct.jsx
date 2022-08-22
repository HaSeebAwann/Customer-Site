import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";
const products = [{
  img: 'https://bazaarghar.com/_next/image?url=https%3A%2F%2Fcdn.bazaarghar.com%2F16605093048991660509305533.jpeg&w=384&q=40',
  price: '300',
  discription: 'Gold perfume for men frag'
},
{
  img: 'https://bazaarghar.com/_next/image?url=https%3A%2F%2Fimages.bazaarghar.com%2FThe%20Shop%2FShop-1108.jpg&w=256&q=40',
  price: '700',
  discription: 'The Shop T-shirt for men avail'
},
{
  img: 'https://bazaarghar.com/_next/image?url=https%3A%2F%2Fcdn.bazaarghar.com%2F16604307008271660430698117.jpeg&w=256&q=40',
  price: '700',
  discription: "Men's China trouser elastic comfort"
},
{
  img: 'https://bazaarghar.com/_next/image?url=https%3A%2F%2Fimages.bazaarghar.com%2Fkhatrimall%2FKHATRI-014.jpg&w=256&q=40',
  price: '1200',
  discription: " HK# smart watch best shop "
},
{
  img: 'https://bazaarghar.com/_next/image?url=https%3A%2F%2Fimages.bazaarghar.com%2Fwings%2FTR-1007.jpg&w=256&q=40',
  price: '2200',
  discription: "wings supreme trouser for men's fashion "
},
{
  img: 'https://bazaarghar.com/_next/image?url=https%3A%2F%2Fimages.bazaarghar.com%2Fdiscountsale%2F1305.jpg&w=256&q=40',
  price: '2600',
  discription: "men's pent shirt styled fashion colors"
},
{
  img: 'https://bazaarghar.com/_next/image?url=https%3A%2F%2Fimages.bazaarghar.com%2Ftrendy%2F710.jpg&w=256&q=40',
  price: '600',
  discription: "leather belt for men gauranteeed"
},
{
  img: 'https://bazaarghar.com/_next/image?url=https%3A%2F%2Fimages.bazaarghar.com%2Fwings%2FTR-1007.jpg&w=256&q=40',
  price: '2200',
  discription: "wings supreme trouser for men's fashion"
},
{
  img: 'https://bazaarghar.com/_next/image?url=https%3A%2F%2Fimages.bazaarghar.com%2Fgulahmed%2FTCN-22006.jpg&w=256&q=40',
  price: '3200',
  discription: "wings supreme trouser for men's fashion"
}
]
export default function MensProduct() {
  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    arrows: false,
    slidesToScroll: 2,
  };
  return (
    <Box sx={{ backgroundColor: "white", padding: "20px", margin: "2% 2%" }}>
      <Box sx={containerStyles}>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", marginBottom: "1%" }} >
          Men's Fashion
        </Typography>
        <Box>
          <Slider {...settings}>
            {products.map((value, index) => (
              <Box key={index}>
              <Box>
                <img
                  alt="bazaarghar"
                  className="productimg-btn"
                  width="200px"
                  height="auto"
                  src={value.img}
                />
                <Typography
                  sx={{ color: "rgb(255, 131, 25)", textAlign: "start" }}
                >
                  {value.price + " PKR"}
                </Typography>
                <Typography sx={{ fontSize: "14px", textAlign: "start" }}>
                  {value.discription}
                </Typography>
              </Box>
            </Box>
            ))}
          </Slider>
        </Box>
        <Button sx={{ margin: "1%", color: "blue" }}>View All</Button>
      </Box>
      <Box >
        <img
          alt="Banner"
          src="https://bazaarghar.com/_next/image?url=%2Fstatic%2Fbanners%2Fmen-category1.png&w=1920&q=75"
          width="100%"
        />
      </Box>
    </Box>
  );
}
const containerStyles = {
  ".productimg-btn": { borderRadius: "15px" },
  textAlign: "center",
};
