import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import SectionHeader from './typo/SectionHeader';
import styled from 'styled-components';

import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import  Typography  from '@material-ui/core/Typography';
import  Button  from '@material-ui/core/Button';



const DivRoot = styled.div`
&&{
    flex-grow: 1;
    background-color: #ecfaf9;
    overflow: hidden;
    background-size: cover;
    background-position: 0 400px;
    padding: 20px;
    padding-bottom: 200px;
}
`;

const GridContainer = styled(Grid)`
&&{
    width:1000px;
}
`;

const DivPaper = styled(Paper)`
&&{
    padding: 1em;
    text-align: left;
    color: #ffffff;
}`;

const DivTopInfo = styled.div`
&&{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 42px;
  }`;

 const ButtonStyle = styled(Button)`
  &&{
    text-transform: uppercase;
    margin: 1em;
  }`;

class JobDescriptionPage extends Component{

  
 

  shouldComponentUpdate(){
    return true;
  }
    

  render(){
          const {jobItem } = this.props;
    return(
        <DivRoot >
          <Grid container justify="center"> 
            <GridContainer spacing={24} alignItems="center" justify="center" container >
              <Grid item xs={12}>
                <SectionHeader title="Job Description" subtitle="Page with the job description" />

                <DivPaper>
                      <DivTopInfo>
                      <Grid item container xs={12}>
                        <Grid item xs={8}>
                          <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                            Title
                          </Typography>
                          <Typography variant="h5" gutterBottom>
                            {jobItem.title}
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                        <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                            Employment type
                          </Typography>
                          <Typography variant="h5" gutterBottom>
                            {jobItem.employment_type}
                          </Typography>
                        </Grid>
                      </Grid>
                      </DivTopInfo>
                      <Grid item container xs={12}>
                        <Grid item xs={10}>
                            <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                                Description
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                {jobItem.description}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          
                          <div>
                        <ButtonStyle variant="outlined" size="large" >
                          Apply
                        </ButtonStyle>
                        </div>
                        </Grid>
                      </Grid>
                    </DivPaper>
                
                
              </Grid>
            </GridContainer>
          </Grid>
        </DivRoot>
    )}

}

JobDescriptionPage.propTypes = {
    jobItem: PropTypes.object.isRequired,
}

const getJob = (arrJobs,id) =>{
    let newArr =  arrJobs.filter( item =>{ 
         return item.id == id
        } 
    );

    if( newArr.length === 0)
        return {};

    return newArr[0];
}

const mapStateToProps = (state, ownProps) => {
    const { jobsList } = state;
    const { jobsListItem } = jobsList;
    const { match: { params } } = ownProps;
// TO DO se refrescia fare una query per recuperare i dati

        return {jobItem: getJob(jobsListItem, params.jobsId)}
    }



export default connect(mapStateToProps)(JobDescriptionPage);