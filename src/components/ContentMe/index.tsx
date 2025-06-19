
import {  useEffect } from 'react'
import {
  getJobsTimeLineContent,
  getTimeLineContent,
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
import { getAboutData } from 'data/aboutData';
import { setAbout } from 'store/reducers/aboutSlice';
import CloseButton from 'components/closeButton';
import { setSkills } from 'store/reducers/skillsSlice';
import useLocalStorage from 'hooks/useLocalStorage';
import { isVisibleLanguage } from 'utils/utils';


interface ContenidoYoModel {
  handleClose: (e: React.MouseEvent<Element, MouseEvent>) => void
}

export const ContenidoYo: React.FC<ContenidoYoModel> = ({
  handleClose
}: ContenidoYoModel): JSX.Element => {
  // const { param:lang } = useParams<{param: string}>();

    
  const [lang] = useLocalStorage<string>('lang');


  const dispatch = useDispatch();

  useEffect(() => {
    
    isVisibleLanguage('about');

    fetchAndDispatch({
      url : endpoints['jobs'] ,
      staticContent: getJobsTimeLineContent(lang) as any,
      action: setEducationHistory,
      dispatch,
      flag: false,
      lenguage: lang
    })

    fetchAndDispatch({
      url : endpoints['grades'] ,
      staticContent: getTimeLineContent(lang) as any,
      action: setJobHistory,
      dispatch,
      flag: false,
      lenguage: lang
    });

    fetchAndDispatch({
      url : endpoints['about'] ,
      staticContent: getAboutData(lang),
      action: setAbout,
      dispatch,
      flag: false,
      lenguage: lang
    });

    fetchAndDispatch({
      url : endpoints['skills'] ,
      staticContent: contentSkills,
      action: setSkills,
      dispatch,
      flag: false,
      lenguage: lang
    });

  }, [])


  const { jobHistory , educationHistory } = useSelector((state: RootState) => state.history)
  const aboutDataR = useSelector((state: RootState) => state.about);
  const skillsR = useSelector((state: RootState) => state.skills);

  console.log('skillsR', skillsR);
  return (
    <>
      <Content color={'#56C596'}>

        <CloseButton dataText='yo' handleClose={handleClose} />


            
        <section className='container mouse'>
          <About aboutData={aboutDataR} />
          <Skills skillData={skillsR} />
          <TimeLine EducationTimeLineContent={educationHistory.content } title={educationHistory.title} />
          <TimeLine EducationTimeLineContent={jobHistory.content} title={jobHistory.title} />
        </section>

      </Content>
    </>
  )
}
