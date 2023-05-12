import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import logo from "../images/post13.jpg";
import profile from "../images/profile4.jpg";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import {
  ChatBubble,
  ChatBubbleOutline,
  CheckBox,
  Favorite,
  FavoriteBorder,
  MoreVertOutlined,
  Telegram,
} from "@mui/icons-material";
import {
  Checkbox,
  Divider,
  List,
  ListItem,
  Menu,
  MenuItem,
  Modal,
} from "@mui/material";
import { Box, style } from "@mui/system";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function Post() {
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: "90%", marginBottom: "30px" }}>
      <CardHeader
        avatar={
          <Avatar src={profile} sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={handleToggle}>
            <MoreVertOutlined />
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              onClick={handleClose}
            >
              <List
                sx={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  color: "black",
                  width: "300px",
                  alignItems: "center",
                  margin: "4px",
                }}
              >
                <ListItem
                  sx={{
                    color: "red",
                    display: "flex",
                    fontWeight: "600",
                    flexDirection: "column",
                    margin: "4px",
                    fontSize: "0.875rem",
                  }}
                >
                  Report
                </ListItem>
                <Divider />
                <ListItem
                  sx={{
                    color: "red",
                    display: "flex",
                    fontWeight: "600",
                    flexDirection: "column",
                    fontSize: "0.875rem",
                    margin: "4px",
                  }}
                >
                  Unfollow
                </ListItem>
                <Divider />
                <ListItem
                  sx={{
                    color: "blacl",
                    display: "flex",
                    fontWeight: "400",
                    flexDirection: "column",
                    fontSize: "0.875rem",
                    margin: "4px",
                  }}
                >
                  Add to favorites
                </ListItem>
                <Divider />
                <ListItem
                  sx={{
                    color: "black",
                    display: "flex",
                    fontWeight: "400",
                    flexDirection: "column",
                    margin: "4px",
                    fontSize: "0.875rem",
                  }}
                >
                  Go to post
                </ListItem>
                <Divider />
                <ListItem
                  sx={{
                    color: "black",
                    fontSize: "0.875rem",
                    display: "flex",
                    fontWeight: "400",
                    flexDirection: "column",
                    margin: "4px",
                  }}
                >
                  Share to...
                </ListItem>
                <Divider />
                <ListItem
                  sx={{
                    color: "black",
                    display: "flex",
                    fontWeight: "400",
                    fontSize: "0.875rem",
                    flexDirection: "column",
                    margin: "4px",
                  }}
                >
                  Copy link
                </ListItem>
                <Divider />
                <ListItem
                  sx={{
                    color: "black",
                    display: "flex",
                    fontWeight: "400",
                    fontSize: "0.875rem",
                    flexDirection: "column",
                    margin: "4px",
                  }}
                >
                  Embed
                </ListItem>
                <Divider />
                <ListItem
                  sx={{
                    color: "black",
                    display: "flex",
                    fontSize: "0.875rem",
                    fontWeight: "400",
                    flexDirection: "column",
                    margin: "4px",
                  }}
                >
                  About this account
                </ListItem>
                <Divider />
                <ListItem
                  sx={{
                    color: "black",
                    display: "flex",
                    fontWeight: "400",
                    fontSize: "0.875rem",
                    flexDirection: "column",
                    margin: "4px",
                  }}
                >
                  Cancel
                </ListItem>
              </List>
            </Backdrop>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia component="img" image={logo} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="comment">
          <ChatBubbleOutline />
        </IconButton>
        <IconButton aria-label="share" onClick={handleOpen}>
          <Telegram />
          <Backdrop
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Card>
              <Box>hi</Box>
            </Card>
          </Backdrop>
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
