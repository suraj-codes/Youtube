import React from "react";
import { useDispatch } from "react-redux";

import { List, Divider, useMediaQuery, useTheme } from "@material-ui/core";
import { Home as HomeIcon } from "@material-ui/icons";
import ExploreIcon from '@material-ui/icons/Explore';
import menuAuthIcons from "../../menuAuthIcons";
import NavItem from "../NavItem";
import { toggleDrawer } from "../../../redux/actions/layout";

const MainNavMenu = () => {
  const theme = useTheme();

  const isMinScreenMd = useMediaQuery(theme.breakpoints.up("md"));
  const dispatch = useDispatch();
  const handleItemClick = () => {
    if (!isMinScreenMd) {
      dispatch(toggleDrawer(isMinScreenMd));
    }
  };

  return (
    <List>
      {[
        {
          title: "Home",
          icon: HomeIcon,
          path: "/",
        },
        {
          title: "Explore",
          icon: ExploreIcon,
          path: "/explore",
        },
         ...menuAuthIcons,
      ].map((item, index) => {
        return (
          <React.Fragment key={index}>
            <NavItem
              to={item.path}
              title={item.title}
              icon={item.icon}
              onClick={handleItemClick}
            />
            {index === 2 && <Divider />}
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default MainNavMenu;
