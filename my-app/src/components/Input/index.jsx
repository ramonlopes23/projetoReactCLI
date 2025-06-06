import React from "react";
import { IconContainer, ErrorText, InputContainer, InputText } from './styles';
import { Controller } from "react-hook-form";

const Input = ({ lefticon, name, control, errorMessage, ...rest }) => {
  return (
    <>
      <InputContainer>
        {lefticon && <IconContainer>{lefticon}</IconContainer>}

        {control ? (
          <Controller
            name={name}
            control={control}
            render={({ field }) => <InputText {...field} {...rest} />}
          />
        ) : (
          <InputText name={name} {...rest} />
        )}
      </InputContainer>

      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </>
  );
};

export { Input };
