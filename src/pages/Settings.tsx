import { useState } from "react"
import SVG34 from "../../public/assets/SVG34.svg?react"
import SVG35 from "../../public/assets/SVG35.svg?react"
import SVG36 from "../../public/assets/SVG36.svg?react"
import SVG37 from "../../public/assets/SVG37.svg?react"
import index from "../utils"

export default function Settings() {

  const { getRole, getCurrentUser } = index()
  const currentUser = getCurrentUser()
  const role = getRole()
  const [visibleProfile, setVisibleProfile] = useState(currentUser?.visibleProfile)
  const [shareProgress, setShareProgress] = useState(JSON.parse(localStorage.getItem("shareProgress") || "false"))
  const [galleryPermission, setGalleryPermission] = useState(JSON.parse(localStorage.getItem("galleryPermission") || "false"))

  const handleChangeVisibility = () => {
    const updatedUser = { ...currentUser, visibleProfile: !visibleProfile }
    localStorage.setItem("currentUser", JSON.stringify(updatedUser))
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const updatedUsers = users.map((user: any) => user.email === currentUser.email ? updatedUser : user)
    localStorage.setItem("users", JSON.stringify(updatedUsers))
  }



  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-[24px] w-[1290px]">
        <div className="flex flex-col gap-[8px]">
          <h1 className="text-[#020817] text-[3rem] font-[700]">პარამეტრები</h1>
          <p className="text-[#64748b] text-[1.6rem]">ანგარიშის მართვა და პერსონალიზაცია</p>
        </div>
        <div className="border-[1px] border-solid flex flex-col gap-[16px] p-[24px]">
          <h2 className="text-[#020817] mb-[8px] text-[2rem] font-[600] flex items-center gap-[8px]">
            <SVG34 className="w-[20px]" />
            კონფიდენციალურობა
          </h2>
          <div className="pb-[24px] border-b-[1px] border-solid flex w-full justify-between items-center">
            <div className="flex gap-[12px] items-center">
              <SVG35 className="w-[16px] stroke-[#718095]" />
              <div className="flex flex-col">
                <h4 className="font-[500] text-[#020817] text-[1.6rem]">პროფილის ხილვადობა</h4>
                <p className="text-[#64748b] text-[1.4rem]">სხვა მშობლებისთვის პროფილის ნახვა</p>
              </div>
            </div>
            <div onClick={() => {
              setVisibleProfile(!visibleProfile)
              handleChangeVisibility()
            }} className={`p-[1.5px] cursor-pointer rounded-[12px] bg-[#0f172a] ${!visibleProfile && "bg-[#e2e8f0]"} w-[44px]`}>
              <div className={`w-[20px] h-[20px] rounded-[100%] bg-[#FFFFFF] transition-all duration-500 ${visibleProfile ? "translate-x-[105%]!" : ""}`}></div>
            </div>
          </div>
          {
            role === "ადმინისტრატორი" &&
            <>
              <div className="pb-[24px] border-b-[1px] border-solid flex w-full justify-between items-center">
                <div className="flex gap-[12px] items-center">
                  <SVG36 className="w-[16px] stroke-[#718095]" />
                  <div className="flex flex-col">
                    <h4 className="font-[500] text-[#020817] text-[1.6rem]">პროგრესის გაზიარება</h4>
                    <p className="text-[#64748b] text-[1.4rem]">ბავშვის პროგრესის მონაცემების  გაზიარება</p>
                  </div>
                </div>
                <div onClick={() => {
                  setShareProgress(!shareProgress)
                  localStorage.setItem("shareProgress", JSON.stringify(!shareProgress))
                }} className={`p-[1.5px] cursor-pointer rounded-[12px] bg-[#0f172a] ${!shareProgress && "bg-[#e2e8f0]"} w-[44px]`}>
                  <div className={`w-[20px] h-[20px] rounded-[100%] bg-[#FFFFFF] transition-all duration-500 ${shareProgress ? "translate-x-[105%]!" : ""}`}></div>
                </div>
              </div>
              <div className="flex w-full justify-between items-center">
                <div className="flex gap-[12px] items-center">
                  <SVG37 className="w-[16px] stroke-[#718095]" />
                  <div className="flex flex-col">
                    <h4 className="font-[500] text-[#020817] text-[1.6rem]">ფოტოების განთავსების ნებართვა</h4>
                    <p className="text-[#64748b] text-[1.4rem]">ბავშვის ფოტოების გალერეაში განთავსება</p>
                  </div>
                </div>
                <div onClick={() => {
                  setGalleryPermission(!galleryPermission)
                  localStorage.setItem("galleryPermission", JSON.stringify(!galleryPermission))
                }} className={`p-[1.5px] cursor-pointer rounded-[12px] bg-[#0f172a] ${!galleryPermission && "bg-[#e2e8f0]"} w-[44px]`}>
                  <div className={`w-[20px] h-[20px] rounded-[100%] bg-[#FFFFFF] transition-all duration-300 ${galleryPermission ? "translate-x-[105%]!" : ""}`}></div>
                </div>
              </div>
            </>}
        </div>
      </div>
    </div>)
}
