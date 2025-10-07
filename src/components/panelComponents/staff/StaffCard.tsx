import SVG31 from "../../../../public/assets/SVG31.svg?react"
import SVG32 from "../../../../public/assets/SVG32.svg?react"
import SVG33 from "../../../../public/assets/SVG33.svg?react"
import SVG4 from "../../../../public/assets/SVG4.svg?react"
import index from "../../../utils"

export default function StaffCard({ firstname, lastname, experience, email, phone, startDate, subjects, role }: { firstname: string, lastname: string, experience?: number, email: string, phone: string, startDate: string, subjects?: string[], role: string }) {

    const { getCurrentUser } = index()
    const currentUser = getCurrentUser()
    subjects = subjects || []
    experience = experience || 0

    return (
        <div className="border-[1px] border-solid items-start p-[24px] flex gap-[16px]">
            <span className="min-w-[64px] min-h-[64px] rounded-full text-[1.6rem] bg-[#eaeaea] flex items-center justify-center">
                {currentUser.firstname[0].toUpperCase()}
                {currentUser.lastname[0].toUpperCase()}
            </span>
            <div className="flex flex-col gap-[12px] w-full">
                <div className="flex flex-col gap-[4px]">
                    <h3 className="mb-[4px] text-[#020817] font-[600] text-[1.8rem]">{firstname} {lastname}</h3>
                    <h4 className="mb-[4px] text-[#020817] font-[500] text-[1.6rem]">{role}</h4>
                    <h5 className="text-[1.4rem] text-[#64748b]">• {experience} წელი</h5>
                </div>
                <div className="flex flex-col gap-[8px]">
                    <h5 className="text-[1.4rem] text-[#64748b] flex items-center gap-[8px]">
                        <SVG31 className="stroke-[#64748b] w-[16px]" />
                        {email}
                    </h5>
                    <h5 className="text-[1.4rem] text-[#64748b] flex items-center gap-[8px]">
                        <SVG32 className="stroke-[#64748b] w-[16px]" />
                        {phone}
                    </h5>
                    <h5 className="text-[1.4rem] text-[#64748b] flex items-center gap-[8px]">
                        <SVG33 className="stroke-[#64748b] w-[16px]" />
                        დაწყება: {startDate}
                    </h5>
                </div>
                <div className="flex flex-col gap-[8px] items-start">
                    <h5 className="text-[1.4rem] text-[#64748b]">
                        სპეციალიზაცია:
                    </h5>
                    <div className="flex flex-wrap gap-[8px]">
                        {subjects.length === 0 && role === "ადმინისტრატორი" ?
                            <>
                                <span className="p-[2px_10px] border-[1px] border-solid  rounded-[999px] font-[600] text-[1.2rem]">მართვა</span>
                                <span className="p-[2px_10px] border-[1px] border-solid  rounded-[999px] font-[600] text-[1.2rem]">ორგანიზება</span>
                            </> :
                            <span className="p-[2px_10px] border-[1px] border-solid  rounded-[999px] font-[600] text-[1.2rem]">არ არის მითითებული</span>
                        }
                        {subjects.map((subject, index) => {
                            return <span key={index} className="p-[2px_10px] border-[1px] border-solid  rounded-[999px] font-[600] text-[1.2rem]">{subject}</span>
                        })
                        }
                    </div>
                </div>
                <div className="flex gap-[8px] w-full h-full">
                    <button className="w-[49%] flex justify-center items-center gap-[8px] border-[1px] border-solid  hover:bg-[#f1f5f9] p-[6px_12px] rounded-[8px] font-[500] text-[1.4rem] cursor-pointer text-[#0f172a]">
                        <SVG31 className="stroke-[#0f172a] w-[16px]" />
                        პროფილი
                    </button>
                    <button className="w-[49%] flex justify-center items-center gap-[8px] border-[1px] border-solid  hover:bg-[#f1f5f9] p-[6px_12px] rounded-[8px] font-[500] text-[1.4rem] cursor-pointer text-[#0f172a]">
                        <SVG4 className="stroke-[#0f172a] w-[16px]" />
                        განრიგი
                    </button>
                </div>
            </div>
        </div>
    )
}
