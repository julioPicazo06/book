import React, { FC, useEffect, useState } from 'react';
import { getJobsTimeLineContent } from 'data/content';
import { getTimeLineContent } from 'data/TimeLineContent';
import { logger } from 'utils/logger';
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
    logger.log('[ContentMe] useEffect ejecutado', lang);
    isVisibleLanguage('about');

    fetchAndDispatch({
      url : endpoints['jobs'] ,
      staticContent: getJobsTimeLineContent(lang) as any,
      action: setEducationHistory,
      dispatch,
      flag: true,
      lenguage: lang
    })

    fetchAndDispatch({
      url : endpoints['grades'] ,
      staticContent: getTimeLineContent(lang) as any,
      action: setJobHistory,
      dispatch,
      flag: true,
      lenguage: lang
    });

    fetchAndDispatch({
      url : endpoints['about'] ,
      staticContent: getAboutData(lang),
      action: setAbout,
      dispatch,
      flag: true,
      lenguage: lang
    });

    fetchAndDispatch({
      url : endpoints['skills'] ,
      staticContent: contentSkills,
      action: setSkills,
      dispatch,
      flag: true,
      lenguage: lang
    });

  }, [lang, dispatch])


  const { jobHistory , educationHistory } = useSelector((state: RootState) => state.history)
  const aboutDataR = useSelector((state: RootState) => state.about);
  const skillsR = useSelector((state: RootState) => state.skills);

  logger.log('skillsR', skillsR);
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
