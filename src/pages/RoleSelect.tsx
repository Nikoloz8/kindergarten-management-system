import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SVG20 from "../../public/assets/SVG20.svg?react"
import SVG21 from "../../public/assets/SVG21.svg?react"
import SVG22 from "../../public/assets/SVG22.svg?react"

export default function RoleSelect() {

  const [selectedRole, setSelectedRole] = useState("")
  const navigate = useNavigate()

  const roles = [
    {
      title: "მშობელი",
      svg: <SVG20 stroke={selectedRole === "მშობელი" ? "#FFFFFF" : "currentColor"} />,
      p: "თვალყური ადევნეთ თქვენი ბავშვის აქტივობებს, პროგრესს და დაუკავშირდით მასწავლებლებს",
      generalFunctions: ["ბავშვის ყოველდღიური აქტივობების ნახვა", "განახლებებისა და ფოტოების მიღება", "მასწავლებლებთან შეტყობინებები", "მიღწევების მეთვალყურეობა"],
      border: "#bfdbfe",
      bg: "#eff6ff",
      hoverBg: "#dbeafe"
    },
    {
      title: "მასწავლებელი",
      svg: <SVG21 stroke={selectedRole === "მასწავლებელი" ? "#FFFFFF" : "currentColor"} />,
      p: "მართეთ საკლასო აქტივობები, მოსწავლეთა პროგრესი და მშობლებთან კომუნიკაცია",
      generalFunctions: ["აქტივობების რეპორტების შექმნა", "ფოტოებისა და ვიდეოების ატვირთვა", "მოსწავლეთა პროგრესის მეთვალყურეობა", "მშობლებთან კომუნიკაცია"],
      border: "#bbf7d0",
      bg: "#f0fdf4",
      hoverBg: "#dcfce7"
    },
    {
      title: "ადმინისტრატორი",
      svg: <SVG22 stroke={selectedRole === "ადმინისტრატორი" ? "#FFFFFF" : "currentColor"}/>,
      p: "მართეთ მთელი საბავშვო ბაღის ოპერაციები და მენეჯმენტი",
      generalFunctions: ["პერსონალისა და მოსწავლეთა მართვა", "ყველა რეპორტის ნახვა", "სისტემის კონფიგურაცია", "ანალიტიკური დაფა"],
      border: "#e9d5ff",
      bg: "#faf5ff",
      hoverBg: "#f3e8ff"
    }
  ]


  return (
    <div className="flex items-center justify-center flex-col gap-[32px]">
      <h1 className="font-[700] text-[3rem] leading-[36px] text-[#020817]">აირჩიეთ თქვენი როლი</h1>
      <div className="flex gap-[24px] flex-wrap justify-center max-w-[1290px]">
        {roles.map((e, i) => {

          const [hover, setHover] = useState(false)

          return <div onClick={() => setSelectedRole(e.title)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} key={i} style={{ backgroundColor: selectedRole === e.title ? "#FFFFFF" : hover ? e.hoverBg : e.bg, borderColor: selectedRole === e.title ? "#0f172a" : e.border }} className={`p-[24px] cursor-pointer max-w-[436px] transition-colors duration-300 ${selectedRole === e.title ? "border-[3px]" : "border-[1px]"} border-solid flex flex-col gap-[24px]`}>
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-center gap-[12px]">
                <div className={`w-[40px] h-[40px] bg-white flex items-center justify-center ${selectedRole === e.title && "bg-[#0f172a]!"}`}>
                  {e.svg}
                </div>
                <div className="flex flex-col gap-[4px] items-start">
                  <h3 className="font-[600] text-[2rem] leading-[28px] text-[#020817]">{e.title}</h3>
                  <div className={`p-[2px_10px] bg-[#0f172a] rounded-[999px] font-[600] text-[1.2rem] leading-[16px] text-white transition-all duration-300 hover:bg-[#0f172acc] ${selectedRole !== e.title && "hidden!"}`}>არჩეული</div>
                </div>
              </div>
              <p className="text-[1.4rem] leading-[20px] text-[#64748b]">{e.p}</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <h4 className="text-[1.4rem] leading-[20px] font-[500] text-[#020817]">ძირითადი ფუნქციები:</h4>
              <ul className="flex flex-col gap-[4px]">
                {e.generalFunctions.map((el, ind) => {
                  return <li key={ind} className="text-[1.4rem] leading-[20px] text-[#64748b] flex items-center gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#0f172a]"></span>
                    {el}
                  </li>
                })}
              </ul>
            </div>
          </div>
        })}
      </div>
      <div className="flex gap-[16px]">
        <button onClick={() => navigate("/")} className="text-[1.4rem] font-[500] border-[1px] border-solid border-[#e2e8f0] text-[#0f172a] duration-300 transition-all hover:bg-[#f1f5f9] h-[36px] p-[8px_16px] cursor-pointer">
          მთავარ გვერდზე დაბრუნება
        </button>
        {selectedRole && <button onClick={selectedRole === "მშობელი" ? () => navigate(`/register/${selectedRole}`) : () => { }} className="text-[1.4rem] font-[500] text-[#FFFFFF] duration-300 transition-all bg-[#0f172a] hover:bg-[#272e3f] h-[36px] p-[8px_16px] cursor-pointer">
          {selectedRole === "მშობელი" ? "რეგისტრაცია" : "შესვლა"} როგორც {selectedRole}
        </button>
        }
      </div>
    </div >
  )
}
