
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
import { contentSkills } from 'data/imgContent';
import { aboutData } from 'data/aboutData';
import { setAbout } from 'store/reducers/aboutSlice';
import CloseButton from 'components/closeButton';
import { setSkills } from 'store/reducers/skillsSlice';


interface ContenidoYoModel {
  handleClose: (e: React.MouseEvent<Element, MouseEvent>) => void
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
    });

    fetchAndDispatch({
      url : endpoints['about'] ,
      staticContent: aboutData,
      action: setAbout,
      dispatch,
      flag: false,
    });

    fetchAndDispatch({
      url : endpoints['skills'] ,
      staticContent: contentSkills,
      action: setSkills,
      dispatch,
      flag: false,
    });

  }, [])


  const { jobHistory , educationHistory } = useSelector((state: RootState) => state.history)
  const aboutDataR = useSelector((state: RootState) => state.about);
  const skillsR = useSelector((state: RootState) => state.skills);
  return (
    <>
      <Content color={'#56C596'}>

        <CloseButton dataText='yo' handleClose={handleClose} />


            
        <section className='container mouse'>
          <About aboutData={aboutDataR} />
          <Skills skillData={skillsR} />
          <TimeLine EducationTimeLineContent={educationHistory } title="Experiencia Laboral" />
          <TimeLine EducationTimeLineContent={jobHistory} title="Educacion" />
        </section>

      </Content>
    </>
  )
}
