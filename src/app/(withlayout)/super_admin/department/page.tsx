"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import { useState } from "react";

const ManageDepartmentPage = () => {
  const query: Record<string, any> = {};

  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const { data, isLoading } = useDepartmentsQuery({ ...query });
  const { departments, meta } = data || {};

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Button onClick={() => console.log(data)} type="primary">
              <EyeOutlined />
            </Button>
            <Button
              style={{
                margin: "0px 5px",
              }}
              onClick={() => console.log(data)}
              type="primary"
            >
              <EditOutlined />
            </Button>
            <Button onClick={() => console.log(data)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filters: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
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
        dataSource={departments}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ManageDepartmentPage;
