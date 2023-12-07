import OrgControl from "@/components/OrgControl";

export default function layout({children}:{children : React.ReactNode}) {
  return (
    <div>
      <OrgControl/>
      {children}
    </div>
  )
}
