import { useNavigate, useOutletContext, useParams } from "react-router-dom"
import styles from "../shared/styles"
import { useEffect } from "react"

export default function Register() {

    const { register, reset } = useOutletContext<TLayoutContext>()
    useEffect(() => {
        reset()
    }, [])

    const { role } = useParams()
    const navigate = useNavigate()
    const { inputStyle, labelStyle } = styles()

    return (
        <div className="flex flex-col gap-[24px] p-[24px] border-[1px] border-solid border-[#e2e8f0]">
            <div className="flex flex-col gap-[4px] items-center">
                <h1 className="font-[700] text-[3rem] leading-[36px] text-[#020817]">ანგარიშის შექმნა</h1>
                <h3 className="text-[1.4rem] leading-[20px] text-[#64748b]">შემოუერთდით როგორც {role}</h3>
                <h3 onClick={() => navigate("/choose-role")} className="text-[1.4rem] leading-[20px] text-[#64748b] hover:text-[#020817] cursor-pointer">როლის შეცვლა</h3>
                <form action="" className="flex flex-col gap-[16px] mt-[12px]">
                    <div className="flex gap-[16px]">
                        <div className="flex flex-col gap-[8px]">
                            <label htmlFor="name" className={`${labelStyle}`}>სახელი</label>
                            <input type="text" {...register("name")} placeholder="ნიკოლოზ" className={`${inputStyle}`} id="name" />
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
                    <button className={`p-[8px_16px] bg-[#0f172a] w-full text-center cursor-pointer ${labelStyle} text-[#FFFFFF]`}>ანგარიშის შექმნა</button>
                </form>
                <div className="flex flex-col gap-[8px] mt-[20px] items-center">
                    <span className="text-[#64748b] text-[1.4rem] leading-[20px]">
                        უკვე გაქვთ ანგარიში? <a onClick={() => navigate("/login")} className="text-[#0f172a] cursor-pointer hover:underline">
                            შედით
                        </a>
                    </span>
                    <a href="" className="text-[#64748b] cursor-pointer hover:text-[#0f172a] text-[1.4rem] leading-[20px]">
                        მთავარ გვერდზე დაბრუნება
                    </a>
                </div>
            </div>
        </div>
    )
}
