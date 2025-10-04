import SVG28 from "../../public/assets/SVG28.svg?react"
import SVG29 from "../../public/assets/SVG29.svg?react"
import SVG30 from "../../public/assets/SVG30.svg?react"
import SVG10 from "../../public/assets/SVG10.svg?react"
import StaffStatCard from "../components/panelComponents/staff/StaffStatCard"
import { useNavigate } from "react-router-dom"
import TeacherCard from "../components/panelComponents/staff/TeacherCard"
export default function Staff() {

  const navigate = useNavigate()

  const teachers = JSON.parse(localStorage.getItem("users") || "[]").filter((user: any) => user.role === "Teacher")

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
        {
        teachers.map((teacher: any, index: number) => {
          return <TeacherCard key={index} firstname={teacher.firstname} lastname={teacher.lastname} experience={teacher.experience} email={teacher.email} phone={teacher.phone} startDate={teacher.startDate} subjects={teacher.subjects} />
        })
        }
      </div>
    </div>
  )
}
