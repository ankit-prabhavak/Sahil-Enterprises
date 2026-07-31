import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { IoCloseSharp } from "react-icons/io5";
import CategoryCollapse from "../../CategoryCollapse";

const CategoryPanel = (props) => {
  const toggleDrawer = (open) => () => {
    props.setIsOpenPanel(open);
  };

  const DrawerList = (
    <Box
      role="presentation"
      className="categoryPanel w-full h-full"
      sx={{
        width: { xs: "100vw", sm: 320, md: 350 },
        maxWidth: "100vw",
      }}
    >
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        Shop By Categories
        <IoCloseSharp
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>
      <Divider />
      <CategoryCollapse />
    </Box>
  );

  return (
    <div>
      <Drawer
        open={props.isOpenPanel}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: { xs: "100vw", sm: 320, md: 350 },
            maxWidth: "100vw",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;