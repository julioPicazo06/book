import { TimelineItem, TimelineOppositeContent } from '@mui/lab'
import React, { FC } from 'react'
import { TimeLineContentModel } from '@/data/TimeLineContent'
import { makeStyles } from '@mui/styles';
import { TimelineSeparator  ,TimelineDot , TimelineContent , TimelineConnector } from '@/utils/lab';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import { Theme } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const TimeLineGeneral:FC<TimeLineContentModel> = ({name , date, position}:TimeLineContentModel) => {
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
          <Typography variant="body2" color="textSecondary">
            {date}
          </Typography>
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
