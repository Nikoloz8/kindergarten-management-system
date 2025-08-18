export default function ContactInfo() {
    
    const contactInfo = [
        {
            logo: "📞",
            info: "+995 322 123 456",
            miniInfo: "ყოველდღე 8:00 - 18:00"
        },
        {
            logo: "✉️",
            info: "info@kindergarten.ge",
            miniInfo: "ელექტრონული ფოსტა"
        },
        {
            logo: "📍",
            info: "თბილისი, ვაჟა-ფშაველას 45",
            miniInfo: "მისამართი"
        }
    ]

    return (
        <div className="flex flex-col gap-[16px] max-w-[33%]">
            <h4 className="text-[1.8rem] font-[600] text-[#020817]">კონტაქტი</h4>
            <ul className="flex flex-col gap-[12px]">
                {contactInfo.map((e, i) => {
                    return <li key={i} className="text-[#64748b] text-[1.4rem] font-[400] flex items-center gap-[4px]">
                        <span>{e.logo}</span>
                        <span>{e.info}</span>
                    </li>
                })}
            </ul>
        </div>)
}
