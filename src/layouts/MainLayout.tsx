import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function MainLayout() {

    useEffect(() => {
        if (!localStorage.getItem("currentUser")) {
            localStorage.setItem("currentUser", JSON.stringify({
                role: "Guest"
            }))
        }

        if (!localStorage.getItem("users")) {
            localStorage.setItem("users", JSON.stringify([
                {
                    firstname: "ნიკოლოზ",
                    lastname: "თევდორაძე",
                    email: "nikoloztevdoradze08@gmail.com",
                    phoneNumber: "+995 577 19 56 39",
                    password: "admin1234",
                    role: "Administrator",
                    id: 1,
                    visibleProfile: true,
                    startDate: new Date().toLocaleDateString(),
                }
            ]))
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
