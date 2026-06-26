const API_URL = "http://10.0.2.2:8000";

let token = "";

function jsonHeaders() {
  return {
    "Content-Type": "application/json",
    "Accept": "application/json"
  };
}

function authHeaders() {
  return {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${token}`
  };
}

export function logout() {
  token = "";
}

export async function register(name: string, email: string, password: string) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: jsonHeaders(),
    body: JSON.stringify({
      name,
      email,
      password,
      password_confirm: password
    })
  });

  const data = await response.json();

  if (!response.ok && response.status !== 409) {
    throw new Error("Impossible de créer le compte.");
  }

  return data;
}

export async function login(email: string, password: string) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: jsonHeaders(),
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Courriel ou mot de passe invalide.");
  }

  token = data.access_token;
  return data;
}

export async function registerThenLogin(name: string, email: string, password: string) {
  await register(name, email, password);
  return await login(email, password);
}

export async function getBooks() {
  const response = await fetch(`${API_URL}/books`, {
    method: "GET",
    headers: authHeaders()
  });

  if (!response.ok) {
    throw new Error("Impossible de charger les livres.");
  }

  return await response.json();
}

export async function getBook(id: number) {
  const response = await fetch(`${API_URL}/books/${id}`, {
    method: "GET",
    headers: authHeaders()
  });

  if (!response.ok) {
    throw new Error("Livre introuvable.");
  }

  return await response.json();
}

export async function addBook(book: any) {
  const response = await fetch(`${API_URL}/books`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(book)
  });

  if (!response.ok) {
    throw new Error("Impossible d'ajouter le livre.");
  }

  return await response.json();
}

export async function updateBook(id: number, book: any) {
  const response = await fetch(`${API_URL}/books/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(book)
  });

  if (!response.ok) {
    throw new Error("Impossible de modifier le livre.");
  }

  return await response.json();
}

export async function deleteBook(id: number) {
  const response = await fetch(`${API_URL}/books/${id}`, {
    method: "DELETE",
    headers: authHeaders()
  });

  if (!response.ok) {
    throw new Error("Impossible de supprimer le livre.");
  }

  return true;
}