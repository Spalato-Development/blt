import { Typo } from './Typo.js';
import clsx from 'clsx';
import { FaStar } from 'react-icons/fa';
const StarIcons = ({ stars }) =>
  Array.from(Array(stars).keys()).map((item, i) => (
    <FaStar key={i} className="mr-2 text-gold text-f-22" />
  ));

const Title = ({ title, stars, intro, className, ...props }) => {
  return (
    <div
      className={clsx(
        'bg-veryLightGold py-4 pl-12 pr-5 my-4 container',
        className,
      )}
      {...props}>
      <div className="container">
        {intro && <div className={clsx('text-gold text-f-24')}>{intro}</div>}
        <Typo as="h1" h1>
          {title}
        </Typo>
        {stars && (
          <div className="flex">
            <StarIcons stars={stars} />
          </div>
        )}
      </div>
    </div>
  );
};

export { Title };
