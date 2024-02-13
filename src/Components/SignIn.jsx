import React from "react";
import { Button, VStack } from "@chakra-ui/react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.js";

const auth = getAuth(app);
const SignIn = () => {
  const loginHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <VStack bg="white" justifyContent={"center"} h="100vh">
      <Button onClick={loginHandler} colorScheme={"purple"}>
        Sign In With Google
      </Button>
    </VStack>
  );
};

export default SignIn;
