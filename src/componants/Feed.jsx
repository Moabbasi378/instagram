import { Box } from "@mui/system";
import { Post } from "./post";
// import profile1 from "../images/profile1";
import profile2 from "../images/profile2.jpg";
import profile3 from "../images/profile3.jpg";
import profile4 from "../images/profile4.jpg";
import { Avatar, makeStyles } from "@mui/material";
import { BorderStyle } from "@mui/icons-material";
import { Theme } from "@mui/material";

export function Feed() {
  return (
    <Box p={3} flex={3}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

      <Post />
    </Box>
  );
}
