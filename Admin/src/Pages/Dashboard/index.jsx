import React from "react";
import DashboardBoxes from "../../Components/DashboardBoxes";
import Button from "@mui/material/Button";
import { FaPlus } from "react-icons/fa6";
import Divider from "@mui/material/Divider";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Badge from "../../components/Badge";
import { CiEdit } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { GoTrash } from "react-icons/go";
import Checkbox from "@mui/material/Checkbox";
import Pagination from "@mui/material/Pagination";
import { AiOutlineExport } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";

const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

import { Link } from "react-router-dom";
import Progress from "../../Components/Progress";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { useContext } from "react";
import { MyContext } from "../../App";

// Recharts
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import TwoLevelPieChart from "../../Components/TwoLevelPieChart";
import ComposedChartGraph from "../../Components/ComposedChartGraph";

const Dashboard = () => {
  const [chart1Data, setChart1Data] = React.useState([
    {
      month: "Jan",
      customers: 110,
      sales: 2200,
      amount: 1150,
    },
    {
      month: "Feb",
      customers: 240,
      sales: 2600,
      amount: 1300,
    },
    {
      month: "Mar",
      customers: 590,
      sales: 3400,
      amount: 1700,
    },
    {
      month: "Apr",
      customers: 1130,
      sales: 4200,
      amount: 2100,
    },
    {
      month: "May",
      customers: 1260,
      sales: 4800,
      amount: 2400,
    },
    {
      month: "Jun",
      customers: 1540,
      sales: 4500,
      amount: 2250,
    },
    {
      month: "Jul",
      customers: 770,
      sales: 5100,
      amount: 2550,
    },
    {
      month: "Aug",
      customers: 100,
      sales: 5600,
      amount: 2800,
    },
    {
      month: "Sep",
      customers: 340,
      sales: 6200,
      amount: 3100,
    },
    {
      month: "Oct",
      customers: 720,
      sales: 7600,
      amount: 3800,
    },
    {
      month: "Nov",
      customers: 880,
      sales: 8400,
      amount: 4200,
    },
    {
      month: "Dec",
      customers: 520,
      sales: 9200,
      amount: 4600,
    },
  ]);

  const [isOpenShowProductDetails, setIsOpenShowProductDetails] =
    React.useState(null);

  const showDetails = (index) => {
    if (isOpenShowProductDetails === index) {
      setIsOpenShowProductDetails(null);
    } else {
      setIsOpenShowProductDetails(index);
    }
  };

  const [category, setCategory] = React.useState("");
  const [openCategory, setOpenCategory] = React.useState(false);

  const handleChangeFilter = (event) => {
    setCategory(event.target.value);
  };

  const handleCloseCategory = () => {
    setOpenCategory(false);
  };

  const handleOpenCategory = () => {
    setOpenCategory(true);
  };

  const context = useContext(MyContext);

  return (
    <>
      <div className="w-full bg-white py-2 px-5 border border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md">
        <div className="info p-5">
          <h1 className="text-[35px] font-bold leading-10 mb-3">
            Good Morning,
            <br />
            {context.userData?.name}
          </h1>
          <p>
            Here's What happening on your store today. See the statistics at
            once.
          </p>
          <br />
          <Button
            className="btn-blue capitalize! gap-1"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add Product",
              })
            }
          >
            <FaPlus />
            Add Products
          </Button>
        </div>

        <img src="/shop.jpg" alt="shop img" className="w-[275px]" />
      </div>
      <DashboardBoxes />

      <div className="card my-4 p-3 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[20px] font-semibold ">Products</h2>
        </div>

        <div className="flex items-center w-full pl-5 pr-2 mb-5 justify-between">
          <div className="col1 w-[20%]">
            <h4 className="font-semibold text-[14px] mb-1">Category By</h4>

            <Select
              className="w-full"
              size="small"
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={openCategory}
              onClose={handleCloseCategory}
              onOpen={handleOpenCategory}
              value={category}
              label="Category"
              onChange={handleChangeFilter}
              
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Namkeens</MenuItem>
              <MenuItem value={20}>Biscuits</MenuItem>
              <MenuItem value={30}>Chocolates</MenuItem>
            </Select>
          </div>

          <div className="col2 w-[25%] ml-auto flex items-center gap-2">
            <Button className="btn-green btn-sm capitalize!">
              <AiOutlineExport className="text-[16px]" />
              <span className="pl-2">Export</span>{" "}
            </Button>
            <Button
              className="btn-blue btn-sm capitalize!"
              onClick={() =>
                context.setIsOpenFullScreenPanel({
                  open: true,
                  model: "Add Product",
                })
              }
            >
              <IoMdAdd className="text-[16px]" />
              <span className="pl-2">Add New</span>
            </Button>
          </div>
        </div>

        <div className="relative overflow-x-auto mt-2 rounded-md">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="text-sm text-heading bg-[#f1f1f1]">
              <tr>
                <th scope="col" className="px-2 py-3 font-semibold width-[10%]">
                  <div className="w-15">
                    <Checkbox {...label} size="small" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-1 py-3 font-semibold whitespace-nowrap"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 font-semibold whitespace-nowrap"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Sub Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 font-semibold whitespace-nowrap"
                >
                  Sales
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-neutral-primary  border-b border-[rgba(0,0,0,0.1)]">
                <td className="px-2 py-2">
                  <div className="w-15">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-1 py-2">
                  <div className="flex items-center gap-4 w-[325px]">
                    <div className="img w-17 h-17 rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="https://m.media-amazon.com/images/I/81lSbNqyg3L._SX679_.jpg"
                          alt="product img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <Link to="/product/45">
                        <h3 className="text-[12px] text-[#666] font-medium leading-3 hover:text-[#ff5252]">
                          Bikaji Tana Tan - Aloo bhujia | 400g Pack | Crunchy &
                          Flavourful | Perfect Tea-time Partner
                        </h3>
                      </Link>

                      <span className="text-[10px] text-[#666] font-bold">
                        Bikaji
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Grocery & Gourmet Foods
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Namkeen
                </td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-medium">
                      $58.00
                    </span>
                    <span className="price text-[#ff5252] font-semibold">
                      $45.00
                    </span>
                  </div>
                </td>
                <td className="px-2 py-2">
                  <p className="text-[14px] text-[#666] w-30">
                    <span className="font-semibold">234</span>
                    <span className="font-medium pl-1">sale</span>
                  </p>

                  <Progress value={70} type={"success"} />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-2">
                    <Tooltip title="Edit Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <CiEdit className="text-[rgba(0,0,0,0.7)] text-[22px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Details" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <IoEyeOutline className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="Remove Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[16px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>

              <tr className="bg-neutral-primary  border-b border-[rgba(0,0,0,0.1)]">
                <td className="px-2 py-2">
                  <div className="w-15">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-1 py-2">
                  <div className="flex items-center gap-4 w-[325px]">
                    <div className="img w-17 h-17 rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="https://m.media-amazon.com/images/I/81lSbNqyg3L._SX679_.jpg"
                          alt="product img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <Link to="/product/45">
                        <h3 className="text-[12px] text-[#666] font-medium leading-3 hover:text-[#ff5252]">
                          Bikaji Tana Tan - Aloo bhujia | 400g Pack | Crunchy &
                          Flavourful | Perfect Tea-time Partner
                        </h3>
                      </Link>

                      <span className="text-[10px] text-[#666] font-bold">
                        Bikaji
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Grocery & Gourmet Foods
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Namkeen
                </td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-medium">
                      $58.00
                    </span>
                    <span className="price text-[#ff5252] font-semibold">
                      $45.00
                    </span>
                  </div>
                </td>
                <td className="px-2 py-2">
                  <p className="text-[14px] text-[#666] w-30">
                    <span className="font-semibold">234</span>
                    <span className="font-medium pl-1">sale</span>
                  </p>

                  <Progress value={70} type={"error"} />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-2">
                    <Tooltip title="Edit Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <CiEdit className="text-[rgba(0,0,0,0.7)] text-[22px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Details" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <IoEyeOutline className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="Remove Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[16px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>

              <tr className="bg-neutral-primary  border-b border-[rgba(0,0,0,0.1)]">
                <td className="px-2 py-2">
                  <div className="w-15">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-1 py-2">
                  <div className="flex items-center gap-4 w-[325px]">
                    <div className="img w-17 h-17 rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="https://m.media-amazon.com/images/I/81lSbNqyg3L._SX679_.jpg"
                          alt="product img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <Link to="/product/45">
                        <h3 className="text-[12px] text-[#666] font-medium leading-3 hover:text-[#ff5252]">
                          Bikaji Tana Tan - Aloo bhujia | 400g Pack | Crunchy &
                          Flavourful | Perfect Tea-time Partner
                        </h3>
                      </Link>

                      <span className="text-[10px] text-[#666] font-bold">
                        Bikaji
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Grocery & Gourmet Foods
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Namkeen
                </td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-medium">
                      $58.00
                    </span>
                    <span className="price text-[#ff5252] font-semibold">
                      $45.00
                    </span>
                  </div>
                </td>
                <td className="px-2 py-2">
                  <p className="text-[14px] text-[#666] w-30">
                    <span className="font-semibold">234</span>
                    <span className="font-medium pl-1">sale</span>
                  </p>

                  <Progress value={70} type={"success"} />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-2">
                    <Tooltip title="Edit Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <CiEdit className="text-[rgba(0,0,0,0.7)] text-[22px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Details" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <IoEyeOutline className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="Remove Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[16px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>

              <tr className="bg-neutral-primary  border-b border-[rgba(0,0,0,0.1)]">
                <td className="px-2 py-2">
                  <div className="w-15">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-1 py-2">
                  <div className="flex items-center gap-4 w-[325px]">
                    <div className="img w-17 h-17 rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="https://m.media-amazon.com/images/I/81lSbNqyg3L._SX679_.jpg"
                          alt="product img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <Link to="/product/45">
                        <h3 className="text-[12px] text-[#666] font-medium leading-3 hover:text-[#ff5252]">
                          Bikaji Tana Tan - Aloo bhujia | 400g Pack | Crunchy &
                          Flavourful | Perfect Tea-time Partner
                        </h3>
                      </Link>

                      <span className="text-[10px] text-[#666] font-bold">
                        Bikaji
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Grocery & Gourmet Foods
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Namkeen
                </td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-medium">
                      $58.00
                    </span>
                    <span className="price text-[#ff5252] font-semibold">
                      $45.00
                    </span>
                  </div>
                </td>
                <td className="px-2 py-2">
                  <p className="text-[14px] text-[#666] w-30">
                    <span className="font-semibold">234</span>
                    <span className="font-medium pl-1">sale</span>
                  </p>

                  <Progress value={70} type={"warning"} />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-2">
                    <Tooltip title="Edit Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <CiEdit className="text-[rgba(0,0,0,0.7)] text-[22px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Details" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <IoEyeOutline className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="Remove Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[16px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>

              <tr className="bg-neutral-primary  border-b border-[rgba(0,0,0,0.1)]">
                <td className="px-2 py-2">
                  <div className="w-15">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-1 py-2">
                  <div className="flex items-center gap-4 w-[325px]">
                    <div className="img w-17 h-17 rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="https://m.media-amazon.com/images/I/81lSbNqyg3L._SX679_.jpg"
                          alt="product img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <Link to="/product/45">
                        <h3 className="text-[12px] text-[#666] font-medium leading-3 hover:text-[#ff5252]">
                          Bikaji Tana Tan - Aloo bhujia | 400g Pack | Crunchy &
                          Flavourful | Perfect Tea-time Partner
                        </h3>
                      </Link>

                      <span className="text-[10px] text-[#666] font-bold">
                        Bikaji
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Grocery & Gourmet Foods
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Namkeen
                </td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-medium">
                      $58.00
                    </span>
                    <span className="price text-[#ff5252] font-semibold">
                      $45.00
                    </span>
                  </div>
                </td>
                <td className="px-2 py-2">
                  <p className="text-[14px] text-[#666] w-30">
                    <span className="font-semibold">234</span>
                    <span className="font-medium pl-1">sale</span>
                  </p>

                  <Progress value={70} type={"success"} />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-2">
                    <Tooltip title="Edit Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <CiEdit className="text-[rgba(0,0,0,0.7)] text-[22px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Details" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <IoEyeOutline className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="Remove Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[16px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>

              <div className="mb-2"></div>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-end pt-5 pb-5 px-4">
          <Pagination count={10} color="primary" />
        </div>
      </div>

      <div className="card my-4 p-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[20px] font-semibold ">Recent Orders</h2>
        </div>

        <div className="relative overflow-x-auto mt-2 rounded-md">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="text-sm text-heading bg-[#f1f1f1]">
              <tr>
                <th scope="col" className="px-6 py-3 font-semibold">
                  &nbsp;
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Order ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Payment ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Phone Number
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Pincode
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Total Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  User ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Order Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-neutral-primary">
                <td class="px-6 py-4 text-[#666] font-medium">
                  <Button
                    className="w-8! h-8! min-w-8! rounded-full! bg-[#f1f1f1]!"
                    onClick={() => showDetails(0)}
                  >
                    {isOpenShowProductDetails === 0 ? (
                      <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </td>
                <td class="px-6 py-4 text-[#666] font-medium">
                  <span className="text-[#ff5252]">order101dec222025d</span>
                </td>
                <td class="px-6 py-4 text-[#666] font-medium">
                  <span className="text-[#ff5252]">102277744549</span>
                </td>
                <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                  Ankit Prabhavak
                </td>
                <td class="px-6 py-4 text-[#666] font-medium">8965236984</td>
                <td class="px-6 py-4 text-[#666] font-medium">
                  <span className="block w-[350px]"></span>
                  Flat 204, Shanti Residency, Boring Rd
                </td>
                <td class="px-6 py-4 text-[#666] font-medium">841440</td>
                <td class="px-6 py-4 text-[#666] font-medium">$2999</td>
                <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                  username@example.com
                </td>
                <td class="px-6 py-4 text-[#666] font-medium">
                  <span className="text-[#ff5252]">66user7898789pqridhjh</span>
                </td>
                <td class="px-6 py-4 text-[#666] font-medium">
                  <Badge status={"pending"} />
                </td>
                <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                  22-12-2025
                </td>
              </tr>
              <tr>
                <td colSpan={12}>
                  <Divider />
                </td>
              </tr>
              {isOpenShowProductDetails === 0 && (
                <tr>
                  <td className="pl-20" colSpan={6}>
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left rtl:text-right text-body">
                        <thead className="text-sm text-heading">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 font-semibold whitespace-nowrap"
                            >
                              Product ID
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 font-semibold whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 font-semibold whitespace-nowrap"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 font-semibold whitespace-nowrap"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 font-semibold whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 font-semibold whitespace-nowrap"
                            >
                              Subtotal
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="bg-neutral-primary">
                            <td class="px-6 py-4 text-[#313030] font-medium whitespace-nowrap">
                              46sfrhjp4525bn
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium">
                              <span className="block w-[250px]">
                                Dettol Original Bathing Soap Bar
                              </span>
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                              <img
                                src="https://m.media-amazon.com/images/I/61j4tjFr47L._SL1000_.jpg"
                                alt="product img"
                                className="w-20 h-20 object-cover rounded-md"
                              />
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                              2
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                              $2999
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                              $9954
                            </td>
                          </tr>
                          <tr class="bg-neutral-primary">
                            <td class="px-6 py-4 text-[#313030] font-medium whitespace-nowrap">
                              46sfrhjp4525bn
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium">
                              <span className="block w-[250px]">
                                Dettol Original Bathing Soap Bar
                              </span>
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                              <img
                                src="https://m.media-amazon.com/images/I/61j4tjFr47L._SL1000_.jpg"
                                alt="product img"
                                className="w-20 h-20 object-cover rounded-md"
                              />
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                              2
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                              $2999
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                              $9954
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={12} className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <span className="flex-1 h-px bg-[#e5e5e5]" />
                                <span className="text-[12px] text-[#888] whitespace-nowrap">
                                  End of order
                                </span>
                                <span className="flex-1 h-px bg-[#e5e5e5]" />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}

              <tr className="bg-neutral-primary">
                <td class="px-6 py-4 text-[#666] font-medium">
                  <Button
                    className="w-8! h-8! min-w-8! rounded-full! bg-[#f1f1f1]!"
                    onClick={() => showDetails(1)}
                  >
                    {isOpenShowProductDetails === 1 ? (
                      <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </td>
                <td class="px-6 py-4 text-[#666] font-medium">
                  <span className="text-[#ff5252]">order101dec222025d</span>
                </td>
                <td class="px-6 py-4 text-[#666] font-medium">
                  <span className="text-[#ff5252]">102277744549</span>
                </td>
                <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                  Virat Kohli
                </td>
                <td class="px-6 py-4 text-[#666] font-medium">8965236984</td>
                <td class="px-6 py-4 text-[#666] font-medium">
                  <span className="block w-[350px]"></span>
                  Flat 204, Shanti Residency, Boring Rd
                </td>
                <td class="px-6 py-4 text-[#666] font-medium">841440</td>
                <td class="px-6 py-4 text-[#666] font-medium">$2999</td>
                <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                  username@example.com
                </td>
                <td class="px-6 py-4 text-[#666] font-medium">
                  <span className="text-[#ff5252]">66user7898789pqridhjh</span>
                </td>
                <td class="px-6 py-4 text-[#666] font-medium">
                  <Badge status={"delivered"} />
                </td>
                <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                  22-12-2025
                </td>
              </tr>
              <tr>
                <td colSpan={12}>
                  <Divider />
                </td>
              </tr>
              {isOpenShowProductDetails === 1 && (
                <tr>
                  <td className="pl-20" colSpan={6}>
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left rtl:text-right text-body">
                        <thead className="text-sm text-heading">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 font-semibold whitespace-nowrap"
                            >
                              Product ID
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 font-semibold whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 font-semibold whitespace-nowrap"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 font-semibold whitespace-nowrap"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 font-semibold whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 font-semibold whitespace-nowrap"
                            >
                              Subtotal
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="bg-neutral-primary">
                            <td class="px-6 py-4 text-[#313030] font-medium whitespace-nowrap">
                              46sfrhjp4525bn
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium">
                              <span className="block w-[250px]">
                                Dettol Original Bathing Soap Bar
                              </span>
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                              <img
                                src="https://m.media-amazon.com/images/I/61j4tjFr47L._SL1000_.jpg"
                                alt="product img"
                                className="w-20 h-20 object-cover rounded-md"
                              />
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                              2
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                              $2999
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                              $9954
                            </td>
                          </tr>
                          <tr class="bg-neutral-primary">
                            <td class="px-6 py-4 text-[#313030] font-medium whitespace-nowrap">
                              46sfrhjp4525bn
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium">
                              <span className="block w-[250px]">
                                Dettol Original Bathing Soap Bar
                              </span>
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                              <img
                                src="https://m.media-amazon.com/images/I/61j4tjFr47L._SL1000_.jpg"
                                alt="product img"
                                className="w-20 h-20 object-cover rounded-md"
                              />
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                              2
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                              $2999
                            </td>
                            <td class="px-6 py-4 text-[#666] font-medium whitespace-nowrap">
                              $9954
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={12} className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <span className="flex-1 h-px bg-[#e5e5e5]" />
                                <span className="text-[12px] text-[#888] whitespace-nowrap">
                                  End of order
                                </span>
                                <span className="flex-1 h-px bg-[#e5e5e5]" />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}

              <tr>
                <td colSpan={12} className="h-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="card my-4 p-3 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5 pb-2">
          <h2 className="text-[20px] font-semibold ">
            Total Customers & Sales
          </h2>
        </div>

        <div className="flex items-center gap-5 px-5 py-5 pt-1">
          <span className="flex items-center gap-1 text-[14px] font-medium">
            <span className="block w-2 h-2 rounded-full bg-green-600"></span>
            Total Customers
          </span>

          <span className="flex items-center gap-1 text-[14px] font-medium">
            <span className="block w-2 h-2 rounded-full bg-purple-600"></span>
            Total Sales
          </span>
        </div>

        <LineChart
          width={1000}
          height={500}
          responsive
          data={chart1Data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="none" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis width="auto" tick={{ fontSize: 12 }} />
          <RechartsTooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="customers"
            stroke="#8884d8"
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="sales"
            strokeWidth={3}
            stroke="#82ca9d"
          />
          <RechartsDevtools />
        </LineChart>
      </div> */}

      <div className="chartsWrapper grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card w-full my-4 p-3 shadow-md sm:rounded-lg bg-white">
          <div className="flex items-center justify-between px-5 py-5 pb-2">
            <h2 className="text-[20px] font-semibold ">
              Total Customers & Sales
            </h2>
          </div>

          <div className="flex items-center gap-5 px-5 py-5 pt-1">
            <span className="flex items-center gap-1 text-[14px] font-medium">
              <span className="block w-2 h-2 rounded-full bg-green-600"></span>
              Total Customers
            </span>

            <span className="flex items-center gap-1 text-[14px] font-medium">
              <span className="block w-2 h-2 rounded-full bg-purple-600"></span>
              Total Sales
            </span>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart
              data={chart1Data}
              margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
            >

              {/* X Axis */}
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12, fill: "#64748b" }}
              />

              {/* Y Axis */}
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12, fill: "#64748b" }}
              />

              {/* Tooltip */}
              <RechartsTooltip
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
                labelStyle={{ fontWeight: 600 }}
              />

              {/* Customers */}
              <Line
                type="monotone"
                dataKey="customers"
                stroke="#16a34a"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6 }}
              />

              {/* Sales */}
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#6366f1"
                strokeWidth={3}
                dot={false}
              />

              <RechartsDevtools />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card w-full my-4 p-3 shadow-md sm:rounded-lg bg-white">
          <div className="flex items-center justify-between px-5 py-5 pb-2">
            <h2 className="text-[20px] font-semibold ">
              Total Categories & Subcategories
            </h2>
          </div>

          <div className="flex items-center gap-5 px-5 py-5 pt-1">
            <span className="flex items-center gap-1 text-[14px] font-medium">
              <span className="block w-2 h-2 rounded-full bg-[#ff5252]"></span>
              Total Categories
            </span>

            <span className="flex items-center gap-1 text-[14px] font-medium">
              <span className="block w-2 h-2 rounded-full bg-[#3872fa]"></span>
              Total Subcategories
            </span>
          </div>

          <div className="h-[350px] flex items-center justify-center">
            <TwoLevelPieChart />
          </div>
        </div>
      </div>

      <div className="card my-4 p-3 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5 pb-2">
          <h2 className="text-[20px] font-semibold ">
            Monthly Performance Overview
          </h2>
        </div>
        <div className="flex items-center gap-6 px-5 py-3 text-sm font-medium">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            Revenue
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Orders
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            Profit
          </span>
        </div>

        <div className="p-4">
          <ComposedChartGraph />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
