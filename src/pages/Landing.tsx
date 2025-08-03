export default function Landing() {

    const TeacherNavArr = [
        {
            name: 'მთავარი',
            icon: '/assets/Vector.svg'
        },
        {
            name: 'ბავშვებო',
            icon: '/assets/SVG7.svg'
        },
        {
            name: 'აქტივობები',
            icon: '/assets/SVG6.svg'
        },
        {
            name: 'მშობლებთან კომუნიკაცია',
            icon: '/assets/SVG5.svg'
        },
        {
            name: 'კალენდარი',
            icon: '/assets/SVG4.svg'
        },
        {
            name: 'გალერეა',
            icon: '/assets/SVG3.svg'
        },
        {
            name: 'ანგარიშები',
            icon: '/assets/SVG2.svg'
        }
    ]

    return (
        <div className="flex items-center justify-center">
            <div className="w-[1290px]">
                <header className="flex flex-col gap-[12px] w-full p-[10px_0]">
                    <div className="flex w-full justify-between items-center">
                        <div className="flex flex-col gap-[4px]">
                            <h3 className="text-[2rem] font-[700] leading-[28px] text-[#020817]">სკოლამდელი</h3>
                            <h4 className="text-center w-full text-[1.2rem] font-[400] leading-[12px] text-[#64748B]">მართვის პლატფორმა</h4>
                        </div>
                        <div className="block p-[8px_20px] bg-[#0F172A] items-center justify-center rounded-[8px] text-[#F8FAFC] font-[500] text-[1.4rem]">
                            მასწავლებელი
                        </div>
                        <div className="flex gap-[24px] items-center">
                            <img src="/assets/SVG.svg" alt="" />
                            <div className="flex gap-[16px] items-center border-[1px] border-solid border-[#E2E8F0] rounded-[999px] p-[12px_20px]">
                                <img src="/assets/SVG1.svg" alt="" />
                                <h5 className="text-[1.4rem] leading-[20px] text-[#020817] font-[500]">ნინო გელაშვილი</h5>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-[40px]">
                        {TeacherNavArr.map((item, index) => {
                            return <button key={index} className="flex items-center gap-[8px] curspor-pointer">
                                <img src={item.icon} alt="" />
                                <h5 className="text-[1.4rem] leading-[20px] text-[#020817] font-[500]">{item.name}</h5>
                            </button>
                        })}
                    </div>
                </header>
            </div>
        </div>
    )
}
