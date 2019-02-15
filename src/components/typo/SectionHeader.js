import React, { memo } from 'react';

import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';


const DivSection = styled.div`
&&
  {
    margin-top: 1em;
    margin-bottom: 1em;
  }
  `;
const TypographyBold = styled(Typography)`
  &&{
    font-weight: bold;
  }
`;

// use react memo for functional component - shallow comparison of props

const SectionHeader = memo( ({  title, subtitle}) =>  {
  
    return (
      <DivSection >
        <TypographyBold variant="subtitle1" >
          {title}
        </TypographyBold>
        <Typography variant="body2" gutterBottom>
          {subtitle}
        </Typography>
      </DivSection>
    )
  })


export default SectionHeader;