import React, { use, useEffect, useState } from "react";
import RekomendasiItem from "./rekomendasi-item";
import HandleTime from "../handle-time";
import { Link } from "react-router-dom";

let idx = 0;
const RekomendasiWrap = (prop) => {
  const fetchData = prop.dataFetch;
  const [data, setData] = useState(fetchData);
  idx++;
  console.log(fetchData[0].from);
  const [duration, setDuration] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const jobList = () => {
    return (
      <>
        {data.map((res, index) => {
          res.from = "RECWRAP";
          if (index < 3) {
            return (
              <>
                <Link
                  className="flex flex-col justify-between mx-1 my-2.5 h-auto w-64 rounded-md border bg-white px-3 pb-2 pt-3"
                  to={"/lowongan-kerja/" + res.id}
                >
                  <RekomendasiItem
                    key={index + 1}
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
                  />
                </Link>
              </>
            );
          }
        })}
      </>
    );
  };
  //jobList();
  const [jobs, setJobs] = useState(jobList);
  const nextJob = () => {
    data.push(data.shift());
    setJobs(jobList);
    console.log("NEKJOB");
  };

  const prevJob = () => {
    data.unshift(data.pop());
    setJobs(jobList);
  };

  return (
    <>
      <div>
        <center className="text-2xl font-semibold my-2.5">
          Rekomendasi Lowongan Populer
        </center>
        <div className="mx-auto max-w-6xl flex justify-center">
          <div className="flex flex-col">
            <div
              onClick={nextJob}
              className="my-auto h-10 w-10 rounded-3xl border border-gray-500 text-center text-3xl p-2 hover:bg-slate-200"
            >
              <img
                src="https://www.svgrepo.com/show/355181/previous.svg"
                alt=""
              />
            </div>
          </div>
          <div className="overflow-clip mx-10">
            <div className="flex justify-center">{jobs}</div>
          </div>
          <div className="flex flex-col">
            <div
              onClick={prevJob}
              className="my-auto h-10 w-10 rounded-3xl border border-gray-500 text-center text-3xl p-2 hover:bg-slate-200"
            >
              <img src="https://www.svgrepo.com/show/355139/next.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="w-60 h-fit p-2.5 mx-auto my-2.5 border-2 hover:bg-slate-200 font-bold text-center">
          <Link to="/rekomendasi-kerja">Rekomendasi Lainnya</Link>
        </div>
      </div>
    </>
  );
};
export default RekomendasiWrap;
