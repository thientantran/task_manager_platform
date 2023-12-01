import { auth } from "@clerk/nextjs"

export default function page() {
  const {userId, orgId} = auth()
  return (
    <div className="pt-16">
      <div>UserId: {userId}</div>
      <div>OrganizationId: {orgId}</div>
    </div>
  )
}
