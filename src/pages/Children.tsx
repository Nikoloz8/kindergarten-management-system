import { useState } from "react"
import ChildCard from "../components/panelComponents/all child/ChildCard"
import index from "../utils"
export default function Children() {

  const [mode, setMode] = useState(false)
  const { getAllUser } = index()
  const parents = getAllUser().filter((e: any) => e.role === "Parent")

  return (
    <div className="flex justify-center w-full mt-[24px]">
      <div className="flex flex-col gap-[24px] w-[1290px] items-start">
        <div className="flex flex-col w-full items-start">
          <h1 className="text-[#020817] text-[3rem] font-[700]">ბავშვების მენეჯმენტი</h1>
          <p className="text-[#64748b]">ბავშვების პროფილების მართვა და მშობლებთან კომუნიკაცია</p>
        </div>
        <div className="flex p-[4px] rounded-[8px] bg-[#f1f5f9]">
          <button onClick={() => setMode(false)} className={`p-[6px_12px] text-[1.4rem] cursor-pointer rounded-sm text-[#738196] ${!mode && "shadow-[0_1px_2px_0_rgb(0_0_0/.05)] bg-[#ffffff] text-[#020817]!"}`}>მიმოხილვა</button>
          <button onClick={() => setMode(true)} className={`p-[6px_12px] cursor-pointer text-[#738196] rounded-sm text-[1.4rem] ${mode && "shadow-[0_1px_2px_0_rgb(0_0_0/.05)] bg-[#ffffff] text-[#020817]!"}`}>მშობლების ჩათი</button>
        </div>
        <div className="flex gap-[24px]">
          {parents.map((e: any, i: number) => {
            console.log(e.childFullName)
            return <ChildCard key={i} childAge={e.childAge} childName={e.childFullName} ParentName={`${e.firstname} ${e.lastname}`} />
          })}
        </div>
      </div>
    </div>
  )
}
