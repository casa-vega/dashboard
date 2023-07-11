import { gh } from "@/lib/octokit";
import OrgRepos from "@/app/repos";

export const dynamic = 'force-dynamic';

export default async function Repo() {
  const repos = await gh.listRepos("sfdc-demo");
  return (<OrgRepos repos={ repos }/>);
}
