import SignInButton from "@/Components/Auth/SignInButton";
import SignOutButton from "@/Components/Auth/SignOutButton";
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
