import {
  AppBar,
  Container,
  Toolbar,
  Box,
  TextField,
  Typography,
  Avatar,
  Button,
  IconButton,
  Stack,
  Chip,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../../public/pic1.jpg";
import pic2 from "../../public/pic2.jpg";
import CircleIcon from "@mui/icons-material/Circle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

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
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mx: "auto",
            my: "auto",
            borderBottom: "1px solid #484848",
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

        {/* About Me Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // กําหนดการแสดงผล responsive เดี๋ยวทำเสร็จมีเวลา อาจะลองปรับทั้งหมด
            alignItems: "flex-start",
            py: "50px",
          }}
        >
          <Box
            sx={{
              flex: "1",
              mt: "20px",
              textAlign: "center",
              mr: "100px",
              px: "100px",
            }}
          >
            <Typography variant="h3" fontWeight="bold" >
              ABOUT ME
            </Typography>
          </Box>
          <Box sx={{ flex: "1", pr: "50px", mt: "20px" }}>
            <Typography
              sx={{
                maxWidth: "650px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              ผมเป็นนักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์ที่ทำงานอยู่ใน กรุงเทพฯ
              กำลังมองหาโอกาสที่น่าตื่นเต้นในการทำงาน
              มีพื้นฐานการศึกษาด้านวิศวกรรมซอฟต์แวร์
            </Typography>
            <Typography
              sx={{
                maxWidth: "600px",
                fontSize: "14px",
                fontWeight: "light",
                color: "#C7C7C7",
              }}
            >
              ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เมื่อพัฒนาเว็บไซต์
              มีความกระตือรือร้นและอยากรู้ อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆ
              ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบ
              เว็บไซต์เล็กน้อยเมื่อไม่ได้เขียนโปรแกรม ดิฉัน/ผมชอบเล่นฟุตบอล
              ถ่ายภาพ และเล่นเกม FIFA, Diablo
              กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ
            </Typography>

            {/* button */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pt: "20px",
                mb: "30px",
              }}
            >
              <Button
                variant="contained"
                fullWidth
                sx={{
                  width: "187px",
                  height: "54px",
                  textAlign: "center",
                  borderRadius: "50px",
                  bgcolor: "#D3E97A",
                  color: "#0A0A0A",
                  mr: "10px",
                  fontSize: "12px",
                }}
              >
                Download Resume
                <CircleIcon sx={{ fontSize: "10px", ml: "20px" }} />
              </Button>
              <IconButton
                sx={{
                  backgroundColor: "#222222",
                  borderRadius: "50px",
                  fontSize: "54px",
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
                  mr: "10px",
                }}
              >
                <GitHubIcon sx={{ fontSize: "26px", color: "#D3E97A" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pb: "40px",
            borderBottom: "1px solid #484848",
          }}
        >
          {/* pic */}
          <Avatar
            src={pic2}
            variant="rounded"
            sx={{
              width: "1322px",
              height: "798px",
              borderRadius: "20px",
            }}
          />
        </Box>

        {/* My Capabilities section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // กําหนดการแสดงผล responsive เดี๋ยวทำเสร็จมีเวลา อาจะลองปรับทั้งหมด
            py: "50px",
            px: "100px",
            borderBottom: "1px solid #484848",
          }}
        >
          <Box
            sx={{
              flex: "1",
              textAlign: "left",
              pl: "60px",
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                textTransform: "uppercase",
              }}
            >
              My Capabilities
            </Typography>
          </Box>

          <Box
            sx={{
              flexBasis: "500px",
              pr: "50px",
              py: "10px",
              fontWeight: "light",
              color: "#C7C7C7",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                textAlign: "left",
                maxWidth: "900px",
                pr: "30px",
              }}
            >
              ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์
              แบล็กเอนต์ การออกแบบ UX/UI ฐานข้อมูล
            </Typography>
            <Stack
              direction="row"
              flexWrap="wrap"
              sx={{
                mt: "15px",
                mb: "10px",
                rowGap: "15px",
                gap: "15px",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                maxWidth: "400px",
              }}
            >
              {[
                "HTML",
                "CSS",
                "JAVASCRIPT",
                "FLUTTER",
                "DART",
                "IoT",
                "REACT",
                "DATABASE",
              ].map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "#484848           ",
                    pointerEvents: "none",
                    padding: "0 5px",
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Box>

        {/* My Experience section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // กําหนดการแสดงผล responsive เดี๋ยวทำเสร็จมีเวลา อาจะลองปรับทั้งหมด
            py: "50px",
            px: "100px",
            borderBottom: "1px solid #484848",
          }}
        >
          <Box
            sx={{
              flex: "1",
              textAlign: "left",
              pl: "60px",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", textTransform: "uppercase" }}
            >
              My Experience
            </Typography>
          </Box>

          <Box
            sx={{
              flexBasis: "500px",
            }}
          >
            {/* Freelance Developer */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mb: "10px",
                mr: "50px",
              }}
            >
              <Typography sx={{ fontSize: "16px" }}>
                Freelance Developer
              </Typography>
              <Typography
                sx={{ fontSize: "14px", fontWeight: "light", color: "#C7C7C7" }}
              >
                Nov 2023 – Present
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "14px",
                pr: "60px",
                color: "#C7C7C7",
                fontWeight: "light",
              }}
            >
              พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้สำหรับเว็บแอปพลิเคชันโดยใช้
              React.js ทำงานร่วมกับทีมออกแบบ UX/UI
              เพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจ
              ปรับปรุงความเร็วในการโหลดเว็บไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆ
              ร่วมพัฒนาและดูแลไลบรารีคอมโพเนนต์ภายในองค์กร
            </Typography>

            {/* Front-End Intern */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                my: "10px",
                mr: "50px",
              }}
            >
              <Typography sx={{ fontSize: "16px" }}>
                Front-End Intern
              </Typography>
              <Typography
                sx={{ fontSize: "14px", fontWeight: "light", color: "#C7C7C7" }}
              >
                Sep 2023 — Nov 2023
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "14px",
                pr: "60px",
                color: "#C7C7C7",
                fontWeight: "light",
              }}
            >
              พัฒนาเว็บไซต์ลูกค้าโดยใช้ HTML, CSS และ JavaScript
              ช่วยปรับปรุงการเข้าถึง (Accessibility)
              ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน WCAG
              ทำงานร่วมกับทีมแบ็คเอนด์เพื่อเชื่อมต่อ API
            </Typography>
          </Box>
        </Box>

        {/* Let’s connect section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // กําหนดการแสดงผล responsive เดี๋ยวทำเสร็จมีเวลา อาจะลองปรับทั้งหมด
            pt: "50px",
            pb: "100px",
            px: "100px",
            borderBottom: "1px solid #484848",
          }}
        >
          <Box
            sx={{
              flex: "1",
              textAlign: "left",
              pl: "60px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Let’s connect
            </Typography>
            <Typography sx={{ fontSize: "14px", mt: "10px" }}>
              Say hello at{" "}
              <Box component="span" sx={{ borderBottom: "1px solid #D3E97A" }}>
                S6752D10017@sau.ac.th
              </Box>
            </Typography>
            <Typography sx={{ fontSize: "14px", mt: "10px" }}>
              For more info, here's my{" "}
              <Box component="span" sx={{ borderBottom: "1px solid #D3E97A" }}>
                resume
              </Box>
            </Typography>

            <Box sx={{ mt: "10px" }}>
              <IconButton
                sx={{
                  borderRadius: "50px",
                  fontSize: "54px",
                  mr: "15px",
                  px: "0px",
                }}
              >
                <LinkedInIcon sx={{ fontSize: "26px", color: "#D3E97A" }} />
              </IconButton>
              <IconButton
                sx={{
                  borderRadius: "50px",
                  fontSize: "54px",
                  mr: "15px",
                  px: "0px",
                }}
              >
                <GitHubIcon sx={{ fontSize: "26px", color: "#D3E97A" }} />
              </IconButton>
              <IconButton
                sx={{
                  borderRadius: "50px",
                  fontSize: "54px",
                  mr: "15px",
                  px: "0px",
                }}
              >
                <XIcon sx={{ fontSize: "26px", color: "#D3E97A" }} />
              </IconButton>
              <IconButton
                sx={{
                  borderRadius: "50px",
                  fontSize: "54px",
                  mr: "15px",
                  px: "0px",
                }}
              >
                <InstagramIcon sx={{ fontSize: "26px", color: "#D3E97A" }} />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "50vh",
                justifyContent: "flex-end",
              }}
            >
              <Typography variant="body2">
                &copy; 2023 Tanatorn Phloenmalai. All rights reserved.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <Typography sx={{ fontSize: "16px", color: "#C7C7C7" }}>
              Name
            </Typography>

            <TextField
              size="small"
              fullWidth
              sx={{ backgroundColor: "#1A1A1A", input: { color: "#fff" } }}
            />

            <Typography sx={{ fontSize: "16px", mt: "20px", color: "#C7C7C7" }}>
              Email
            </Typography>
            <TextField
              size="small"
              fullWidth
              sx={{ backgroundColor: "#1A1A1A", input: { color: "#fff" } }}
            />

            <Typography sx={{ fontSize: "16px", mt: "20px", color: "#C7C7C7" }}>
              Subject
            </Typography>
            <TextField
              size="small"
              fullWidth
              sx={{ backgroundColor: "#1A1A1A", input: { color: "#fff" } }}
            />

            <Typography sx={{ fontSize: "16px", mt: "20px", color: "#C7C7C7" }}>
              Message
            </Typography>
            <TextField
              size="small"
              fullWidth
              multiline
              rows={4}
              sx={{ backgroundColor: "#1A1A1A", input: { color: "#fff" } }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                width: "80px",
                height: "30px",
                textAlign: "center",
                borderRadius: "50px",
                bgcolor: "#D3E97A",
                color: "#0A0A0A",
                mt: "20px",
                fontSize: "12px",
              }}
            >
              submit
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default HomeUI;
