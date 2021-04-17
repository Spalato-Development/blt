import React from 'react';
import tw, { styled } from 'twin.macro';

const Button = styled.button(({ isGhost, isNarrow, isTab, isSmall }) => [
  tw`px-5 py-3 tracking-wider uppercase transition duration-300 rounded-sm font-semiBold bg-lightBlue text-grey5 hover:bg-veryLightBlue`,
  isNarrow && tw`py-2`,
  isTab && tw`rounded-none bg-gold hover:bg-lightGold`,
  isGhost && tw`bg-white border-2 border-lightBlue hover:bg-lightBlue`,
  isSmall && tw`px-2 py-1 text-sm`,
]);

export { Button };
