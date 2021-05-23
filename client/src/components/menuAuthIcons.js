import {
  History as HistoryIcon,
  VideoLibrary as LibraryIcon,
  Subscriptions as SubscriptionIcon,
} from "@material-ui/icons";
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
const icons = [
  {
    title: "Subscriptions",
    description: "Don't miss new videos",
    signInMsg: "Sign in to see updates from your favorite YouTube channels",
    icon: SubscriptionIcon,
    path: "/subscriptions",
  },
  {
    title: "Library",
    description: "Enjoy your favorite videos",
    signInMsg: "Sign in to access videos that you’ve liked or saved",
    path: "/library",

    icon: LibraryIcon,
  },
  {
    title: "History",
    description: "Keep track of what you watch",
    signInMsg: "Watch history isn't viewable when signed out.",
    icon: HistoryIcon,
    path: "/history",
  },
  {
    title: "Your Videos",
    description: "Your Videos",
    signInMsg: "Videos isn't viewable when signed out.",
    icon: PlayArrowIcon,
    path: "/yourvideos",
  },
  {
    title: "Watch Later",
    description: "Watch Later",
    signInMsg: "Videos isn't viewable when signed out.",
    icon: WatchLaterIcon,
    path: "/watchlater",
  },
  {
    title: "Liked Videos",
    description: "Liked Videos",
    signInMsg: "Videos isn't viewable when signed out.",
    icon: ThumbUpAltIcon,
    path: "/liked",
  }
];

export default icons;
