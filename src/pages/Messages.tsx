import { useEffect, useRef, useState } from "react"
import SVG29 from "../../public/assets/SVG29.svg?react"
import SVG43 from "../../public/assets/SVG43.svg?react"
import MessageCard from "../components/panelComponents/messages/MessageCard"
import index from "../utils"
import { useForm } from "react-hook-form"
export default function Messages() {

  const { getCurrentUser, getAllUser } = index()
  const users = getAllUser()
  const currentUser = getCurrentUser()
  const chats = JSON.parse(localStorage.getItem("chats") || "{}")
  const [chatsFromStorage, setChatsFromStorage] = useState(chats || {})

  const { register, watch, reset } = useForm()
  function sendMessage(text: string) {
    if (!selectedChat) return
    const receiverId = selectedChat
    const senderId = currentUser.id

    const chatId = senderId < receiverId
      ? `${senderId}_${receiverId}`
      : `${receiverId}_${senderId}`

    const chats = JSON.parse(localStorage.getItem("chats") || "{}")

    if (!chats[chatId]) {
      chats[chatId] = {
        participants: { user1: senderId, user2: receiverId },
        messages: []
      };
    }

    const newMessage = {
      messageId: `msg_${Date.now()}`,
      senderId,
      text,
      timestamp: new Date().toISOString(),
      read: false
    };

    chats[chatId].messages.push(newMessage)
    chats[chatId].lastMessage = newMessage
    setChatsFromStorage(chats)
    localStorage.setItem("chats", JSON.stringify(chats))
    reset({ message: "" })
  }



  const [selectedChat, setSelectedChat] = useState<string>(() => currentUser.lastChat || "")
  const setChatId = (user: any) => {
    const currentUser = getCurrentUser()
    const chats = JSON.parse(localStorage.getItem("chats") || "{}")
    const chatId = currentUser.id < user.id
      ? `${currentUser.id}_${user.id}`
      : `${user.id}_${currentUser.id}`

    const updatedCurrentUser = { ...currentUser, lastChat: user.id }
    localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser))

    const users = getAllUser()
    users.forEach((u: any) => {
      if (u.id === currentUser.id) {
        u.lastChat = user.id
      }
    })
    localStorage.setItem("users", JSON.stringify(users))
    if (!chats[chatId]) {
      chats[chatId] = {
        participants: { user1: currentUser.id, user2: user.id },
        messages: []
      }
      localStorage.setItem("chats", JSON.stringify(chats))
    }

    setSelectedChat(user.id)
  }
  const selectedChatUser = users.find((u: any) => u.id === selectedChat)
  const chatId = currentUser.id < selectedChat
    ? `${currentUser.id}_${selectedChat}`
    : `${selectedChat}_${currentUser.id}`

  const messages = chatsFromStorage[chatId]?.messages || []


  const lastMessageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    lastMessageRef.current?.scrollTo({
      top: lastMessageRef.current.scrollHeight
    });
  }, [messages])

  const [search, setSearch] = useState(watch().searchInput)

  useEffect(() => {
    setSearch(watch().searchInput)
  }, [watch().searchInput])

  const neededUsers = search
    ? users.filter((e: any) =>
      e.firstname.toLowerCase().includes(search.toLowerCase()) ||
      e.lastname.toLowerCase().includes(search.toLowerCase())
    )
    : users



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
              <form className="w-full p-[0_24px] pb-[12px] flex jusctify-center" action="" onSubmit={(e) => {
                e.preventDefault()
              }}>
                <label htmlFor="search" className="p-[8px_12px] rounded-[8px] border-[1px] border-solid  flex gap-[12px] items-center w-full">
                  <SVG29 className="stroke-[#64748b] h-[16px] w-[16px]" />
                  <input {...register("searchInput")} type="text" className="outline-none text-[1.4rem] " placeholder="ძებნა..." id="search" />
                </label>
              </form>
              <div className="flex flex-col gap-[4px] mt-[8px]">
                {
                  neededUsers.map((user: any, index: number) => {
                    if (user.id !== currentUser.id) {
                      return <MessageCard onClick={() => setChatId(user)} key={index} chat={selectedChat} user={user} />
                    }
                  })
                }
              </div>
            </div>
            {selectedChatUser ? <div className="border-[1px] max-w-[900px] border-solid w-full flex flex-col">
              <div className="p-[12px_24px] w-full flex gap-[12px] items-center border-b-[1px] border-solid">
                <span className="w-[48px] h-[48px] rounded-full bg-[#eaeaea]"></span>
                <h3 className="text-[1.4rem] text-[#020817] font-[600]">{selectedChatUser.firstname} {selectedChatUser.lastname}</h3>
              </div>
              <div ref={lastMessageRef} className="flex flex-col gap-[16px] h-full p-[50px_16px] overflow-y-auto">
                <div className="w-full flex flex-col gap-[16px] h-full">
                  {selectedChatUser &&
                    messages.map((msg: any, index: number) => {
                      if (msg.senderId === currentUser.id) {
                        return <div key={index} className="flex w-full justify-end">
                          <div className={`bg-[#0f172a] text-[1.4rem] max-w-[60%] p-[10px_16px] rounded-[16px_16px_0_16px] flex flex-col gap-[6px] break-words text-[#f8fafc] ${index === messages.length - 1 ? "mb-[16px]" : ""}`}>
                            {msg.text}
                            <div className="flex items-center gap-[4px] w-full justify-end">
                              <span className="text-[1rem] text-[#f8fafc]">{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                              <SVG43 className={`w-[14px] ${!msg.read? "stroke-[#777d88]" : "stroke-[#85b3e8]"}`}/>
                            </div>
                          </div>
                        </div>
                      } else {
                        return <div key={index} className="flex w-full justify-start">
                          <div className={`bg-[#eaeaea] text-[1.4rem] max-w-[40%] p-[10px_16px] rounded-[16px_16px_16px] flex flex-col gap-[6px] text-[#020817] break-words ${index === messages.length - 1 ? "mb-[16px]" : ""}`}>
                            {msg.text}
                            <span className="text-[1rem] text-[#64748b]">{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                          </div>
                        </div>
                      }
                    })

                  }
                </div>
              </div>
              <form action="" className="border-t-[1px] border-solid w-full p-[16px] bg-[#f1f5f933] flex gap-[8px] items-center" onSubmit={(e) => { e.preventDefault() }}>
                <input {...register("message")} type="text" className="w-full outline-none bg-white border-[1px] border-solid rounded-[8px] p-[8px_12px] text-[1.4rem]" placeholder="შეტყობინების დაწერა..." />
                <button onClick={() => {
                  sendMessage(watch("message"))
                }} className="cursor-pointer p-[8px_12px] rounded-[8px] flex items-center justify-center text-black border-[1px] border-solid text-[1.2rem] gap-[8px]">
                  გაგზავნა
                  <img src="/assets/SVG42.svg" className="w-[16px]" alt="" />
                </button>
              </form>
            </div> : <div className="border-[1px] border-solid w-full flex flex-col items-center justify-center text-[#64748b] text-[1.4rem]">აირჩიეთ ჩათი მარცხნივ</div>
            }
          </div>
        </div>
      </div >
    </div >
  )
}
