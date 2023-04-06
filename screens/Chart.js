import React, { useState } from "react";
import { View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Button } from "react-native";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#fff",
  color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
  strokeWidth: 2,
};

const Chart = () => {
  const [animated, setAnimated] = useState(false);

  const toggleAnimated = () => {
    setAnimated(!animated);
  };

  return (
    <View>
      <LineChart
        data={data}
        width={300}
        height={200}
        chartConfig={chartConfig}
        bezier={animated}
      />
      <Button title="Toggle Animated" onPress={toggleAnimated} />
    </View>
  );
};

export default Chart;
