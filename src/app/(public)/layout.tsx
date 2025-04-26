import { getServerSession } from "@/actions/auth.action"
import { SidebarLeft } from "@/components/sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ThemeSwitcher } from "../provider"
import NotificationComponent from "@/components/notification/notification-component"

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const data = await getServerSession();

  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-14 shrink-0 items-center gap-2">
          <div className="flex flex-1 items-center justify-between gap-2 px-3">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="line-clamp-1">
                      Better Shadcn Auth Template
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb></div>

            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              <NotificationComponent />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {children}
        </div>
      </SidebarInset>
      <SidebarRight user={data?.user || null} />
    </SidebarProvider>
  )
}
