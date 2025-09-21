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
        return roleEng === "Parent" ? "მშობელი" : roleEng === "Admin" ? "ადმინისტრატორი" : roleEng === "Teacher" ? "მასწავლებელი" : "სტუმარი"
    }


    return { getRole, getCurrentUser }
}
