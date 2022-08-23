import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import styled from "@mui/material/styles/styled";
import { Link } from "@mui/material";

const LinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  "& a": {
    padding: theme.spacing(0, 2, 0, 2),
    textDecoration: "none",
    fontWeight: "bold",
    "&:hover": { color: "#ff8319", transition: "0.3s ease-in-out" },
  },
}));

const NavBar = () => {
  return (
    <Box bgcolor="#FFFFFF" sx={{ display: { xs: "none", lg: "block" } }}>
      <Container maxWidth="100%" sx={{ display: "flex" , marginLeft: '0' , marginRight:'0' }}>
        <LinksContainer flexGrow={1}>
          <IconButton >
            <img
              src={process.env.PUBLIC_URL + "/logos/menu.svg"}
              height="20"
              width="20"
              alt="Menu"
            />
          </IconButton>
          <Box mr={2} />
          <Link href="/stores">Stores</Link>
          <Link href="/brands">Brands</Link>
          <Link href="/videos" sx={{ display: "flex" }}>
            Live
            <Box component="span" pr={1} />
            <img
              src={process.env.PUBLIC_URL + "/logos/liveplay.svg"}
              height="22"
              width="22"
              alt="Menu"
            />
          </Link>
          <Link href="/fashion">Fashion</Link>
          <Link href="/art">Art</Link>
          <Link href="/bazaar">Bazaar</Link>
          <Link
            href=""
            target=""
            sx={{ display: "flex" }}
          >
            <img
              src={process.env.PUBLIC_URL + "/logos/offer.svg"}
              height="50"
              width="50"
              alt="Menu"
            />
          </Link>
          <Link href="/bazaar">Installments</Link>
        </LinksContainer>
        <LinksContainer>
          <Link
            color="#ff8319"
            href=""
            target="_blank"
          >
            Blogs
          </Link>
          <Link color="#ff8319" href="">
            Become a Partner
          </Link>
        </LinksContainer>
      </Container>
    </Box>
  );
};

export default NavBar;
