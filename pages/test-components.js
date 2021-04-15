import React from 'react';
import {
  H1,
  H2,
  H3,
  H4,
  Intro,
  TravelQuote,
  CollapseSection,
} from '../components/ui-components';

const TestComponents = () => {
  return (
    <div className="container">
      <div>
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <H4>Heading 3</H4>
        <Intro>Intro Paragraph</Intro>
        <TravelQuote>
          “Once the travel bug bites there is no known antidote, and I know that
          I shall be happily infected until the end of my life” Michael Palin
        </TravelQuote>
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
