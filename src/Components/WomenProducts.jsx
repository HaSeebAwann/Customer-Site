import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";
const products = [{img:'https://bazaarghar.com/_next/image?url=https%3A%2F%2Fimages.bazaarghar.com%2Fgulahmed%2FTCE-22003.jpg&w=256&q=40',
price: '2600' ,
  discription:'wear loan Gul Ahmed three piece'},
  {img:'https://bazaarghar.com/_next/image?url=https%3A%2F%2Fimages.bazaarghar.com%2Fgulahmed%2FTCE-22002.jpg&w=256&q=40',
   price: '4300' ,
  discription:'T2 pc loan Gul Ahmed three piece'
},
{img:'https://bazaarghar.com/_next/image?url=https%3A%2F%2Fimages.bazaarghar.com%2Fgulahmed%2FTCN-22002.jpg&w=256&q=40',
price: '3600' ,
discription:"Loan 3 pcGul Ahmed three piece"
},
{img:'https://bazaarghar.com/_next/image?url=https%3A%2F%2Fimages.bazaarghar.com%2Fgulahmed%2FTCN-22002.jpg&w=256&q=40',
price: '3800' ,
discription:"orange Gul Ahmed three piece "
},
{img:"https://bazaarghar.com/_next/image?url=https%3A%2F%2Fimages.bazaarghar.com%2Fgulahmed%2FCBN-22022.jpg&w=256&q=40",
price: '4200' ,
discription:"cotton 3 pc Gul Ahmed three piece "
},
{img:'https://bazaarghar.com/_next/image?url=https%3A%2F%2Fimages.bazaarghar.com%2Fgulahmed%2FCBN-22023.jpg&w=256&q=40',
price: '5500' ,
discription:"3 pc printed Gul Ahmed three piece"
},
{img:'https://bazaarghar.com/_next/image?url=https%3A%2F%2Fimages.bazaarghar.com%2Fgulahmed%2FCBN-22015.jpg&w=384&q=40',
price: '4500' ,
discription:"3 Pc printed Gul Ahmed three piece"
},
{img:'https://bazaarghar.com/_next/image?url=https%3A%2F%2Fimages.bazaarghar.com%2Fgulahmed%2FTCE-22003.jpg&w=256&q=40',
price: '2800' ,
discription:"2 Pcs Gul Ahmed three piece"
},
{img:'https://bazaarghar.com/_next/image?url=https%3A%2F%2Fimages.bazaarghar.com%2Fgulahmed%2FTCN-22006.jpg&w=256&q=40',
price: '3200' ,
discription:"Gul Ahmed three piece"
}
]

export default function WomenProducts() {
  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Box sx={{ backgroundColor: "white", padding: "20px", margin: "2%" }}>
      <Box sx={containerStyles}>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", marginBottom: "1%" }} >
          Women
        </Typography>
        <Box>
          <Slider {...settings}>
          {products.map((value, index) => (
            <Box key={index} >
              <img
                alt="bazaarghar"
                className="productimg-btn"
                width="200px"
                height="100%"
                src={value.img}
              />
               <Typography sx={{color: "rgb(255, 131, 25)" , textAlign:"start"}}>
                {value.price + " PKR"}</Typography>
              <Typography sx={{fontSize:"14px" , textAlign:"start"}}>{value.discription}</Typography>
       
            </Box>
            
          ))}
          </Slider>
        </Box>
        <Button sx={{ margin: "1%", color: "blue" }}>View All</Button>
      </Box>
      <img
        alt="Banner"
        src="https://bazaarghar.com/_next/image?url=%2Fstatic%2Fbanners%2Fwomen1.png&w=1200&q=75"
        width="100%"
      />
    </Box>
  );
}
const containerStyles = {
  ".productimg-btn": { borderRadius: "15px" },
  textAlign: "center",
};
