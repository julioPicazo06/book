import { TimelineItem, TimelineOppositeContent } from '@mui/lab'
import React, { FC } from 'react'
import { TimeLineContentModel } from 'data/TimeLineContent'
import { makeStyles } from '@mui/styles';
import { TimelineSeparator  ,TimelineDot , TimelineContent , TimelineConnector } from 'utils/lab';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import { Theme } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import { When } from 'components/When/When';

const TimeLineGeneral:FC<TimeLineContentModel> = ({name , date, position , viewDate}:TimeLineContentModel) => {
    const useStyles = makeStyles((theme:Theme) => ({
        paper: {
          padding: '6px 16px',
          fontFamily: 'Oswald',
        },
        secondaryTail: {
          backgroundColor: theme.palette.secondary.main,
        },
      }));

    const classes = useStyles();
    

    return (
        <TimelineItem className="mouse">
        <TimelineOppositeContent>
          <When predicate={!!viewDate}>
          <Typography variant="body2" color="textSecondary">
            {date}
          </Typography>
          </When>
        
        </TimelineOppositeContent>
        <TimelineSeparator style={{
          borderColor:'black'
        }}>
          <TimelineDot style={{
          backgroundColor:'#FF414D'
        }}>
          <CodeIcon />
          </TimelineDot>
          <TimelineConnector style={{
          backgroundColor:'#7373738c'
        }}/>
        </TimelineSeparator>
        <TimelineContent >
          <Paper elevation={3} className={classes.paper}>
            <h3> {name}</h3>
            <p>{position}</p>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    )
}

export default TimeLineGeneral
