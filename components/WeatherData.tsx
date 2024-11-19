import { View, Text, Image } from "react-native";
import React from "react";
import { type weatherType } from "@/app";

const WeatherData = ({
  weatherData,
}: {
  weatherData: weatherType | undefined;
}) => {
  return (
    <View>
      <View className="flex-row gap-x-8">
        <View className="flex-row flex-1 bg-primary-2 p-4 items-center rounded-xl">
          <View className="w-10 h-10 mr-5 rounded-full items-center justify-center bg-white">
            <Image
              className="w-5 h-5"
              source={require("@/assets/icons/wind.png")}
            />
          </View>
          <View>
            <Text className="text-lg ">Wind Speed</Text>
            <Text className="text-lg ">
              {weatherData?.current.wind_kph}Km/h
            </Text>
          </View>
        </View>

        <View className="flex-row flex-1 bg-primary-2 p-4 items-center rounded-xl">
          <View className="w-10 h-10 mr-5 rounded-full items-center justify-center bg-white">
            <Image
              className="w-5 h-5"
              source={require("@/assets/icons/rainy.png")}
            />
          </View>
          <View>
            <Text className="text-lg ">Rain Chance</Text>
            <Text className="text-lg ">{weatherData?.current.cloud} %</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WeatherData;
