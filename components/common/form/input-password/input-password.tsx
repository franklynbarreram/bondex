import * as React from "react";
import { Input } from "@/components/common/form/input";

import { Icons } from "@/consts/icons";
import { InputProps } from "@/interfaces/common";
// import { Icon } from 'components/icon';

export const InputPassword: React.FC<
  InputProps &
    React.InputHTMLAttributes<HTMLInputElement> & {
      validate?: boolean;
    }
> = ({ rules, validate = true, ...props }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  // const img = isVisible ? (
  // 	<Icon src={Icons.eye} fillPath className="text-gray-900 cursor-pointer" />
  // ) : (
  // 	<Icon src={Icons.eye} fillPath className="text-gray-800 cursor-pointer" />
  // );

  const finalRules = React.useMemo(() => {
    if (validate) {
      return {
        ...rules,
        validate: (value: string) =>
          !value.match(
            new RegExp("querty|password|admin|test|administrator|123456", "i")
          ) ||
          `querty | password | admin | test | administrator | 123456 is not valid`,
        pattern: {
          value:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.	]{8,}$/,
          message: "Password not valid.",
        },
      };
    }
    return {
      ...rules,
    };
  }, [rules, validate]);

  return (
    <>
      <Input
        type={isVisible ? "text" : "password"}
        rules={finalRules}
        rightImg={isVisible ? Icons.showPassword : Icons.hidePassword}
        rightClick={() => handleClick()}
        {...props}
      ></Input>
    </>
  );
};
