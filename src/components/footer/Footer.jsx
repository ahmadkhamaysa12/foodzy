import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

const companyLinks = [
  "About Us",
  "Delivery Information",
  "Privacy Policy",
  "Terms & Conditions",
  "contact Us",
  "Support Center",
];
const categoryLinks = [
  "Dairy & Bakery",
  "Fruits & Vegetable",
  "Snack & Spice",
  "Juice & Drinks",
  "Chicken & Meat",
  "Fast Food",
];

const gallery = [
  "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/5503274/pexels-photo-5503274.jpeg?auto=compress&cs=tinysrgb&w=200",
];

function PinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21s7-6.18 7-12A7 7 0 1 0 5 9c0 5.82 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path
        d="M12 12.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
        stroke="currentColor"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="m4 8 8 5 8-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8.4 5.2 6.6 3.4 3.8 6.2c-.5.5-.7 1.3-.4 2 2.2 5.6 6.8 10.2 12.4 12.4.7.3 1.5.1 2-.4l2.8-2.8-1.8-1.8c-.7-.7-1.8-.8-2.6-.3l-1.5 1c-2.8-1.4-4.6-3.2-6-6l1-1.5c.5-.8.4-1.9-.3-2.6Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.72 2.28a.9.9 0 0 0-.96-.2L2.86 9.12a.9.9 0 0 0 .05 1.7l7.28 2.43 2.43 7.28a.9.9 0 0 0 1.7.05l7.04-17.9a.9.9 0 0 0-.2-.96ZM11.2 12.1 6 10.36l11.05-4.35-5.85 6.1Zm2.44 5.9-1.74-5.2 6.1-5.85L13.64 18Z" />
    </svg>
  );
}

function ProduceOutline({ sx, rotate = 0 }) {
  return (
    <Box
      sx={{
        position: "absolute",
        color: "#c7d1c1",
        opacity: 0.85,
        transform: `rotate(${rotate}deg)`,
        ...sx,
      }}
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 80 80"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M44.6 17.5c10.8 3 16.7 16.7 13.3 30.6-3.4 13.9-14.9 22.9-25.7 19.9-10.8-3-16.7-16.7-13.3-30.6 3.4-13.9 14.9-22.9 25.7-19.9Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M39.5 16.3c2-8.3 9.8-12 17.5-9.6 2.2 7.8-1.5 15.6-9.9 17.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M22 27c-7-1.8-12.6 1.2-15.2 5.3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  );
}

export default function Footer() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        bgcolor: "#f8f8f8",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      <Box
        component="footer"
        sx={{
          width: "100%",
          position: "relative",
          py: { xs: 6, md: 10 },

          bgcolor: "#f7f7f7",
        }}
      >
        <ProduceOutline sx={{ top: -16, right: 88 }} />
        <ProduceOutline sx={{ left: -8, top: 194 }} rotate={-18} />
        <ProduceOutline sx={{ right: 196, bottom: 6 }} rotate={-52} />
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1.65fr 0.8fr 0.9fr 1.6fr",
              },
              gap: { xs: 5, md: 7 },
              alignItems: "start",
            }}
          >
            <Box>
              <Stack
                direction="row"
                spacing={1.4}
                alignItems="center"
                sx={{ mb: 1.5 }}
              >
                <Avatar
                  src="https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=80"
                  alt="Foodzy market mascot"
                  sx={{ width: 34, height: 34, border: "1px solid #e2e2e2" }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 900,
                      fontSize: 18,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Foodzy
                  </Typography>
                  <Typography
                    sx={{ color: "#8a8a8a", fontSize: 9, fontWeight: 700 }}
                  >
                    A Treasure of Tastes
                  </Typography>
                </Box>
              </Stack>
              <Typography
                sx={{
                  color: "#858585",
                  lineHeight: 1.65,
                  fontSize: 15,
                  maxWidth: 430,
                }}
              >
                FoodTrove is the biggest market of grocery products. Get your
                daily needs from our store.
              </Typography>
              <Stack spacing={2.2} sx={{ mt: 3.4, color: "#ff3b30" }}>
                <Stack direction="row" spacing={1.6}>
                  <PinIcon />
                  <Typography sx={{ color: "#777", fontSize: 14.5 }}>
                    51 Green St.Huntington ohaio beach ontario, NY
                    <br />
                    11746 KY 4783, USA.
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.6} alignItems="center">
                  <MailIcon />
                  <Typography sx={{ color: "#777", fontSize: 14.5 }}>
                    example@email.com
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.6} alignItems="center">
                  <PhoneIcon />
                  <Typography sx={{ color: "#777", fontSize: 14.5 }}>
                    +91 123 4567890
                  </Typography>
                </Stack>
              </Stack>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 900, fontSize: 18, mb: 2.4 }}>
                Company
              </Typography>
              <Stack spacing={1.8}>
                {companyLinks.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    underline="none"
                    color="#777"
                    sx={{ fontSize: 14.5 }}
                  >
                    {item}
                  </Link>
                ))}
              </Stack>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 900, fontSize: 18, mb: 2.4 }}>
                Category
              </Typography>
              <Stack spacing={1.8}>
                {categoryLinks.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    underline="none"
                    color="#777"
                    sx={{ fontSize: 14.5 }}
                  >
                    {item}
                  </Link>
                ))}
              </Stack>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 900, fontSize: 18, mb: 2.3 }}>
                Subscribe Our Newsletter
              </Typography>
              <TextField
                fullWidth
                placeholder="Search here..."
                size="small"
                variant="outlined"
                slotProps={{
                  input: {
                    endAdornment: (
                      <IconButton aria-label="submit newsletter search">
                        <SendIcon />
                      </IconButton>
                    ),
                  },
                }}
                sx={{
                  mb: 2.4,
                  bgcolor: "#fff",
                  "& .MuiOutlinedInput-root": { borderRadius: 1, height: 43 },
                }}
              />
              <Stack direction="row" spacing={0.7} sx={{ mb: 2.8 }}>
                {["f", "𝕏", "◉", "◎"].map((item) => (
                  <IconButton
                    key={item}
                    aria-label={`Social link ${item}`}
                    sx={{
                      width: 34,
                      height: 34,
                      border: "1px solid #ddd",
                      borderRadius: 1,
                      bgcolor: "#fff",
                      color: "#111",
                      fontWeight: 800,
                    }}
                  >
                    {item}
                  </IconButton>
                ))}
              </Stack>
              <Stack
                direction="row"
                spacing={1.4}
                sx={{ flexWrap: "wrap", gap: 1.4 }}
              >
                {gallery.map((src, index) => (
                  <Box
                    component="img"
                    key={src}
                    src={src}
                    alt={`Fresh grocery gallery item ${index + 1}`}
                    sx={{
                      width: 72,
                      height: 70,
                      objectFit: "cover",
                      borderRadius: 1,
                      transition: "transform .2s ease",
                      "&:hover": { transform: "translateY(-4px) scale(1.04)" },
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Box>
          <Divider sx={{ mt: { xs: 6, md: 10 }, mb: 2.1 }} />
          <Typography align="center" sx={{ fontSize: 14.5, color: "#111" }}>
            © 2025{" "}
            <Box component="span" sx={{ color: "#ff3b30" }}>
              Foodzy
            </Box>
            , All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
