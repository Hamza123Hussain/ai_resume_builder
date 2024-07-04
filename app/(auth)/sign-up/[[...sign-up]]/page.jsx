import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className=" p-3">
      <SignUp path="/sign-up" />
    </div>
  )
}
