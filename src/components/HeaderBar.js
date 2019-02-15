import React, { Component } from 'react';

import  { AppBar, Toolbar, Grid, Typography } from '@material-ui/core';

import styled from 'styled-components';

import {Link} from 'react-router-dom';

const logo = require('../images/logo.svg');

const StyledAppBar = styled(AppBar)`

&&{
    position: relative;
    box-shadow: none;
    border-bottom: 1px solid #fafafa;
    background-color: white;
  }
`;

const LinkTo = styled(Link)`
&&{
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}
`;

const DivInLine = styled.div`
  display:inline;
`;

const SpanTagLine = styled.span`
    display: inline-block;
    margin-left: 10px;
`;




class HeaderBar extends Component {

    render(
 
    ){

        return(

            <StyledAppBar position="absolute" color="default" >
                <Toolbar>
                    <Grid container spacing={24} alignItems="baseline">
                        <Grid item xs={12}>
                            <DivInLine >
                                <Typography variant="h6" fontFamily="inherit" color="inherit" noWrap>
                                    
                                     <LinkTo to='/' >
                                        <img alt="Home" width={20} src={logo} />
                                        <SpanTagLine >Jobs List App</SpanTagLine>
                                    </LinkTo>
                                    
                                </Typography>
                            </DivInLine>
                        </Grid>
                    </Grid>
                  </Toolbar>
            </StyledAppBar>
                  
        )


    }

}

export default HeaderBar;