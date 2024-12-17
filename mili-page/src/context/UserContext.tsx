import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Definir la estructura del estado del usuario
interface User {
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  carrera: string;
  numeroCuenta: string;
  fechaNacimiento: string;
  topicosEnfermeria: Record<string, number>;  // Tópicos de enfermería con una calificación de 5 a 10
}

// Estado inicial
interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

// Acciones
type Action =
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean };

// Estado inicial del contexto
const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

// Reducer para manejar las acciones
const userReducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload, loading: false, error: null };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'LOGIN_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

// Crear el contexto
const UserContext = createContext<{ state: UserState; dispatch: React.Dispatch<Action> } | undefined>(undefined);

// Proveedor del contexto
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
