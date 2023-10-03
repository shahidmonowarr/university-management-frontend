import { bloodGroupOptions } from "@/constants/global";
import { Col, Row } from "antd";
import FormDatePicker from "../Forms/FormDatePicker";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";
import FormTextArea from "../Forms/FormTextArea";

const StudentBasicInfo = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="email"
            name="student.email"
            size="large"
            label="Email"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.contactNo"
            size="large"
            label="Contact Number"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.emergencyContactNo"
            size="large"
            label="Emergency Number"
          />
        </Col>
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormDatePicker
            name="student.dateOfBirth"
            label="Date of Birth"
            size="large"
          />
        </Col>
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormSelectField
            size="large"
            name="student.bloodGroup"
            options={bloodGroupOptions}
            label="Blood Group"
            placeholder="Select"
          />
        </Col>
        <Col
          className="gutter-row"
          span={12}
          style={{
            margin: "10px 0",
          }}
        >
          <FormTextArea
            name="student.presentAddress"
            label="Present Address"
            rows={4}
          />
        </Col>
        <Col
          className="gutter-row"
          span={12}
          style={{
            margin: "10px 0",
          }}
        >
          <FormTextArea
            name="student.permanentAddress"
            label="Permanent Address"
            rows={4}
          />
        </Col>
      </Row>
    </div>
  );
};

export default StudentBasicInfo;
