import React from "react";

const RekomendasiItem = (prop) => {
  let jobOpen = prop.status;
  const colorJob = { color: jobOpen === 0 ? "red" : "green" };
  return (
    <>
      <div className="mx-auto mb-2.5 flex w-36 justify-between">
        <div>Dibutuhkan</div>|
        <div className="font-semibold" style={colorJob}>
          {jobOpen === 0 ? "Ditutup" : "Dibuka"}
        </div>
      </div>
      <div className="grid min-h-32 w-60">
        <img className="m-auto w-28" src={prop.co_img} alt="" />
      </div>
      <h1 className="my-1.5 overflow-hidden truncate whitespace-nowrap text-xl font-semibold">
        {prop.title}
      </h1>
      <div className="mb-2">{prop.type}</div>
      <hr />
      <div className="my-2 flex max-w-80 overflow-hidden whitespace-nowrap">
        <img
          className="mr-1.5 h-6 w-6"
          src="https://www.svgrepo.com/show/20473/office.svg"
          alt=""
        />
        <span className="truncate">{prop.co_name}</span>
      </div>
      <hr />
      <div className="flex justify-between overflow-hidden whitespace-nowrap">
        <div className="my-2.5 mr-1.5 flex max-w-80 text-wrap">
          <img
            className="mr-2.5 h-6 w-6"
            src="https://www.svgrepo.com/show/383227/education-cap-student-graduation-university.svg"
            alt=""
          />
          <span>{prop.education}</span>
        </div>
        <div className="my-2.5 mr-1.5 flex max-w-80 text-wrap">
          <img
            className="mr-2.5 h-5 w-5"
            src="https://www.svgrepo.com/show/489229/work.svg"
            alt=""
          />
          <span>{prop.tenure}</span>
        </div>
      </div>
      <hr />
      <div className="my-2 flex max-w-80 overflow-hidden whitespace-nowrap">
        <img
          className="mr-2.5 h-5 w-5"
          src="https://www.svgrepo.com/show/532539/location-pin.svg"
          alt=""
        />
        <span>{prop.co_city}</span>
      </div>
    </>
  );
};

export default RekomendasiItem;
