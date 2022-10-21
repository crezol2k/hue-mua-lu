import React from "react";
import "./style.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ScrollAnimation from "react-animate-on-scroll";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SectionChart = (props) => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const options = {
    animation: {
      duration: 2,
    },
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        lineDashOffset: 40,
        labels: {
          boxHeight: 10,
          boxWidth: 10,
        },
      },
      datalabels: {
        display: labels.map((item) => item),
        color: "black",
        align: "end",
        anchor: "end",
      },
    },
  };

  const data = {
    labels: props.labels,
    datasets: [
      {
        label: "Tháng 10 trung bình nhiều năm",
        data: 10,
        backgroundColor: "rgb(229, 189, 95);",
      },
      {
        label: "Từ 1- 20/10 trung bình nhiều năm",
        data: 20,
        backgroundColor: "rgb(135, 89, 43)",
      },
      {
        label: "Từ 1- 20/10/2020",
        data: 30,
        backgroundColor: "rgb(255, 179, 0)",
      },
    ],
  };
  return (
    <>
      <div className="container section-1">
        <ScrollAnimation animateIn="animate__lightSpeedInLeft">
          <div
            style={{ width: "800px", margin: "auto auto" }}
            className="pt-5 pb-3"
          >
            <Bar options={options} data={data} />
            <p className="mt-2" style={{ fontWeight: "bold" }}>
              Đô thị kiểu mẫu cũng ngập.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default SectionChart;
