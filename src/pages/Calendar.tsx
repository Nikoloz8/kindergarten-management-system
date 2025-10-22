import { Calendar as BigCalendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import "dayjs/locale/ka"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'
import SVG4 from "../../public/assets/SVG4.svg?react"
export default function CalendarPage() {
  const localizer = dayjsLocalizer(dayjs)
  dayjs.locale("ka")

  const events = [
    {
      title: 'Test Event',
      start: new Date(2025, 10, 10),
      end: new Date(2025, 10, 10),
    },
    {
      title: 'Test Event',
      start: new Date(2026, 6, 6),
      end: new Date(2026, 6, 6),
    },
  ]

  const [date, setDate] = useState(new Date())
  const currentMonthNum = dayjs(date).month() + 1
  const currentMonth = dayjs(date).format("MMMM")
  const currentYear = dayjs(date).year()

  return (
    <div className="flex justify-center w-full mt-[24px]">
      <div className="flex flex-col gap-[24px] w-[1290px] items-start">
        <div className="flex flex-col w-full items-start">
          <h1 className="text-[#020817] text-[3rem] font-[700]">კალენდარი</h1>
          <p className="text-[#64748b]">
            ღონისძიებების და შეხვედრების მართვა
          </p>
        </div>
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
      </div>
    </div>
  )
}
