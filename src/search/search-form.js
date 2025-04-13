import React from "react";
const SearchForm = () => {
    return (
        <>
            <div className="mx-auto my-auto h-fit w-11/12 rounded-md bg-white p-2.5 shadow-md">
                <h1 className="text-center font-bold">Cari di Sini</h1>
                <form className="w-full">
                    <div className="mx-auto mt-2 flex">
                        <input
                            className="mr-2 w-1/3 border p-1"
                            placeholder="Posisi"
                            name="posisi"
                        />
                        <select className="mr-2 w-1/3 border p-1" name="lokasi">
                            <option>Lokasi</option>
                            <option value="Dalam Kota">Dalam Kota</option>
                            <option value="Luar Kota">Luar Kota</option>
                            <option value="Luar Negri">Luar Negri</option>
                        </select>
                        <input
                            className="w-1/3 border p-1"
                            placeholder="Semua Lulusan"
                            name="lulusan"
                        />
                    </div>
                    <div className="mt-2 flex justify-between">
                        <div>
                            <input type="checkbox" className="fulltime" name="fulltime" />
                            <label class="ml-2" htmlFor="fulltime">Full time</label>
                        </div>
                        <div>
                            <input type="checkbox" id="partime" className="" name="partime" />
                            <label class="ml-2" htmlFor="partime">Partime</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="freelance"
                                className=""
                                name="freelance"
                            />
                            <label class="ml-2" htmlFor="freelance">Freelance</label>
                        </div>
                        <div>
                            <input type="checkbox" id="magang" className="" name="magang" />
                            <label class="ml-2" htmlFor="magang">Magang</label>
                        </div>
                    </div>
                    <div className="mt-2 flex justify-between">
                        <div>
                            <input type="checkbox" className="onsite" name="onsite" />
                            <label class="ml-2" htmlFor="onsite">On Site</label>
                        </div>
                        <div>
                            <input type="checkbox" id="wfh" className="" name="wfh" />
                            <label class="ml-2" htmlFor="wfh">WFH</label>
                        </div>
                        <div>
                            <input type="checkbox" id="remote" className="" name="remote" />
                            <label class="ml-2" htmlFor="remote">Remote</label>
                        </div>
                        <div>
                            <input type="checkbox" id="hybrid" className="" name="hybrid" />
                            <label class="ml-2" htmlFor="hybrid">Hybrid</label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mr-0 mt-2 w-full rounded-lg bg-green-300 hover:bg-green-500 p-1">
                        Cari
                    </button>
                </form>
            </div>
        </>
    )
}

export default SearchForm