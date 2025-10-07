import { useNavigate, useOutletContext } from "react-router-dom"
import styles from "../shared/styles"
import { useEffect } from "react"
import index from "../utils"

export default function Register() {

    const { register, reset, watch } = useOutletContext<TLayoutContext>()
    useEffect(() => {
        reset()
    }, [])

    const navigate = useNavigate()
    const { inputStyle, labelStyle } = styles()

    const { getRole, getAllUser } = index()

    const role = getRole()

    if (!role) return

    const handleRegister = () => {
        const newUsers = getAllUser()
        newUsers.push(
            {
                role: "Parent",
                firstname: watch().firstname,
                lastname: watch().lastname,
                email: watch().email,
                password: watch().password,
                childFullName: watch().childFullName,
                childAge: watch().childAge,
                id: Math.floor(Math.random() * 1000000),
                phone: watch().phoneNumber,
                visibleProfile: true,
            }
        )

        localStorage.setItem("users", JSON.stringify(newUsers))
        reset()
        navigate("/login")
    }

    return (
        <div className="flex flex-col gap-[24px] p-[24px] border-[1px] border-solid ">
            <div className="flex flex-col gap-[4px] items-center">
                <h1 className="font-[700] text-[3rem] leading-[36px] text-[#020817]">ანგარიშის შექმნა</h1>
                <h3 className="text-[1.4rem] leading-[20px] text-[#64748b]">შემოუერთდით როგორც { }</h3>
                <h3 onClick={() => navigate("/choose-role")} className="text-[1.4rem] leading-[20px] text-[#64748b] hover:text-[#020817] cursor-pointer">როლის შეცვლა</h3>
                <form onClick={(e) => e.preventDefault()} action="" className="flex flex-col gap-[16px] mt-[12px]">
                    <div className="flex gap-[16px]">
                        <div className="flex flex-col gap-[8px]">
                            <label htmlFor="firstname" className={`${labelStyle}`}>სახელი</label>
                            <input type="text" {...register("firstname")} placeholder="ნიკოლოზ" className={`${inputStyle}`} id="firstname" />
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <label htmlFor="lastname" className={`${labelStyle}`}>გვარი</label>
                            <input type="text" {...register("lastname")} placeholder="თევდორაძე" className={`${inputStyle}`} id="lastname" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <label htmlFor="email" className={`${labelStyle}`}>ელ-ფოსტა</label>
                        <input type="text" {...register("email")} placeholder="nikoloztevdoradze08@gmail.com" className={`${inputStyle}`} id="email" />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <label htmlFor="phoneNumber" className={`${labelStyle}`}>ტელეფონის ნომერი</label>
                        <input type="text" {...register("phoneNumber")} placeholder="+995 577 21 36 45" className={`${inputStyle}`} id="phoneNumber" />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <label htmlFor="password" className={`${labelStyle}`}>პაროლი</label>
                        <input type="password" {...register("password")} placeholder="შექმენით ძლიერი პაროლი" className={`${inputStyle}`} id="password" />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <label htmlFor="repeatPassword" className={`${labelStyle}`}>პაროლის დადასტურება</label>
                        <input type="text" {...register("repeatedPassword")} placeholder="გაიმეორეთ პაროლი" className={`${inputStyle}`} id="repeatPassword" />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <label htmlFor="childFullName" className={`${labelStyle}`}>ბავშვის სრული სახელი</label>
                        <input type="text" {...register("childFullName")} placeholder="სალომე დარასელია" className={`${inputStyle}`} id="childFullName" />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <label htmlFor="childAge" className={`${labelStyle}`}>ბავშვის ასაკი</label>
                        <input type="number" {...register("childAge")} placeholder="3" max={6} className={`${inputStyle}`} min={2} id="childAge" />
                    </div>
                    <button onClick={() => handleRegister()} className={`p-[8px_16px] bg-[#0f172a] w-full text-center cursor-pointer ${labelStyle} text-[#FFFFFF]`}>ანგარიშის შექმნა</button>
                </form>
                <div className="flex flex-col gap-[8px] mt-[20px] items-center">
                    <span className="text-[#64748b] text-[1.4rem] leading-[20px]">
                        უკვე გაქვთ ანგარიში? <a onClick={() => navigate("/login")} className="text-[#0f172a] cursor-pointer hover:underline">
                            შედით
                        </a>
                    </span>
                    <a onClick={() => navigate(`/`)} className="text-[#64748b] cursor-pointer hover:text-[#0f172a] text-[1.4rem] leading-[20px]">
                        მთავარ გვერდზე დაბრუნება
                    </a>
                </div>
            </div>
        </div>
    )
}
