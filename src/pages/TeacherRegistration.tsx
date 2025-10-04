import { useNavigate, useOutletContext } from "react-router-dom"
import SVG40 from "../../public/assets/SVG40.svg?react"
import SVG41 from "../../public/assets/SVG41.svg?react"
import styles from "../shared/styles"
import { useEffect, useState } from "react"

export default function TeacherRegistration() {

    const navigate = useNavigate()
    const { labelStyle, inputStyle } = styles()

    const subjects = ["მათემატიკა", "ქართული ენა", "ინგლისური ენა", "ბუნებისმეტყველება", "ხელოვნება", "მუსიკა", "ფიზკულტურა", "კომპიუტერული მეცნიერება"]

    const [checkedSubjects, setCheckedSubjects] = useState<string[]>([])

    const handleCheckboxChange = (subject: string) => {
        if (checkedSubjects.includes(subject)) {
            setCheckedSubjects(checkedSubjects.filter(s => s !== subject))
        } else {
            setCheckedSubjects([...checkedSubjects, subject])
        }
    }

    const { register, reset, watch } = useOutletContext<TLayoutContext>()

    useEffect(() => {
        reset()
    }, [])

    console.log(watch())

    const handleRegisterTeacher = () => {
        const users = localStorage.getItem("users")
        if (!users) return
        const newUsers = JSON.parse(users)
        newUsers.push(
            {
                role: "Teacher",
                firstname: watch().firstname,
                lastname: watch().lastname,
                email: watch().email,
                password: watch().password,
                phoneNumber: watch().phone,
                subjects: checkedSubjects,
                experience: watch().experience,
                education: watch().education,
                address: watch().address,
                additionalNotes: watch().additionalNotes,
                id: Math.floor(Math.random() * 1000000),
                visibleProfile: true,
            }
        )
        localStorage.setItem("users", JSON.stringify(newUsers))
        navigate("/staff")
    }

    return (
        <div className="flex w-full items-center justify-center m-[32px_0]">
            <div className="flex flex-col gap-[16px] w-[1000px] items-start">
                <button onClick={() => navigate("/staff")} className="border-[1px] border-solid p-[8px_16px] cursor-pointer hover:bg-[#f1f5f9] transition-all duration-300 flex gap-[8px] items-center font-[500] text-[1.4rem] text-[#020817]">
                    <SVG41 className="w-[16px] h-[16px] stroke-[#020817]" />
                    უკან დაბრუნება
                </button>
                <div className="flex flex-col gap-[8px]">
                    <h1 className="flex items-center gap-[8px] text-[#020817] text-[2.4rem] font-[700]">
                        <SVG40 className="stroke-[#020817] w-[24px] h-[24px]" />
                        ახალი პედაგოგის რეგისტრაცია
                    </h1>
                    <p className="text-[#64748b] text-[1.6rem]">შეიყვანეთ ახალი პედაგოგის მონაცემები</p>
                </div>
                <div className="border-[1px] border-solid p-[24px] flex flex-col gap-[24px] w-full">
                    <div className="flex flex-col">
                        <h2 className="text-[#020817] text-[2rem] font-[600]">პირადი ინფორმაცია</h2>
                        <p className="text-[#64748b] text-[1.6rem]">შეავსეთ ყველა საჭირო ველი პედაგოგის რეგისტრაციისთვის</p>
                    </div>
                    <form onSubmit={(e) => e.preventDefault()} action="" className="flex flex-col gap-[24px] w-full">
                        <div className="flex gap-[24px] w-full">
                            <div className="flex flex-col gap-[8px] w-full">
                                <label htmlFor="firstname" className={labelStyle}>სახელი</label>
                                <input type="text" {...register("firstname")} className={`${inputStyle}`} placeholder="შეიყვანეთ სახელი" id="firstname" />
                            </div>
                            <div className="flex flex-col gap-[8px] w-full">
                                <label htmlFor="lastname" className={labelStyle}>გვარი</label>
                                <input type="text" {...register("lastname")} className={`${inputStyle}`} placeholder="შეიყვანეთ გვარი" id="lastname" />
                            </div>
                        </div>
                        <div className="flex gap-[24px] w-full">
                            <div className="flex flex-col gap-[8px] w-full">
                                <label htmlFor="email" className={labelStyle}>ელ-ფოსტა</label>
                                <input type="text" {...register("email")} className={`${inputStyle}`} placeholder="teacher@example.com" id="email" />
                            </div>
                            <div className="flex flex-col gap-[8px] w-full">
                                <label htmlFor="phone" className={labelStyle}>ტელეფონი</label>
                                <input type="text" {...register("phone")} className={`${inputStyle}`} placeholder="+995 XXX XXX XXX" id="phone" />
                            </div>
                        </div>
                        <div className="flex gap-[24px] justify-between w-full">
                            <div className="flex flex-col gap-[16px]">
                                <div className="flex flex-col">
                                    <h3 className="text-[#020817] text-[1.6rem] font-[500]">საგნები</h3>
                                    <p className="text-[#64748b] text-[1.4rem]">აირჩიეთ საგნები, რომლებსაც ასწავლიდა პედაგოგი</p>
                                </div>
                                <div className="w-[450px] justify-between flex">
                                    <div className="flex flex-col gap-[12px]">
                                        {subjects.slice(0, subjects.length / 2).map((subject, index) => (
                                            <div key={index} className="flex items-center gap-[8px]">
                                                <input onChange={() => handleCheckboxChange(subject)} type="checkbox" id={subject} className="w-[16px] h-[16px] cursor-pointer accent-[#0f172a]" />
                                                <label htmlFor={subject} className="text-[#020817] text-[1.4rem] cursor-pointer">{subject}</label>
                                            </div>
                                        ))
                                        }
                                    </div>
                                    <div className="flex flex-col gap-[12px]">
                                        {subjects.slice(subjects.length / 2).map((subject, index) => (
                                            <div key={index} className="flex items-center gap-[8px]">
                                                <input type="checkbox" onChange={() => handleCheckboxChange(subject)} id={subject} className="w-[16px] h-[16px] cursor-pointer accent-[#0f172a]" />
                                                <label htmlFor={subject} className="text-[#020817] text-[1.4rem] cursor-pointer select-none">{subject}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="w-[48.5%] flex flex-col gap-[50px]">
                                <div className="flex flex-col gap-[8px] w-full">
                                    <label htmlFor="experience" className={labelStyle}>გამოცდილება (წლები)</label>
                                    <input type="number" {...register("experience")} className={`${inputStyle}`} placeholder="მაგ: 5" id="experience" />
                                </div>
                                <div className="flex flex-col gap-[8px] w-full">
                                    <label htmlFor="password" className={labelStyle}>პაროლი</label>
                                    <input type="password" {...register("password")} className={`${inputStyle}`} placeholder="შეიყვანეთ სასურველი პაროლი" id="password" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[16px]">
                            <div className="flex flex-col gap-[8px] w-full">
                                <label htmlFor="education" /*egudinashvili*/ className={labelStyle}>განათლება</label>
                                <textarea {...register("education")} className={`${inputStyle} min-h-[100px] max-h-[200px]`} placeholder="შეიყვანეთ ინფორმაცია განათლების შესახებ (უნივერსიტეტი, ხარისხი, წელი)" id="education" />
                            </div>
                            <div className="flex flex-col gap-[8px] w-full">
                                <label htmlFor="address" className={labelStyle}>მისამართი</label>
                                <input type="text" {...register("address")} className={`${inputStyle}`} placeholder="შეიყვანეთ მისამართი" id="address" />
                            </div>
                            <div className="flex flex-col gap-[8px] w-full">
                                <label htmlFor="additionalNotes" className={labelStyle}>დამატებითი შენიშვნები</label>
                                <textarea {...register("additionalNotes")} className={`${inputStyle} min-h-[100px] max-h-[200px]`} placeholder="დამატებითი ინფორმაცია (არა სავალდებულო)" id="additionalNotes" />
                            </div>
                        </div>
                        <div className="mt-[48px] flex gap-[16px]">
                            <button onClick={() => handleRegisterTeacher()} className="flex gap-[8px] p-[8px_16px] bg-[#0f172a] text-[#ffffff] hover:opacity-90 font-[500] text-[1.4rem] items-center cursor-pointer transition-all duration-300">
                                პედაგოგის რეგისტრაცია
                            </button>
                            <button onClick={() => navigate("/staff")} className="border-[1px] border-solid p-[8px_16px] cursor-pointer hover:bg-[#f1f5f9] transition-all duration-300 flex gap-[8px] items-center font-[500] text-[1.4rem] text-[#020817]">
                                გაუქმება
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
