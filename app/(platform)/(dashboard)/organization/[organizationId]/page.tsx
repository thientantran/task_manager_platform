import { auth } from "@clerk/nextjs"

export default function page() {
  const {userId, orgId} = auth()
  return (
    <div>
      <div>UserId: {userId}</div>
      <div>OrganizationId: {orgId}</div>
    </div>
  )
}
