export const FooterColumn = ({ title, children }, props) => {
  return (
    <div
      className="w-[300px] lg:w-1/2 xl:w-1/4 lg:max-w-[230px] xl:max-w-[300px]"
      {...props}>
      <h3 className="text-white  block uppercase text-f-18 font-semibold tracking-[2px] leading-none pb-3  border-b border-gold mb-7 ">
        {title}
      </h3>
      {children}
    </div>
  );
};
