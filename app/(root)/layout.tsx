import Auth from "@/components/auth";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const Layout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions);

  
  if (!session) {
    return (
      <div className="container mx-auto h-screen max-w-7xl">
        <Auth />
      </div>
    );
  }

  console.log(session);
  return <div>{children}</div>;
};

export default Layout;
