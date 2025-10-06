export default function index() {
    const getCurrentUser = () => {
        const currentUser = localStorage.getItem("currentUser")
        if (!currentUser) return ""
        const parsedUser = JSON.parse(currentUser)
        return parsedUser
    }

    const getRole = () => {
        const roleEng = getCurrentUser().role
        if (!roleEng) return
        return roleEng === "Parent" ? "მშობელი" : roleEng === "Administrator" ? "ადმინისტრატორი" : roleEng === "Teacher" ? "მასწავლებელი" : "სტუმარი"
    }

    const getAllUser = () => {
        const stringedUser = localStorage.getItem("users")
        if(!stringedUser) return []
        return JSON.parse(stringedUser!)
    }


    return { getRole, getCurrentUser, getAllUser }
}
