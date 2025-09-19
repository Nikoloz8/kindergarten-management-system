import { useEffect } from "react"
import styles from "../shared/styles"
import { useOutletContext } from "react-router-dom"

export default function Login() {

    const { reset, register } = useOutletContext<TLayoutContext>()

    useEffect(() => {
        reset()
    }, [])

    const { inputStyle, labelStyle } = styles()

    return (
        <div className="flex flex-col gap-[24px] p-[24px] max-w-[440px] m-[100px_0] border-[1px] border-solid border-[#e2e8f0]">
            <div className="flex flex-col gap-[4px] items-center">
                <h1 className="font-[700] text-[3rem] leading-[36px] text-center text-[#020817]">კეთილი იყოს თქვენი დაბრუნება</h1>
                <h3 className="text-[1.4rem] leading-[20px] text-[#64748b]">შედით თქვენს საბავშვო ბაღის ანგარიშზე</h3>
                <form action="" className="flex flex-col gap-[16px] mt-[12px] w-full">
                    <div className="flex flex-col gap-[8px]">
                        <label htmlFor="email" className={`${labelStyle}`}>ელ-ფოსტა</label>
                        <input type="text" {...register("email")} placeholder="შეიყვანეთ თქვენი ელ-ფოსტა" className={`${inputStyle}`} id="email" />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <label htmlFor="password" className={`${labelStyle}`}>პაროლი</label>
                        <input type="password" {...register("password")} placeholder="შეიყვანეთ თქვენი პაროლი" className={`${inputStyle}`} id="password" />
                    </div>
                    <button className={`p-[8px_16px] bg-[#0f172a] w-full text-center cursor-pointer ${labelStyle} text-[#FFFFFF]`}>შესვლა</button>
                </form>
                <div className="flex flex-col gap-[8px] mt-[20px] items-center">
                    <span className="text-[#64748b] text-[1.4rem] leading-[20px]">
                        არ გაქვთ ანგარიში? <a href="" className="text-[#0f172a] cursor-pointer hover:underline">
                            დარეგისტრირდით
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
