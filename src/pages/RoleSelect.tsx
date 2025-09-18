import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RoleSelect() {

  const [selectedRole, setSelectedRole] = useState("")

  const navigate = useNavigate()

  const roles = [
    {
      title: "მშობელი",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={`${selectedRole === "მშობელი" && "stroke-white"}`} stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 12h.01"></path><path d="M15 12h.01"></path><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path></svg>,
      p: "თვალყური ადევნეთ თქვენი ბავშვის აქტივობებს, პროგრესს და დაუკავშირდით მასწავლებლებს",
      generalFunctions: ["ბავშვის ყოველდღიური აქტივობების ნახვა", "განახლებებისა და ფოტოების მიღება", "მასწავლებლებთან შეტყობინებები", "მიღწევების მეთვალყურეობა"],
      border: "#bfdbfe",
      bg: "#eff6ff",
      hoverBg: "#dbeafe"
    },
    {
      title: "მასწავლებელი",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`${selectedRole === "მასწავლებელი" && "stroke-white"}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>,
      p: "მართეთ საკლასო აქტივობები, მოსწავლეთა პროგრესი და მშობლებთან კომუნიკაცია",
      generalFunctions: ["აქტივობების რეპორტების შექმნა", "ფოტოებისა და ვიდეოების ატვირთვა", "მოსწავლეთა პროგრესის მეთვალყურეობა", "მშობლებთან კომუნიკაცია"],
      border: "#bbf7d0",
      bg: "#f0fdf4",
      hoverBg: "#dcfce7"
    },
    {
      title: "ადმინისტრატორი",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`${selectedRole === "ადმინისტრატორი" && "stroke-white"}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>,
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
        <button onClick={() => navigate("/guest")} className="text-[1.4rem] font-[500] border-[1px] border-solid border-[#e2e8f0] text-[#0f172a] duration-300 transition-all hover:bg-[#f1f5f9] h-[36px] p-[8px_16px] cursor-pointer">
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
