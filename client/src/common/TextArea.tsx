import React from 'react';
import styles from './TextArea.module.css';

export interface Props extends React.HTMLProps<HTMLTextAreaElement> {
  error?: boolean;
}

export default function TextArea({
  children,
  error,
  className,
  ...rest
}: Props) {
  const classNames = [styles.textarea];

  // If error is true, it pushes styles.danger into classNames.
  // If error is false, it evaluates the second part (className && classNames.push(className)).
  // If className is truthy, it pushes className into classNames

  error
    ? classNames.push(styles.danger)
    : className && classNames.push(className);

  return (
    <textarea className={classNames.join(' ')} {...rest}>
      {children}
    </textarea>
  );
}
