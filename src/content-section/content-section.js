import React from "react";
import SearchBox from "../search/search-box";
import RekomendasiWrap from "../rekondasi-loker/rekomendasi-wrap";
import LokerWrap from "../loker/loker-wrap";

const ContentSection = (prop) => {
  const data = prop.dataFetch;
  //console.log(prop);
  return (
    <>
      <SearchBox />
      <RekomendasiWrap dataFetch={prop.recData} />
      <LokerWrap dataFetch={data} home={"Baru"} posision="home" />
    </>
  );
};

export default ContentSection;
