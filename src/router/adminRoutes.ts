import { UserType } from "@/application/enums/core/users/UserType";

import Index from "@/views/admin/Index.vue";

export const adminRoutes = {
  path: "/admin",
  component: Index,
  meta: {
    requiresAuth: true,
    userTypes: [UserType.Admin],
  },
};
