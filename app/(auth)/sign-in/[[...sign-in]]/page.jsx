import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className=" p-3">
      <SignIn path="/sign-in" />
    </div>
  )
}
