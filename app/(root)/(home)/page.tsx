import Auth from "@/components/auth";

export default function Page() {
  const user = false;

  if (!user)
    return (
      <div className="container mx-auto h-screen max-w-7xl">
        <Auth />
      </div>
    );
  return <div>Page</div>;
}
