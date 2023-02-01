import { Box } from "@mui/system";

export function RightBar() {
  return (
    <Box
      bgcolor="red"
      p={3}
      flex={2}
      sx={{ display: { lg: "flex", xs: "none" } }}
    >
      RightBar
    </Box>
  );
}
