export async function login(email: string, password: string) {
  const formBody = new URLSearchParams();
  formBody.append("username", email);
  formBody.append("password", password);

  const response = await fetch("http://localhost:8000/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody.toString(),
  });

  const data = await response.json();

  if (!response.ok) {
    throw data; // 👈 Throw server error response
  }

  return data; // 👈 Success response
}
