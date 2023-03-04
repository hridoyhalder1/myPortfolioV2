import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Who = () => {
    return (
        <Section className=' '>
            <h1>Who?</h1>
        </Section>
    );
};

export default Who;