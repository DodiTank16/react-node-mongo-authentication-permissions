import { FormProvider as Form } from "react-hook-form";

export default function FormProvider({
  children,
  onSubmit,
  methods,
  ...props
}) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} {...props}>
        {children}
      </form>
    </Form>
  );
}
