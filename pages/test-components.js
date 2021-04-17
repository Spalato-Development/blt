import React from 'react';
import tw, { styled } from 'twin.macro';

import {
  H1,
  H2,
  H3,
  H4,
  Intro,
  TravelQuote,
  CollapseSection,
  Button,
} from '../components/ui-components';
import { getStaticProps } from '../lib/appGetStaticProps';
// const Test = tw`px-4 py-3 uppercase rounded-sm bg-lightBlue`;

const TestComponents = () => {
  return (
    <div className="container">
      <div>
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <H4>Heading 3</H4>
        <Intro>Intro Paragraph</Intro>
        <div className="my-5">
          <Button className="mr-3">primary Button</Button>
          <Button isNarrow className="mr-3">
            primary narrow Button
          </Button>
          <Button isGhost className="mr-3">
            ghost Button
          </Button>
          <Button isGhost isSmall className="mr-3">
            ghost Button small
          </Button>
          <Button isTab className="mr-3">
            tab
          </Button>
        </div>
        <TravelQuote>
          “Once the travel bug bites there is no known antidote, and I know that
          I shall be happily infected until the end of my life” Michael Palin
        </TravelQuote>
      </div>
      <div>
        <CollapseSection className="my-10">
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

export { getStaticProps };

export default TestComponents;
