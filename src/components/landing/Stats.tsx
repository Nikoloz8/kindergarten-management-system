export default function Stats({ title, count, stat }: { title: string, count: string, stat: string }) {
    return (
        <div className="flex flex-col gap-[8px] p-[16px] w-[300px] border-[1px] border-solid  shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:scale-105 transition-all duration-300">
            <h4 className="text-[1.4rem] font-[500] leading-[14px] text-[#64748B]">{title}</h4>
            <h3 className="text-[2.4rem] font-[700] leading-[32px] text-[#020817]">{count}</h3>
            <h4 className="text-[1.2rem] font-[400] leading-[16px] text-[#64748B]">{stat}</h4>
        </div>)
}
