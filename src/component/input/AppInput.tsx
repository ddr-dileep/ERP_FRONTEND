import "./input.scss";

export const AppInput = ({
  type = "text",
  onChange = () => {},
  value,
  placeholder,
  className,
  required,
  id,
  ...rest
}: IAppInput) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`app-input ${className}`}
      required={required}
      autoComplete="off"
      spellCheck="false"
      autoCapitalize="off"
      autoCorrect="off"
      autoSave="off"
      data-testid={id}
      id={id}
      {...rest}
    />
  );
};

interface IAppInput {
  type: string;
  value: any;
  onChange: (e: React.FormEvent<HTMLInputElement>) => string | undefined | void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  id: string;
}
