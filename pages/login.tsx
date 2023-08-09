/** @jsxRuntime classic */
/** @jsx jsx */

import {
  TextField,
  Avatar,
  Button,
  CssBaseline,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { css, jsx } from "@emotion/react";
import { useLoginMutation } from "@/store/apiSlice";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import { useCookie } from "next-cookie";
import { useRouter } from "next/router";
import NotAuthenticatedLayout from "@/components/layouts/NotAuthenticatedLayout";

const styles = css({
  ".muirtl-binzgt": {
    marginTop: "50%",
    // transform:
  },
});

const Login = () => {
  // ***********************
  // Import Hooks
  // ***********************
  const cookie = useCookie();
  const router = useRouter();
  const [loginMutation, { data }] = useLoginMutation();
  // ***********************
  // Define Function
  // ***********************

  const [inputs, setInputs] = useState({ phone: "", password: "" });

  // ***********************
  // Define Function
  // ***********************

  const handleLogin = async () => {
    const result = await loginMutation(inputs).unwrap();
    cookie.set("user", result?.data?.token, { path: "/" });
    router.push("/");
  };

  return (
    <NotAuthenticatedLayout>
      <Container css={styles} component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="div" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="phone"
              label="phone"
              name="phone"
              onChange={(e) =>
                setInputs((prev) => {
                  return { ...prev, phone: e.target.value };
                })
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) =>
                setInputs((prev) => {
                  return { ...prev, password: e.target.value };
                })
              }
            />

            <Button
              onClick={() => handleLogin()}
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </NotAuthenticatedLayout>
  );
};

export default Login;
