
import { NextPage } from "next";
import { RedirectableProviderType } from "next-auth/providers";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEvent } from "react";

type LoginFormElements = {
    username: HTMLInputElement,
    password: HTMLInputElement
} & HTMLCollection

type AuthResponse = {
  error: string | undefined,
  status: number,
  ok: boolean,
  url: string | null
} & RedirectableProviderType

const SignInPage: NextPage = () => {

    const router = useRouter()

    const goSignIn = async (event:FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const loginForm =  (event.currentTarget as HTMLFormElement).elements as LoginFormElements

        const res = await signIn<AuthResponse>('credentials', {
          username: loginForm.username.value,
          password: loginForm.password.value,
          redirect: false
        })

        if (res?.error) {
          return <div><p>Error: ${res?.error}</p></div>
        }
        if (res?.url) {
          router.push(`/protected`)
        }

      }
      return (
        <form onSubmit={goSignIn}>
          <label data-for="username">username:</label>
          <input type="text" id="username" name="username" />
          <label data-for="password">password:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Sign in</button>
        </form>
      )
}

export default SignInPage