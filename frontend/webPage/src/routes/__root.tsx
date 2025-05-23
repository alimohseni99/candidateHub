import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import ClerkProvider from "../integrations/clerk/provider.tsx";
import TanStackQueryLayout from "../integrations/tanstack-query/layout.tsx";
import type { QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider.tsx";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <ThemeProvider>
        <ClerkProvider>
          <Outlet />
          <TanStackRouterDevtools />
          <TanStackQueryLayout />
        </ClerkProvider>
      </ThemeProvider>
    </>
  ),
});
