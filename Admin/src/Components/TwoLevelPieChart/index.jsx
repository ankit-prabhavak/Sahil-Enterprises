import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";


const TwoLevelPieChart = ({
  isAnimationActive = true,
  defaultIndex,
}) => {

  const [categoryData] = React.useState([
    { name: "Biscuits & Cookies", value: 1560 },
    { name: "Snacks & Namkeens", value: 1410 },
    { name: "Chocolates & Confectionery", value: 1100 },
    { name: "Beverages", value: 1250 },
    { name: "Other Grocery", value: 1330 },
  ]);

  const [subCategoryData] = React.useState([
    { name: "Marie", value: 420 },
    { name: "Good Day", value: 380 },
    { name: "Milk Bikis", value: 310 },
    { name: "Hide & Seek", value: 260 },
    { name: "Bourbon", value: 190 },
    { name: "Punjabi Tadka", value: 340 },
    { name: "Aloo Bhujia", value: 410 },
    { name: "Tasty Nuts", value: 220 },
    { name: "Moong Dal", value: 180 },
    { name: "Mixture", value: 260 },
    { name: "Dairy Milk", value: 390 },
    { name: "5 Star", value: 270 },
    { name: "Munch", value: 230 },
    { name: "Perk", value: 210 },
    { name: "Soft Drinks", value: 460 },
    { name: "Fruit Juice", value: 320 },
    { name: "Energy Drinks", value: 180 },
    { name: "Packaged Water", value: 290 },
    { name: "Instant Noodles", value: 350 },
    { name: "Breakfast Cereals", value: 210 },
    { name: "Cooking Oil", value: 400 },
    { name: "Sugar & Salt", value: 370 },
  ]);

  return (
    <PieChart
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "500px",
        maxHeight: "80vh",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={categoryData}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius="50%"
         fill="#3872fa"
        isAnimationActive={isAnimationActive}
      />
      <Pie
        data={subCategoryData}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="80%"
        fill="#ff5252"
        label
        isAnimationActive={isAnimationActive}
      />
      <Tooltip defaultIndex={defaultIndex} />
      <RechartsDevtools />
    </PieChart>
  );
};

export default TwoLevelPieChart;
