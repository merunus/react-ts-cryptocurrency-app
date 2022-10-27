import React from "react";
import { TChartProps } from "./types";
import { Chart, registerables, ScriptableContext } from "chart.js";
import { Line } from "react-chartjs-2";
import { thousandsSeparator } from "../../../utils/thousandsSeparator";
import moment from "moment";

Chart.register(...registerables);

const LineChart: React.FC<TChartProps> = ({
  currentCurrency,
  isBigScreen,
  currentTimePeriod,
  chartLabels,
  chartData,
}) => {
  return (
    <Line
      width={"1000px"}
      height={"100%"}
      datasetIdKey="id"
      options={{
        maintainAspectRatio: false,
        responsive: true,
        interaction: {
          intersect: false,
          mode: "index",
        },
        layout: {
          padding: 0,
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.dataset.label;
                const parsed = context.parsed;
                if (label) {
                  return `${label} : ${
                    currentCurrency.sign
                  }${thousandsSeparator(parsed.y)}`;
                }
                return "";
              },
              title: function (context) {
                return moment
                  .unix(Number(context[0].label))
                  .format("MMMM DD YYYY");
              },
            },
          },

          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            display: false,
          },
          x: {
            ticks: {
              callback: function (val) {
                if (currentTimePeriod === "3y")
                  return moment
                    .unix(Number(this.getLabelForValue(Number(val))))
                    .format("MMM yyyy");
                else if (
                  currentTimePeriod === "1y" ||
                  currentTimePeriod === "3m"
                )
                  return moment
                    .unix(Number(this.getLabelForValue(Number(val))))
                    .format("MMM");
                else if (
                  currentTimePeriod === "30d" ||
                  currentTimePeriod === "7d"
                )
                  return moment
                    .unix(Number(this.getLabelForValue(Number(val))))
                    .format("MMM D");
                else if (
                  currentTimePeriod === "24h" ||
                  currentTimePeriod === "3h"
                )
                  return moment
                    .unix(Number(this.getLabelForValue(Number(val))))
                    .format(" h:mm A");
                return moment
                  .unix(Number(this.getLabelForValue(Number(val))))
                  .format("yyyy");
              },
              autoSkip: true,
              maxTicksLimit: isBigScreen
                ? currentTimePeriod === "3m"
                  ? 3
                  : currentTimePeriod === "7d"
                  ? 7
                  : 12
                : 5,
              maxRotation: 0,
              color: "#002358",
            },
            grid: {
              lineWidth: 0,
            },
          },
        },
      }}
      data={{
        labels: chartLabels[0],
        datasets: [
          {
            label: "Price",
            data: chartData[0],
            tension: 0.4,
            fill: true,
            backgroundColor: (context: ScriptableContext<"line">) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 500);
              gradient.addColorStop(0, "rgba(71,147,255,1)");
              gradient.addColorStop(0.5, "#bed5fe");
              gradient.addColorStop(1, "#f6faff");
              return gradient;
            },
            borderColor: "#4793ff",
            pointBorderWidth: 0,
            pointRadius: 0,
          },
        ],
      }}
    />
  );
};

export default LineChart;
