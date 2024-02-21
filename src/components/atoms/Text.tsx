import { ComponentProps, FC, PropsWithChildren } from "react";

// Tipi di tag ammessi: potranno essere espansi se serve (servono anche nel componente TextBlock)
export type TextTags = "h1" | "h2" | "h4" | "h5" | "h6" | "p";

type TextColor = "light" | "dark" | "danger";

// Stile in base alla variante e al tag
const styles: Record<TextTags, string> = {
  h1: "text-h1r md-text-h1 leading-[1.2]",
  h2: "text-h2r md-text-h2 leading-[1.1]",
  h4: "text-h4r md-text-h4 leading-[1.1]",
  h5: "text-h5r text-h5 leading-[1.1]",
  h6: "text-h6",
  p: "text-md",
};

// Stile in base al colore
const textColor: Record<TextColor, string> = {
  light: "text-light",
  dark: "text-dark",
  danger: "text-danger",
};

// As indica il tag, styledAs indica come vogliamo stilizzare il componente:
// es: possiamo creare un tag "p" (as === "p") stilizzato come "h1" (styledAs === "h1")
type TextProps = PropsWithChildren<{
  as?: TextTags;
  styledAs?: TextTags;
  isBold?: boolean;
  color?: TextColor;
}> &
  ComponentProps<TextTags>;

const Text: FC<TextProps> = ({
  as = "p",
  styledAs = as,
  color = "light",
  isBold,
  children,
  ...attributes
}: TextProps) => {
  // Creo un componente che ritornerà il tag as così da creare un tag
  // dinamico (as === "p" => <p></p>)
  const El = as;

  const { className: customClassName } = attributes;

  const classNames = `${styles[styledAs]} ${textColor[color]} ${
    isBold ? "font-bold" : ""
  } ${customClassName ? customClassName : ""}`;

  return (
    <El {...attributes} className={classNames}>
      {children}
    </El>
  );
};

export default Text;
