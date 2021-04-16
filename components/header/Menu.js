import { useGlobalData } from 'lib/context/globalDataContext';

export const Menu = () => {
  const { primaryMenuData } = useGlobalData();
  const { nodes: items } = primaryMenuData?.data.menu.menuItems || [];
  return (
    <ul>
      {items?.map((item) => (
        <li key={item.id}>{item.label}</li>
      ))}
    </ul>
  );
};
