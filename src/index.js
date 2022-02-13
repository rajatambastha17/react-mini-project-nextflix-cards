import React from "react";
import ReactDOM from "react-dom";
import Card from "./Components/Cards";
import "./index.css";
import DATA from "./Data/Data";

// function ncard(val) {
//   return (
//     <Card
//       imgSrc={val.imageSource}
//       category={val.category}
//       link={val.watchLink}
//       seriesName={val.seriesName}
//     />
//   );
// }

ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 netflix series</h1>
    {/* This is the fat arrow fucntion */}
    {DATA.map((val) => {
      return (
        <Card
          imgSrc={val.imageSource}
          category={val.category}
          link={val.watchLink}
          seriesName={val.seriesName}
        />
      );
    })}
    {/*This is calling ncard method inside map() which is written above */}
    {/* {DATA.map(ncard)} */}

    {/*Below is the standard convention of writing components and props */}
    {/* <Card
      imgSrc={DATA[0].imageSource}
      category={DATA[0].category}
      link={DATA[0].watchLink}
      seriesName={DATA[0].seriesName}
    />
    <Card
      imgSrc={DATA[1].imageSource}
      category={DATA[1].category}
      link={DATA[1].watchLink}
      seriesName={DATA[1].seriesName}
    />
    <Card
      imgSrc={DATA[2].imageSource}
      category={DATA[2].category}
      link={DATA[2].watchLink}
      seriesName={DATA[2].seriesName}
    />
    <Card
      imgSrc={DATA[3].imageSource}
      category={DATA[3].category}
      link={DATA[3].watchLink}
      seriesName={DATA[3].seriesName}
    />
    <Card
      imgSrc={DATA[4].imageSource}
      category={DATA[4].category}
      link={DATA[4].watchLink}
      seriesName={DATA[4].seriesName}
    /> */}
  </>,
  document.getElementById("root")
);
