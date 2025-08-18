export default function FastLinks() {

    const fastLinks = ["ბავშვები", "აქტივობები", "ღონისძიებები", "გალერეა"]

    return (
        <div className="flex flex-col gap-[16px] max-w-[33%]">
            <h4 className="text-[1.8rem] font-[600] text-[#020817]">სწრაფი ბმულები</h4>
            <ul className="flex flex-col gap-[8px]">
                {fastLinks.map((e, i) => {
                    return <li key={i} className="text-[#64748b] text-[1.4rem] font-[400]">{e}</li>
                })}
            </ul>
        </div>)
}
