"use client";

import { useSession } from "next-auth/react";
import {
  ContainerIcon,
  BrowserIcon,
  DatabaseIcon,
  GraphIcon,
  HomeIcon,
  KeyIcon,
  MarkGithubIcon,
  RocketIcon,
  StackIcon,
  TasklistIcon,
  TelescopeIcon,
  WorkflowIcon,
} from "@primer/octicons-react";

export default function Hub() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="d-flex p-5 flex-column flex-justify-center align-items-center">
          <div className="Box">
            <div className="Box-header">
              <h3 className="Box-title">
                <HomeIcon className="mr-1" size={16} /> Welcome{" "}
                {session.user.name}{" "}
              </h3>
            </div>
            <div className="Box-body">
              <div className="BtnGroup d-block mb-2">
                <button className="BtnGroup-item btn" type="button">
                  GHEC-EMU
                </button>
                <button className="BtnGroup-item btn" type="button">
                  GHEC
                </button>
                <button className="BtnGroup-item btn btn-primary" type="button">
                  SOMA
                </button>
              </div>
              <hr />
              <h2>
                Hello Salesforce <RocketIcon size={24} className="" />
              </h2>
              <hr />
              <p>
                This App is a work in progress, we&apos;re only a couple of
                weeks into development but we are excited to be teaming up with
                Saleforce to deliver a tool that will enable developer autonmy
                while ensuring developers do not have access to unsafe settings.{" "}
              </p>
              <hr />
              <nav className="menu" aria-labelledby="menu-heading">
                <span className="menu-heading" id="menu-heading">
                  Requirements
                </span>
                <a className="menu-item" href="#url">
                  <BrowserIcon size={16} />
                  Nodejs 18 (LTS)
                </a>
                <a className="menu-item" href="#url">
                  <DatabaseIcon size={16} />
                  Sqlite
                </a>
              </nav>
              <nav className="menu" aria-labelledby="Completed">
                <span className="menu-heading" id="Completed">
                  Completed
                </span>
                <a className="menu-item" href="#url">
                  <KeyIcon size={16} />
                  Authentication (Okta & GitHub)
                </a>
                <a className="menu-item" href="#url">
                  <StackIcon size={16} />
                  Middleware logging
                </a>
                <a className="menu-item" href="#url">
                  <WorkflowIcon size={16} />
                  Workflows (GitHub Actions)
                </a>
                <a className="menu-item" href="#url">
                  <ContainerIcon size={16} />
                  Docker
                </a>
              </nav>
              <nav className="menu" aria-labelledby="Todo">
                <span className="menu-heading" id="Todo">
                  Todo
                </span>
                <a className="menu-item" href="#url">
                  <DatabaseIcon size={16} />
                  Database wiring/functions
                </a>
                <a className="menu-item" href="#url">
                  <TasklistIcon size={16} />
                  Unit testing
                </a>
                <a className="menu-item" href="#url">
                  <RocketIcon size={16} />
                  Deployments
                </a>
                <a className="menu-item" href="#url">
                  <TelescopeIcon size={16} />
                  More to come!
                </a>
              </nav>
              <nav className="menu" aria-labelledby="menu-heading">
                <span className="menu-heading" id="menu-heading">
                  In the box
                </span>
                <a className="menu-item" href="#url">
                  <BrowserIcon size={16} />
                  Next.js 13 - React Framework
                </a>
                <a className="menu-item" href="#url">
                  <KeyIcon size={16} />
                  NextAuth - Authentication
                </a>
                <a className="menu-item" href="#url">
                  <MarkGithubIcon size={16} />
                  Primer - Design System
                </a>
                <a className="menu-item" href="#url">
                  <DatabaseIcon size={16} />
                  Prisma - Database ORM
                </a>
                <a className="menu-item" href="#url">
                  <MarkGithubIcon size={16} />
                  Oktokit - GitHub API
                </a>
                <a className="menu-item" href="#url">
                  <StackIcon size={16} />
                  Pino - Logging
                </a>
                <a className="menu-item" href="#url">
                  <GraphIcon size={16} />
                  Chartjs - React Charts
                </a>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
