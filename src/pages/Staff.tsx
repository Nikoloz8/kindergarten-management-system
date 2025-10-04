import SVG28 from "../../public/assets/SVG28.svg?react"
import SVG29 from "../../public/assets/SVG29.svg?react"
import SVG30 from "../../public/assets/SVG30.svg?react"
import SVG10 from "../../public/assets/SVG10.svg?react"
import SVG31 from "../../public/assets/SVG31.svg?react"
import SVG32 from "../../public/assets/SVG32.svg?react"
import SVG33 from "../../public/assets/SVG33.svg?react"
import SVG4 from "../../public/assets/SVG4.svg?react"
import StaffStatCard from "../components/panelComponents/staff/StaffStatCard"
import { useNavigate } from "react-router-dom"
export default function Staff() {

  const navigate = useNavigate()

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-[24px] w-[1290px]">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col gap-[8px]">
            <h1 className="text-[#020817] text-[3rem] font-[700]">პერსონალის მართვა</h1>
            <p className="text-[#64748b] text-[1.6rem]">თანამშრომლების ინფორმაცია და განრიგი</p>
          </div>
          <button onClick={() => navigate("/teacher-registration")} className="flex gap-[8px] p-[8px_16px] bg-[#0f172a] text-[#ffffff] hover:scale-[1.05] font-[500] text-[1.4rem] items-center cursor-pointer transition-all duration-300">
            <SVG28 stroke="#FFFFFF" className="w-[16px] h-[16px]" />
            მასწავლებლის რეგისტრაცია
          </button>
        </div>
        <div className="w-full p-[16px] border-[1px] border-solid  flex gap-[16px]">
          <label htmlFor="search" className="p-[8px_12px] rounded-[8px] border-[1px] border-solid  flex gap-[12px] items-center w-full">
            <SVG29 className="stroke-[#64748b] h-[16px] w-[16px]" />
            <input type="text" className="outline-none text-[1.4rem] " placeholder="თანამშრომლის ძებნა..." id="search" />
          </label>
          <button className="p-[8px_16px] border-[1px] border-solid  flex items-center gap-[16px] cursor-pointer hover:bg-[#f1f5f9] transition-all duration-200 text-[1.4rem] font-[500] ">
            <SVG30 className="stroke-[#272f40] h-[16px] w-[16px] " />
            ფილტრები
          </button>
        </div>
        <div className="flex w-full justify-between">
          <StaffStatCard svg={SVG10} title="სულ პერსონალი" info="5" />
          <StaffStatCard svg={SVG10} title="სულ პერსონალი" info="5" />
          <StaffStatCard svg={SVG10} title="სულ პერსონალი" info="5" />
          <StaffStatCard svg={SVG10} title="სულ პერსონალი" info="5" />
        </div>
        <div className="flex gap-[24px] w-full">
          <div className="border-[1px] border-solid  w-[49.3%] p-[24px] flex gap-[16px]">
            <span className="w-[64px] h-[64px] rounded-full bg-[#eaeaea]"></span>
            <div className="flex flex-col gap-[12px] w-full">
              <div className="flex flex-col gap-[4px]">
                <h3 className="mb-[4px] text-[#020817] font-[600] text-[1.8rem]">ნინო ღვინაძე</h3>
                <h4 className="mb-[4px] text-[#020817] font-[500] text-[1.6rem]">მთავარი მასწავლებელი</h4>
                <h5 className="text-[1.4rem] text-[#64748b]">• 8 წელი</h5>
              </div>
              <div className="flex flex-col gap-[8px]">
                <h5 className="text-[1.4rem] text-[#64748b] flex items-center gap-[8px]">
                  <SVG31 className="stroke-[#64748b] w-[16px]" />
                  nino.ghvinidze@kindergarten.ge
                </h5>
                <h5 className="text-[1.4rem] text-[#64748b] flex items-center gap-[8px]">
                  <SVG32 className="stroke-[#64748b] w-[16px]" />
                  +995 555 123 456
                </h5>
                <h5 className="text-[1.4rem] text-[#64748b] flex items-center gap-[8px]">
                  <SVG33 className="stroke-[#64748b] w-[16px]" />
                  დაწყება: 9/1/2018
                </h5>
              </div>
              <div className="flex flex-col gap-[8px] items-start">
                <h5 className="text-[1.4rem] text-[#64748b]">
                  სპეციალიზაცია:
                </h5>
                <span className="p-[2px_10px] border-[1px] border-solid  rounded-[999px] font-[600] text-[1.2rem]">მათემატიკა</span>
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
        </div>
      </div>
    </div>
  )
}
