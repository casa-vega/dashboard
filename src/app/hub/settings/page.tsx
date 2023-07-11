"use client";

import { useSession } from 'next-auth/react';
import { Avatar, Box, NavList, SplitPageLayout, Text } from '@primer/react';
import { useRouter } from 'next/navigation';


export default function Settings() {

  const { data: session } = useSession();
  const router = useRouter();

  return (
    <main>
      <SplitPageLayout>
        <SplitPageLayout.Header>
          <Box height={64}>
            <div className="d-flex flex-row flex-content-center">
                <Avatar src={session?.user?.image ?? "https://avatars.githubusercontent.com/u/5435082?s=80&v=4" } size={52} alt="@octocat" className="mt-1"/>
                <div className="d-flex flex-column flex-justify-left ml-3">
                  <Text sx={{fontWeight: "bold", fontSize: 24}}>{session?.user.name ?? "Who are you?"}</Text>
                  <Text sx={{fontSize: 16}}>Your personal settings</Text>
                </div>
            </div>
          </Box>
        </SplitPageLayout.Header>
        <SplitPageLayout.Pane>
          <Box height={120}>
            <NavList>
              <NavList.Item href="#" aria-current="page">
                Account
              </NavList.Item>
              <NavList.Item href="#">Appearance</NavList.Item>
              <NavList.Item href="#">Notifications</NavList.Item>
            </NavList>
          </Box>
        </SplitPageLayout.Pane>
        <SplitPageLayout.Content>
          <Box height={800} />
        </SplitPageLayout.Content>
        <SplitPageLayout.Footer>
          <Box height={64} />
        </SplitPageLayout.Footer>
      </SplitPageLayout>
    </main>
  )
}
