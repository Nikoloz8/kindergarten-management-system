import index from "../../../utils"

export default function MessageCard({ userId }: { userId?: number }) {

    const { getRole, getAllUser } = index()
    const users = getAllUser()
    const user = users.find((e: any) => e.id === userId)


    return (
        <div className="flex justify-between p-[12px] min-w-[350px] bg-[#f6f9fb]">
            <div className="flex gap-[12px] items-center justify-center">
                <span className="w-[48px] h-[48px] rounded-full bg-[#eaeaea]"></span>
                <div className="flex flex-col gap-[4px]">
                    <h3 className="text-[1.4rem] text-[#020817] font-[600]">{user.firstname} {user.lastname}</h3>
                    <h4 className="text-[1.2rem] text-[#64748b]">{`${getRole(user.role)} ${user.role === "Parent" && `(${user.childFullName})`}`}</h4>
                    <p className="text-[#64748b] text-[1.4rem]">ტესტ</p>
                </div>
            </div>
            <h5 className="text-[#64748b] text-[1.2rem]">12:30</h5>
        </div>
    )
}
