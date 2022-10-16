import { Heading, Logo, Text } from "../../../components";

export function Header() {
  return (
    <header className="flex flex-col items-center gap-2">
      <Logo />

      <Heading size="lg">Application Name</Heading>

      <Text size="lg" className="text-gray-400">
        Faça login e comece a usar!
      </Text>
    </header>
  );
}
