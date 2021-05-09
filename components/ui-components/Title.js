import { Typo } from './Typo.js';
import clsx from 'clsx';
import { StarIcons } from 'components';

const Title = ({ title, stars, intro, className, ...props }) => {
  return (
    <div
      className={clsx(
        'bg-veryLightGold py-4 pl-4 sm:pl-12 pr-5 my-4 container max-w-big',
        className,
      )}
      {...props}>
      {intro && <div className={clsx('text-gold text-f-24')}>{intro}</div>}
      <Typo as="h1" h1>
        {title}
      </Typo>
      {stars && <StarIcons stars={stars} />}
    </div>
  );
};

export { Title };
