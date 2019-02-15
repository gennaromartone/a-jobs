import React from 'react';
import { shallow, mount } from 'enzyme';
import {JobsListPage} from './JobsListPage';

import JobItem from './list/JobItem';

describe('JobsListPage', () => {
 /* it('should render correctly  ', () => {
    const jobsListItem = [{id:1, description:'test job'}];
    const component = shallow(<JobsListPage dispatch={()=>{}} jobsListItem={jobsListItem}  isFetching={false}/>);
  
    expect(component).toMatchSnapshot();
  });*/

  it('renders a list of job item', () => {
    const jobsListItem = [{id:1, description:'test job'}];
    const wrapper = mount(<JobsListPage dispatch={()=>{}} jobsListItem={jobsListItem} isFetching={false}/>);

    // Expect the wrapper object to be defined
    expect(wrapper.find('JobItem')).toBeDefined();
    expect(wrapper.find('JobItem')).toHaveLength(jobsListItem.length);
  });

});