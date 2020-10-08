import { createContext } from "react";
import AuthBloc from "../bloc/AuthBloc";

// BlocContextValue is an interface that represents our global Bloc's
export interface BlocContextValue {
  authBloc: AuthBloc;
}

// A Partial type is used here so we don't have to initialize any default
// values. It will later be cast back to `BlocContextValue`.
export const BlocContext = createContext<Partial<BlocContextValue>>({
  authBloc: undefined,
});
