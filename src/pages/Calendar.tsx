import { Calendar as BigCalendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import "dayjs/locale/ka"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'
import SVG4 from "../../public/assets/SVG4.svg?react"
import SVG44 from "../../public/assets/SVG44.svg?react"
import SVG10 from "../../public/assets/SVG10.svg?react"
import SVG45 from "../../public/assets/SVG45.svg?react"


export default function CalendarPage() {
  const localizer = dayjsLocalizer(dayjs)
  dayjs.locale("ka")

  // const events = [
  //   {
  //     title: 'Test Event',
  //     start: new Date(2025, 10, 10, 1, 1),
  //     end: new Date(2025, 10, 10, 5, 1),
  //   },
  //   {
  //     title: 'Test Event',
  //     start: new Date(2026, 6, 6),
  //     end: new Date(2026, 6, 6),
  //   },
  // ]

  const [events, setEvents] = useState([])

  const [date, setDate] = useState(new Date())
  const currentMonthNum = dayjs(date).month() + 1
  const currentMonth = dayjs(date).format("MMMM")
  const currentYear = dayjs(date).year()

  const eventTypes = [
    {
      title: "შეხვედრები",
      color: "#3b82f6"
    },
    {
      title: "ღონისძიებები",
      color: "#22c55e"
    },
    {
      title: "გაკვეთილები",
      color: "#a855f7"
    },
    {
      title: "ჯანმრთელობა",
      color: "#ef4444"
    }
  ]

  return (
    <div className="flex justify-center w-full mt-[24px]">
      <div className="flex flex-col gap-[24px] w-[1290px] items-start">
        <div className="flex flex-col w-full items-start">
          <h1 className="text-[#020817] text-[3rem] font-[700]">კალენდარი</h1>
          <p className="text-[#64748b]">
            ღონისძიებების და შეხვედრების მართვა
          </p>
        </div>
        <div className='flex w-full gap-[24px]'>
          <div className='flex w-full flex-col gap-[24px] p-[24px] relative border-[1px]'>
            <div className='flex items-center gap-[4px] absolute top-[10px]'>
              <SVG4 stroke='#020817' />
              <h4 className='text-[2.4rem] text-[#020817 font-[600]'>
                {currentMonth} {currentYear}
              </h4>
            </div>
            <BigCalendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500, width: '100%' }}
              messages={{
                previous: 'წინა',
                next: 'შემდეგი',
                showMore: (total) => `+ კიდევ ${total}`,

              }}
              date={date}
              onNavigate={(newDate) => {
                setDate(newDate)
                console.log("📅 Current month:", currentMonthNum)
                console.log("📆 Current year:", currentYear)
              }}
            />
          </div>
          <div className='flex flex-col w-[400px] gap-[24px]'>
            <div className='p-[24px] flex flex-col border-[1px] gap-[24px]'>
              <h5 className='text-[1.6rem] text-[#020817 font-[600]'>
                მომავალი ღონისძიებები
              </h5>
              <button className='flex justify-center gap-[16px] rounded-[8px] hover:bg-[#f1f5f9] w-full p-[2px_12px] font-[500] transition-all duration-200 border-[1px] text-[1.2rem] text-[#0f172a] cursor-pointer'>
                ყველას ნახვა
              </button>
            </div>
            <div className='p-[24px] flex flex-col border-[1px] gap-[24px]'>
              <h5 className='text-[1.6rem] text-[#020817 font-[600]'>
                სწრაფი მოქმედებები
              </h5>
              <div className='flex flex-col gap-[8px]'>
                <button className='flex items-center gap-[16px] rounded-[8px] bg-[#f1f5f9] w-full p-[2px_12px] font-[500] text-[1.2rem] text-[#0f172a] cursor-pointer'>
                  <SVG44 className='w-[16px]' />
                  ღონისძიების დამატება
                </button>
                <button className='flex items-center gap-[16px] rounded-[8px] bg-[#f1f5f9] w-full p-[2px_12px] font-[500] text-[1.2rem] text-[#0f172a] cursor-pointer h-[28px]'>
                  <SVG10 stroke='currentColor' />
                  მშობელთა შეხვედრა
                </button>
                <button className='flex items-center gap-[16px] rounded-[8px] bg-[#f1f5f9] w-full p-[2px_12px] font-[500] text-[1.2rem] text-[#0f172a] cursor-pointer'>
                  <SVG45 className='w-[16px]' />
                  დროის ცვლილება
                </button>
              </div>
            </div>
            <div className='p-[24px] flex flex-col border-[1px] gap-[24px]'>
              <h5 className='text-[1.6rem] text-[#020817 font-[600]'>
                ღონისძიების ტიპები
              </h5>
              <div className='flex flex-col gap-[8px]'>
                {eventTypes.map((e, i) => {
                  return <div className='flex items-center gap-[8px]' key={i}>
                    <span className='w-[12px] h-[12px] rounded-full' style={{ backgroundColor: e.color }}></span>
                    <h6 className='text-[1.2rem] text-[#020817]'>{e.title}</h6>
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
