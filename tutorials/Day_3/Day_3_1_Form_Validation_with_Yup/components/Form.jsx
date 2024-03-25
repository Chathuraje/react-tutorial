import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
  const registerSchema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is required"),
    age: yup
      .number()
      .typeError("Age must be a number")
      .positive("Age must be a positive number")
      .integer("Age must be an integer")
      .min(18, "Age must be at least 18 years")
      .required("Age is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: yup
      .string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords do not match")
      .required("Please confirm your password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name" {...register("fullName")} />
      <p>{errors.fullName?.message}</p>

      <input type="number" placeholder="Age" {...register("age")} />
      <p>{errors.age?.message}</p>

      <input type="text" placeholder="Email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <input type="text" placeholder="Phone" {...register("phone")} />
      <p>{errors.phone?.message}</p>

      <input type="password" placeholder="Password" {...register("password")} />
      <p>{errors.password?.message}</p>

      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
      <p>{errors.fullName?.confirmPassword}</p>

      <input type="submit" />
    </form>
  );
};
