import { useNavigate } from "react-router-dom"
import index from "../../utils"
import SVG19 from "../../../public/assets/SVG19.svg?react"
import SVG10 from "../../../public/assets/SVG10.svg?react"
import SVG6 from "../../../public/assets/SVG6.svg?react"
import SVG4 from "../../../public/assets/SVG4.svg?react"
import SVG8 from "../../../public/assets/SVG8.svg?react"
import React, { useState } from "react"
export default function Header() {

    const navigate = useNavigate()

    const { getRole, getCurrentUser } = index()
    const currentUser = getCurrentUser()
    const role = getRole()

    const [selectedPanel, setSelectedPanel] = useState("მთავარი")
    const parentPanelsArr = [
        {
            title: "მთავარი",
            icon: <SVG19 />,
        },
        {
            title: "ჩემი ბავშვი",
            icon: <SVG10 />,
        },
        {
            title: "აქტივობები",
            icon: <SVG6 />,
        },
        {
            title: "კალენდარი",
            icon: <SVG4 />,
        },
        {
            title: "შეტყობინებები",
            icon: <SVG8 />,
        }
    ]

    // const teacherPanelsArr = [
    //     {}
    // ]
    // const adminPanelsArr = [
    //     {}
    // ]

    // const neededPanel = role === "მშობელი" ? parentPanelsArr : role === "მასწავლებელი" ? teacherPanelsArr : role === "ადმინისტრატორი" ? adminPanelsArr : []


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
                    <img src="/assets/SVG.svg" alt="" />
                    {role === "სტუმარი" && <>
                        <button onClick={() => navigate("/login")} className="text-[1.4rem] font-[500] text-[#0f172a] duration-300 transition-all rounded-[8px] hover:bg-[#f1f5f9] h-[36px] p-[0_12px] cursor-pointer">
                            შესვლა
                        </button>
                        <button onClick={() => navigate("/choose-role")} className="text-[1.4rem] font-[500] text-[#FFFFFF] duration-300 transition-all rounded-[8px] bg-[#0f172a] hover:bg-[#272e3f] h-[36px] p-[0_12px] cursor-pointer">
                            რეგისტრაცია
                        </button>
                    </>
                    }
                </div>
            </div>
            <div className="flex items-center justify-center gap-[40px]">
                {parentPanelsArr.map((item, index) => {
                    return <button onClick={() => setSelectedPanel(item.title)} key={index} className={`flex items-center gap-[8px] curspor-pointer cursor-pointer hover:bg-[#f1f5f9] transition-all duration-300 p-[8px_12px] rounded-[8px] ${selectedPanel === item.title && "bg-[#0f172a] hover:bg-[#0f172a]!"}`}>
                        {React.cloneElement(item.icon, {
                            stroke: selectedPanel === item.title ? "#FFFFFF" : "currentColor",
                            className: "transition-all duration-300"
                        })}
                        <h5 className={`text-[1.4rem] leading-[20px] text-[#020817] font-[500] ${selectedPanel === item.title && "text-[#FFFFFF]"}`}>{item.title}</h5>
                    </button>
                })}
            </div>
        </header>)
}
