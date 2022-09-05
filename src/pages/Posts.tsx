import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { PostItem } from "../components/PostItem";

export function Posts() {
  return(
    <>
      <Header />
      <section className="w-[728px] pb-10 mx-auto mt-[83px]">

      <PostItem 
        slug="creating-a-monorepo-with-lerna-yarn-workspaces"
        createAt={new Date()}
        title="Creating a Monorepo with Lerna & Yarn Workspaces"
        preview="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
      />

      <PostItem 
        slug="creating-a-monorepo-with-lerna-yarn-workspaces"
        createAt={new Date()}
        title="Creating a Monorepo with Lerna & Yarn Workspaces"
        preview="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
      />
      
      <PostItem 
        slug="creating-a-monorepo-with-lerna-yarn-workspaces"
        createAt={new Date()}
        title="Creating a Monorepo with Lerna & Yarn Workspaces"
        preview="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
      />
      
      <PostItem 
        slug="creating-a-monorepo-with-lerna-yarn-workspaces"
        createAt={new Date()}
        title="Creating a Monorepo with Lerna & Yarn Workspaces"
        preview="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
      />

      </section>
    </>
  )
}