// import ActivityCard from "../components/landing/ActivityCard"
// import ChildCard from "../components/landing/ChildCard"
// import FutureEventsCard from "../components/landing/FutureEventsCard"
// import QuickActionsButton from "../components/landing/QuickActionsButton"
// import Stats from "../components/landing/Stats"

import { useNavigate } from "react-router-dom"
import ProgramCard from "../components/landing/ProgramCard"

export default function Landing() {

    const navigate = useNavigate()

    // const TeacherNavArr = [
    //     {
    //         name: 'მთავარი',
    //         icon: '/assets/Vector.svg'
    //     },
    //     {
    //         name: 'ბავშვებო',
    //         icon: '/assets/SVG7.svg'
    //     },
    //     {
    //         name: 'აქტივობები',
    //         icon: '/assets/SVG6.svg'
    //     },
    //     {
    //         name: 'მშობლებთან კომუნიკაცია',
    //         icon: '/assets/SVG5.svg'
    //     },
    //     {
    //         name: 'კალენდარი',
    //         icon: '/assets/SVG4.svg'
    //     },
    //     {
    //         name: 'გალერეა',
    //         icon: '/assets/SVG3.svg'
    //     },
    //     {
    //         name: 'ანგარიშები',
    //         icon: '/assets/SVG2.svg'
    //     }
    // ]


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
        <>
            
            <span className="w-full h-[1px] bg-[#E2E8F0] block"></span>
            <section className="relative w-[1290px] mt-[24px] rounded-[16px] p-[18px_0] flex justify-center items-center bg-[url('/assets/Container.svg')] bg-cover overflow-hidden bg-no-repeat bg-center">
                <div className="absolute w-full h-full bg-linear-to-r from-[#0f172acc] to-[#f1f5f999] left-0"></div>
                <div className="flex flex-col w-[670px] items-center z-10 justify-center gap-[16px]">
                    <h1 className="text-[3.6rem] font-[700] text-center text-[#FFFFFF] leading-[40px]">მოგესალმებით სკოლამდელ პლატფორმაზე!</h1>
                    <h3 className="text-[2rem] text-center font-[400] text-[#FFFFFF] leading-[28px]">ბავშვების განვითარების მეთვალყურეობისა და მშობლებთან კომუნიკაციის ერთიანი სისტემა</h3>
                    {/* <button className="p-[12px_32px] rounded-[8px] bg-[rgba(255,255,255,0.2)] border-[1px] border-solid flex items-center gap-[8px] duration-300 transition-all font-[500] text-[1.4rem] leading-[20px] cursor-pointer hover:scale-110 text-[#FFFFFF] border-[rgba(255,255,255,0.4)]">
                        <img src="/assets/SVG9.svg" alt="" />
                        დღევანდელი მონაცემები
                    </button> */}
                    <div className="flex items-center gap-[12px]">
                        <button onClick={() => navigate("/choose-role")} className="text-[1.4rem] font-[500] text-[#FFFFFF] duration-300 transition-all rounded-[8px] bg-[#0f172a] hover:bg-[#272e3f] p-[8px_32px] cursor-pointer flex items-center gap-[12px]">
                            <img className="w-[16px] h-[16px]" src="/assets/SVG18.svg" alt="" />
                            რეგისტრაცია
                        </button>
                        <button className="p-[8px_32px] rounded-[8px] bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] border-[1px] border-solid flex items-center gap-[12px] duration-300 transition-all font-[500] text-[1.4rem] leading-[20px] cursor-pointer text-[#FFFFFF] hover:text-[#0f172a] border-[rgba(255,255,255,0.4)] group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="group-hover:stroke-[#0f172a]! transition-all duration-300 mt-[3px] stroke-[#FFFFFF]" data-lov-id="src/pages/Index.tsx:131:20" data-lov-name="LogIn" data-component-path="src/pages/Index.tsx" data-component-line="131" data-component-file="Index.tsx" data-component-name="LogIn" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20mr-2%22%7D"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" x2="3" y1="12" y2="12"></line></svg>
                            შესვლა
                        </button>
                    </div>
                </div>
            </section>
            {/* <section className="w-[1290px] mt-[32px] flex justify-between">
                <Stats title="ბავშვები კლასში" count="18" stat="15 დამსწრე დღეს" />
                <Stats title="ბავშვები კლასში" count="18" stat="15 დამსწრე დღეს" />
                <Stats title="ბავშვები კლასში" count="18" stat="15 დამსწრე დღეს" />
                <Stats title="ბავშვები კლასში" count="18" stat="15 დამსწრე დღეს" />
            </section> */}
            <section className="w-[1290px] mt-[32px] bg-[#f9fafa] p-[24px] flex flex-col gap-[24px] border-[1px] border-solid border-[#e2e8f0]">
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-[2.4rem] font-[600] text-[#020817]">ჩვენი პროგრამები</h3>
                    <h5 className="text-[1.6rem] tracking-[-0.45px] text-[#64748b]">ბავშვების ყოვლისმომცველი განვითარება</h5>
                </div>
                <div className="flex justify-between">
                    <ProgramCard emoji="🎨" text="ნახატი, ქანდაკება, მუსიკა და ცეკვა" title="შემოქმედება" />
                    <ProgramCard emoji="📚" text="ენები, მათემატიკა, მეცნიერება" title="განათლება" />
                    <ProgramCard emoji="⚽" text="სპორტი, თამაშები, ფიზიკური დავარჯიშება" title="ფიზიკური აქტივობა" />
                </div>
            </section>
            <div className="flex gap-[24px] mt-[24px] w-[1290px]">
                <div className="flex w-full justify-between">
                    {/* <section className="border-[1px] border-solid border-[#E2E8F0] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] p-[24px] flex flex-col gap-[24px] min-w-[800px] max-w-[800px]">
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
                    </section> */}
                    <section className="border-[1px] w-[49%] border-solid border-[#E2E8F0] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] p-[24px] flex flex-col gap-[24px]">
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
                    <section className="border-[1px] w-[49%] border-solid border-[#E2E8F0] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] p-[24px] flex flex-col gap-[24px]">
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
                </div>
                <div className="flex flex-col w-fit gap-[24px] ">
                    {/* <section className="flex flex-col gap-[12px] max-h-[511.5px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] border-[1px] border-solid border-[#E2E8F0] p-[24px] flex-1 overflow-y-auto">
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
                    </section> */}
                    {/* <section className="border-[1px] flex flex-col gap-[12px] border-solid border-[#E2E8F0] p-[24px]">
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
                    </section> */}
                </div>
            </div>

        </>
    )
}
