import { Menu, MenuButton, MenuList } from '@reach/menu-button';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import React, { ReactNode } from 'react';
import styles from './Button.module.css';

const ICON_SIZE = 18;

type Variant = 'primary' | 'danger' | 'ghost' | 'primary-ghost' | undefined;

let variant: Variant = 'primary';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: any;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  menuItems?: ReactNode[];
  variant?: any;
}

export type Ref = HTMLButtonElement;

const Button = React.forwardRef<Ref, Props>(
  (
    {
      children,
      icon,
      variant,
      htmlType,
      disabled,
      className,
      menuItems,
      ...rest
    },
    ref
  ) => {
    const classNames = [styles.btn];

    const variantStyles: Record<typeof variant, string> = {
      primary: styles.primary,
      danger: styles.danger,
      ghost: styles.ghost,
      'primary-ghost': styles.primaryGhost,
    };

    if (variant in variantStyles) {
      classNames.push(variantStyles[variant]);
    }

    if (className) {
      classNames.push(className);
    }

    const leftClassNames = [...classNames];
    const rightClassNames = [...classNames, styles.menuButton];

    if (menuItems) {
      leftClassNames.push(styles.leftWithMenu);
    }

    return (
      <>
        <button
          ref={ref}
          className={leftClassNames.join(' ')}
          type={htmlType || 'button'}
          disabled={disabled}
          {...rest}
        >
          {icon && React.cloneElement(icon, { size: ICON_SIZE }, null)}
          {children && icon && <span style={{ width: 4 }} />}
          {children}
        </button>
        {menuItems && menuItems.length > 0 && (
          <Menu>
            <MenuButton
              disabled={disabled}
              className={rightClassNames.join(' ')}
            >
              <ChevronDownIcon size={14} style={{ marginTop: 2 }} />
            </MenuButton>
            <MenuList>{menuItems}</MenuList>
          </Menu>
        )}
      </>
    );
  }
);

export default Button;
