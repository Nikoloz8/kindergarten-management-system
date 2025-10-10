import index from "../../../utils"

export default function MessageCard({ user, onClick, chat }: { user: any, onClick?: (user: any) => void, chat: any }) {
    const userId = user.id
    const { getRole, getCurrentUser } = index()
    if (!userId) return

    const currentUser = getCurrentUser()
    const currentChatId = currentUser.id < userId
        ? `${currentUser.id}_${userId}`
        : `${userId}_${currentUser.id}`

    const chats = JSON.parse(localStorage.getItem("chats") || "{}")
    const lastMessage = chats[currentChatId]?.lastMessage || null

    const markReadedMessages = () => {
        const chat = chats[currentChatId]
        if (!chat || !chat.messages) return

        const updatedMessages = chat.messages.map((msg: any) => {
            if (msg.senderId !== currentUser.id) {
                return { ...msg, read: true }
            }
            return msg
        })

        const updatedLastMessage =
            chat.lastMessage && chat.lastMessage.senderId !== currentUser.id
                ? { ...chat.lastMessage, read: true }
                : chat.lastMessage

        chats[currentChatId] = {
            ...chat,
            messages: updatedMessages,
            lastMessage: updatedLastMessage,
        }

        localStorage.setItem("chats", JSON.stringify(chats))
    }


    const getUnreadedMessagesCount = () => {
        const chat = chats[currentChatId]
        if (!chat || !chat.messages) return 0

        return chat.messages.reduce((count: number, msg: any) => {
            return !msg.read ? count + 1 : count
        }, 0)
    }



    return (
        <div onClick={() => {
            onClick!(user)
            markReadedMessages()
        }} className={`cursor-pointer flex justify-between p-[12px] min-w-[350px] ${chat === userId ? "bg-[#f6f9fb]" : "bg-transparent"} `}>
            <div className="flex gap-[12px] items-center justify-center">
                <span className="w-[48px] h-[48px] rounded-full bg-[#eaeaea]"></span>
                <div className="flex flex-col gap-[4px]">
                    <h3 className="text-[1.4rem] text-[#020817] font-[600]">{user.firstname} {user.lastname}</h3>
                    <h4 className="text-[1.2rem] text-[#64748b]">{`${getRole(user.role)} ${user.role === "Parent" ? `(${user.childFullName})` : ""}`}</h4>
                    <p className={`text-[1.4rem] truncate text-nowrap max-w-[350px] ${lastMessage && (!lastMessage.read && lastMessage.senderId !== currentUser.id ? "text-[#020817]" : "text-[#64748b]")}`}>{lastMessage && lastMessage.text}</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between">
                <h5 className="text-[#64748b] text-[1.2rem]">{lastMessage ? new Date(lastMessage.timestamp).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) : ""}</h5>
                {lastMessage ? (!lastMessage.read && lastMessage.senderId !== currentUser.id) && <span className="p-[2px_8px] bg-[#0f172a] rounded-[999px] text-[#f8fafc] text-[1.2rem] font-[600] text-center">{lastMessage.senderId !== currentUser.id && getUnreadedMessagesCount()}</span> : <></>}
            </div>
        </div>
    )
}
