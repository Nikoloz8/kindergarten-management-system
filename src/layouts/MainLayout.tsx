import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useForm } from "react-hook-form";

export default function MainLayout() {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/")

        if (!localStorage.getItem("currentUser")) {
            localStorage.setItem("currentUser", JSON.stringify({
                role: "Guest"
            }))
        }

        if (!localStorage.getItem("users")) {
            localStorage.setItem("users", "[]")
        }

    }, [])

    const { register, watch, reset } = useForm()


    return (
        <div className="flex items-center justify-center flex-col">
            <div className="w-[1290px]">
                <Header />
            </div>
            <Outlet context={{ register, reset, watch }} />
            <Footer />
        </div>
    )
}
