import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import JobItem from './list/JobItem';
import SectionHeader from './typo/SectionHeader';
import styled from 'styled-components';

import {connect} from 'react-redux';
import { fetchJobsListIfNeeded } from '../redux/actions/index';



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

export class JobsListPage extends Component{

  
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchJobsListIfNeeded())
  }

  componentDidUpdate(){
    const { dispatch } = this.props
    dispatch(fetchJobsListIfNeeded())
  }

  handleDescriptionJob = (idJobs) => {
        // Use React Router to update the URL
  this.props.history.push(`/jobs-description/${idJobs}`)
  }

 

  render(){
          const {isFetching, jobsListItem } = this.props;
    return(
        <DivRoot >
          <Grid container justify="center"> 
            <GridContainer spacing={24} alignItems="center" justify="center" container >
              <Grid item xs={12}>
                <SectionHeader title="List Jobs" subtitle="Page with a list of jobs" />


                {isFetching && jobsListItem.length === 0 && <h2>Loading...</h2>}
                {!isFetching && jobsListItem.length === 0 && <h2>Empty.</h2>}
                {jobsListItem.length > 0 && (
                  jobsListItem.map( item => 
                    
                      <JobItem handleDescriptionJob={this.handleDescriptionJob} key={item.id} style={{ opacity: isFetching ? 0.5 : 1 }} item={item} />
                  
                  )
                )}
                
              </Grid>
            </GridContainer>
          </Grid>
        </DivRoot>
    )}

}

JobsListPage.propTypes = {
  jobsListItem: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { jobsList } = state
  const { isFetching, jobsListItem } = jobsList
    || {
    isFetching: true,
    jobsListItem: []
  }

  return {
    jobsListItem,
    isFetching,
  }
}

export default connect(mapStateToProps)(JobsListPage);