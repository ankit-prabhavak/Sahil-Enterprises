import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Line } from "react-icons/ri";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { FaRegBell } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { FaRegUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { LuActivity } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import { fetchDataFromAPI } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [anchorMyAccount, setAnchorMyAccount] = React.useState(null);
  const openMyAccount = Boolean(anchorMyAccount);
  const handleClickMyAccount = (event) => {
    setAnchorMyAccount(event.currentTarget);
  };
  const handleCloseMyAccount = () => {
    setAnchorMyAccount(null);
  };

   const context = useContext(MyContext);
    const history = useNavigate();

 const handleLogout = async () => {
    await fetchDataFromAPI("/api/user/logout");
    context.setIsLoggedIn(false);
    context.setUserData(null); // add this
    history("/login");
  };


  return (
    <header
      className={`w-full h-auto py-2 ${
        context.isSidebarOpen === true ? "pl-71" : "pl-8"
      } transition-all pr-8 shadow-md bg-white flex items-center justify-between`}
    >
      <div className="part1">
        <Button
          className="w-10! h-10! min-w-10! cursor-pointer!  rounded-full! text-[rgba(0,0,0,0.8)]!"
          onClick={() => context.setIsSidebarOpen(!context.isSidebarOpen)}
        >
          <RiMenu2Line className="text-[18px] text-[rgba(0,0,0,0.8)]" />
        </Button>
      </div>

      <div className="part2 w-[40%] flex items-center justify-end gap-5">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <FaRegBell />
          </StyledBadge>
        </IconButton>

        {context.isLoggedIn === true ? (
          <div className="relative">
            <div
              className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer"
              onClick={handleClickMyAccount}
            >
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/027/554/917/small/shinchan-sleepy-face-illustration-free-vector.jpg"
                alt="profile img"
                className="w-full h-full object-cover"
              />
            </div>

            <Menu
              anchorEl={anchorMyAccount}
              id="account-menu"
              open={openMyAccount}
              onClose={handleCloseMyAccount}
              onClick={handleCloseMyAccount}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleCloseMyAccount} className="bg-white!">
                <div className="flex items-center gap-3">
                  <div className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer">
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/027/554/917/small/shinchan-sleepy-face-illustration-free-vector.jpg"
                      alt="profile img"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="info">
                    <h3 className="text-[14px] font-medium leading-4">
                      {context.userData?.name}
                    </h3>
                    <p className="text-[12px] font-normal opacity-70">
                      {context.userData?.email}
                    </p>
                  </div>
                </div>
              </MenuItem>

              <Divider />

              <MenuItem
                onClick={handleCloseMyAccount}
                className="flex items-center gap-3"
              >
                <FaRegUser className="text-[18px]" />
                <span className="text-[14px]">Profile</span>
              </MenuItem>
              <MenuItem
                onClick={handleCloseMyAccount}
                className="flex items-center gap-3"
              >
                <IoSettingsOutline className="text-[18px]" />
                <span className="text-[14px]">Settings</span>
              </MenuItem>
              <MenuItem
                onClick={handleCloseMyAccount}
                className="flex items-center gap-3"
              >
                <LuActivity className="text-[18px]" />
                <span className="text-[14px]">Activity Logs</span>
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={handleLogout}
                className="flex items-center gap-3"
              >
                <IoLogOutOutline className="text-[18px]" />
                <span className="text-[14px]">Logout</span>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Link to='/login'>
          <Button className="btn-blue btn-sm rounded-full! capitalize!">
            Login
          </Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
