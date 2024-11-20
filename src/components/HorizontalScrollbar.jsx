import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Box} from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';



const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (

  <ScrollMenu >
        <div style={{display:"flex", overflowX:'auto'}}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        item={item.id || item}
        title={item.id || item}
        sx={{
            display: 'inline-block',
            margin: '0 20px',
          }}
        
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </Box>
    ))}
    </div>
  </ScrollMenu>
);

export default HorizontalScrollbar;