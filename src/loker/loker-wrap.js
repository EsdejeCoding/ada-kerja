import React, { useState } from "react";
import HandleTime from "../handle-time";
import LokerItem from "./loker-item";
import { Link } from "react-router-dom";

const LokerWrap = (prop) => {
  window.scrollTo({
    top: 0, // Scroll dengan animasi
  });
  let data = prop.dataFetch;
  console.log(data[0].from);
  const [dt, setDT] = useState(data);
  return (
    <>
      <div className="mt-16 p-1">
        <div className="ml-6 text-2xl font-semibold my-2.5">
          Lowongan Kerja {prop.home}
        </div>
        <div
          className={`mx-auto ${
            prop.posision === "home" ? "flex flex-wrap justify-between" : ""
          } w-full`}
        >
          {data !== null &&
            data.map((res) => {
              return (
                <>
                  <Link
                    className="flex flex-col justify-between my-4 mx-auto min-h-52 w-[47%] min-w-80 rounded-md border bg-white p-1.5 shadow-md hover:shadow-lg hover:font-bold hover:bg-green-50"
                    to={"/lowongan-kerja/" + res.id}
                  >
                    <LokerItem
                      key={res.id}
                      co_img="https://cdn-icons-png.flaticon.com/512/206/206854.png"
                      status={0}
                      time={<HandleTime timeFromData={res.created_at} />}
                      title={res.title}
                      type={res.job_category}
                      tenure={res.employment_type}
                      co_name={res.company}
                      education={
                        res.education === undefined
                          ? "Semua Jurusan"
                          : res.education
                      }
                      co_city={res.location}
                      salary={`Rp. ${(res.salary_from / 10000).toFixed(1)} - ${(
                        res.salary_to / 10000
                      ).toFixed(1)} Jt`}
                    />
                  </Link>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default LokerWrap;
