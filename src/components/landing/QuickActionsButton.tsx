import { useNavigate } from "react-router-dom"

export default function QuickActionsButton({ svg, text, route }: { svg: string, text: string, route: string }) {
    
    const navigate = useNavigate()
    
    return (
        <button onClick={() => navigate(route)} className="bg-[#F1F5F9] p-[12px] flex gap-[8px] items-center rounded-[8px] cursor-pointer text-[1.2rem] font-[500] text-[#0F172A]">
            <img src={svg} alt="" />
            {text}
        </button>)
}
