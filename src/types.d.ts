type TLayoutContext = {
    register: UseFormRegister<FieldValues>
    reset: UseFormReset<FieldValues>
    watch: UseFormWatch<FieldValues>
}

type TUser = {
    role: "Parent"
    firstname?: string
    lastname?: string
    email: string
    password: string
    childFullName?: string
    childAge?: number
}