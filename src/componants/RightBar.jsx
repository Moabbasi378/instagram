import { Box, Typography, Avatar, Button } from "@mui/material";
import { styled } from "@mui/system";

const users = [
  {
    name: "kelara",
    avatar: "https://i.pravatar.cc/40?img=1",
    mutualFollowers: 10,
  },
  {
    name: "Anne",
    avatar: "https://i.pravatar.cc/40?img=2",
    mutualFollowers: 15,
  },
  {
    name: "Harvey",
    avatar: "https://i.pravatar.cc/40?img=3",
    mutualFollowers: 20,
  },
];

const Title = styled("div")({
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 600,
  fontSize: "1.5rem",
  marginBottom: "1rem",
  color: "#1A1A1A",
  textTransform: "uppercase",
  letterSpacing: "0.1rem",
});

const RecommendedUser = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "1rem",
});

const UserAvatar = styled(Avatar)({
  marginRight: "1.5rem",
  cursor: "pointer",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const UserName = styled(Typography)({
  fontFamily: "Lato, sans-serif",
  fontWeight: 600,
  color: "#1A1A1A",
  fontSize: "1rem",
});

const MutualFollowers = styled(Typography)({
  fontFamily: "Lato, sans-serif",
  color: "#A6A6A6",
  fontSize: "0.8rem",
});

const FollowButton = styled(Button)({
  textTransform: "none",
  transition: "background-color 0.2s ease-in-out",
  borderRadius: "2rem",
  padding: "0.5rem 1rem",
  border: "1px solid #3D5AFE",
  color: "#3D5AFE",
  fontWeight: 600,
  fontSize: "0.8rem",
  marginLeft: "auto",
  "&:hover": {
    backgroundColor: "#3D5AFE",
    color: "white",
  },
});

export function RightBar() {
  return (
    <Box
      sx={{
        p: 3,
        flex: 2,
        display: { lg: "flex", xs: "none" },

        border: `1px solid lightgrey`,
      }}
    >
      <Box position="fixed" sx={{ marginBottom: "2rem" }}>
        <Title>Suggestions for You</Title>
        {users.map((user) => (
          <RecommendedUser key={user.name}>
            <UserAvatar alt={user.name} src={user.avatar} />
            <Box sx={{ flexGrow: 1 }}>
              <UserName variant="body1">{user.name}</UserName>
              <MutualFollowers variant="caption">
                {user.mutualFollowers} mutual followers
              </MutualFollowers>
            </Box>
            <FollowButton variant="outlined" size="small">
              Follow
            </FollowButton>
          </RecommendedUser>
        ))}
      </Box>
    </Box>
  );
}
