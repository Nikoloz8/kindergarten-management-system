export default function ActivityCard() {
    return (
        <div className="flex gap-[12px] p-[12px] rounded-2xl bg-[#f5faff]">
            <span className="w-[32px] h-[32px] bg-[#cfe4f9] rounded-[4px] flex items-center justify-center">
                <img src="/assets/SVG14.svg" alt="" />
            </span>
            <div className="flex flex-col gap-[4px]">
                <div className="flex justify-between items-center">
                    <h5 className="text-[1.4rem] font-[500] leading-[20px] text-[#020817]">
                        სადილი 🍽️
                    </h5>
                    <div className="flex gap-[8px]">
                        <span className="p-[4px_12px] rounded-[999px] border-[#E2E8F0] border-[1px] border-solid text-[1.2rem] font-[700] leading-[16px] text-[#020817]">12:30</span>
                        <span className="p-[4px_12px] rounded-[999px] border-[#E2E8F0] border-[1px] border-solid text-[1.2rem] font-[700] leading-[16px] text-[#020817]">25 წუთი</span>
                    </div>
                </div>
                <p className="text-[1.4rem] font-[400] leading-[20px] text-[#64748B]">ნიკამ მთელი ბლეტი შეჭამა და კიდევ მოითხოვა!</p>
                <h4 className="text-[1.2rem] font-[500] leading-[16px] text-[#0F172A]">ნიკა თაბიძე</h4>
            </div>
        </div>)
}
