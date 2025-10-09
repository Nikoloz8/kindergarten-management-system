import { useMemo, useState } from "react"
import SVG29 from "../../public/assets/SVG29.svg?react"
import MessageCard from "../components/panelComponents/messages/MessageCard"
import index from "../utils"
export default function Messages() {

  const { getCurrentUser, getAllUser } = index()
  const users = getAllUser()
  const currentUser = getCurrentUser()
  const chats = JSON.parse(localStorage.getItem("chats") || "{}")
  const [chatsFromStorage, setChatsFromStorage] = useState(chats || {})

  function sendMessage(senderId: number, text: string) {
    const chatId = senderId < currentUser.id ? `${senderId}_${currentUser.id}` : `${currentUser.id}_${senderId}`

    const chats = JSON.parse(localStorage.getItem("chats") || "{}")
    const [user1Id, user2Id] = chatId.split("_").map(Number)

    const senderUser = users.find((u: any) => u.id === senderId)
    const receiverUser = users.find((u: any) => u.id === (senderId === user1Id ? user2Id : user1Id))

    if (!chats[chatId]) {
      chats[chatId] = {
        participants: { user1: senderUser, user2: receiverUser },
        messages: []
      }
    }

    const newMessage = {
      messageId: `msg_${Date.now()}`,
      senderId,
      text,
      timestamp: new Date().toISOString(),
      read: false
    }

    chats[chatId].messages.push(newMessage)
    chats[chatId].lastMessage = newMessage
    setChatsFromStorage(chats)
    localStorage.setItem("chats", JSON.stringify(chats))
  }


  const [selectedChat, setSelectedChat] = useState<string>(() => currentUser.lastChat || "")
  const setChatId = (user: any) => {
    const currentUser = getCurrentUser()
    const chats = JSON.parse(localStorage.getItem("chats") || "{}")
    const chatId = currentUser.id < user.id ? `${currentUser.id}_${user.id}` : `${user.id}_${currentUser.id}`
    if (!currentUser.lastChat) {
      localStorage.setItem("currentUser", JSON.stringify({ ...currentUser, lastChat: user.id }))
      const users = getAllUser()
      users.forEach((u: any) => {
        if (u.id === currentUser.id) {
          u.lastChat = user.id
        } else {
          u.lastChat = u.lastChat || ""
        }
      })
      if (!chats[chatId]) {
        chats[chatId] = {
          participants: { user1: currentUser.id, user2: user.id },
          messages: []
        }
        localStorage.setItem("chats", JSON.stringify(chats))
      }
      localStorage.setItem("users", JSON.stringify(users))
    }
    setSelectedChat(user.id)
  }

  const selectedChatUser = users.find((u: any) => u.id === selectedChat)
  const chatId = currentUser.id < selectedChat
    ? `${currentUser.id}_${selectedChat}`
    : `${selectedChat}_${currentUser.id}`

  const messages = chatsFromStorage[chatId]?.messages || []

  console.log(selectedChatUser)

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
                      return <MessageCard onClick={() => setChatId(user)} key={index} chat={selectedChat} user={user} />
                    }
                  })
                }
              </div>
            </div>
            {selectedChatUser ? <div className="border-[1px] border-solid w-full flex flex-col">
              <div className="p-[12px_24px] w-full flex gap-[12px] items-center border-b-[1px] border-solid">
                <span className="w-[48px] h-[48px] rounded-full bg-[#eaeaea]"></span>
                <h3 className="text-[1.4rem] text-[#020817] font-[600]">{selectedChatUser.firstname} {selectedChatUser.lastname}</h3>
              </div>
              <div className="flex flex-col gap-[16px] h-full p-[50px_16px]">
                <div className="w-full flex flex-col">
                  {selectedChatUser &&
                    messages.map((msg: any, index: number) => {
                      console.log(msg.senderId, currentUser.id)
                      if (msg.senderId === currentUser.id) {
                        return <div key={index} className="flex w-full justify-end">
                          <div className="bg-[#0f172a] text-[1.4rem] max-w-[60%] p-[10px_16px] rounded-[16px_16px_0_16px] flex flex-col gap-[6px] text-[#f8fafc]">
                            {msg.text}
                            <span className="text-[1rem] text-[#f8fafc]">{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                          </div>
                        </div>
                      } else {
                        return <div key={index} className="flex w-full justify-start">
                          <div className="bg-[#eaeaea] text-[1.4rem] max-w-[60%] p-[10px_16px] rounded-[16px_16px_16px] flex flex-col gap-[6px] text-[#020817]">
                            {msg.text}
                            <span className="text-[1rem] text-[#64748b]">{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                          </div>
                        </div>
                      }
                    })

                  }
                </div>
              </div>
              <div className="border-t-[1px] border-solid w-full p-[16px] bg-[#f1f5f933] flex gap-[8px] items-center">
                <input type="text" className="w-full outline-none bg-white border-[1px] border-solid rounded-[8px] p-[8px_12px] text-[1.4rem]" placeholder="შეტყობინების დაწერა..." />
                <button onClick={() => {
                  sendMessage(Number(currentUser.id), "test")
                }} className="cursor-pointer p-[8px_12px] rounded-[8px] flex items-center justify-center text-black border-[1px] border-solid text-[1.2rem] gap-[8px]">
                  გაგზავნა
                  <img src="/assets/SVG42.svg" className="w-[16px]" alt="" />
                </button>
              </div>
            </div> : <div className="border-[1px] border-solid w-full flex flex-col items-center justify-center text-[#64748b] text-[1.4rem]">აირჩიეთ ჩეთი მარცხნივ</div>
            }
          </div>
        </div>
      </div >
    </div >
  )
}
