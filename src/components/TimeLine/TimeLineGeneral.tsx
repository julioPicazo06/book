import { TimelineItem, TimelineOppositeContent } from '@mui/lab'
import React, { FC } from 'react'
import { TimeLineContentModel } from 'data/TimeLineContent'
import styled from 'styled-components';
import { TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from 'utils/lab';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import CodeIcon from '@mui/icons-material/Code';
import { When } from 'components/When/When';

const StyledPaper = styled(Paper)`
  padding: 6px 16px;
  font-family: 'Oswald';
`;

const TimeLineGeneral: FC<TimeLineContentModel> = ({ name, date, position, viewDate }: TimeLineContentModel) => {

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
                borderColor: 'black'
            }}>
                <TimelineDot style={{
                    backgroundColor: '#FF414D'
                }}>
                    <CodeIcon />
                </TimelineDot>
                <TimelineConnector style={{
                    backgroundColor: '#7373738c'
                }} />
            </TimelineSeparator>
            <TimelineContent >
                <StyledPaper elevation={3}>
                    <h3> {name}</h3>
                    <p>{position}</p>
                </StyledPaper>
            </TimelineContent>
        </TimelineItem>
    )
}

export default TimeLineGeneral
