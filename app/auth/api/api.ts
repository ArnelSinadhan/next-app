export async function login(email: string, password: string) {
  const response = await fetch("http://localhost:8000/api/v1/auth/login");
  return response;
}
