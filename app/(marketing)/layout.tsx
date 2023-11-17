import MarketingFooter from "@/components/MarketingFooter";
import MarketingNavbar from "@/components/MarketingNavbar";

export default function layout({children} : {children: React.ReactNode}) {
  return (
    <div className="h-full bg-slate-100">
      <MarketingNavbar/>
      <main className="pt-40 pb-20 bg-slate-100">
        {children}
      </main>
      <MarketingFooter/>
    </div>
    
  )
}
