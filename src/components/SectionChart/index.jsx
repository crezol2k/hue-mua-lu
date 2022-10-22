import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import "./style.css";
import ScrollAnimation from "react-animate-on-scroll";

import Chart from "react-apexcharts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const SectionChart = () => {
  const waters = [375, 275, 372, 369, 368, 381, 395, 400];
  const labels = [
    "1h00",
    "2h00",
    "3h00",
    "4h00",
    "5h00",
    "6h00",
    "7h00",
    "8h00",
  ];

  const options = {
    animation: {
      duration: 2,
    },
    title: {
      text: "Sông Hương: ngày 15/10/2022",
      align: "center",
      style: {
        fontSize: "14px",
      },
    },
    labels: labels,
    chart: {
      fontFamily: "Lora",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#023e8a", "#90e0ef"],
    stroke: {
      width: 1,
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          {
            offset: 0.1,
            color: "#8ecae6",
            opacity: 0.8,
          },
          {
            offset: 100,
            color: "white",
            opacity: 1,
          },
        ],
        stops: [0, 45, 85, 100],
      },
    },
    yaxis: [
      {
        show: true,
        min: 0,
        max: 500,
        labels: {
          show: true,
          style: {
            colors: "#A9A9A9",
            fontSize: "12px",
            fontWeight: 400,
            cssClass: "apexcharts-yaxis-label",
          },
          offsetX: 0,
          offsetY: 0,
          rotate: 0,
          formatter: function (value) {
            return `${value} cm`;
          },
        },
      },
    ],
  };
  const series = [
    {
      name: "Mực nước",
      data: waters,
    },
  ];
  return (
    <div className="d-flex justify-content-center">
      <div className="container section-1">
        <ScrollAnimation animateIn="animate__lightSpeedInLeft">
          <div
            className="pt-5 pb-3 position-relative"
            style={{ width: "800px", margin: "0 auto" }}
          >
            <Chart options={options} type="area" series={series} />
            <div className="line-warning1"></div>
            <div className="line-warning2"></div>
            <div className="line-warning3"></div>
          </div>
        </ScrollAnimation>
        <div className="heading-main-2 py-5">
          <h3 className="">Đô thị kiểu mẫu cũng ngập</h3>
        </div>
      </div>
    </div>
  );
};
export default SectionChart;
