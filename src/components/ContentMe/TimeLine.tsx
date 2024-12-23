

import { Timeline } from '@mui/lab'
import TimeLineGeneral from '@/components/TimeLine/TimeLineGeneral'
import { TimeLineContentModel } from '@/data/TimeLineContent'
import React from 'react'

const  TimeLine = ({ EducationTimeLineContent , title }:{
    EducationTimeLineContent: TimeLineContentModel[],
    title: string
})  => {
  return (
    <div className='container mouse'>
          <div className='row'>
            <div className='flex justificar centrar'>
              <h2 className='pt-5 pb-5'> {title} </h2>
            </div>
          </div>
          <div className='row'>
            <Timeline className='mouse' position='alternate'>
              {EducationTimeLineContent.map(
                ({ name, date, position }: TimeLineContentModel) => (
                  <TimeLineGeneral
                    key={name}
                    name={name}
                    date={date}
                    position={position}
                  />
                )
              )}
            </Timeline>
          </div>
        </div>
  )
}

export default TimeLine
