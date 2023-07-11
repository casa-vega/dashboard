"use client";

import { useState, useRef, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react";
import { RepoIcon } from "@primer/octicons-react";
import { listForOrgType } from "@/lib/octokit";

export default function OrgRepos({ repos }: { repos: listForOrgType }) {
  const [sortedRepos, setSortedRepos] = useState(repos.data);
  const query = useRef<HTMLInputElement>(null);

  return (
    <div className="p-6 flex-justify-between flex-column">
      <div className="Box">
        <div className="Box-header">
          <h3 className="Box-title">
            <RepoIcon className="mr-1" size={16} />
            Repositories{" "}
          </h3>
        </div>
        <div className="Box-body">
          <form>
            <input
              className="form-control input-block"
              type="text"
              placeholder="Full-width input"
              aria-label="Full-width input"
              ref={query}
              onChange={() => {
                setSortedRepos(
                  repos.data.filter((r: { name: string | string[]; }) =>
                    r.name.includes(query.current?.value as string)
                  )
                );
              }}
            />
          </form>
          <h1>Repositories List:</h1>
          <div>
            {sortedRepos
              .sort((a: { name: number; }, b: { name: number; }) => {
                if (a.name < b.name) {
                  return -1;
                }
                if (a.name > b.name) {
                  return 1;
                }
                return 0;
              })
              .map((repo: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
                <a key={index} className="dropdown-item" href="#url">
                  {repo.name}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
