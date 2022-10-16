import { Formik } from "formik";
import { Envelope as EnvelopeIcon, Lock as LockIcon } from "phosphor-react";
import { useState } from "react";
import { Alert, Button, Checkbox, InputText, Text } from "../../../components";
import { signIn } from "./service";
import { validationSchema } from "./validation-schema";

export function Form() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <Formik
      initialValues={{ email: "", password: "", remember: false }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setIsLoading(true);

        try {
          await signIn(values);

          setIsUserSignedIn(true);
        } catch {
          setIsLoading(false);

          setIsInvalid(true);
        }

        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        setFieldValue,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form
          className="flex flex-col w-full gap-4 mt-10"
          autoComplete="off"
          onSubmit={handleSubmit}
          data-testid="sign-in-form"
        >
          <div className="flex flex-col gap-3">
            <Text asChild>
              <label htmlFor="email" data-testid="label-email">
                Seu endereço de e-mail
              </label>
            </Text>

            <InputText.Root error={touched.email && Boolean(errors.email)}>
              <InputText.Icon>
                <EnvelopeIcon />
              </InputText.Icon>

              <InputText.Input
                id="email"
                name="email"
                type="email"
                data-testid="input-email"
                placeholder="Seu endereço de e-mail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                required
              />
            </InputText.Root>

            {errors.email && (
              <InputText.Helper data-testid="input-email-helper" error>
                {errors.email!}
              </InputText.Helper>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Text asChild>
              <label htmlFor="password" data-testid="label-password">
                Sua senha
              </label>
            </Text>

            <InputText.Root
              error={touched.password && Boolean(errors.password)}
            >
              <InputText.Icon>
                <LockIcon />
              </InputText.Icon>

              <InputText.Input
                id="password"
                name="password"
                type="password"
                data-testid="input-password"
                placeholder="Sua senha"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                required
              />
            </InputText.Root>

            {errors.password && (
              <InputText.Helper data-testid="input-password-helper" error>
                {errors.password!}
              </InputText.Helper>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Text asChild>
              <label htmlFor="remember" className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  name="remember"
                  onCheckedChange={(checked) => {
                    setFieldValue("remember", checked);
                  }}
                  onBlur={handleBlur}
                  value="remember"
                  defaultChecked={values.remember}
                  checked={values.remember}
                  required={false}
                />

                <Text size="sm" className="text-gray-200">
                  Lembrar de mim por 30 dias
                </Text>
              </label>
            </Text>
          </div>

          <Button
            type="submit"
            className="mt-4"
            disabled={isSubmitting || isLoading}
            data-testid="button-submit"
          >
            Entrar na plataforma
          </Button>

          {isUserSignedIn && (
            <Alert variation="success">Login realizado!</Alert>
          )}

          {isInvalid && <Alert variation="error">Credenciais inválidas.</Alert>}
        </form>
      )}
    </Formik>
  );
}
