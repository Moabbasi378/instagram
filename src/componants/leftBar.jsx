import {
  AccountCircleOutlined,
  AddBoxOutlined,
  Archive,
  BookmarkAddOutlined,
  DarkModeOutlined,
  DensityMediumOutlined,
  ExploreOutlined,
  Favorite,
  FavoriteBorder,
  Home,
  LocationCityOutlined,
  MovieCreationOutlined,
  PrivacyTipOutlined,
  Restore,
  Search,
  Send,
  Settings,
  Work,
} from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { SvgLogo } from "../images/Logo";

export function LeftBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        p={3}
        flex={1}
        borderRight="1px solid lightgrey"
        display="flex"
        flexDirection="column"
        sx={{ display: { xs: "none", lg: "block" } }}
      >
        <Box position="fixed">
          <SvgLogo />
          <Box width="20%" marginTop={3}>
            <Button
              startIcon={<Home />}
              sx={{
                color: "#000000c0",
                textTransform: "none",
                float: "left",
              }}
            >
              Home
            </Button>
            <Button
              startIcon={<Search />}
              sx={{ color: "#000000c0", textTransform: "none", float: "left" }}
            >
              Search
            </Button>
            <Button
              startIcon={<ExploreOutlined />}
              sx={{ color: "#000000c0", textTransform: "none", float: "left" }}
            >
              Explore
            </Button>
            <Button
              startIcon={<MovieCreationOutlined />}
              sx={{ color: "#000000c0", textTransform: "none", float: "left" }}
            >
              Reels
            </Button>
            <Button
              startIcon={<Send />}
              sx={{ color: "#000000c0", textTransform: "none", float: "left" }}
            >
              Massage
            </Button>
            <Button
              startIcon={<FavoriteBorder />}
              sx={{ color: "#000000c0", textTransform: "none", float: "left" }}
            >
              Notification
            </Button>
            <Button
              startIcon={<AddBoxOutlined />}
              sx={{ color: "#000000c0", textTransform: "none", float: "left" }}
            >
              Create
            </Button>
            <Button
              startIcon={<AccountCircleOutlined />}
              sx={{
                color: "#000000c0",
                textTransform: "none",
                float: "left",
              }}
            >
              Profile
            </Button>
          </Box>
          <Box width="20%">
            <Button
              startIcon={<DensityMediumOutlined />}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                color: "#000000c0",
                textTransform: "none",
                float: "left",
                marginTop: 13,
              }}
            >
              More
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                <ListItemText>Setting</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <BookmarkAddOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText>Saved</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <DarkModeOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText>Switch appearance</ListItemText>
              </MenuItem>
              <Divider />

              <MenuItem>
                <ListItemIcon>
                  <PrivacyTipOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText>Report a problem</ListItemText>
              </MenuItem>
              <Divider sx={{ borderBottomWidth: 5 }} />

              <MenuItem>
                <ListItemText>Switch account</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemText>Log out</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box
          p={2}
          flex={0.3}
          borderRight="1px solid #00000018"
          display="flex"
          flexDirection="column"
          sx={{ display: { xs: "none", md: "block", lg: "none " } }}
        >
          <svg
            aria-label="Instagram"
            className="_ab6-"
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
          </svg>
          <Box width="20%" marginTop={3}>
            <IconButton
              aria-label={<Home />}
              sx={{
                color: "#000000c0",
                textTransform: "none",
                float: "left",
              }}
            >
              <Home />
            </IconButton>
            <IconButton
              aria-label={<Search />}
              sx={{ color: "#000000c0", textTransform: "none", float: "left" }}
            >
              <Search />
            </IconButton>
            <IconButton
              aria-label={<ExploreOutlined />}
              sx={{ color: "#000000c0", textTransform: "none", float: "left" }}
            >
              <ExploreOutlined />
            </IconButton>
            <IconButton
              aria-label={<MovieCreationOutlined />}
              sx={{ color: "#000000c0", textTransform: "none", float: "left" }}
            >
              <MovieCreationOutlined />
            </IconButton>
            <IconButton
              aria-label={<Send />}
              sx={{ color: "#000000c0", textTransform: "none", float: "left" }}
            >
              <Send />
            </IconButton>
            <IconButton
              aria-label={<FavoriteBorder />}
              sx={{ color: "#000000c0", textTransform: "none", float: "left" }}
            >
              <FavoriteBorder />
            </IconButton>
            <IconButton
              aria-label={<AddBoxOutlined />}
              sx={{ color: "#000000c0", textTransform: "none", float: "left" }}
            >
              <AddBoxOutlined />
            </IconButton>
            <IconButton
              aria-label={<AccountCircleOutlined />}
              sx={{
                color: "#000000c0",
                textTransform: "none",
                float: "left",
              }}
            >
              <AccountCircleOutlined />
            </IconButton>
          </Box>
          <Box width="20%">
            <IconButton
              aria-label={<DensityMediumOutlined />}
              id="basic-IconButton"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                color: "#000000c0",
                textTransform: "none",
                float: "left",
                marginTop: 13,
              }}
            >
              <DensityMediumOutlined />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                <ListItemText>Setting</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <BookmarkAddOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText>Saved</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <DarkModeOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText>Switch appearance</ListItemText>
              </MenuItem>
              <Divider />

              <MenuItem>
                <ListItemIcon>
                  <PrivacyTipOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText>Report a problem</ListItemText>
              </MenuItem>
              <Divider sx={{ borderBottomWidth: 5 }} />

              <MenuItem>
                <ListItemText>Switch account</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemText>Log out</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <BottomNavigationAction icon={<Home />} />
          <BottomNavigationAction icon={<ExploreOutlined />} />
          <BottomNavigationAction icon={<MovieCreationOutlined />} />
          <BottomNavigationAction icon={<AddBoxOutlined />} />
        </BottomNavigation>
      </Paper>
    </>
  );
}
