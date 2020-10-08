import { useBlocState } from "@bloc-js/react-bloc";
import { NextComponentType } from "next";
import { useContext } from "react";
import { BlocContext, BlocContextValue } from "../../src/context/BlocContext";

const dashboard: NextComponentType = () => {
  const { authBloc } = useContext(BlocContext) as BlocContextValue;
  const { user, loading = true } = useBlocState(authBloc);

  return loading ? <span>Loading...</span> : <div>Welcome {user.fullName}</div>;
};

export default dashboard;
