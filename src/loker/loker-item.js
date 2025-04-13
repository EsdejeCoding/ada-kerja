import React from "react";

const LokerItem = (prop) => {
  let jobOpen = prop.status;
  const colorJob = { color: jobOpen === 0 ? "red" : "green" };
  return (
    <>
      <div className="flex h-3/5 justify-between">
        <div className="m-auto contents w-28 border">
          <img className="m-auto w-28" src={prop.co_img} alt="" />
        </div>
        <div className="flex flex-col justify-between min-h-24 w-10/12 ml-2 text-wrap">
          <div className="flex flex-wrap justify-between pr-1.5">
            <div className="mr-2.5 mt-2.5 flex min-w-36 justify-between">
              <div>Dibutuhkan</div>|
              <div className="font-semibold" style={colorJob}>
                {jobOpen === 1 ? "Dibuka" : "Ditutup"}
              </div>
            </div>
            <div className="my-2.5 flex w-auto justify-between">
              <img
                className="h-5 w-5 mr-2.5"
                src="https://www.svgrepo.com/show/521888/time.svg"
                alt=""
              />
              <div>{prop.time}</div>
            </div>
          </div>
          <h1 className="py-2 h-16 max-h-16 overflow-y-clip text-xl font-semibold">
            {prop.title}
          </h1>
          <div className="my-2.5">{prop.type}</div>
        </div>
      </div>
      <div className="grid h-fit">
        <div className="my-auto h-fit">
          <div className="flex flex-wrap justify-between">
            <div className="my-2.5 flex max-w-72 text-wrap pr-2.5">
              <img
                className="mr-2.5 h-6 w-6"
                src="https://www.svgrepo.com/show/20473/office.svg"
                alt=""
              />
              <span className="max-h-12 overflow-hidden overflow-y-clip truncate text-nowrap">
                {prop.co_name}
              </span>
            </div>
            <div className="my-2.5 mr-1.5 flex max-w-80 text-wrap">
              <img
                className="mr-2.5 h-6 w-6"
                src="https://www.svgrepo.com/show/491278/money-dollars.svg"
                alt=""
              />
              <span>{prop.salary}</span>
            </div>
          </div>
          <hr />
          <div className="flex flex-wrap justify-between">
            <div className="my-2.5 mr-1.5 flex max-w-44 text-wrap">
              <img
                className="mr-2.5 h-6 w-6"
                src="https://www.svgrepo.com/show/383227/education-cap-student-graduation-university.svg"
                alt=""
              />
              <span>{prop.education}</span>
            </div>
            <div className="my-2.5 mr-1.5 flex max-w-44 text-wrap">
              <img
                className="mr-2.5 h-5 w-5"
                src="https://www.svgrepo.com/show/489229/work.svg"
                alt=""
              />
              <span>{prop.tenure}</span>
            </div>
            <div className="my-2.5 mr-1.5 flex max-w-44 text-wrap">
              <img
                className="mr-2.5 h-5 w-5"
                src="https://www.svgrepo.com/show/532539/location-pin.svg"
                alt=""
              />
              <span>{prop.co_city}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LokerItem;
