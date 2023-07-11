"use client";

import { useSession } from "next-auth/react";
import { KeyIcon } from "@primer/octicons-react";

export default function Admin() {
  const { data: session } = useSession();
  if (session?.user.role === "admin") {
    return (
      <div className="d-inline-flex flex-shrink-0">
        <div className="p-6 d-flex flex-justify-between flex-column">
          <div className="Box">
            <div className="Box-header">
              <h3 className="Box-title">
                <KeyIcon className="mr-1" size={16} /> Admin{" "}
              </h3>
            </div>
            <div className="Box-body">
              <h1>This is a placeholder</h1>
              If you&apos;re seeing this message, congratulations, you have the admin
              role. While there isn&apos;t much to do on this page, these details are
              being provided by the session handler which simplifies the ability
              to hide and show pages to users with various levels of access.
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
