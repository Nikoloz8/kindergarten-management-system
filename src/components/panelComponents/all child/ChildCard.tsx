import SVG10 from "../../../../public/assets/SVG10.svg?react"
import SVG8 from "../../../../public/assets/SVG8.svg?react"
export default function ChildCard({ childName, childAge, ParentName }: { childName: string, childAge: string, ParentName: string }) {
    return (
        <div className="flex flex-col w-[420px] gap-[12px] p-[24px] border-[1px] border-solid ">
            <div className="flex w-full justify-between items-center">
                <div className="flex gap-[12px] items-center">
                    <span className="w-[48px] h-[48px] rounded-full bg-[#f1f5f9] flex items-center justify-center text-[1.6rem] text-[#020817]">{childName.split(" ")[0][0]}{childName.split(" ")[1][0]}</span>
                    <div className="flex flex-col">
                        <h4 className="font-[600] text-[1.8rem] leading-[28px]">{childName}</h4>
                        <h5 className="text-[#64748b] text-[1.4rem] leading-[20px]">ასაკი: {childAge}</h5>
                    </div>
                </div>
                <span className="p-[2px_10px] bg-[#0f172a] rounded-[999px] text-[#f8fafc] text-[1.2rem]font-[600]">დამსწრე</span>
            </div>
            <div className="w-full flex justify-between">
                <h4 className="text-[#64748b] text-[1.4rem]">მშობელი:</h4>
                <h4 className="font-[500] text-[1.4rem]">{ParentName}</h4>
            </div>
            <div className="flex w-full justify-between mt-[8px]">
                <button className="w-[48%] flex justify-center items-center gap-[8px] border-[1px] border-solid  hover:bg-[#f1f5f9] p-[6px_12px] rounded-[8px] font-[500] text-[1.4rem] cursor-pointer text-[#0f172a] transition-all duration-300">
                    <SVG10 stroke="#0f172a" />
                    პროფილი
                </button>
                <button className="w-[48%] flex justify-center items-center gap-[8px] hover:bg-[#272e3f] bg-[#0f172a] p-[6px_12px] rounded-[8px] font-[500] text-[1.4rem] cursor-pointer text-white">
                    <SVG8 stroke="white" />
                    ჩათი
                </button>
            </div>
        </div>)
}
