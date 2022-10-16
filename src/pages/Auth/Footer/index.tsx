import { Text } from "../../../components";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 mt-8">
      <Text size="sm" asChild>
        <a
          href="#"
          className="text-gray-400 underline hover:text-gray-200 hover:transition-colors"
          data-testid="anchor-forgot-your-password"
        >
          Esqueceu sua senha?
        </a>
      </Text>

      <Text size="sm" asChild>
        <a
          href="#"
          className="text-gray-400 underline hover:text-gray-200 hover:transition-colors"
          data-testid="anchor-create-account"
        >
          Não possui conta? Crie uma agora!
        </a>
      </Text>
    </footer>
  );
}
