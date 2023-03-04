import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
//   height: 100vh;
  scroll-snap-align: center;
`

const Project = () => {
    return (
        <Section className=' h-[100vh]'>
            <h1>All Project</h1>
        </Section>
    );
};

export default Project;