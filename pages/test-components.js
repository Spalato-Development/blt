import React from 'react';
import {
  H1,
  H2,
  H3,
  H4,
  Intro,
  TravelQuote,
  CollapseSection,
  Container,
} from '../components/ui-components';

const TestComponents = () => {
  return (
    <Container>
      <div>
        <H1>Hello</H1>
        <h1 className="text-f-60">new test</h1>
      </div>
      <div>
        <CollapseSection>
          <p>Hello</p>
        </CollapseSection>
      </div>
    </Container>
  );
};

export default TestComponents;
