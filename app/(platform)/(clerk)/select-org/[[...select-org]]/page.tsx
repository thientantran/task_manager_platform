import { OrganizationList } from "@clerk/nextjs";

export default function page() {
  return (
    <OrganizationList
    hidePersonal
    afterSelectOrganizationUrl="/organization/:id"
    afterCreateOrganizationUrl="/organization/:id"
    />
  )
}
