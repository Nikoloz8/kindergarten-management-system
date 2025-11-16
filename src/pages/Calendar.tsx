import { Calendar as BigCalendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import "dayjs/locale/ka"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'
import SVG4 from "../../public/assets/SVG4.svg?react"
import SVG44 from "../../public/assets/SVG44.svg?react"
import SVG10 from "../../public/assets/SVG10.svg?react"
import SVG46 from "../../public/assets/SVG46.svg?react"
import SVG47 from "../../public/assets/SVG47.svg?react"
import SVG45 from "../../public/assets/SVG45.svg?react"
import { useForm } from 'react-hook-form'
import { useOutletContext } from 'react-router-dom'
import DatePicker, { registerLocale } from "react-datepicker"
import { ka } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css"

export default function CalendarPage() {
  const localizer = dayjsLocalizer(dayjs)
  dayjs.locale("ka")
  registerLocale("ka", ka);
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

  const [events, setEvents] = useState<any[]>(localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")!) : [] )
  console.log(events)

  const [date, setDate] = useState(new Date())
  // const currentMonthNum = dayjs(date).month() + 1
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

  const { register, watch, reset } = useForm()
  const { addEventForm, setAddEventForm, markParentsMeeting, setMarkParentsMeeting, changeTimeOfEvent, setTimeChangeOfEvent } = useOutletContext<TLayoutContext>()

  const [showTypesMenu, setShowTypesMenu] = useState(false)
  const [selectedType, setSelectedType] = useState("ღონისძიება")
  const eventTypesSingular = ["შეხვედრა", "ღონისძიება", "გაკვეთილი", "ჯანმრთელობა"]

  const getEndTime = (start: Date, durationStr: string) => {
    console.log("durationStr:", durationStr)
    console.log( "start:", start)
    const [hours, minutes] = durationStr.split(":").map(Number)
    const newDate = new Date(start)
    newDate.setHours(newDate.getHours() + hours)
    newDate.setMinutes(newDate.getMinutes() + minutes)
    return newDate
  }


  const handleAddEvent = () => {
    const startTime = date
    const duration = watch("duration1")
    console.log(watch("duration1"))
    const endTime = getEndTime(startTime, duration)

    setEvents([...events, {
      title: watch("title"),
      type: selectedType,
      start: startTime,
      end: endTime,
      participantsNumber: watch("participantsNumber1"),
      place: watch("place1"),
      description: watch("description1"),
      duration: duration
    }])
    console.log(startTime, endTime)

    console.log(events)

    localStorage.setItem("events", JSON.stringify(events))
    setAddEventForm(false)
  }

  return (
    <div className="flex justify-center w-full mt-[24px] relative">
      <div className={`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute p-[24px] flex-col gap-[16px] hidden ${addEventForm && "flex!"} bg-white z-20`}>
        <div className='flex w-full justify-between items-center'>
          <h4 className='font-[600] text-[1.8rem]'>
            ახალი ღონისძიება
          </h4>
          <button onClick={() => setAddEventForm(false)}>
            <SVG47 className='w-[14px] cursor-pointer stroke-[gray] hover:stroke-black transition-all duration-200' />
          </button>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-[16px]'>
          <div className='flex gap-[16px]'>
            <div className='flex flex-col gap-[8px]'>
              <label htmlFor="title" className='font-[500] text-[1.4rem] w-fit'>დასახელება</label>
              <input type="text" id='title' {...register("title")} className='border-[1px] p-[8px] text-[1.4rem] rounded-[8px] w-[300px]' placeholder='ღონისძიების დასახელება' />
            </div>
            <div className='flex flex-col gap-[8px]'>
              <label htmlFor="type" className='font-[500] text-[1.4rem] w-fit'>ტიპი</label>
              <div id='type' onClick={() => setShowTypesMenu(!showTypesMenu)} className='border-[1px] p-[8px] text-[1.4rem] rounded-[8px] w-[300px] flex cursor-pointer justify-between items-center relative'>
                {selectedType}
                <SVG46 className='w-[12px]' />
                {showTypesMenu &&
                  <div className='absolute bg-white flex flex-col p-[4px] rounded-[8px] border-[1px] shadow-lg w-full left-0 top-[45px]'>
                    {eventTypesSingular.map((e, i) => {
                      return <button onClick={() => setSelectedType(e)} key={i} className='w-full text-[1.4rem] text-start p-[8px_16px] hover:bg-[#f1f5f9]'>
                        {e}
                      </button>
                    })}
                  </div>
                }
              </div>
            </div>
          </div>
          <div className='flex gap-[16px]'>
            <div className='flex flex-col gap-[8px]'>
              <label htmlFor="date" className='font-[500] text-[1.4rem] w-fit'>თარიღი</label>
              <DatePicker
                id="date"
                selected={date}
                onChange={(d) => setDate(d!)}
                locale="ka"
                className='border-[1px] p-[8px] text-[1.4rem] w-[300px] hover:bg-[#f1f5f9] transition-all duration-300 cursor-pointer placeholder:duration-300  outline-none hover:placeholder:text-black'
                dateFormat="dd/MM/yyyy"
                placeholderText="თარიღის არჩევა"
              />
            </div>
            <div className='flex flex-col gap-[8px]'>
              <label htmlFor="time0" className='font-[500] text-[1.4rem] w-fit'>დრო</label>
              <input type="time" lang='ka' id='time0' {...register("time0")} className='border-[1px] p-[8px] text-[1.4rem] rounded-[8px] w-[300px]' placeholder='აირჩიეთ დრო' />
            </div>
          </div>
          <div className='flex gap-[16px]'>
            <div className='flex flex-col gap-[8px]'>
              <label htmlFor="duration" className='font-[500] text-[1.4rem] w-fit'>ხანგძლივობა</label>
              <input type="text" lang='ka' id='duration' {...register("duration1")} className='border-[1px] p-[8px] text-[1.4rem] rounded-[8px] w-[300px]' placeholder='მაგ: 02:30 (საათები:წუთები)' />
            </div>
            <div className='flex flex-col gap-[8px]'>
              <label htmlFor="participantsNumber" className='font-[500] text-[1.4rem] w-fit'>მონაწილეთა რაოდენობა</label>
              <input type="number" lang='ka' id='participantsNumber' {...register("participantsNumber1")} className='border-[1px] p-[8px] text-[1.4rem] rounded-[8px] w-[300px]' placeholder='შეუზღუდავი' />
            </div>
          </div>
          <div className='flex flex-col gap-[8px]'>
            <label htmlFor="place" className='font-[500] text-[1.4rem] w-fit'>ადგილი</label>
            <input type="text" lang='ka' id='place' {...register("place1")} className='border-[1px] p-[8px] text-[1.4rem] rounded-[8px] w-full' placeholder='ღონისძიების ადგილი' />
          </div>
          <div className='flex flex-col gap-[8px]'>
            <label htmlFor="description" className='font-[500] text-[1.4rem] w-fit'>აღწერა</label>
            <textarea id='description' {...register("description1")} className='border-[1px] p-[8px] min-h-[100px] text-[1.4rem] rounded-[8px] w-full' placeholder='დამატებითი ინფორმაცია... ' />
          </div>
          <div className='flex w-full justify-end items-center gap-[8px]'>
            <button onClick={() => {
              setAddEventForm(false)
              setDate(new Date())
              reset()
            }
            } className='p-[8px_16px] border-[1px] shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_10px_rgba(0,0,0,0.15)] transition-shadow duration-200 cursor-pointer font-[500] text-[1.4rem] text-[#0f172a] hover:bg-[#f1f5f9]'>გაუქმება</button>
            <button onClick={() => handleAddEvent()} className='p-[8px_16px] border-[1px] shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_10px_rgba(0,0,0,0.15)] transition-shadow duration-200 cursor-pointer font-[500] text-[1.4rem] text-[#0f172a] hover:bg-[#f1f5f9]'>შექმნა</button>
          </div>
        </form>
      </div >
      <div className={`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute p-[24px] flex-col gap-[16px] hidden ${markParentsMeeting && "flex!"} bg-white z-20`}>
        <div className='flex w-full justify-between items-center'>
          <h4 className='font-[600] text-[1.8rem]'>
            მშობელთა კრების დაგეგმვა
          </h4>
          <button onClick={() => setMarkParentsMeeting(false)}>
            <SVG47 className='w-[14px] cursor-pointer stroke-[gray] hover:stroke-black transition-all duration-200' />
          </button>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-[16px]'>
          <div className='flex flex-col gap-[8px]'>
            <label htmlFor="topic" className='font-[500] text-[1.4rem] w-fit'>შეხვედრის თემა</label>
            <input type="text" id='topic' {...register("topic")} className='border-[1px] p-[8px] text-[1.4rem] rounded-[8px] w-full' placeholder='მაგ: ყოველთვიური მშობელთა კრება' />
          </div>
          <div className='flex gap-[16px]'>
            <div className='flex flex-col gap-[8px]'>
              <label htmlFor="date" className='font-[500] text-[1.4rem] w-fit'>თარიღი</label>
              <DatePicker
                id="date"
                selected={date}
                onChange={(d) => setDate(d!)}
                locale="ka"
                className='border-[1px] p-[8px] text-[1.4rem] w-[300px] hover:bg-[#f1f5f9] transition-all duration-300 cursor-pointer placeholder:duration-300  outline-none hover:placeholder:text-black'
                dateFormat="dd/MM/yyyy"
                placeholderText="თარიღის არჩევა"
              />
            </div>
            <div className='flex flex-col gap-[8px]'>
              <label htmlFor="time1" className='font-[500] text-[1.4rem] w-fit'>დრო</label>
              <input type="time" id='time1' {...register("time1")} className='border-[1px] p-[8px] text-[1.4rem] rounded-[8px] w-[300px]' placeholder='აირჩიეთ დრო' />
            </div>
          </div>
          <div className='flex gap-[16px]'>
            <div className='flex flex-col gap-[8px]'>
              <label htmlFor="duration" className='font-[500] text-[1.4rem] w-fit'>ხანგძლივობა</label>
              <input type="text" lang='ka' id='duration' {...register("duration2")} className='border-[1px] p-[8px] text-[1.4rem] rounded-[8px] w-[300px]' placeholder='მაგ: 02:00' />
            </div>
            <div className='flex flex-col gap-[8px]'>
              <label htmlFor="participantsNumber" className='font-[500] text-[1.4rem] w-fit'>მონაწილეთა რაოდენობა</label>
              <input type="number" lang='ka' id='participantsNumber' {...register("participantsNumber2")} className='border-[1px] p-[8px] text-[1.4rem] rounded-[8px] w-[300px]' placeholder='შეუზღუდავი' />
            </div>
          </div>
          <div className='flex flex-col gap-[8px]'>
            <label htmlFor="place" className='font-[500] text-[1.4rem] w-fit'>ადგილი</label>
            <input type="text" lang='ka' id='place' {...register("place2")} className='border-[1px] p-[8px] text-[1.4rem] rounded-[8px] w-full' placeholder='მაგ: სააქტო დარბაზი' />
          </div>
          <div className='flex flex-col gap-[8px]'>
            <label htmlFor="onlineLink" className='font-[500] text-[1.4rem] w-fit'>ონლაინ ბმული (არასავალდებულო)</label>
            <input type="text" lang='ka' id='onlineLink' {...register("onlineLink")} className='border-[1px] p-[8px] text-[1.4rem] rounded-[8px] w-full' placeholder='https://meet.google.com/...' />
          </div>
          <div className='flex flex-col gap-[8px]'>
            <label htmlFor="description" className='font-[500] text-[1.4rem] w-fit'>დღის წესრიგი</label>
            <textarea id='description' {...register("description2")} className='border-[1px] p-[8px] min-h-[100px] text-[1.4rem] rounded-[8px] w-full' placeholder='შეხვედრის დღის წესრიგი და განსახილველი საკითხები... ' />
          </div>
          <div className='flex w-full justify-end items-center gap-[8px]'>
            <button onClick={() => {
              setAddEventForm(false)
              setDate(new Date())
              reset()
            }
            } className='p-[8px_16px] border-[1px] shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_10px_rgba(0,0,0,0.15)] transition-shadow duration-200 cursor-pointer font-[500] text-[1.4rem] text-[#0f172a] hover:bg-[#f1f5f9]'>გაუქმება</button>
            <button className='p-[8px_16px] border-[1px] shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_10px_rgba(0,0,0,0.15)] transition-shadow duration-200 cursor-pointer font-[500] text-[1.4rem] text-[#0f172a] hover:bg-[#f1f5f9]'>დაგეგმვა</button>
          </div>
        </form>
      </div>
      <div className={`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute p-[24px] flex-col gap-[16px] hidden ${changeTimeOfEvent && "flex!"} bg-white z-20`}>
        <div className='flex w-full justify-between items-center'>
          <h4 className='font-[600] text-[1.8rem]'>
            დროის ცვლილება
          </h4>
          <button onClick={() => setTimeChangeOfEvent(false)}>
            <SVG47 className='w-[14px] cursor-pointer stroke-[gray] hover:stroke-black transition-all duration-200' />
          </button>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-[16px]'>
          <div className='flex flex-col gap-[8px]'>
            <label htmlFor="topic" className='font-[500] text-[1.4rem] w-fit'>კლასი</label>
            <input type="text" id='topic' {...register("topic")} className='border-[1px] p-[8px] text-[1.4rem] rounded-[8px] w-full' placeholder='მაგ: კლასი #1' />
          </div>
          <div className='flex gap-[16px]'>
            <div className='flex flex-col gap-[8px]'>
              <label htmlFor="firstTime" className='font-[500] text-[1.4rem] w-fit'>თავდაპირველი დრო</label>
              <input type="time" lang='ka' id='fistTime' {...register("firstTime")} className='border-[1px] p-[8px] text-[1.4rem] rounded-[8px] w-[300px]' placeholder='აირჩიეთ დრო' />
            </div>
            <div className='flex flex-col gap-[8px]'>
              <label htmlFor="newTime" className='font-[500] text-[1.4rem] w-fit'>ახალი დრო</label>
              <input type="time" lang='ka' id='newTime' {...register("newTime")} className='border-[1px] p-[8px] text-[1.4rem] rounded-[8px] w-[300px]' placeholder='აირჩიეთ დრო' />
            </div>
          </div>
          <div className='flex gap-[16px]'>
            <div className='flex flex-col gap-[8px] w-full'>
              <label htmlFor="date" className='font-[500] text-[1.4rem]'>თარიღი</label>
              <DatePicker
                id="date"
                selected={date}
                onChange={(d) => setDate(d!)}
                locale="ka"
                className='border-[1px] p-[8px] text-[1.4rem] w-full hover:bg-[#f1f5f9] transition-all duration-300 cursor-pointer placeholder:duration-300  outline-none hover:placeholder:text-black'
                dateFormat="dd/MM/yyyy"
                placeholderText="თარიღის არჩევა"
              />
            </div>
          </div>
          <div className='flex flex-col gap-[8px]'>
            <label htmlFor="reason" className='font-[500] text-[1.4rem] w-fit'>მიზეზი</label>
            <textarea id='reason' {...register("reason")} className='border-[1px] p-[8px] min-h-[100px] text-[1.4rem] rounded-[8px] w-full' placeholder='ცვლილების მიზეზი... ' />
          </div>
          <div className='flex w-full justify-end items-center gap-[8px]'>
            <button onClick={() => {
              setAddEventForm(false)
              setDate(new Date())
              reset()
            }
            } className='p-[8px_16px] border-[1px] shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_10px_rgba(0,0,0,0.15)] transition-shadow duration-200 cursor-pointer font-[500] text-[1.4rem] text-[#0f172a] hover:bg-[#f1f5f9]'>გაუქმება</button>
            <button className='p-[8px_16px] border-[1px] shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_10px_rgba(0,0,0,0.15)] transition-shadow duration-200 cursor-pointer font-[500] text-[1.4rem] text-[#0f172a] hover:bg-[#f1f5f9]'>შენახვა</button>
          </div>
        </form>
      </div>
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
                <button onClick={() => setAddEventForm(true)} className='flex items-center gap-[16px] rounded-[8px] bg-[#f1f5f9] w-full p-[2px_12px] font-[500] text-[1.2rem] text-[#0f172a] cursor-pointer'>
                  <SVG44 className='w-[16px]' />
                  ღონისძიების დამატება
                </button>
                <button onClick={() => setMarkParentsMeeting(true)} className='flex items-center gap-[16px] rounded-[8px] bg-[#f1f5f9] w-full p-[2px_12px] font-[500] text-[1.2rem] text-[#0f172a] cursor-pointer h-[28px]'>
                  <SVG10 stroke='currentColor' />
                  მშობელთა შეხვედრა
                </button>
                <button onClick={() => setTimeChangeOfEvent(true)} className='flex items-center gap-[16px] rounded-[8px] bg-[#f1f5f9] w-full p-[2px_12px] font-[500] text-[1.2rem] text-[#0f172a] cursor-pointer'>
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
    </div >
  )
}
