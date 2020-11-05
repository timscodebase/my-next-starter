import { Temporal } from 'proposal-temporal/lib/index.mjs'
import MainTemplate from '../templates/MainTemplate'

import A from '../components/A'
import Code from '../components/Code'
import DatePicker from '../components/DatePicker'

export default function ProposalTemporal() {
  const timeZone = Temporal.now.timeZone().name
  const date = Temporal.now.date().toString()
  const time = Temporal.now.time(timeZone).toString()
  return (
    <MainTemplate>
      <h1>Proposal Temporal</h1>
      <h2>
        Here I will demonstrate the new features in the proposed{' '}
        <A
          href="https://github.com/tc39/proposal-temporal"
          text="Temporal Date"
        />{' '}
        API coming soon to Javascript
      </h2>
      <h3>{`${date} | ${time}`}</h3>
      <p>I am using</p>
      <Code>Temporal.now.timeZone().name</Code>
      <p> to tell that you are in the {timeZone} timezone</p>
      <br />
      {/* <DatePicker /> */}
    </MainTemplate>
  )
}
