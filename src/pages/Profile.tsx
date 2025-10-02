import { useEffect, useState } from "react"
import SVG24 from "../../public/assets/SVG24.svg?react"
import SVG38 from "../../public/assets/SVG38.svg?react"
import { useForm } from "react-hook-form"
import index from "../utils"

export default function Profile() {


    const { getRole, getCurrentUser } = index()
    const currentUser = getCurrentUser()
    const role = getRole()
    const { register, watch } = useForm()
    const [triggerChange, setTriggerChange] = useState(false)
    const values = watch()
    useEffect(() => {
        if (
            values.firstname !== currentUser.firstname ||
            values.lastname !== currentUser.lastname ||
            values.email !== currentUser.email ||
            values.phone !== currentUser.phoneNumber
        ) {
            setTriggerChange(true)
        } else {
            setTriggerChange(false)
        }
    }, [values, currentUser])

    const handleSaveChanges = () => {
        if (triggerChange) {
            const updatedUser = {
                ...currentUser,
                firstname: values.firstname,
                lastname: values.lastname,
                email: values.email,
                phoneNumber: values.phone
            }
            localStorage.setItem("currentUser", JSON.stringify(updatedUser))
            const users = JSON.parse(localStorage.getItem("users") || "[]")
            const updatedUsers = users.map((user: any) => user.id === currentUser.id ? updatedUser : user)
            localStorage.setItem("users", JSON.stringify(updatedUsers))
            setTriggerChange(false)
        }
    }

    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col gap-[24px] w-[1290px]">
                <div className="flex flex-col gap-[8px]">
                    <h1 className="text-[#020817] text-[3rem] font-[700]">ჩემი პროფილი</h1>
                    <h2 className="text-[#64748b] text-[1.6rem]">პირადი ინფორმაციის მართვა</h2>
                </div>
                <div className="border-[1px] border-solid flex flex-col gap-[16px] p-[24px]">
                    <h2 className="text-[#020817] mb-[8px] text-[2rem] font-[600] flex items-center gap-[8px]">
                        <SVG24 className="w-[20px]" />
                        პროფილის ინფორმაცია
                    </h2>
                    <div className="flex gap-[16px]">
                        <div className="flex flex-col gap-[8px] w-[49%]">
                            <label htmlFor="firstname" className="text-[#020817] text-[1.4rem] font-[500]">
                                სახელი
                            </label>
                            <input {...register("firstname")} defaultValue={currentUser.firstname} type="text" id="firstname" className="p-[8px_12px] border-solid border-[1px] rounded-[8px] w-full outline-none text-[1.4rem] " />
                        </div>
                        <div className="flex flex-col gap-[8px] w-[49%]">
                            <label htmlFor="lastname" className="text-[#020817] text-[1.4rem] font-[500]">
                                გვარი
                            </label>
                            <input {...register("lastname")} defaultValue={currentUser.lastname} type="text" id="lastname" className="p-[8px_12px] border-solid border-[1px] rounded-[8px] w-full outline-none text-[1.4rem] " />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[8px] w-full">
                        <label htmlFor="email" className="text-[#020817] text-[1.4rem] font-[500]">
                            ელ-ფოსტა
                        </label>
                        <input {...register("email")} defaultValue={currentUser.email} type="text" id="email" className="p-[8px_12px] border-solid border-[1px] rounded-[8px] w-full outline-none text-[1.4rem] " />
                    </div>
                    <div className="flex pb-[16px] border-b-[1.5px] border-solid flex-col gap-[8px] w-full">
                        <label htmlFor="phone" className="text-[#020817] text-[1.4rem] font-[500]">
                            ტელეფონი
                        </label>
                        <input type="text" {...register("phone")} id="phone" defaultValue={currentUser.phoneNumber} className="p-[8px_12px] border-solid border-[1px] rounded-[8px] w-full outline-none text-[1.4rem] " />
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <div className="flex flex-col gap-[8px] items-start">
                            <h5 className="font-[500] text-[1.4rem] text-[#020817]">როლი</h5>
                            <div className="bg-[#0f172a] rounded-[999px] p-[2px_10px] text-[#FFFFFF] font-[600] text-[1.2rem]">{role}</div>
                        </div>
                        <button onClick={() => handleSaveChanges()} className={`p-[8px_16px] flex gap-[8px] bg-[#0f172a] text-[#f8fafc] text-[1.4rem] font-[500] opacity-[0.8] ${triggerChange && "opacity-[1]! cursor-pointer hover:opacity-[0.9]!"} transition-all duration-300`}>
                            <SVG38 className="w-[16px] stroke-[#f8fafc]" />
                            შენახვა
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
