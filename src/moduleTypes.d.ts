declare module "moduleTypes" {
  interface Order {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  interface Form {
    toDate: string;
    fromDate: string;
    destination: string;
    place: string;
  }
  interface MyComponentPropsInput {
    label: string;
  }
  interface FormAuth {
    handleLogged?: SetStateAction<boolean | undefined>;
    isLoggetIn?: boolean | undefined;
    element?: IntrinsicAttributes & FormAuth;
  }
  interface InputsLineAuth {
    nameUser?: {};
    surnameUser?: {};
    email?: {};
    avatar?: {};
    password: sstring | undefined;
  }

  interface ValidationProps {
    isNameUser?: boolean;
    isSurnameUser?: boolean;
    isEmpty: boolean;
    minLength: number;
    isEmail?: boolean;
    avatar?: boolean;
    isPassword?: boolean;
  }
  interface ReturnValidation {
    value: any;
    onChange: (data: string) => void;
    onBlur: (data: string) => void;
    formValue?: {};
    isEmpty?: boolean;
    minLengthError?: boolean;
    isEmailError: boolean;
    isInputValid?: boolean;
    isNameError?: boolean;
    isDirty?: boolean;
    isSurnameError?: boolean;
    isAvatarError?: boolean;
    isPasswordError?: boolean;
  }
}
