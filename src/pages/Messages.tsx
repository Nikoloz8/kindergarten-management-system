import SVG29 from "../../public/assets/SVG29.svg?react"
import MessageCard from "../components/panelComponents/messages/MessageCard"
import index from "../utils"
export default function Messages() {

  const { getCurrentUser, getAllUser } = index()
  const users = getAllUser()
  const currentUser = getCurrentUser()

  return (
    <div>
      <div className="flex justify-center w-full mt-[24px]">
        <div className="flex flex-col gap-[24px] w-[1290px] items-start">
          <div className="flex flex-col w-full items-start">
            <h1 className="text-[#020817] text-[3rem] font-[700]">შეტყობინებები</h1>
            <p className="text-[#64748b] text-[1.6rem]">მშობლებთან და კოლეგებთან კომუნიკაცია</p>
          </div>
          <div className="flex gap-[24px] w-full h-[800px]">
            <div className="border-[1px] border-solid p-[24px_0]">
              <div className="p-[0_24px] flex jusctify-center">
                <label htmlFor="search" className="p-[8px_12px] rounded-[8px] border-[1px] border-solid  flex gap-[12px] items-center w-full">
                  <SVG29 className="stroke-[#64748b] h-[16px] w-[16px]" />
                  <input type="text" className="outline-none text-[1.4rem] " placeholder="ძებნა..." id="search" />
                </label>
              </div>
              <div className="flex flex-col gap-[4px] mt-[8px]">
                {
                  users.map((user: any, index: number) => {
                    if (user.id !== currentUser.id) {
                      return <MessageCard key={index} userId={user.id} />
                    }
                  })
                }
              </div>
            </div>
            <div className="border-[1px] border-solid w-full flex flex-col">
              <div className="p-[12px_24px] w-full flex gap-[12px] items-center border-b-[1px] border-solid">
                <span className="w-[48px] h-[48px] rounded-full bg-[#eaeaea]"></span>
                <h3 className="text-[1.4rem] text-[#020817] font-[600]">ნინო გელაშვილი</h3>
              </div>
              <div className="flex flex-col gap-[16px] h-full p-[50px_16px]">
                <div className="w-full flex justify-end">
                  <div className="bg-[#0f172a] text-[1.4rem] max-w-[60%] p-[10px_16px] rounded-[16px_16px_0_16px] flex flex-col gap-[6px] text-[#f8fafc]">
                    გამარჯობა! დღეს ნიკამ ძალიან კარგად იმუშავა შემოქმედებით დროს.
                    <span className="text-[1rem] text-[#f8fafc]">09:50</span>
                  </div>
                </div>
              </div>
              <div className="border-t-[1px] border-solid w-full p-[16px] bg-[#f1f5f933] flex gap-[8px] items-center">
                <input type="text" className="w-full outline-none bg-white border-[1px] border-solid rounded-[8px] p-[8px_12px] text-[1.4rem]" placeholder="შეტყობინების დაწერა..." />
                <button className="cursor-pointer p-[8px_12px] rounded-[8px] flex items-center justify-center text-black border-[1px] border-solid text-[1.2rem] gap-[8px]">
                  გაგზავნა
                  <img src="/assets/SVG42.svg" className="w-[16px]" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
