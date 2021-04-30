import tw, { styled } from 'twin.macro';

const Button = styled.button(({ secondary, narrow, small, tab }) => [
  tw`flex items-center justify-center px-5 text-center cursor-pointer`,
  tw`leading-tight tracking-wider uppercase font-semiBold text-grey5`,
  tw`transition duration-300`,
  tw`rounded-sm bg-lightBlue hover:bg-veryLightBlue border-3 border-veryLightBlue`,

  narrow && tw`h-10`,

  secondary &&
    tw`h-10 text-sm bg-white border-2 border-lightBlue hover:bg-lightBlue`,

  small && tw`px-2 py-3 text-sm h-7 `,
  tab &&
    tw`p-2 font-semibold leading-tight text-center uppercase bg-white rounded-none text-grey5 text-f-12 md:text-f-14`,
  tab && tw` hover:bg-gold focus:bg-gold hover:no-underline`,
  tab && tw`border border-grey2`,
  tab && tw`flex items-center justify-center mx-1 mb-2`,
]);

export { Button };
