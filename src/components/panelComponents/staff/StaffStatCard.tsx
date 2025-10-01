import React from 'react'

export default function StaffStatCard({ svg: SVG, title, info }: { svg: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>, title: string, info: string }) {
    return (
        <div className="border-[1px] border-solid  p-[16px] flex gap-[12px] items-center h-[100%] w-[24%]">
            <SVG stroke="#0f172a" />
            <div className="flex flex-col">
                <h4 className="text-[#64748b]">{title}</h4>
                <h1 className="text-[2.4rem] font-[700]">{info}</h1>
            </div>
        </div>)
}
