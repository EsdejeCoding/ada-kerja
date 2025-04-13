import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./nav-foot/navbar";
import ContentSection from "./content-section/content-section";
import Footer from "./nav-foot/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LokerWrap from "./loker/loker-wrap";
import LokerDetail from "./loker/loker-detail";
import NotFound from "./404/not-found";
import Login from "./login-signup/login";
import Signup from "./login-signup/signup";
import SearchForm from "./search/search-form";
import Omkedata from "./omkedata";
import DataFetcher from "./DataFetcher";

function Apepe() {
  const linkData = "https://jsonfakery.com/jobs";

  const [fetchStatus, setFetchStatus] = useState(true);
  const [downloadData, setDownloadData] = useState(false);
  const dataFet = DataFetcher();
  console.log(dataFet);
  const data = dataFet;
  const dataRec = dataFet
    ? dataFet.map((item) => ({
        ...item,
        from: "Apepe", // Menambahkan key baru
      }))
    : dataFet;
  const [dataInfo, setDataInfo] = useState({});
  /* const [
    id,
    title,
    description,
    company,
    location,
    salary_from,
    salary_to,
    employment_type,
    application_deadline,
    qualifications,
    contact,
    job_category,
    is_remote_work,
    number_of_opening,
    created_at,
    updated_at,
  ] = null;*/

  //console.log(data);
  //if (data) console.log(downloadData, data[0].location);
  return (
    <>
      <div>
        {!data && <h1 className="text-xl">ADA GAK? YA ADA LAH</h1>}
        {data && (
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Navbar link={"home"} />
                    <ContentSection dataFetch={data} recData={dataRec} />
                  </>
                }
              ></Route>
              <Route
                path="/home"
                element={
                  <>
                    <Navbar link={"home"} />
                    <ContentSection dataFetch={data} recData={dataRec} />
                  </>
                }
              ></Route>
              <Route
                path="/lowongan-kerja/:idLoker"
                element={
                  <>
                    <Navbar link={"loker"} />
                    <LokerDetail dataFetch={data} />
                  </>
                }
              ></Route>
              <Route
                path="/lowongan-kerja/"
                element={
                  <>
                    <Navbar link={"loker"} />
                    <div className="mt-16 p-1">
                      <SearchForm />
                    </div>
                    <LokerWrap dataFetch={data} posision="-" />
                  </>
                }
              ></Route>
              <Route
                path="/rekomendasi-kerja"
                element={
                  <>
                    <Navbar link={"rekomendasi"} />
                    <LokerWrap dataFetch={data} posision="-" />
                  </>
                }
              ></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route
                path="*"
                element={
                  <>
                    <NotFound App />
                  </>
                }
              />
            </Routes>
          </BrowserRouter>
        )}
        <Footer />
      </div>
    </>
  );
}

export default Apepe;
