import React from 'react';
import Box from '@material-ui/core/Box';

export default function TabPanel(props) {
    const { children, value, index } = props;
  
    return (
      <div
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
      >
        {value === index && (
          <Box style={{backgroundColor: '#3A53A5'}} padding={3}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }