"use client";

import { signIn, useSession } from "next-auth/react";
import { MarkGithubIcon, PeopleIcon } from "@primer/octicons-react";

export default function SignInCSR() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <div className="p-2">
          <button
            className="btn btn-primary"
            type="button"
            style={{ width: "200px" }}
            onClick={() => signIn("github", { callbackUrl: "/hub" })}
          >
            <MarkGithubIcon></MarkGithubIcon> Sign in with GitHub
          </button>
        </div>
        <div className="p-2">
          <button
            className="btn btn-primary"
            type="button"
            style={{ width: "200px" }}
            onClick={() => signIn("okta", { callbackUrl: "/hub" })}
          >
            <PeopleIcon></PeopleIcon> Sign in with Okta
          </button>
        </div>
      </>
    );
  }
  return null;
}
