"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

type IDProps = {
  params: any;
};

const EditDepartmentPage = ({ params }: IDProps) => {
  const { id } = params;

  const { data, isLoading } = useDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();

  const base = "super_admin";

  const onSubmit = async (values: { title: string }) => {
    message.loading("Updating....");
    try {
      await updateDepartment({ id, body: values });
      message.success("Department Updated Successfully");
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: "department",
            link: `/${base}/department`,
          },
        ]}
      />
      <ActionBar title="Update Department"></ActionBar>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditDepartmentPage;
