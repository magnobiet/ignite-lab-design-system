import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Endereço de e-mail inválido")
    .required("Endereço de e-mail obrigatório"),
  password: Yup.string()
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .required("Senha obrigatória"),
});

export { validationSchema };
