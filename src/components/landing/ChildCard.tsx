export default function ChildCard() {
    return (
        <div className="border-[1px] border-solid border-[#E2E8F0] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] p-[16px] flex flex-col gap-[12px] w-[48%] hover:scale-105 transition-all duration-300 items-end">
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-[16px] w-full">
                    <img src="/assets/მარიამ კვარაცხელია.svg" alt="" />
                    <div className="flex flex-col gap-[8px] w-full">
                        <div className="flex justify-between w-full items-center">
                            <h4 className="font-[600] text-[1.8rem] text-nowrap leading-[28px] text-[#020817] w-[150px] truncate">მარიამ კვარაცხელია</h4>
                            <span className="p-[4px_8px] block rounded-[999px] bg-[#59ACFF] text-[1.2rem] font-[600] leading-[16px] text-[#FFFFFF]">დამსწრე</span>
                        </div>
                        <h5 className="font-[400] text-[1.4rem] leading-[20px] text-[#64748B]">4 წლის • ნახატის ხატვა</h5>
                    </div>
                </div>
            </div>
            <button className="border-[1px] border-solid border-[#E2E8F0] rounded-[8px] flex items-center gap-[8px] p-[8px_12px] text-[1.4rem] font-[500] leading-[20px] text-[#020817] hover:bg-[#F8FAFC] duration-300 transition-all">
                <img src="/assets/SVG5.svg" alt="" />
                მშობელი
            </button>
            <div className="border-t-[1px] border-solid border-[#E2E8F0] w-full flex p-[16px_0_0_0]">
                <div className="flex justify-between items-center w-full">
                    <div className="flex gap-[16px]">
                        <h6 className="flex items-center text-[0.8rem] leading-[16px] font-[400] text-[#64748B] gap-[4px]">
                            <img src="/assets/SVG12.svg" alt="" />
                            სადილი: 12:30
                        </h6>
                        <h6 className="flex items-center text-[0.8rem] leading-[16px] font-[400] text-[#64748B] gap-[4px]">
                            <img src="/assets/SVG11.svg" alt="" />
                            ძილი: 14:00
                        </h6>
                    </div>
                    <h5 className="cursor-pointer text-[1.2rem] leading-[16px] font-[500] text-[#64748B] gap-[4px]">მეტი</h5>
                </div>
            </div>
        </div>)
}
