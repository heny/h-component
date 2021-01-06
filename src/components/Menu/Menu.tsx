import React, { useState, createContext } from 'react';
import classNames from 'classnames'
import { MenuItemProps } from "./MenuItem"

type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  defaultIndex: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectIndex: string) => void;
  defaultOpenSubMenus?: string[]
}

export interface IMenuContext {
  index: string;
  onSelect?: (selectIndex: string) => void;
  mode?: MenuMode,
  defaultOpenSubMenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({index: '0'})

const Menu: React.FC<MenuProps> = ({
  className,
  mode,
  style,
  children,
  defaultIndex,
  onSelect,
  defaultOpenSubMenus
}) => {
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })

  const handleClick = (index: string) => {
    // console.log(index, "index")
    setActive(index);
    onSelect && onSelect(index);
  }
  
  const passedContext: IMenuContext = {
    index: currentActive,
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus
  }

  const renderChildren = () => {
    // 判断子节点必须为MenuItem，否则不渲染子节点
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type;
      if( displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {index: index.toString()})
      } else {
        console.error("Warning: Menu has a child which is not a MenuItem");
      }
    })
  }

  return (
    <ul className={classes} style={style} data-testid='test-menu'>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  mode: 'horizontal',
  defaultIndex: '0',
  defaultOpenSubMenus: []
}

export default Menu;
