const headingDefault = `text-grey5`;

export const H1 = ({ children, className }, props) => {
  return (
    <h1
      className={`${headingDefault} ${className} text-f-40 sm:text-f-60 font-light`}
      {...props}>
      {children}
    </h1>
  );
};

export const H2 = ({ children, className }, props) => {
  return (
    <h2
      className={`${headingDefault} ${className} text-f-26 sm:text-f-36`}
      {...props}>
      {children}
    </h2>
  );
  x;
};

export const H3 = ({ children, className }, props) => {
  return (
    <h3
      className={`${headingDefault} ${className}text-f-24 sm:text-f-26`}
      {...props}>
      {children}
    </h3>
  );
};
export const H4 = ({ children, className }, props) => {
  return (
    <h4 className={`${headingDefault} ${className} text-f-22`} {...props}>
      {children}
    </h4>
  );
};

export const TravelQuote = ({ children, className }, props) => {
  return (
    <h1
      className={`text-center text-gold font-script text-f-40 ${className}`}
      {...props}>
      {children}
    </h1>
  );
};

export const Intro = ({ children, className }, props) => {
  return (
    <p className={`text-f-24 ${className}`} {...props}>
      {children}
    </p>
  );
};
