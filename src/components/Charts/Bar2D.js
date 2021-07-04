import React from "react";
import ReactFusionCharts from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFusionCharts.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({data}) => {
  console.log(data)
  
  const chartConfigs = {
    type: "bar2d", // The chart type
    width: "400", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Most Forked",
        theme: "fusion",
        decimals: 0,
        pieRadius: '45%'
      },
      // Chart Data
      data: data
    }
  };
  return <ReactFusionCharts {...chartConfigs} />
}

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component


export default ChartComponent;
