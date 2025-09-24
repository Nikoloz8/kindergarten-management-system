import { useNavigate } from "react-router-dom"
import index from "../../utils"
import SVG19 from "../../../public/assets/SVG19.svg?react"
import SVG10 from "../../../public/assets/SVG10.svg?react"
import SVG6 from "../../../public/assets/SVG6.svg?react"
import SVG4 from "../../../public/assets/SVG4.svg?react"
import SVG8 from "../../../public/assets/SVG8.svg?react"
import SVG26 from "../../../public/assets/SVG26.svg?react"
import SVG25 from "../../../public/assets/SVG25.svg?react"

import React, { useState } from "react"
export default function Header() {

    const { getRole, getCurrentUser } = index()
    const currentUser = getCurrentUser()
    if (!currentUser) {
        return null
    }

    const navigate = useNavigate()
    const role = getRole()

    const [selectedPanel, setSelectedPanel] = useState("მთავარი")
    const parentPanelsArr = [
        {
            title: "მთავარი",
            icon: <SVG19 />,
            path: "/"
        },
        {
            title: "ჩემი ბავშვი",
            icon: <SVG10 />,
            path: "my-child"
        },
        {
            title: "აქტივობები",
            icon: <SVG6 />,
            path: "/activities"
        },
        {
            title: "კალენდარი",
            icon: <SVG4 />,
            path: "/calendar"
        },
        {
            title: "შეტყობინებები",
            icon: <SVG8 />,
            path: "/notifications"
        }
    ]

    const teacherPanelsArr = [

        //ჩასასწორებელი

        {
            title: "მთავარი",
            icon: <SVG19 />,
            path: "/"
        },
        {
            title: "ბავშვები",
            icon: <SVG10 />,
            path: "/children"
        },
        {
            title: "აქტივობები",
            icon: <SVG6 />,
            path: "/activities"
        },
        {
            title: "კალენდარი",
            icon: <SVG4 />,
            path: "/calendar"
        },
        {
            title: "შეტყობინებები",
            icon: <SVG8 />,
            path: "/notifications"
        },
        {
            title: "პარამეტრები",
            icon: <SVG8 />,
            path: "settings"
        }
    ]

    const adminPanelsArr = [
        {
            title: "მთავარი",
            icon: <SVG19 />,
            path: "/"
        },
        {
            title: "ყველა ბავშვი",
            icon: <SVG10 />,
            path: "/children"
        },
        {
            title: "პერსონალი",
            icon: <SVG10 />,
            path: "/staff"
        },
        {
            title: "აქტივობები",
            icon: <SVG6 />,
            path: "/activities"
        },
        {
            title: "კალენდარი",
            icon: <SVG4 />,
            path: "/calendar"
        },
        {
            title: "შეტყობინებები",
            icon: <SVG8 />,
            path: "/notifications"
        },
        {
            title: "პარამეტრები",
            icon: <SVG25 />,
            path: "/settings"
        }
    ]

    const neededPanel = role === "მშობელი" ? parentPanelsArr : role === "მასწავლებელი" ? teacherPanelsArr : role === "ადმინისტრატორი" ? adminPanelsArr : []

    const [showUserSettings, setShowUserSettings] = useState(false)

    const logout = () => {
        localStorage.setItem("currentUser", JSON.stringify({
            role: "Guest"
        }))
        window.location.reload()
        navigate("/")
    }

    return (
        <header className="flex flex-col gap-[12px] w-full p-[10px_0]">
            <div className="flex w-full justify-between items-center">
                <div className="flex flex-col gap-[4px] items-center">
                    <h3 className="text-[2rem] font-[700] leading-[28px] text-[#020817]">საბავშვო ბაღი</h3>
                    <h4 className="text-center w-full text-[1.2rem] font-[400] leading-[12px] text-[#64748B]">შიდა მენეჯმენტის პლატფორმა</h4>
                </div>
                <div className="bg-[#f1f5f94d] flex gap-[4px] rounded-[4px] p-[2px_12px] font-[500] text-[1.4rem]">
                    {currentUser.firstname} {currentUser.lastname}
                    <div className="bg-[#f1f5f9] rounded-[999px] p-[2px_10px] text-[#0f172a] font-[600] text-[1.2rem]">{role}</div>
                </div>
                <div className="flex gap-[12px] items-center">
                    <button className="flex items-center justify-center duration-300 transition-all rounded-[8px] hover:bg-[#f1f5f9] h-[36px] p-[0_12px] cursor-pointer">
                        <img src="/assets/SVG17.svg" className="w-[16px] h-[16px]" alt="" />
                    </button>
                    <button className="flex items-center justify-center duration-300 transition-all rounded-[8px] hover:bg-[#f1f5f9] h-[36px] p-[0_12px] cursor-pointer">
                        <img src="/assets/SVG.svg" alt="" />
                    </button>
                    {role === "სტუმარი" && <>
                        <button onClick={() => navigate("/login")} className="text-[1.4rem] font-[500] text-[#0f172a] duration-300 transition-all rounded-[8px] hover:bg-[#f1f5f9] h-[36px] p-[0_12px] cursor-pointer">
                            შესვლა
                        </button>
                        <button onClick={() => navigate("/choose-role")} className="text-[1.4rem] font-[500] text-[#FFFFFF] duration-300 transition-all rounded-[8px] bg-[#0f172a] hover:bg-[#272e3f] h-[36px] p-[0_12px] cursor-pointer">
                            რეგისტრაცია
                        </button>
                    </>
                    }
                    {
                        role !== "სტუმარი" &&
                        <button onClick={() => setShowUserSettings(!showUserSettings)} className="flex items-center p-[4px_12px] gap-[8px] hover:bg-[#f1f5f9] rounded-[8px] relative">
                            <span className="flex items-center justify-center rounded-full text-[1.2rem] bg-[#0f172a] text-white p-[4px]">
                                {currentUser.firstname[0]}
                                {currentUser.lastname[0]}
                            </span>
                            <img src="/assets/SVG23.svg" className={`transition-transform duration-300 ${showUserSettings ? "rotate-180" : "rotate-0"}`} alt="" />
                            <div className={`absolute flex-col border-[1px] border-solid border-[#e2e8f0] bg-[#FFFFFF] rounded-[8px] top-[40px] right-0 p-[4px] z-10 flex opacity-0 pointer-events-none ${showUserSettings && "opacity-100! pointer-events-auto!"} transition-all duration-300`}>
                                <div className="flex relative flex-col gap-[4px] p-[6px] items-start">
                                    <h3 className="text-[1.4rem] font-[500] leading-none">
                                        {currentUser.firstname} {currentUser.lastname}
                                    </h3>
                                    <h4 className="text-[1.2rem] leading-none text-[#64748b]">
                                        {currentUser.email}
                                    </h4>
                                    <span className="p-[2px_10px] rounded-[999px] bg-[#f1f5f9] font-[600] text-[1.2rem] text-[#0f172a]">
                                        {role}
                                    </span>
                                </div>
                                <span className="w-full h-[1px] bg-[#f1f5f9] m-[4px_0]"></span>
                                <div className="flex flex-col">
                                    <button className="p-[6px_8px] w-full hover:bg-[#f1f5f9] flex gap-[8px] items-center text-[1.4rem] ">
                                        <img className="h-[16px] w-[16px]" src="/assets/SVG24.svg" alt="" />
                                        პროფილი
                                    </button>
                                    <button className="p-[6px_8px] w-full hover:bg-[#f1f5f9] flex gap-[8px] items-center text-[1.4rem] ">
                                        <img className="h-[16px] w-[16px]" src="/assets/SVG25.svg" alt="" />
                                        პარამეტრები
                                    </button>
                                    <span className="w-full h-[1px] bg-[#f1f5f9] m-[4px_0]"></span>
                                </div>
                                <button onClick={() => logout()} className="p-[6px_8px] w-full hover:bg-[#f1f5f9] flex gap-[8px] items-center text-[1.4rem] text-[#ef4444]">
                                    <SVG26 className="h-[16px] w-[16px]" stroke="#ef4444" />
                                    გამოსვლა
                                </button>
                            </div>
                        </button>
                    }
                </div>
            </div>
            <div className="flex items-center justify-center gap-[40px]">
                {role !== "სტუმარი" &&
                    neededPanel.map((item, index) => {
                        return <button onClick={() => {
                            setSelectedPanel(item.title)
                            navigate(item.path)
                        }} key={index} className={`flex items-center gap-[8px] curspor-pointer cursor-pointer hover:bg-[#f1f5f9] transition-all duration-300 p-[8px_12px] rounded-[8px] ${selectedPanel === item.title && "bg-[#0f172a] hover:bg-[#0f172a]!"}`}>
                            {React.cloneElement(item.icon, {
                                stroke: selectedPanel === item.title ? "#FFFFFF" : "currentColor",
                                className: "transition-all duration-300 w-[16px] h-[16px]"
                            })}
                            <h5 className={`text-[1.4rem] leading-[20px] text-[#020817] font-[500] ${selectedPanel === item.title && "text-[#FFFFFF]"}`}>{item.title}</h5>
                        </button>
                    })
                }
            </div>
        </header>)
}
