import React from 'react';
import { makeStyles } from '@mui/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Content } from '../StylesComponents/ContentStyles';
import { Theme } from '@mui/material';


const useStyles = makeStyles((theme:Theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export  const  TimeLine = ()=> {
  const classes = useStyles();

  return (
    <Content color={'#329D9C'} >
      <Timeline position="alternate">
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2" color="textSecondary">
          9:30 am
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>
          <FastfoodIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2" color="textSecondary">
          10:00 am
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary">
          <LaptopMacIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" variant="outlined">
          <HotelIcon />
        </TimelineDot>
        <TimelineConnector className={classes.secondaryTail} />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="secondary">
          <RepeatIcon />
        </TimelineDot>
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
    </Content>
  );
}