import { Octokit } from "octokit";
import { createAppAuth } from "@octokit/auth-app";
import {
  GetResponseTypeFromEndpointMethod,
  GetResponseDataTypeFromEndpointMethod,
} from "@octokit/types";


export type listForOrgType = GetResponseTypeFromEndpointMethod<
  typeof Octokit.prototype.repos.listForOrg
>;

const octokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: process.env.GITHUB_APP_ID as any,
    privateKey: process.env.GITHUB_PRIVATE_KEY as string,
    installationId: process.env.GITHUB_INSTALLATION_ID as any,
  },
});
 

export const gh = {
  // Get an authenticated user by their GitHub username
  async getUser(github_handle: string) {
    if (!github_handle) {
      return null;
    }

    const { data, status } = await octokit.rest.users.getByUsername({
      username: github_handle,
    });

    return data;
  },

  // List all repositories in the specified organization
  async listRepos(organization: string) : Promise<listForOrgType> {
    return await octokit.rest.repos.listForOrg({
      org: organization,
      per_page: 100,
    });
  },
};


