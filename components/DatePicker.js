import { Temporal } from 'proposal-temporal/lib/index.mjs'

export default function DatePicker() {
  // const browserCalendar = new Intl.DateTimeFormat().resolvedOptions().calendar
  const timeZone = Temporal.now.timeZone().name
  const today = Temporal.now.date(timeZone)
  console.log(today.calendar)

  return <input type="date" />
}
