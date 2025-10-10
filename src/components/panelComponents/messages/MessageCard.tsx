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

    return (
        <div onClick={() => onClick!(user)} className={`cursor-pointer flex justify-between p-[12px] min-w-[350px] ${chat === userId ? "bg-[#f6f9fb]" : "bg-transparent"} `}>
            <div className="flex gap-[12px] items-center justify-center">
                <span className="w-[48px] h-[48px] rounded-full bg-[#eaeaea]"></span>
                <div className="flex flex-col gap-[4px]">
                    <h3 className="text-[1.4rem] text-[#020817] font-[600]">{user.firstname} {user.lastname}</h3>
                    <h4 className="text-[1.2rem] text-[#64748b]">{`${getRole(user.role)} ${user.role === "Parent" ? `(${user.childFullName})` : ""}`}</h4>
                    <p className="text-[#64748b] text-[1.4rem] truncate text-nowrap max-w-[350px]">{lastMessage && lastMessage.text}</p>
                </div>
            </div>
            <h5 className="text-[#64748b] text-[1.2rem]">{lastMessage ? new Date(lastMessage.timestamp).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) : ""}</h5>
        </div>
    )
}
