import React from "react";
import Card from "./Card";
import dummyData from "../Data/data";

function Home() {
  return (
    <div className="pb-24">
      <div className="flex flex-wrap justify-center mt-16">
        {dummyData.map((data, index) => (
          <Card data={data} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
