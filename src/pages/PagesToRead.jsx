import { useEffect, useState } from "react";
import { getReadBooks } from "../utils/localStorage";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PagesToRead = () => {
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    setReadBooks(getReadBooks());
  }, []);
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={readBooks}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="bookName"
            interval={0}
            tick={{ fontSize: 12, angle: -45, dx: -15, dy: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="totalPages"
            fill="#23BE0A"
            barSize={Math.max(100 / readBooks.length, 20)}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
