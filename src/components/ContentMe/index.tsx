
import { FC } from 'react'
import {
  JobsTimeLineContent,
  TimeLineContent
} from 'data/TimeLineContent'
import { Content } from 'components/StylesComponents/ContentStyles';
import TimeLineEducation from './TimeLineEducation';
import About from './About';
import Skills from './Skills';


interface ContenidoYoModel {
  handleClose: Function
}

export const ContenidoYo: FC<ContenidoYoModel> = ({
  handleClose
}: ContenidoYoModel): JSX.Element => {
  return (
    <>
      <Content color={'#56C596'}>
        <section id='' className='  mouse row flex column end'>
          <div className=''>
            <div className='col-xs-1-12 cursor ' data-text='yo'>
              <div
                className='cursor flex column end mt-3 pr-6 roboto f-30 bold '
                style={{
                  paddingRight: '20px'
                }}
                data-text='yo'
                onClick={e => handleClose(e)}
              >
                X
              </div>
            </div>
          </div>
        </section>


            
        <section className='container mouse'>
          <About />
          <Skills />
          <TimeLineEducation EducationTimeLineContent={TimeLineContent} title="Experiencia Laboral" />
          <TimeLineEducation EducationTimeLineContent={JobsTimeLineContent} title="Educacion" />
        </section>

      </Content>
    </>
  )
}
