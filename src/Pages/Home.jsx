import React from "react";
import Main from "../component/Main";
import Row from "../component/Row";
import requests from "../Requests";

export default function Home() {
  return (
    <>
      <Main />
      <Row rowId="1" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row rowId="2" title="TopRated" fetchURL={requests.requestToRated} />
      <Row rowId="3" title="Popular" fetchURL={requests.requestPopular} />
    </>
  );
}
