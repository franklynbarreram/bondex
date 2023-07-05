import * as React from "react";
import clsx from "clsx";

export interface TypographyProps {
  type?:
    | "title"
    | "smallTitle"
    | "mediumTitle"
    | "subTitle"
    | "label"
    | "caption"
    | "span"
    | "paragraph"
    | "smallSpan"
    | "mediumParagraph"
    | "bigParagraph"
    | "custom";
  tag?: string;
  text?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  type,
  tag,
  children,
  text = "",
  className = "",
  onClick,
}) => {
  const TagComponent: any = tag;

  if (type === "smallTitle")
    return (
      <h2
        className={clsx("text-base", className)}
        onClick={() => onClick && onClick()}
      >
        {children || text}
      </h2>
    );
  if (type === "mediumTitle")
    return (
      <h2
        className={clsx("text-6xl", className)}
        onClick={() => onClick && onClick()}
      >
        {children || text}
      </h2>
    );
  if (type === "title")
    return (
      <h1
        className={clsx("text-[78px]", className)}
        onClick={() => onClick && onClick()}
      >
        {children || text}
      </h1>
    );

  if (type === "subTitle")
    return (
      <h2
        className={clsx("text-[38px]", className)}
        onClick={() => onClick && onClick()}
      >
        {children || text}
      </h2>
    );

  if (type === "label")
    return (
      <label
        className={clsx("text-sm", className)}
        onClick={() => onClick && onClick()}
      >
        {children || text}
      </label>
    );
  if (type === "smallSpan")
    return (
      <span
        className={clsx("text-xs", className)}
        onClick={() => onClick && onClick()}
      >
        {children || text}
      </span>
    );
  if (type === "span")
    return (
      <span
        className={clsx("text-base", className)}
        onClick={() => onClick && onClick()}
      >
        {children || text}
      </span>
    );
  if (type === "caption")
    return (
      <p
        className={clsx("text-caption", className)}
        onClick={() => onClick && onClick()}
      >
        {children || text}
      </p>
    );
  if (type === "bigParagraph")
    return (
      <p
        className={clsx("text-xl", className)}
        onClick={() => onClick && onClick()}
      >
        {children || text}
      </p>
    );
  if (type === "mediumParagraph")
    return (
      <p
        className={clsx("text-lg", className)}
        onClick={() => onClick && onClick()}
      >
        {children || text}
      </p>
    );
  if (type === "paragraph")
    return (
      <p
        className={clsx("text-base", className)}
        onClick={() => onClick && onClick()}
      >
        {children || text}
      </p>
    );

  return (
    <TagComponent
      className={clsx(className)}
      onClick={() => onClick && onClick()}
    >
      {children || text}
    </TagComponent>
  );
};
