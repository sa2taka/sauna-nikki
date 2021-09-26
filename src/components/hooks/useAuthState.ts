import { Auth, User } from 'firebase/auth';
import { useEffect, useState } from 'react';

export function useAuthState(auth: Auth) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [isCompleted, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(false);
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        setCompleted(true);
        setUser(user ?? undefined);
        setError(undefined);
      },
      (error) => {
        setCompleted(true);
        setUser(undefined);
        setError(error);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return {
    user,
    isCompleted,
    error,
  };
}
