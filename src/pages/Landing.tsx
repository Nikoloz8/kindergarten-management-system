import ActivityCard from "../components/landing/ActivityCard"
import ChildCard from "../components/landing/ChildCard"
import FutureEventsCard from "../components/landing/FutureEventsCard"
import QuickActionsButton from "../components/landing/QuickActionsButton"
import Stats from "../components/landing/Stats"

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

    const workingHours = [{
        weekDay: "ორშაბათი - პარასკევი",
        hours: "8:00 - 18:00"
    },
    {
        weekDay: "შაბათი",
        hours: "9:00 - 15:00"
    },
    {
        weekDay: "კვირა",
        hours: "დაკეტილია"
    }
    ]

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
        <div className="flex items-center justify-center flex-col">
            <div className="w-[1290px]">
                <header className="flex flex-col gap-[12px] w-full p-[10px_0]">
                    <div className="flex w-full justify-between items-center">
                        <div className="flex flex-col gap-[4px]">
                            <h3 className="text-[2rem] font-[700] leading-[28px] text-[#020817]">სკოლამდელი</h3>
                            <h4 className="text-center w-full text-[1.2rem] font-[400] leading-[12px] text-[#64748B]">მართვის პლატფორმა</h4>
                        </div>
                        <div className="p-[8px_20px] bg-[#0F172A] rounded-[8px] text-[#F8FAFC] font-[500] text-[1.4rem]">
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
            <span className="w-full h-[1px] bg-[#E2E8F0] block mt-[14px]"></span>
            <section className="relative w-[1290px] mt-[24px] rounded-[16px] p-[18px_0] flex justify-center items-center bg-[url('/assets/Container.svg')] bg-cover overflow-hidden bg-no-repeat bg-center">
                <div className="absolute w-full h-full bg-linear-to-r from-[#0f172acc] to-[#f1f5f999] left-0"></div>
                <div className="flex flex-col w-[670px] items-center z-10 justify-center gap-[16px]">
                    <h1 className="text-[3.6rem] font-[700] text-center text-[#FFFFFF] leading-[40px]">მოგესალმებით სკოლამდელ პლატფორმაზე!</h1>
                    <h3 className="text-[2rem] text-center font-[400] text-[#FFFFFF] leading-[28px]">ბავშვების განვითარების მეთვალყურეობისა და მშობლებთან კომუნიკაციის ერთიანი სისტემა</h3>
                    <button className="p-[12px_32px] rounded-[8px] bg-[rgba(255,255,255,0.2)] border-[1px] border-solid flex items-center gap-[8px] duration-300 transition-all font-[500] text-[1.4rem] leading-[20px] cursor-pointer hover:scale-110 text-[#FFFFFF] border-[rgba(255,255,255,0.4)]">
                        <img src="/assets/SVG9.svg" alt="" />
                        დღევანდელი მონაცემები
                    </button>
                </div>
            </section>
            <section className="w-[1290px] mt-[32px] flex justify-between">
                <Stats title="ბავშვები კლასში" count="18" stat="15 დამსწრე დღეს" />
                <Stats title="ბავშვები კლასში" count="18" stat="15 დამსწრე დღეს" />
                <Stats title="ბავშვები კლასში" count="18" stat="15 დამსწრე დღეს" />
                <Stats title="ბავშვები კლასში" count="18" stat="15 დამსწრე დღეს" />
            </section>
            <div className="flex gap-[24px] mt-[24px] w-[1290px]">
                <div className="flex flex-col gap-[24px]">
                    <section className="border-[1px] border-solid border-[#E2E8F0] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] p-[24px] flex flex-col gap-[24px] min-w-[800px] max-w-[800px]">
                        <div className="flex justify-between">
                            <div className="flex gap-[16px] items-center text-[2.4rem] font-[600] leading-[24px] text-[#020817]">
                                <img src="/assets/SVG10.svg" alt="" />
                                <span className="mb-[4px]">
                                    კლასის ბავშვები
                                </span>
                            </div>
                            <button className="p-[8px_16px] border-[1px] border-solid border-[#E2E8F0] rounded-[12px] cursor-pointer font-[500] text-[1.4rem] leading-[20px] tracking-[-0.6px] text-[#020817]">ყველას ნახვა</button>
                        </div>
                        <div className="flex gap-[16px] flex-wrap justify-center">
                            <ChildCard />
                            <ChildCard />
                            <ChildCard />
                        </div>
                    </section>
                    <section className="border-[1px] border-solid border-[#E2E8F0] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] p-[24px] flex flex-col gap-[24px]">
                        <h4 className="text-[1.8rem] font-[600] pb-[7px] tracking-[-0.45px] text-[#020817]">სამუშაო საათები</h4>
                        <div className="flex flex-col gap-[12px]">
                            <ul className="flex flex-col gap-[16px]">
                                {workingHours.map((e, i) => {
                                    return <li key={i} className="flex justify-between w-full">
                                        <h5 className="text-[1.4rem] font-[600] tracking-[-0.45px] text-[#020817]">{e.weekDay}</h5>
                                        <h6 className="text-[1.2rem] font-[600] tracking-[-0.45px] text-[#64748b]">{e.hours}</h6>
                                    </li>
                                })}
                            </ul>
                            <span className="w-[full] h-[1px] bg-[#ced3db]"></span>
                            <button className="flex justify-center gap-[16px] border-[1px] border-solid border-[#E2E8F0] p-[12px_0] rounded-[8px] cursor-pointer items-center">
                                <img src="/assets/SVG4.svg" alt="" />
                                <h4 className="font-[500] text-[1.4rem] leading-[20px] text-[#020817]">ვიზიტის დაჯავშნა</h4>
                            </button>
                        </div>
                    </section>
                    <section className="border-[1px] border-solid border-[#E2E8F0] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] p-[24px] flex flex-col gap-[24px]">
                        <h4 className="text-[1.8rem] font-[600] pb-[7px] tracking-[-0.45px] text-[#020817]">კონტაქტი</h4>
                        <div className="flex flex-col gap-[16px]">
                            {contactInfo.map((e, i) => {
                                return <div key={i} className="flex gap-[12px]">
                                    <span className="flex w-[40px] items-center justify-center text-2xl h-[40px] rounded-full bg-[#0f172a1a]">{e.logo}</span>
                                    <div className="flex h-full justify-between flex-col">
                                        <h5 className="text-[1.4rem] font-[600] tracking-[-0.45px] text-[#020817]">{e.info}</h5>
                                        <h6 className="text-[1.2rem] font-[600] tracking-[-0.45px] text-[#64748b]">{e.miniInfo}</h6>
                                    </div>
                                </div>
                            })}
                        </div>
                    </section>
                </div>
                <div className="flex flex-col w-fit gap-[24px] ">
                    <section className="flex flex-col gap-[12px] max-h-[511.5px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] border-[1px] border-solid border-[#E2E8F0] p-[24px] flex-1 overflow-y-auto">
                        <span className="flex gap-[8px] items-center">
                            <img src="/assets/SVG13.svg" alt="" />
                            <h4 className="text-[1.8rem] font-[600] pb-[7px] tracking-[-0.45px] text-[#020817]">დღევანდელი აქტივობები</h4>
                        </span>
                        <ActivityCard />
                        <ActivityCard />
                        <ActivityCard />
                        <ActivityCard />
                        <ActivityCard />
                        <ActivityCard />
                        <ActivityCard />
                        <ActivityCard />
                        <ActivityCard />
                        <ActivityCard />
                    </section>
                    <section className="border-[1px] flex flex-col gap-[12px] border-solid border-[#E2E8F0] p-[24px]">
                        <span className="flex gap-[8px] items-center">
                            <img src="/assets/SVG15.svg" alt="" />
                            <h4 className="text-[1.8rem] font-[600] pb-[7px] tracking-[-0.45px] text-[#020817]">მომავალი ღონისძიებები</h4>
                        </span>
                        <FutureEventsCard />
                        <FutureEventsCard />
                        <FutureEventsCard />
                        <button className="flex justify-center gap-[16px] border-[1px] border-solid border-[#E2E8F0] p-[12px_0] rounded-[8px] cursor-pointer items-center">
                            <img src="/assets/SVG4.svg" alt="" />
                            <h4 className="font-[500] text-[1.4rem] leading-[20px] text-[#020817]">კალენდრის ნახვა</h4>
                        </button>
                    </section>
                    <section className="border-[1px] flex flex-col gap-[12px] border-solid border-[#E2E8F0] p-[24px]">
                        <h4 className="text-[1.4rem] font-[600] tracking-[-0.35px] text-[#020817]">სწრაფი მოქმედებები</h4>

                        <QuickActionsButton svg="/assets/SVG5.svg" route="" text="ახალი შეტყობინება" />
                        <QuickActionsButton svg="/assets/SVG4.svg" route="" text="ღონისძიების დამატება" />
                        <QuickActionsButton svg="/assets/SVG10.svg" route="" text="დასწრების ჩანიშვნა" />
                    </section>
                </div>
            </div>
        </div>
    )
}
