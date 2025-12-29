import Logo from "@/components/Logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center overflow-auto py-8">
      <Card className="bg-base-100 z-10 my-auto w-full max-w-lg shadow-2xl">
        <CardHeader className="flex flex-col items-center justify-center gap-2">
          <Logo className="w-32" />
          <CardTitle className="text-2xl font-bold">
            Library MAnagement
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Outlet />
        </CardContent>
      </Card>
    </main>
  );
}
