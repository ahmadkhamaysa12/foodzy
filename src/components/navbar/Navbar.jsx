import { useState } from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  InputBase,
  Select,
  MenuItem,
  Divider,
  Stack,
  AppBar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SearchWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  border: "1px solid #a5d6a7",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  width: "100%",
  maxWidth: 520,
  height: 44,
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

const SearchInput = styled(InputBase)(() => ({
  flex: 1,
  paddingLeft: 16,
  fontSize: 14,
  "& .MuiInputBase-input": {
    padding: 0,
    "&::placeholder": {
      color: "#9e9e9e",
      opacity: 1,
    },
  },
}));

const navLinks = [
  { label: "Home" },
  { label: "Category"},
  { label: "Products"},
  { label: "Pages" },
  { label: "Register" },
  { label: "Elements" },
];
export default function Navbar() {
  const [category, setCategory] = useState("all");

  return (
    <Box sx={{ bgcolor: "#fff" }}>
      {/* Top Bar */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "#fff",
          color: "text.primary",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: 48,
            px: { xs: 1, sm: 3 },
          }}
        >
          <IconButton
            size="small"
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: 1,
              color: "text.primary",
              width: 36,
              height: 36,
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>

          <Stack
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.label}
                color="inherit"
                endIcon={
                  link.hasArrow ? (
                    <KeyboardArrowDownIcon fontSize="small" />
                  ) : undefined
                }
                sx={{
                  textTransform: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "text.primary",
                  px: 1.5,
                }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>

          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            sx={{ color: "text.primary" }}
          >
            <PhoneIcon fontSize="small" sx={{ transform: "scaleX(-1)" }} />
            <Typography variant="body2" sx={{ fontSize: 13, fontWeight: 500 }}>
              +123 ( 456 ) ( 7890 )
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Bottom Bar */}
      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "#fff", color: "text.primary" }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: 72,
            px: { xs: 1, sm: 3 },
            gap: 2,
          }}
        >
          {/* Logo */}
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            sx={{ display: { xs: "none", sm: "flex" }, flexShrink: 0 }}
          >
            <Box
              component="img"
              src="https://cdn-icons-png.flaticon.com/512/706/706164.png"
              alt="Foodzy"
              sx={{ width: 48, height: 48, objectFit: "contain" }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: 20,
                  lineHeight: 1.1,
                  color: "#000",
                  letterSpacing: "-0.5px",
                }}
              >
                Foodzy
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: 11,
                  color: "text.secondary",
                  display: "block",
                  mt: 0.2,
                }}
              >
                A Treasure of Tastes
              </Typography>
            </Box>
          </Stack>

          {/* Mobile Logo */}
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 800, fontSize: 18 }}>
              Foodzy
            </Typography>
          </Box>

          {/* Search */}
          <SearchWrapper sx={{ mx: "auto" }}>
            <SearchInput placeholder="Search For Items..." />
            <Divider
              orientation="vertical"
              flexItem
              sx={{ mx: 1, borderColor: "#e0e0e0" }}
            />
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              variant="standard"
              disableUnderline
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                fontSize: 13,
                color: "text.secondary",
                "& .MuiSelect-select": {
                  pr: 3,
                  pl: 0.5,
                  py: 0,
                },
                "& .MuiSvgIcon-root": {
                  right: 0,
                  color: "text.secondary",
                  fontSize: 18,
                },
                flexShrink: 0,
              }}
            >
              <MenuItem value="all">All Categories</MenuItem>
              <MenuItem value="fruits">Fruits</MenuItem>
              <MenuItem value="vegetables">Vegetables</MenuItem>
              <MenuItem value="bakery">Bakery</MenuItem>
            </Select>
            <Box
              sx={{
                bgcolor: "primary.main",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 2,
                cursor: "pointer",
                height: "100%",
                ml: 1,
              }}
            >
              <SearchIcon fontSize="small" />
            </Box>
          </SearchWrapper>

          {/* Actions */}
          <Stack
            direction="row"
            spacing={2.5}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" }, flexShrink: 0 }}
          >
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              sx={{ cursor: "pointer" }}
            >
              <PersonOutlineIcon fontSize="small" />
              <Typography
                variant="body2"
                sx={{ fontSize: 13, fontWeight: 500 }}
              >
                Account
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              sx={{ cursor: "pointer" }}
            >
              <FavoriteBorderIcon fontSize="small" />
              <Typography
                variant="body2"
                sx={{ fontSize: 13, fontWeight: 500 }}
              >
                Wishlist
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              sx={{ cursor: "pointer" }}
            >
              <ShoppingCartOutlinedIcon fontSize="small" />
              <Typography
                variant="body2"
                sx={{ fontSize: 13, fontWeight: 500 }}
              >
                Cart
              </Typography>
            </Stack>
          </Stack>

          {/* Mobile Cart */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, flexShrink: 0 }}
          >
            <ShoppingCartOutlinedIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
