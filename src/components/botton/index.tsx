import type { ReactNode } from 'react';
import { cn } from '../../utils';

function MyButton({
  isHovering,
  children,
}: {
  isHovering: boolean;
  children: ReactNode;
}) {
  const classes = cn('rounded bg-blue-500 px-4 py-2 text-base text-white', {
    'bg-blue-700 text-gray-100': isHovering,
  });

  const xx = 'xxx';

  return <div className={classes}>{children}</div>;
}

export default MyButton;
