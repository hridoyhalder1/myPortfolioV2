import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
//   height: 100vh;
  scroll-snap-align: center;
`

const Contact = () => {
    return (
        <Section className=' h-[100vh]'>
            <h1>Contact</h1>
        </Section>
    );
};

export default Contact;