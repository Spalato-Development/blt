import tw, { styled } from 'twin.macro';

const Button = styled.button(({ secondary, narrow, small }) => [
  tw`flex items-center px-5 text-center h-50px`,
  tw`leading-tight tracking-wider uppercase font-semiBold text-grey5`,
  tw`transition duration-300`,
  tw`rounded-sm bg-lightBlue hover:bg-veryLightBlue border-3 border-veryLightBlue`,

  narrow && tw`h-10`,

  secondary &&
    tw`h-10 text-sm bg-white border-2 border-lightBlue hover:bg-lightBlue`,

  small && tw`px-2 text-sm h-7`,
]);

export { Button };
