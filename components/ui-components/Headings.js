const headingDefault = `text-grey5 leading-relaxed`;

export const H1 = ({ children }, props) => {
  return (
    <h1
      className={`${headingDefault} text-f-40 sm:text-f-60 font-light`}
      {...props}>
      {children}
    </h1>
  );
};

export const H2 = ({ children }, props) => {
  return (
    <h2 className={`${headingDefault}text-f-26 sm:text-f-36`} {...props}>
      {children}
    </h2>
  );
  x;
};

export const H3 = ({ children }, props) => {
  return (
    <h3 className={`${headingDefault}text-f-24 sm:text-f-26`} {...props}>
      {children}
    </h3>
  );
};
export const H4 = ({ children }, props) => {
  return (
    <h4 className={`${headingDefault} text-f-22`} {...props}>
      {children}
    </h4>
  );
};

export const TravelQuote = ({ children }, props) => {
  return (
    <h1 className="text-center text-gold font-script text-f-40" {...props}>
      {children}
    </h1>
  );
};

export const Intro = ({ children }, props) => {
  return (
    <p className="text-f-24" {...props}>
      {children}
    </p>
  );
};
