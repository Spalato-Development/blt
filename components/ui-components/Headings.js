const headingDefault = `text-grey5 leading-relaxed`;

export const H1 = ({ children }) => {
  <h1 className={`${headingDefault} text-f-40 md:text-f-60 font-light`}>
    {children}
  </h1>;
};

export const H2 = ({ children }) => {
  <h2 className={`${headingDefault}text-f-26 md:text-f-36`}>{children}</h2>;
};

export const H3 = ({ children }) => {
  <h3 className={`${headingDefault}text-f-24 md:text-f-26`}>{children}</h3>;
};
export const H4 = ({ children }) => {
  <h4 className={`${headingDefault} text-f-22`}>{children}</h4>;
};

export const TraveQuote = ({ children }) => {
  <h1 className="text-gold font-script text-f-40 md:text-f-64">{children}</h1>;
};

export const Intro = ({ children }) => {
  <p className="text-f-24">{children}</p>;
};
