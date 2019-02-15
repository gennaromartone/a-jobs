import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import  styled  from 'styled-components';

import LazyLoad from 'react-lazy-load';


  const DivPaper = styled(Paper)`
  &&{
    margin-top: 0.7em;  
    padding: 1em;
    text-align: left;
    color: ;
    cursor: pointer;
  }`;

  
  const DivItemContainer = styled.div`
  &&{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}`;

 const DivBaseline = styled.div`
 &&{
    align-self: baseline;
    margin-left: 1em;
    
  }`;


  const DivInline = styled.div`
  &&{
    display: inline-block;
    margin-left: 1em;
    width: 48%;
    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        {
          width: 100%;
        }
      }
  }`;

class JobItem extends Component {

    shouldComponentUpdate(){
        // TO DO it is possible to make prpps comparision to prevent re-rendering
        return true;
      }
        

  render() {
    const {handleDescriptionJob, item} = this.props;

    const employType = item.employment_type.replace(/[_]/g, ' ');

    return (
        <LazyLoad debounce={false} offsetVertical={500}>
        <DivPaper onClick={() => handleDescriptionJob(item.id)}>
          <DivItemContainer>
            
            <DivBaseline>
            <DivInline>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  Title
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {item.title}
                </Typography>
              </DivInline>
              <DivInline>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  Job Rif
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Job-Rif-Id-{item.id}
                </Typography>
              </DivInline>
              
              <DivInline>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  Description
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {item.description}
                </Typography>
              </DivInline>
              <DivInline>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  Employment Type
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {employType}
                </Typography>
              </DivInline>
            </DivBaseline>
            
          </DivItemContainer>
        </DivPaper>
        </LazyLoad>
      
    )
  }
}

export default JobItem;