export default function ProgramCard({ emoji, title, text }: { emoji: string, title: string, text: string }) {
    return (
        <div className="flex flex-col w-[32%] items-center gap-[16px] p-[24px] bg-[#FFFFFF]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#0f172a1a] flex items-center justify-center text-[2.4rem]">
                {emoji}
            </div>
            <div className="flex flex-col gap-[8px] items-center">
                <h5 className="text-[1.6rem] font-[600]">{title}</h5>
                <h6 className="text-[1.4rem] text-[#64748b] leading-[20px]">{text}</h6>
            </div>
        </div>)
}
