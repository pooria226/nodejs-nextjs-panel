/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import TableItem from "@/components/shared/TableItem";
import AuthenticatedLayout from "@/components/layouts/AuthenticatedLayout";
import { useDeleteUserMutation, useGetUsersQuery } from "@/store/apiSlice";
export default function Users() {
  const { data } = useGetUsersQuery();
  const [deleteUser, {}] = useDeleteUserMutation();

  const handleDelteUser = async (id: string) => {
    const result = await deleteUser({ id });
    console.log(result);
  };

  return (
    <AuthenticatedLayout>
      <DashboardLayout>
        <TableItem handleDelteUser={handleDelteUser} data={data?.data?.users} />
      </DashboardLayout>
    </AuthenticatedLayout>
  );
}
