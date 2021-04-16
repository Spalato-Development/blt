import { H1 } from './Headings.js';
import clsx from 'clsx';
const Title = ({ title, stars, intro, className, ...props }) => (
  <div
    className={clsx('bg-veryLightGold py-4 pl-12 pr-5 my-4', className)}
    {...props}>
    {intro && <div className={clsx('text-gold text-f-24')}>{intro}</div>}
    <H1 className="leading-tight">{title}</H1>
  </div>
);

export { Title };
