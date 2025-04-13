import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoWeb from './../img/adker.png'

const Login = () => {
    const [counter, setCounter] = useState(0);
    const [passwordType, setpasswordType] = useState('password')

    const togglePassword = () => {
        let counterAdd = counter + 1
        setCounter(counterAdd % 2)
        setpasswordType(counter < 1 ? 'text' : 'password')

    }
    return (
        <>
            <nav className="w-full border bg-white p-2 shadow-md fixed top-0">
                <Link to="/">
                    <div className="flex">
                        <img
                            className="mr-3 h-12 w-fit"
                            src={logoWeb}
                            alt=""
                        />
                        <h1 className="my-auto text-2xl font-bold text-[#0c757d]">ADA KERJA</h1>
                    </div>
                </Link>
            </nav>
            <div className="mt-16 w-svw p-1">
                <div className="mx-auto h-auto w-4/12 min-w-64 rounded-lg border bg-white p-2.5 font-sans shadow-lg">
                    <h1 className="m-0 mb-3 text-2xl font-bold">Log-In</h1>
                    <form>
                        <label className="text-sm">Email</label>
                        <input placeholder="email" type="email" className="mx-0 my-2.5 h-10 w-full rounded-2xl border bg-slate-200 px-2.5" />
                        <label className="text-sm">Password</label>
                        <input placeholder="password" type={passwordType} className="mx-0 my-2.5 h-10 w-full rounded-2xl border bg-slate-200 px-2.5" />
                        <input onClick={togglePassword} type="checkbox" id="psw" />
                        <label for="psw" className="text-sm ml-2.5">Lihat password</label>
                        <div className="mt-2.5 flex w-full justify-between text-sm font-bold">
                            <Link to="..\"><span className="no-underline">Lupa password?</span></Link>
                            <Link to="..\signup"><span className="no-underline">Tidak Punya Akun?</span></Link>

                        </div>
                        <button className="mx-0 my-2.5 h-10 w-full rounded-2xl border bg-green-300 px-2.5 font-medium hover:bg-green-500">Log-In</button>
                    </form>
                </div></div>


        </>
    )
}

export default Login