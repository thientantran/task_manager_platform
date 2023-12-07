'use client'
import { Button } from "@/components/ui/button";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";
import NavItem, { Organization } from "./NavItem";
import { Accordion } from "./ui/accordion";
import { Skeleton } from "./ui/skeleton";

export default function Sidebar() {
  const {
    organization: activeOrganization,
    isLoaded: isLoadedOrg
  } = useOrganization();
  const {
    userMemberships,
    isLoaded: isLoadedOrgList
  } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading){
    return <>
      <Skeleton/>
    </>
  }
  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">
          Workspaces
        </span>
        <Button asChild type="button" size='icon' variant='ghost' className="ml-auto">
          <Link href='/select-org'>
            <Plus/>
          </Link>
        </Button>
      </div>
      <Accordion
        type="multiple"
        className="space-y-2"
      >
          {userMemberships.data.map(({organization}) => (
            <NavItem key={organization.id} organization={organization as Organization}/>
          ))}
      </Accordion>
    </>
  )
}
