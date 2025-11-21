import { Wind, Sun } from "lucide-react";

const WeatherCard = ({ ele }) => {
  const Today = new Date();
  const formattedDate = Today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex flex-col flex-wrap text-white bg-black/15 backdrop-blur-none w-[280px] lg:w-[400px] sm:w-[400px] md:w-[400px] rounded-3xl p-5 shadow-2xl">
      <div>
        <div className="flex justify-between mt-4">
          <h1 className="sm:text-5xl text-4xl font-medium font-cabinet">
            {" "}
            {ele.name}
          </h1>
          <div className="flex items-start gap-0">
            <h3 className="sm:text-6xl text-5xl font-cabinet">
              {" "}
              {Math.round(ele.main.temp)}
            </h3>
            <span className="font-cabinet">°C</span>
          </div>
        </div>
        <h2 className="text-base mb-6">{formattedDate}</h2>
      </div>
      <div className="flex flex-col sm:flex-row font-cabinet items-center justify-between gap-4 w-full">
        <div className="backdrop-blur-sm ring hover:ring-2 ring-white/25 transition ease-in-out text-base font-medium  p-2 sm:py-6 sm:px-11 rounded-xl w-full sm:w-auto">
          <p className="flex justify-center items-center">
            <Wind size="20px" />
            &nbsp;Wind
          </p>
          <p className=" flex justify-center items-center">
            {ele.wind.speed} m/s
          </p>
        </div>

        <div className="backdrop-blur-sm ring hover:ring-2 ring-white/25 transition ease-in-out text-base font-cabinet p-2 sm:py-6 sm:px-10 rounded-xl w-full sm:w-auto">
          <p className="flex justify-center items-center">
            <Sun size="20px" />
            &nbsp;Humidity
          </p>
          <p className="flex justify-center">{ele.main.humidity}%</p>
        </div>
      </div>

      <div className="backdrop-blur-sm ring-1 hover:ring-2 ring-white/25 transition ease-in-out my-6 p-3 sm:p-5 font-cabinet rounded-xl flex justify-center items-center">
        <p className=" capitalize text-base">
          Weather - {ele.weather[0].description}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
