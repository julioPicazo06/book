import { Timeline } from '@mui/lab'
import TimeLineGeneral from 'components/TimeLine/TimeLineGeneral'
import { TimeLineContentModel } from 'data/TimeLineContent'
import React from 'react'

const  TimeLine = ({ EducationTimeLineContent , title }:{
    EducationTimeLineContent: TimeLineContentModel[],
    title: string
})  => {
  // Validar que EducationTimeLineContent existe y es un array
  if (!EducationTimeLineContent || !Array.isArray(EducationTimeLineContent) || EducationTimeLineContent.length === 0) {
    return (
      <div className='container mouse'>
        <div className='row'>
          <div className='flex justificar centrar'>
            <h2 className='pt-5 pb-5'>Cargando...</h2>
          </div>
        </div>
      </div>
    );
  }

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
                ({ name, date, position , viewDate }: TimeLineContentModel) => (
                  <TimeLineGeneral
                    key={name}
                    name={name}
                    date={date}
                    position={position}
                    viewDate={viewDate}
                  />
                )
              )}
            </Timeline>
          </div>
        </div>
  )
}

export default TimeLine
