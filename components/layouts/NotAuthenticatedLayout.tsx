import { FC, ReactNode, useEffect } from "react";
import { useCookie } from "next-cookie";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
}

const NotAuthenticatedLayout: FC<Props> = ({ children }) => {
  // ***********************
  // import hooks
  // ***********************
  const cookie = useCookie();
  const router = useRouter();
  // ***********************
  // define useEffect
  // ***********************
  useEffect(() => {
    if (router && cookie) {
      if (cookie.get("user")) {
        router.replace("/");
      } else {
      }
    }
  }, []);
  return children;
};

export default NotAuthenticatedLayout;
