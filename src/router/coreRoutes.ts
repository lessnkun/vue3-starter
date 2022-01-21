import { TenantUserRole } from "@/application/enums/core/tenants/TenantUserRole";

import Index from "@/views/core/Index.vue";
import Dashboard from "@/views/core/Dashboard.vue";
import Unauthorized from "@/views/core/Unauthorized.vue";

export const appCoreRoutes = {
  path: "/app",
  component: Index,
  meta: {
    requiresAuth: true,
  },
  redirect: "/app/dashboard",
  children: [
    {
      path: "dashboard",
      component: Dashboard,
      meta: {
        roles: [TenantUserRole.OWNER, TenantUserRole.ADMIN, TenantUserRole.MEMBER],
      },
    },
    {
      path: "unauthorized",
      component: Unauthorized,
    },
  ],
};
