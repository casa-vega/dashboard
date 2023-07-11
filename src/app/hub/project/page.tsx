"use client";

import { useSession } from "next-auth/react";
import { KeyIcon } from "@primer/octicons-react";

export default function Project() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="d-inline-flex flex-shrink-0">
        <div className="p-6 d-flex flex-justify-between flex-column">
          <div className="Box">
            <div className="Box-header">
              <h3 className="Box-title">
                <KeyIcon className="mr-1" size={16} /> Projects{" "}
              </h3>
            </div>
            <div className="Box-body">
              <h1>This is a placeholder</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
