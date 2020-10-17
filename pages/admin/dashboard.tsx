import { useQuery } from "@apollo/client";
import { NextComponentType } from "next";
import { GET_ME_QUERY } from "../../src/api/authentincation-api";
import { MeResponse } from "../../src/models/User";

const dashboard: NextComponentType = () => {
  const { loading, error, data } = useQuery<MeResponse>(GET_ME_QUERY);

  if (loading) return <b>Loading</b>;
  if (error) return <b>error</b>;

  const user = data.me;

  return (
    <div>
      Welcome <b>{user.firstName}</b>
      <br />
      <br />
      <span>{JSON.stringify(error)}</span>
    </div>
  );
};

export default dashboard;
