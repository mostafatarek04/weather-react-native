import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import WeatherData from "@/components/WeatherData";

export type weatherType = {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
  };
  current: {
    temp_c: number;
    temp_f: number;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;

    windchill_c: number;

    heatindex_c: number;

    dewpoint_c: number;

    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;

    condition: {
      text: string;
      icon: string;
      code: 1183;
    };
  };
};

const HomePage = () => {
  const [weatherData, setWeatherData] = useState<weatherType>();
  useEffect(() => {
    async function fetchWeatherData() {
      const res = await fetch(
        "https://api.weatherapi.com/v1/current.json?key=45e1b8ee353545f8aa3180731241811&q=london&aqi=no"
      );
      const data = (await res.json()) as weatherType;
      setWeatherData(data);
    }
    fetchWeatherData();
  }, []);
  return (
    <View className="flex-1 bg-gray-200">
      <View className="rounded-b-3xl h-1/3 bg-primary p-4 ">
        <Text className="text-white mb-4">
          {weatherData?.location.name} , {weatherData?.location.country}
        </Text>
        <Text className="text-white mb-4">{weatherData?.location.region}</Text>

        <View className="flex-row items-center justify-between">
          <Text className="text-white text-3xl font-light ">
            {weatherData?.current.temp_c} C
          </Text>
          <Image
            className="w-16 h-16"
            source={{
              uri: `https:${weatherData?.current.condition.icon}`,
            }}
          />
        </View>
      </View>

      <View className="mt-5 px-4">
        <View className="flex-row justify-between gap-x-4">
          <View className="bg-primary py-2 px-4 flex-1 rounded-xl">
            <Text className="text-white text-center">Today</Text>
          </View>
          <View className="flex-1 bg-gray-50 py-2 px-4 rounded-xl">
            <Text className="text-primary text-center">Tommorow</Text>
          </View>
          <View className="flex-1 py-2 px-4 bg-gray-50 rounded-xl">
            <Text className="text-primary text-center">After</Text>
          </View>
        </View>
        <View className="mt-5">
          <WeatherData weatherData={weatherData} />
        </View>
      </View>
    </View>
  );
};

export default HomePage;
