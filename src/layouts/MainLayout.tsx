import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function MainLayout() {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/guest")
    }, [])

    return (
        <div className="flex items-center justify-center flex-col">
            <div className="w-[1290px]">
                <Header />
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}
