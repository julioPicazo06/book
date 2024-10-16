
import { FC, useEffect } from 'react'
import {
  JobsTimeLineContent,
  TimeLineContent
} from 'data/TimeLineContent'
import { Content } from 'components/StylesComponents/ContentStyles';
import About from './About';
import Skills from './Skills';
import { useSelector, useDispatch} from 'react-redux';
import TimeLine from './TimeLine';
import { setEducationHistory, setJobHistory } from 'store/reducers/historySlice';
import { RootState } from 'store/store';
import { fetchAndDispatch } from 'utils/fetchAndDispatch';
import { endpoints } from 'utils/endpoints';
import { skillData } from 'data/imgContent';
import { aboutData } from 'data/aboutData';


interface ContenidoYoModel {
  handleClose: Function
}

export const ContenidoYo: React.FC<ContenidoYoModel> = ({
  handleClose
}: ContenidoYoModel): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAndDispatch({
      url : endpoints['jobs'] ,
      staticContent: JobsTimeLineContent,
      action: setEducationHistory,
      dispatch,
      flag: false,
    })

    fetchAndDispatch({
      url : endpoints['grades'] ,
      staticContent: TimeLineContent,
      action: setJobHistory,
      dispatch,
      flag: false,
    })

  }, [])



  const { jobHistory , educationHistory } = useSelector((state: RootState) => state.history)


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
          <About aboutData={aboutData} />
          <Skills skillData={ skillData} />
          <TimeLine EducationTimeLineContent={educationHistory } title="Experiencia Laboral" />
          <TimeLine EducationTimeLineContent={jobHistory} title="Educacion" />
        </section>

      </Content>
    </>
  )
}
