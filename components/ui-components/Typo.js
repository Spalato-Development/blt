import tw, { styled } from 'twin.macro';

export const Typo = styled.h2(({ h1, h3, h4, intro, travelQuote }) => [
  tw`leading-tight text-grey5`,
  tw`text-f-26 sm:text-f-36`,
  h1 && tw`font-light text-f-40 sm:text-f-60`,
  h3 && tw`text-f-24 sm:text-f-26`,
  h4 && tw`text-f-22 sm:text-f-22`,
  intro && tw`text-f-24 sm:text-f-24 text-grey4`,
  travelQuote && tw`text-center text-gold font-script text-f-28 sm:text-f-40`,
]);
