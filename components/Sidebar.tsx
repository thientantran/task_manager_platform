'use client'
import { Button } from "@/components/ui/button";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts";
import NavItem, { Organization } from "./NavItem";
import { Accordion } from "./ui/accordion";
import { Skeleton } from "./ui/skeleton";

interface SidebarProps {
  storageKey?: string;
};

export default function Sidebar({
  storageKey = "t-sidebar-state",
}: SidebarProps) {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );
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

  const defaultAccordionValue: string[] = Object.keys(expanded)
    .reduce((acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }

      return acc;
  }, []);
  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

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
        defaultValue={defaultAccordionValue}
      >
          {userMemberships.data.map(({organization}) => (
            <NavItem key={organization.id} organization={organization as Organization}
            isActive={activeOrganization?.id === organization.id}
            isExpanded={expanded[organization.id]}
            onExpand={onExpand}/>
          ))}
      </Accordion>
    </>
  )
}
