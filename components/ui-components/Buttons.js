import React from 'react';
import tw, { styled } from 'twin.macro';

const Button = styled.button(({ isGhost, isNarrow, isTab, isSmall }) => [
  tw`px-5 py-3 tracking-wide rounded-sm bg-lightBlue text-grey5 hover:bg-veryLightBlue`,
  isNarrow && tw`py-2`,
  isTab && tw`bg-gold`,
  isGhost && tw`bg-white border-2 border-lightBlue hover:bg-lightBlue`,
  isSmall && tw`p-1`,
]);

export { Button };
