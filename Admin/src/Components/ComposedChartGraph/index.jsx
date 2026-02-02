import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
  Bar,
  Line,
  ResponsiveContainer,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

// #region Sample data
const data = [
  { month: "Jan", revenue: 385000, orders: 980, profit: 72000 },
  { month: "Feb", revenue: 402000, orders: 1040, profit: 78000 },
  { month: "Mar", revenue: 468000, orders: 1210, profit: 91000 },
  { month: "Apr", revenue: 512000, orders: 1360, profit: 103000 },
  { month: "May", revenue: 497000, orders: 1290, profit: 97000 },
  { month: "Jun", revenue: 548000, orders: 1490, profit: 112000 },
];


const ComposedChartGraph = ({ isAnimationActive = true }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <ComposedChart data={data}>

        {/* X Axis */}
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
        />

        {/* Left Y Axis → Revenue & Profit */}
        <YAxis
          yAxisId="left"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
        />

        {/* Right Y Axis → Orders */}
        <YAxis
          yAxisId="right"
          orientation="right"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
        />

        {/* Tooltip */}
        <Tooltip
          formatter={(value, name) => {
            if (name === "revenue" || name === "profit") {
              return [`₹${value.toLocaleString()}`, name];
            }
            return [value, name];
          }}
        />

        {/* Revenue Area */}
        <Area
          yAxisId="left"
          type="monotone"
          dataKey="revenue"
          fill="#e0e7ff"
          stroke="#6366f1"
          isAnimationActive={isAnimationActive}
        />

        {/* Orders Bar */}
        <Bar
          yAxisId="right"
          dataKey="orders"
          barSize={30}
          fill="#22c55e"
          isAnimationActive={isAnimationActive}
        />

        {/* Profit Line */}
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="profit"
          stroke="#f97316"
          strokeWidth={3}
          dot={false}
          isAnimationActive={isAnimationActive}
        />

        <RechartsDevtools />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ComposedChartGraph;
