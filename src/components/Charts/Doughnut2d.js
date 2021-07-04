import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 3 - Creating the JSON object to store the chart configurations

const ChartComponent = ({data}) => {
  
  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "400", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Stars Per Language",
        yAxisName: 'Stars',
        xAxisName: 'Repos',
        xAxisFontSize: "16px",
        yAxisFontSize: "16px",
        theme: "fusion",
        decimals: 0,
        pieRadius: '45%'
      },
      // Chart Data
      data: data
    }
  };
  return <ReactFC {...chartConfigs} />
}

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component


export default ChartComponent;