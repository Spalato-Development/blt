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
    <div className="container">
      <div>
        <H1>Hello</H1>
        <h1 className="text-f-60">new test</h1>
      </div>
      <div>
        <CollapseSection className="mb-10">
          <p>
            Temporibus eum assumenda voluptas quia molestias ullam sed
            necessitatibus et ut aut qui aliquam. Provident id consequatur
            facere numquam numquam nisi ex consequatur quis quia dolores et
            consequatur. Modi nihil hic cumque consequatur omnis atque
            laudantium quibusdam hic pariatur magnam autem. Blanditiis quia et
            sed deleniti reiciendis ullam aut tenetur. Corporis qui dolores ut
            quae. Tempora commodi unde cupiditate maiores accusamus et possimus
            dolorem voluptas est tenetur voluptas.
          </p>
        </CollapseSection>
      </div>
    </div>
  );
};

export default TestComponents;
