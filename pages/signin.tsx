
import { NextPage } from "next";
import { RedirectableProviderType } from "next-auth/providers";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEvent } from "react";


const SignInPage: NextPage = () => {

    const router = useRouter()

    
      return (
        <form>
          <label data-for="username">username:</label>
          <input type="text" id="username" name="username" />
          <label data-for="password">password:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Sign in</button>
        </form>
      )
}

export default SignInPage