type TLayoutContext = {
    register: UseFormRegister<FieldValues>
    reset: UseFormReset<FieldValues>
    watch: UseFormWatch<FieldValues>
    addEventForm: boolean
    setAddEventForm: React.Dispatch<React.SetStateAction<boolean>>
    markParentsMeeting: boolean
    setMarkParentsMeeting: React.Dispatch<React.SetStateAction<boolean>>
    changeTimeOfEvent: boolean
    setTimeChangeOfEvent: React.Dispatch<React.SetStateAction<boolean>>
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

declare module "*.svg?react" {
    import * as React from "react";
    const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >;
    export default ReactComponent;
}