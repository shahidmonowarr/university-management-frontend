"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { Button } from "antd";
import Link from "next/link";

const ManageDepartmentPage = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <Button onClick={() => console.log(data)} type="primary" danger>
            x
          </Button>
        );
      },
    },
  ];

  const tableData = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    // console.log("page:" + page, "PageSize:" + pageSize);
  };

  const onTableChange = (pagination: any, filters: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
  };

  const base = "super_admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
        ]}
      />

      <h1>Department List</h1>
      <Link href="/super_admin/department/create">
        <Button type="primary">Create Department</Button>
      </Link>
      <br />
      <UMTable
        loading={false}
        columns={columns}
        dataSource={tableData}
        pageSize={5}
        totalPages={10}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ManageDepartmentPage;
