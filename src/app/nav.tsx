"use client";

import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

import {
  HomeIcon,
  WebhookIcon,
  RepoIcon,
  PeopleIcon,
  ProjectIcon,
  GearIcon,
  ShieldCheckIcon,
} from "@primer/octicons-react";
import {
  Header,
  Avatar,
  UnderlineNav,
  ActionMenu,
  ActionList,
  Box,
} from "@primer/react";

import SubNavItem from "./subnav-item";

export default function Nav() {
  const { data: session } = useSession();
  const path = usePathname();
  const router = useRouter();
  const subnavitems = [
    {
      href: "",
      text: "Home",
      icon: <HomeIcon className="mr-1" size={16} />,
    },
    {
      href: "/repo",
      text: "Repositories",
      icon: <RepoIcon className="mr-1" size={16} />,
    },
    {
      href: "/project",
      text: "Projects",
      icon: <ProjectIcon className="mr-1" size={16} />,
    },
    {
      href: "/team",
      text: "Teams",
      icon: <PeopleIcon className="mr-1" size={16} />,
    },
    {
      href: "/webhook",
      text: "Webhooks",
      icon: <WebhookIcon className="mr-1" size={16} />,
    },
  ];

  if (session)
    return (
      <>
        <Header>
          <Header.Item>
            <Header.Link href="#">
              <div className="d-flex flex-justify-center">
                <div className="p-2">
                  <Image
                    src="/github.svg"
                    alt="GitHub"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="p-2">
                  <Image
                    src="/salesforce.svg"
                    alt="Salesforce"
                    width={48}
                    height={36}
                  />
                </div>
                <div className="p-3">
                  <span> Self Service Portal </span>
                </div>
              </div>
            </Header.Link>
          </Header.Item>
          <Header.Item full></Header.Item>
          <Header.Item>
            <ActionMenu>
              <ActionMenu.Anchor>
                <Avatar
                  src={
                    session?.user?.image ??
                    "https://avatars.githubusercontent.com/u/5435082?s=80&v=4"
                  }
                  size={32}
                  alt="@octocat"
                />
              </ActionMenu.Anchor>
              <ActionMenu.Overlay>
                <ActionList>
                  {session.user.role === "admin" && (
                    <ActionList.Item onClick={() => router.push("/hub/admin")}>
                      <ShieldCheckIcon size={16} /> admin
                    </ActionList.Item>
                  )}
                  <ActionList.Item onClick={() => router.push("/hub/settings")}>
                    <GearIcon size={16} /> settings
                  </ActionList.Item>
                  <ActionList.Divider />
                  <ActionList.Item
                    variant="danger"
                    onClick={() =>
                      signOut({ callbackUrl: "http://127.0.0.1:3000/" })
                    }
                  >
                    Sign out
                  </ActionList.Item>
                </ActionList>
              </ActionMenu.Overlay>
            </ActionMenu>
          </Header.Item>
        </Header>
        <Header sx={{ padding: 0 }}>
          <Header.Item full className="ml-3">
            <UnderlineNav>
              {subnavitems.map((_) => {
                return (
                  <SubNavItem
                    key={_.href}
                    href={_.href}
                    text={_.text}
                    selected={path === `/hub${_.href}`}
                  >
                    {_.icon}
                  </SubNavItem>
                );
              })}
            </UnderlineNav>
          </Header.Item>
        </Header>
        <Box
          borderColor="border.default"
          borderBottomWidth={1}
          borderBottomStyle="solid"
          pb={0}
        ></Box>
      </>
    );
  else return <></>;
}
