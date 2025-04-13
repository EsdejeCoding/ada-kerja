import React from "react";
import logoWeb from './../img/adker.png'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="mt-9 flex justify-between bg-white p-2.5">
                    <div className="my-auto flex">
                        <img
                            className="mr-3 h-12 w-12"
                            src={logoWeb}
                            alt=""
                        />
                        <h1 className="my-auto text-2xl font-bold text-[#0c757d]">ADA KERJA</h1>
                    </div>
                    <div>
                        <div className="mb-2.5 text-lg font-bold">Follow Us :</div>
                        <div className="mb-1 flex">
                            <img
                                className="mr-2.5 h-5 w-5"
                                src="https://www.svgrepo.com/show/512399/instagram-167.svg" alt=""
                            />{" "}
                            <a href="instagram.com">Instagram</a>
                        </div>
                        <div className="mb-1 flex">
                            <img
                                className="mr-2.5 h-5 w-5"
                                src="https://www.svgrepo.com/show/521654/facebook.svg" alt=""
                            />{" "}
                            <a href="fb.com">Facebook</a>
                        </div>
                        <div className="mb-1 flex">
                            <img
                                className="mr-2.5 h-5 w-5"
                                src="https://www.svgrepo.com/show/487139/brand-tiktok-sq.svg" alt=""
                            />{" "}
                            <a href="tiktok.com">Tiktok</a>
                        </div>
                        <div className="mb-1 flex">
                            <img
                                className="mr-2.5 h-5 w-5"
                                src="https://www.svgrepo.com/show/494253/twitter-rounded-border.svg" alt=""
                            />{" "}
                            <a href="x.com">X/Twitter</a>
                        </div>
                    </div>
                </div>
                <center className="bg-slate-600 py-2 text-white">
                    2024 ADA KERJA - SYAHRUL DWI JUNIYANTO
                </center>
            </footer>
        </>
    )
}

export default Footer