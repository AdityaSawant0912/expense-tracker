import SignInButton from "@/components/Auth/SignInButton";
import SignOutButton from "@/components/Auth/SignOutButton";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth()
  
  console.log(session);
  
  return (
    <>
      <SignInButton />
      <SignOutButton />
      
    </>
  );
}
