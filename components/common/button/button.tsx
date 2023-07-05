import clsx from "clsx";
import { Icon } from "@/components/icon";
import Link from "next/link";
import * as React from "react";
import { Typography } from "@/components/common/typography";
import { Spinner } from "@/components/common/spinner/spinner";

export interface ButtonProps {
  size?: "extra-small" | "small" | "medium" | "large" | "full";
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  fill?: boolean;
  loading?: boolean;
  secondary?: boolean;
  danger?: boolean;
  social?: "facebook" | "google";
  icon?: any;
  className?: string;
  boderRadius?: string;
  withBorder?: boolean;
  labelProps?: string;
  sizesButton?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  size,
  label,
  disabled,
  loading,
  onClick,
  secondary,
  danger,
  fill,
  social,
  icon,
  withBorder = true,
  className,
  boderRadius,
  labelProps,
  children,
  sizesButton = false,
  href = null,
  ...props
}) => {
  const refButtom = React.useRef(null);
  return (
    <>
      {href ? (
        <Link href={href}>
          <button
            ref={refButtom}
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={clsx(
              className,
              //border radius
              boderRadius,
              // with border
              { "border-none ": !withBorder },
              //size
              { "w-full": size === "full" },
              { "w-75": size === "large" },
              { "w-61": size === "medium" },
              { "w-48": size === "small" },
              { "w-37": size === "extra-small" },
              //fill
              {
                "text-gray-0 bg-primary-500 border-primary-500":
                  fill && !social && !secondary && !danger,
              },
              {
                "hover:text-primary-500 hover:border-primary-500 hover:bg-transparent":
                  fill && !social && !disabled && !danger,
              },
              {
                "text-white bg-gray-500 border-gray-500":
                  fill && !social && secondary,
              },
              /*Danger styles fill*/
              {
                "text-white bg-alert-error border-alert-error":
                  fill && !social && !secondary && danger,
              },
              /*Danger styles fill*/
              {
                "hover:bg-transparent hover:text-alert-error hover:border-alert-error ":
                  fill && !social && !disabled && !secondary && danger,
              },
              /*Danger styles no fill*/
              {
                "text-alert-error bg-transparent border-alert-error":
                  !fill && !social && !secondary && danger,
              },
              /*Danger styles no fill*/
              {
                "hover:bg-alert-error hover:text-white ":
                  !fill && !social && !disabled && !secondary && danger,
              },
              {
                "hover:text-gray-500 hover:border-gray-500 hover:bg-transparent":
                  fill && !social && !disabled && secondary,
              },
              //not fill
              {
                "text-primary-500 border-primary-500":
                  !fill && !social && !secondary,
              },
              {
                "text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white":
                  !fill && !social && secondary && !danger,
              },
              {
                "hover:bg-primary-500 hover:text-gray-0 ":
                  !fill && !social && !disabled && !secondary && !danger,
              },
              //disabled
              {
                "disabled:bg-primary-500 disabled:text-gray-0 disabled:opacity-50":
                  !social,
              },
              //facebook
              { "text-facebook border-facebook": social === "facebook" },
              {
                "hover:text-gray-0 hover:bg-facebook":
                  social === "facebook" && !disabled,
              },
              //google
              { "text-gray-500 border-gray-500": social === "google" },
              {
                "hover:text-gray-0 hover:bg-gray-500":
                  social === "google" && !disabled,
              },
              //disable social
              {
                "disabled:bg-gray-200 disabled:border-gray-200 disabled:text-gray-900 disabled:opacity-50":
                  social,
              },
              //global
              "group flex items-center justify-center border outline-none transition-colors duration-300",
              {
                "group flex items-center justify-center px-2 py-5 border outline-none transition-colors duration-300":
                  !sizesButton,
              },
              sizesButton,
              "focus:outline-none",

              "disabled:cursor-not-allowed"
            )}
            {...props}
          >
            {label ? (
              <div className="flex items-center">
                {icon && (
                  <div className="mr-4 w-4 h-4">
                    <Icon
                      src={icon}
                      fillPath={social === "facebook"}
                      className={clsx(
                        {
                          "text-facebook ": social === "facebook",
                        },
                        {
                          "group-hover:text-gray-0":
                            social === "facebook" && !disabled,
                        }
                      )}
                    />
                  </div>
                )}{" "}
                {loading && <Spinner type="loadingButton" />}
                <Typography type="smallTitle" className={labelProps}>
                  {label}
                </Typography>
              </div>
            ) : (
              children
            )}
          </button>
        </Link>
      ) : (
        <button
          ref={refButtom}
          type="button"
          disabled={disabled}
          onClick={onClick}
          className={clsx(
            className,
            //border radius
            boderRadius,
            // with border
            { "border-none ": !withBorder },
            //size
            { "w-full": size === "full" },
            { "w-75": size === "large" },
            { "w-61": size === "medium" },
            { "w-48": size === "small" },
            { "w-37": size === "extra-small" },
            //fill
            {
              "text-gray-0 bg-primary-500 border-primary-500":
                fill && !social && !secondary && !danger,
            },
            {
              "hover:text-primary-500 hover:border-primary-500 hover:bg-transparent":
                fill && !social && !disabled && !danger,
            },
            {
              "text-white bg-gray-500 border-gray-500":
                fill && !social && secondary,
            },
            /*Danger styles fill*/
            {
              "text-white bg-alert-error border-alert-error":
                fill && !social && !secondary && danger,
            },
            /*Danger styles fill*/
            {
              "hover:bg-transparent hover:text-alert-error hover:border-alert-error ":
                fill && !social && !disabled && !secondary && danger,
            },
            /*Danger styles no fill*/
            {
              "text-alert-error bg-transparent border-alert-error":
                !fill && !social && !secondary && danger,
            },
            /*Danger styles no fill*/
            {
              "hover:bg-alert-error hover:text-white ":
                !fill && !social && !disabled && !secondary && danger,
            },
            {
              "hover:text-gray-500 hover:border-gray-500 hover:bg-transparent":
                fill && !social && !disabled && secondary,
            },
            //not fill
            {
              "text-primary-500 border-primary-500":
                !fill && !social && !secondary,
            },
            {
              "text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white":
                !fill && !social && secondary && !danger,
            },
            {
              "hover:bg-primary-500 hover:text-gray-0 ":
                !fill && !social && !disabled && !secondary && !danger,
            },
            //disabled
            {
              "disabled:bg-primary-500 disabled:text-gray-0 disabled:opacity-50":
                !social,
            },
            //facebook
            { "text-facebook border-facebook": social === "facebook" },
            {
              "hover:text-gray-0 hover:bg-facebook":
                social === "facebook" && !disabled,
            },
            //google
            { "text-gray-500 border-gray-500": social === "google" },
            {
              "hover:text-gray-0 hover:bg-gray-500":
                social === "google" && !disabled,
            },
            //disable social
            {
              "disabled:bg-gray-200 disabled:border-gray-200 disabled:text-gray-900 disabled:opacity-50":
                social,
            },
            //global
            "group flex items-center justify-center border outline-none transition-colors duration-300",
            {
              "group flex items-center justify-center px-8 py-[10px] rounded-full border outline-none transition-colors duration-300":
                !sizesButton,
            },
            sizesButton,
            "focus:outline-none",

            "disabled:cursor-not-allowed"
          )}
          {...props}
        >
          {label ? (
            <div className="flex items-center">
              {icon && (
                <div className="mr-4 w-4 h-4">
                  <Icon
                    src={icon}
                    fillPath={social === "facebook"}
                    className={clsx(
                      {
                        "text-facebook ": social === "facebook",
                      },
                      {
                        "group-hover:text-gray-0":
                          social === "facebook" && !disabled,
                      }
                    )}
                  />
                </div>
              )}{" "}
              {loading && <Spinner type="loadingButton" />}
              <Typography type="smallTitle" className={labelProps}>
                {label}
              </Typography>
            </div>
          ) : (
            children
          )}
        </button>
      )}
    </>
  );
};

export const ButtonContent: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  size = "large",
  label,
  disabled,
  onClick,
  href,
  fill = false,
  social,
  icon,
  children,
  ...props
}) => {
  return (
    <>
      {href ? (
        <Button
          size={size}
          label={label}
          disabled={disabled}
          href={href}
          fill={fill}
          social={social}
          icon={icon}
          {...props}
        />
      ) : (
        <Button
          size={size}
          label={label}
          disabled={disabled}
          onClick={onClick}
          href={href}
          fill={fill}
          social={social}
          icon={icon}
          {...props}
        >
          {children}
        </Button>
      )}
    </>
  );
};
