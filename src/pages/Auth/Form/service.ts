import http from "../../../services/http";

type SignInPayload = {
  email: string;
  password: string;
  remember?: boolean;
};

export async function signIn(payload: SignInPayload) {
  return await http.post("/auth", payload);
}
