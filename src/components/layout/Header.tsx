import { useNavigate } from "react-router-dom"

export default function Header() {

    const navigate = useNavigate()

    return (
        <header className="flex flex-col gap-[12px] w-full p-[10px_0]">
            <div className="flex w-full justify-between items-center">
                <div className="flex flex-col gap-[4px] items-center">
                    <h3 className="text-[2rem] font-[700] leading-[28px] text-[#020817]">საბავშვო ბაღი</h3>
                    <h4 className="text-center w-full text-[1.2rem] font-[400] leading-[12px] text-[#64748B]">შიდა მენეჯმენტის პლატფორმა</h4>
                </div>
                {/* <div className="p-[8px_20px] bg-[#0F172A] rounded-[8px] text-[#F8FAFC] font-[500] text-[1.4rem]">
                            მასწავლებელი
                        </div>
                        <div className="flex gap-[24px] items-center">
                            <img src="/assets/SVG.svg" alt="" />
                            <div className="flex gap-[16px] items-center border-[1px] border-solid border-[#E2E8F0] rounded-[999px] p-[12px_20px]">
                                <img src="/assets/SVG1.svg" alt="" />
                                <h5 className="text-[1.4rem] leading-[20px] text-[#020817] font-[500]">ნინო გელაშვილი</h5>
                            </div>
                        </div> */}
                <div className="flex gap-[12px] items-center">
                    <button className="flex items-center justify-center duration-300 transition-all rounded-[8px] hover:bg-[#f1f5f9] h-[36px] p-[0_12px] cursor-pointer">
                        <img src="/assets/SVG17.svg" className="w-[16px] h-[16px]" alt="" />
                    </button>
                    <button onClick={() => navigate("/login")} className="text-[1.4rem] font-[500] text-[#0f172a] duration-300 transition-all rounded-[8px] hover:bg-[#f1f5f9] h-[36px] p-[0_12px] cursor-pointer">
                        შესვლა
                    </button>
                    <button onClick={() => navigate("/choose-role")} className="text-[1.4rem] font-[500] text-[#FFFFFF] duration-300 transition-all rounded-[8px] bg-[#0f172a] hover:bg-[#272e3f] h-[36px] p-[0_12px] cursor-pointer">
                        რეგისტრაცია
                    </button>
                </div>
            </div>
            {/* <div className="flex items-center justify-center gap-[40px]">
                        {TeacherNavArr.map((item, index) => {
                            return <button key={index} className="flex items-center gap-[8px] curspor-pointer">
                                <img src={item.icon} alt="" />
                                <h5 className="text-[1.4rem] leading-[20px] text-[#020817] font-[500]">{item.name}</h5>
                            </button>
                        })}
                    </div> */}
        </header> )
}
