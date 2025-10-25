import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function MainLayout() {

    useEffect(() => {
        if (!localStorage.getItem("currentUser")) {
            localStorage.setItem("currentUser", JSON.stringify({
                role: "Guest"
            }))
        }

        if (localStorage.getItem("chats") === null) {
            localStorage.setItem("chats", JSON.stringify({}))
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

    const [addEventForm, setAddEventForm] = useState(false)
    const [markParentsMeeting, setMarkParentsMeeting] = useState(false)
    const [changeTimeOfEvent, setTimeChangeOfEvent] = useState(false)

    return (
        <div className="flex items-center justify-center flex-col relative">
            {addEventForm || markParentsMeeting || changeTimeOfEvent ?
                <div className='absolute w-full h-full bg-[rgba(0,0,0,0.5)] z-[10]' onClick={() => {
                    setAddEventForm(false)
                    setMarkParentsMeeting(false)
                    setTimeChangeOfEvent(false)
                }}></div> : <></>
            }
            <div className="w-[1290px]">
                <Header />
            </div>
            <Outlet context={{ register, reset, watch, addEventForm, setAddEventForm, markParentsMeeting, setMarkParentsMeeting, changeTimeOfEvent, setTimeChangeOfEvent }} />
            <Footer />
        </div>
    )
}
