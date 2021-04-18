import React from 'react';

import tw, { styled, css } from 'twin.macro';

import { CollapseSection, Button, Typo } from '../components/ui-components';
import { getStaticProps } from '../lib/appGetStaticProps';

const TestComponents = () => {
  return (
    <div className="container">
      <div className="my-5">
        <Typo as="h1" travelQuote>
          “The world is a book, and those who do not travel read only a page”
        </Typo>
      </div>

      <div>
        <div className="flex flex-wrap my-5">
          <Button className="m-3">primary Button</Button>
          <Button narrow className="m-3">
            primary narrow Button
          </Button>
          <Button secondary className="m-3">
            secondary Button
          </Button>
          <Button secondary small className="m-3">
            ghost Button small
          </Button>
        </div>
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
