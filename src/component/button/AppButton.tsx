import { MouseEventHandler } from "react";

export const AppButton = ({
  title,
  onClick,
  onDoubleClick,
  className,
  id,
}: IButton) => {
  return (
    <button
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={`app-button ${className}`}
      data-testid={id}
      id={id}
      type="button"
    >
      {title}
    </button>
  );
};

interface IButton {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  onDoubleClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  id?: string;
}
