import { Footer } from "./Footer";
import { Form } from "./Form";
import { Header } from "./Header";

export function AuthPage() {
  return (
    <div className="flex flex-col w-[25rem] h-max items-center gap-4">
      <Header />

      <Form />

      <Footer />
    </div>
  );
}
