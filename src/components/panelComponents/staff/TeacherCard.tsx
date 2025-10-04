import SVG31 from "../../../../public/assets/SVG31.svg?react"
import SVG32 from "../../../../public/assets/SVG32.svg?react"
import SVG33 from "../../../../public/assets/SVG33.svg?react"
import SVG4 from "../../../../public/assets/SVG4.svg?react"

export default function TeacherCard({ firstname, lastname, experience, email, phone, startDate, subjects, }: { firstname: string, lastname: string, experience: number, email: string, phone: string, startDate: string, subjects: string[] }) {
    return (
        <div className="flex gap-[24px] w-full">
            <div className="border-[1px] border-solid w-[49.3%] p-[24px] flex gap-[16px]">
                <span className="w-[64px] h-[64px] rounded-full bg-[#eaeaea]"></span>
                <div className="flex flex-col gap-[12px] w-full">
                    <div className="flex flex-col gap-[4px]">
                        <h3 className="mb-[4px] text-[#020817] font-[600] text-[1.8rem]">{firstname} {lastname}</h3>
                        <h4 className="mb-[4px] text-[#020817] font-[500] text-[1.6rem]">მთავარი მასწავლებელი</h4>
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
                        {subjects.map((subject, index) => {
                            return <span key={index} className="p-[2px_10px] border-[1px] border-solid  rounded-[999px] font-[600] text-[1.2rem]">{subject}</span>
                        })
                        }

                    </div>
                    <div className="flex gap-[8px] w-full">
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
        </div>)
}
