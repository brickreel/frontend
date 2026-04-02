/**
 * Authentication utilities for interacting with the backend auth API
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
const TOKEN_KEY = 'brickreel_token';
const REFRESH_TOKEN_KEY = 'brickreel_refresh_token';
const USER_KEY = 'brickreel_user';

export interface AuthUser {
  id: string;
  email: string;
  user_metadata?: Record<string, unknown>;
}

export interface LoginResponse {
  message: string;
  data: {
    token: string;
    refreshToken: string;
    user: AuthUser;
  };
}

export interface SignupResponse {
  message: string;
  data: AuthUser;
}

export interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
}

/**
 * Login with email and password
 */
export async function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Login failed');
  }

  const data: LoginResponse = await response.json();

  // Guardar token y refresh token
  saveToken(data.data.token);
  saveRefreshToken(data.data.refreshToken);
  saveUser(data.data.user);

  return data;
}

/**
 * Register a new user
 */
export async function signup(
  email: string,
  password: string,
  confirmPassword: string,
  fullName?: string
): Promise<SignupResponse> {
  const response = await fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, confirmPassword, fullName }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Signup failed');
  }

  const data: SignupResponse = await response.json();
  return data;
}

/**
 * Logout - llama al endpoint del backend y limpia tokens locales
 */
export async function logout(): Promise<void> {
  try {
    const token = getToken();
    if (token) {
      await fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
    }
  } catch {
    // Si falla la llamada al servidor, igual limpiamos localmente
  } finally {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }
}

/**
 * Obtener token del localStorage
 */
export function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(TOKEN_KEY);
}

/**
 * Obtener refresh token del localStorage
 */
export function getRefreshToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

/**
 * Obtener usuario del localStorage
 */
export function getUser(): AuthUser | null {
  if (typeof window === 'undefined') return null;
  const userStr = localStorage.getItem(USER_KEY);
  return userStr ? JSON.parse(userStr) : null;
}

/**
 * Guardar token en localStorage
 */
export function saveToken(token: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(TOKEN_KEY, token);
  }
}

/**
 * Guardar refresh token en localStorage
 */
export function saveRefreshToken(refreshToken: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }
}

/**
 * Guardar usuario en localStorage
 */
export function saveUser(user: AuthUser): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}

/**
 * Verificar si el usuario está autenticado
 */
export function isAuthenticated(): boolean {
  return !!getToken();
}

/**
 * Obtener estado actual de autenticación
 */
export function getAuthState(): AuthState {
  const token = getToken();
  const user = getUser();

  return {
    user,
    token,
    isAuthenticated: !!token,
  };
}

/**
 * Hacer una llamada autenticada al backend
 * Automáticamente agrega el Authorization header
 */
export async function authenticatedFetch(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  const token = getToken();

  if (!token) {
    throw new Error('Not authenticated');
  }

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    Authorization: `Bearer ${token}`,
  };

  return fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });
}

/**
 * Refrescar el token usando el refresh token
 */
export async function refreshAccessToken(): Promise<LoginResponse> {
  const refreshToken = getRefreshToken();

  if (!refreshToken) {
    throw new Error('No refresh token available');
  }

  const response = await fetch(`${API_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    logout();
    throw new Error('Token refresh failed');
  }

  const data: LoginResponse = await response.json();

  saveToken(data.data.token);
  saveRefreshToken(data.data.refreshToken);
  saveUser(data.data.user);

  return data;
}

/**
 * Hook para usar estado de autenticación (para usar en componentes)
 * Ejemplo: const { user, token, isAuthenticated } = useAuthState();
 */
export function useAuthState(): AuthState {
  return getAuthState();
}
