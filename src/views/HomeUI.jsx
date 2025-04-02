import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Typography,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../assets/pic1.jpg";
import CircleIcon from "@mui/icons-material/Circle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function HomeUI() {
  return (
    <>
      <Container maxWidth="xl" sx={{ bgcolor: "#121212", color: "white" }}>
        {/* Nav bar */}
        <AppBar sx={{ backgroundColor: "#121212", p: "0" }} position="static">
          <Toolbar>
            <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: "bold" }}>
              Tanatorn Phloenmalai
            </Typography>
            <Typography
              component={Link}
              to="/work"
              sx={{ textDecoration: "none", color: "white", mr: "10px" }}
            >
              Work
            </Typography>
            <Typography
              component={Link}
              to="/About"
              sx={{ textDecoration: "none", color: "white", mr: "10px" }}
            >
              About
            </Typography>
            <Typography
              component={Link}
              to="/Contact"
              sx={{ textDecoration: "none", color: "white", mr: "10px" }}
            >
              Contact
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Profile Section */}
        <Box
          id={"profile"}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mx: "auto",
            my: "auto",
            borderBottom: "3px solid gray",
          }}
        >
          <Box sx={{ textAlign: "left", ml: "20px", mt: "50px" }}>
            <Typography
              variant="h2"
              sx={{
                mt: "50px",
                ml: "60px",
                textAlign: "left",
                fontWeight: "normal",
                fontSize: "80px",
                lineHeight: "1",
              }}
            >
              HI, I AM <br /> TANATORN P. <br />
              <Typography sx={{ lineHeight: "1.5" }}>
                นักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์จากประเทศไทย
                ที่มีความหลงใหลในการสร้าง
                <br />
                เว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
              </Typography>
            </Typography>

            {/* button */}
            <Box sx={{ alignItems: "center", display: "flex" }}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  width: "187px",
                  height: "54px",
                  textAlign: "center",
                  mt: "30px",
                  borderRadius: "50px",
                  bgcolor: "#D3E97A",
                  color: "#0A0A0A",
                  ml: "60px",
                  mr: "10px",
                }}
              >
                CONTACT ME <CircleIcon sx={{ fontSize: "10px", ml: "30px" }} />
              </Button>
              <IconButton
                sx={{
                  backgroundColor: "#222222",
                  borderRadius: "50px",
                  fontSize: "54px",
                  mt: "30px",
                  mr: "10px",
                }}
              >
                <LinkedInIcon sx={{ fontSize: "26px", color: "#D3E97A" }} />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: "#222222",
                  borderRadius: "50px",
                  fontSize: "54px",
                  mt: "30px",
                  mr: "10px",
                }}
              >
                <GitHubIcon sx={{ fontSize: "26px", color: "#D3E97A" }} />
              </IconButton>
            </Box>
          </Box>
          <Avatar
            src={pic1}
            variant="rounded"
            sx={{
              width: "400px",
              height: "500px",
              mt: "50px",
              mb: "50px",
              mr: "100px",
            }}
          />
        </Box>
      </Container>
    </>
  );
}

export default HomeUI;
