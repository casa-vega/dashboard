"use client";

import { UnderlineNav } from '@primer/react'
import { useRouter } from 'next/navigation'


export default function SubNavItem({children, href, text, selected}: { children: React.ReactNode, href: string, text: string, selected: boolean }) {
  const router = useRouter();
  return (
    <>
      <UnderlineNav.Link href="#" selected={selected}>
        <button className="UnderlineNav-item" role="tab" type="button" onClick={() => router.push(`/hub${href}`)}>
          {children}{text}
        </button>
      </UnderlineNav.Link>
    </>
  )
}