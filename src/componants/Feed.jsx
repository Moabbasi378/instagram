import { Box } from "@mui/system";
import { Post } from "./post";

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
