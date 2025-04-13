import React from "react";
import { useParams } from "react-router-dom";
import HandleTime from "../handle-time";
import { Link } from "react-router-dom";
import LokerWrap from "./loker-wrap";

const LokerDetail = (prop) => {
  window.scrollTo({
    top: 0, // Scroll dengan animasi
  });
  const { idLoker } = useParams();
  let dataDetail = {};
  prop.dataFetch.map((res) => {
    if (res.id == idLoker) dataDetail = res;
  });
  console.log(dataDetail);
  let dataNull = {
    id: null,
    created_at: null,
    updated_at: null,
    title: null,
    job_description: null,
    job_qualification: null,
    job_type: null,
    job_tenure: null,
    job_status: null,
    company_name: null,
    company_image_url: null,
    company_city: null,
    salary_min: null,
    salary_max: null,
    education: ["Semua Jurusan"],
    gender: "0/1",
    umur: 0,
    job_benefit: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"],
    job_desk: [
      "Esli b debushki varug stali zvezdami prekrasnemi",
      "Nad gorami b zablistali vecherami yasnemi",
    ],
    job_contact: {
      Whatsapp: "0812 3456 7890",
      Email: "example@email.com",
      Website: "www.w3.com",
    },
  };

  let data =
    prop.dataFetch === null
      ? dataNull
      : {
          ...dataNull,
          ...dataDetail,
        };

  const formatNumLocale = (numb) => new Intl.NumberFormat("id-ID").format(numb);

  const jobStat = (useFor) => {
    if (useFor === "color")
      return parseInt(data.job_status) === 1 ? "green" : "red";
    if (useFor === "status")
      return parseInt(data.job_status) === 1 ? " Dibuka" : " Ditutup";
    else return "-";
  };
  const genderType = (gdr) => {
    if (gdr === 0) return "Pria";
    if (gdr === 1) return "Wanita";
    else return "Pria & Wanita";
  };
  return (
    <>
      <div className="mt-12 p-1">
        <div className="p-2.5 m-4">
          <div className="flex">
            <div className="grid min-h-32 w-32">
              <img
                className="m-auto w-28"
                alt=""
                src="https://img.freepik.com/premium-vector/minimalist-type-creative-business-logo-template_1283348-23026.jpg?semt=ais_hybrid"
              />
            </div>
            <div className="ml-2.5">
              <h1 className="my-2.5 text-2xl">{data.company}</h1>
              <span className="">
                <HandleTime timeFromData={data.created_at} />
              </span>{" "}
              |
              <span className={`font-semibold text-${jobStat("color")}-500`}>
                {jobStat("status")}
              </span>
              <h1 className="my-2.5 text-3xl font-bold">{data.title}</h1>
            </div>
          </div>
          <hr />
          <p className="my-3.5">{data.description}</p>
          <hr />
          <div>
            <h1 className="my-3.5 text-2xl font-medium">Spesifikasi</h1>
            <ul className="mb-3.5">
              <li className="flex w-fit my-1.5">
                <div className="mr-3.5 flex w-24 justify-between">
                  <span>Pendidikan</span>
                  <span>:</span>
                </div>
                <span>{data.education.join(", ")}</span>
              </li>
              <li className="flex w-fit my-1.5">
                <div className="mr-3.5 flex w-24 justify-between">
                  <span>Gender</span>
                  <span>:</span>
                </div>
                <span>{genderType(data.gender)}</span>
              </li>
              <li className="flex w-fit my-1.5">
                <div className="mr-3.5 flex w-24 justify-between">
                  <span>Umur</span>
                  <span>:</span>
                </div>
                <span>{data.umur} tahun</span>
              </li>
              <li className="flex w-fit my-1.5">
                <div className="mr-3.5 flex w-24 justify-between">
                  <span>Tipe Kerja</span>
                  <span>:</span>
                </div>
                <span>{data.job_category + " " + data.employment_type}</span>
              </li>
              <li className="flex w-fit my-1.5">
                <div className="mr-3.5 flex w-24 justify-between">
                  <span>Gaji</span>
                  <span>:</span>
                </div>
                <span>{`Rp. ${(data.salary_from / 10000).toFixed(1)} - ${(
                  data.salary_to / 10000
                ).toFixed(1)} Jt`}</span>
              </li>
              <li className="flex w-fit my-1.5">
                <div className="mr-3.5 flex w-24 justify-between">
                  <span>Lokasi</span>
                  <span>:</span>
                </div>
                <span>{data.location}</span>
              </li>
            </ul>
            <hr />
            <h1 className="my-3.5 text-2xl font-medium">Benefit</h1>
            <ul className="ml-4 mb-3.5 list-disc">
              {data.job_benefit.map((itemBenefit) => {
                return (
                  <>
                    <li>{itemBenefit}</li>
                  </>
                );
              })}
            </ul>
            <hr />
            <h1 className="my-3.5 text-2xl font-medium">Job Desk</h1>
            <ul className="ml-4 mb-3.5 list-disc">
              {data.job_desk.map((itemJobdesk) => {
                return (
                  <>
                    <li>{itemJobdesk}</li>
                  </>
                );
              })}
            </ul>
            <hr />
            <h1 className="my-3.5 text-2xl font-medium">Kirim Lamaran</h1>
            <ul className="mb-3.5">
              <li className="flex w-fit">
                <div className="mr-3.5 flex w-24 justify-between">
                  <span>WhatsApp</span>
                  <span>:</span>
                </div>
                <span>
                  <a href="web.whatsapp.com">{data.job_contact.Whatsapp}</a>
                </span>
              </li>
              <li className="flex w-fit">
                <div className="mr-3.5 flex w-24 justify-between">
                  <span>Email</span>
                  <span>:</span>
                </div>
                <span>{data.job_contact.Email}</span>
              </li>
              <li className="flex w-fit">
                <div className="mr-3.5 flex w-24 justify-between">
                  <span>Website</span>
                  <span>:</span>
                </div>
                <span>{data.job_contact.Website}</span>
              </li>
            </ul>
            <div className="flex">
              <Link to="/">
                <button className="w-28 rounded-lg border-2 border-green-600 bg-green-500 p-2.5 font-semibold text-white mr-3.5 hover:border-2 hover:border-green-900 hover:bg-green-600 flex justify-center">
                  <img
                    className="mr-1.5 h-6 w-6"
                    alt=""
                    src="https://www.svgrepo.com/show/498949/check-circle.svg"
                  />
                  Lamar
                </button>
              </Link>
              <Link to="/">
                <button className="w-28 rounded-lg border-2 p-2.5 font-semibold mr-3.5 hover:border-2 hover:border-green-900 hover:bg-gray-200 flex justify-center">
                  <img
                    className="mr-1.5 h-6 w-6"
                    alt=""
                    src="https://www.svgrepo.com/show/471847/save-01.svg"
                  />
                  Simpan
                </button>
              </Link>
              <Link to="/">
                <button className="w-28 rounded-lg border-2 p-2.5 font-semibold mr-3.5 hover:border-2 hover:border-green-900 hover:bg-gray-200 flex justify-center">
                  <img
                    className="mr-1.5 h-6 w-6"
                    alt=""
                    src="https://www.svgrepo.com/show/522278/share.svg"
                  />
                  Bagikan
                </button>
              </Link>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <LokerWrap dataFetch={prop.dataFetch} posision="-" />
    </>
  );
};

export default LokerDetail;
