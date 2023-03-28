import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { SidebarLinkItem } from 'widgets/Sidebar/components/SidebarLinkItem/SidebarLinkItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import style from './Sidebar.module.scss';

export const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemList = useMemo(() => sidebarItemsList.map((item) => (
    <SidebarLinkItem
      key={item.path}
      item={item}
      collapsed={collapsed}
    />
  )), [collapsed, sidebarItemsList]);

  return (
    <menu
      data-testid="sidebar"
      className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [])}
    >
      <Button
        data-testid="sidebar-toggle-btn"
        onClick={onToggle}
        className={style.collapse_btn}
        theme="background_inverted"
        size="size_l"
        isSquare
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={style.items}>
        {itemList}
      </div>
      <div className={style.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={style.lang} isShort={collapsed} />
      </div>
    </menu>
  );
});
