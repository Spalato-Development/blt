import { useGlobalData } from 'lib/context/globalDataContext';
import clsx from 'clsx';
import Link from 'next/link';

export const Menu = () => {
  const { primaryMenuData } = useGlobalData();
  const { nodes: items } = primaryMenuData?.data.menu.menuItems || [];
  return (
    <nav className={clsx('hidden md:flex')}>
      {items?.map((item) => {
        const { label, path, cssClasses, id } = item;
        return (
          <Link key={id} href={path}>
            <a
              className={clsx(
                'menuItem',
                'text-white text-f-14 uppercase tracking-[1px] hover:text-gold hover:no-underline',
                'px-5',
              )}>
              {label}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};
