import { PropsWithChildren, FC, ComponentProps } from "react";

// Determino il tipo delle varianti di stile del bottone
type ButtonVariant = "primary" | "secondary" | "disabled";

// Seleziono uno stile in base alla variante, selezionando
// la proprietà di styles attraverso bracket notation (styles[variant])
const styles: Record<ButtonVariant, string> = {
  primary: "bg-primary border-primary hover:bg-dark",
  secondary: "bg-secondary border-secondary",
  disabled: "opacity-50 cursor-not-allowed",
};

// Tipo delle props del bottone: variant, children e permetto di utilizzare
// tutte le proprietà di "button" quando creo una nuova istanza di questo componente
type ButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
}> &
  ComponentProps<"button">;

const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...attributes // tutte le proprietà di "button"
}: ButtonProps) => {
  // estraggo disabled e className per poterli utilizzare come condizioni
  // di stile
  const { disabled, className: customClassName } = attributes;

  const classNames = `btn ${styles[variant]} ${
    disabled ? styles.disabled : ""
  } ${customClassName ? customClassName : ""}`;

  return (
    <button {...attributes} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
