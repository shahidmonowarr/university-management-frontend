"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const CreateStudentPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `manage-student`,
            link: `/${role}/manage-student`,
          },
        ]}
      />
      <h1>Create Student Page</h1>
    </div>
  );
};

export default CreateStudentPage;
