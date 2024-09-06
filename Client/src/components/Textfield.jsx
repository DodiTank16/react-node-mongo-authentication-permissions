import React from "react";
import { useFormContext } from "react-hook-form";

const Textfield = ({ name, className, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <input className={className} {...register(name)} {...props} />
      {errors && (
        <div>
          <label class="error" for="curentAdd">
            {errors[name]?.message}
          </label>
        </div>
      )}
    </>
  );
};

export default Textfield;
