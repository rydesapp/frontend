import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { login } from "../../api/authentincation-api";

const useLoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.prefetch("/admin/dashboard");
  }, []);

  const handleLogin = () => {
    setLoading(true);
    login({ email, password })
      .then(() => {
        router.push("/admin/dashboard");
      })
      .catch((err) => {
        setError(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return {
    actions: {
      handleLogin,
      onEmailChange,
      onPasswordChange,
    },
    state: {
      email,
      password,
      error,
      loading,
    },
  };
};

export default useLoginForm;
