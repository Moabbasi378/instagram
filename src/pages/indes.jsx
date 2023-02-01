import { Box } from "@mui/system";
import { Feed } from "../componants/Feed";
import { LeftBar } from "../componants/leftBar";
import { RightBar } from "../componants/RightBar";

export function Index() {
  return (
    <Box display="flex">
      <LeftBar />
      <Feed />
      <RightBar />
    </Box>
  );
}
