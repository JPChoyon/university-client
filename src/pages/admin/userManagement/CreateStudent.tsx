import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import JpUniForm from "../../../component/form/JpUniForm";
import JpUniInput from "../../../component/form/JpUniInput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import JpUniSelect from "../../../component/form/JpUniSelect";
import { bloodGroupOptions, genderOptions } from "../../../constance/global";
import JpUniDatePicker from "../../../component/form/jpUniDatePicker";
import {
  useGetAcademicDepartmentsQuery,
  useGetAllSemestersQuery,
} from "../../../redux/feature/admin/academicMangement.api";
import { useAddStudentMutation } from "../../../redux/feature/admin/studentManagement.api";

const studentData = {
  password: "student123",
  student: {
    name: {
      firstName: "I am ",
      middleName: "Student",
      lastName: "Number 1",
    },
    gender: "male",
    dateOfBirth: "1990-01-01",
    bloogGroup: "A+",

    email: "student2@gmail.com",
    contactNo: "1235678",
    emergencyContactNo: "987-654-3210",
    presentAddress: "123 Main St, Cityville",
    permanentAddress: "456 Oak St, Townsville",

    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "111-222-3333",
      motherName: "Mary Doe",
      motherOccupation: "Teacher",
      motherContactNo: "444-555-6666",
    },

    localGuardian: {
      name: "Alice Johnson",
      occupation: "Doctor",
      contactNo: "777-888-9999",
      address: "789 Pine St, Villageton",
    },

    admissionSemester: "65b0104110b74fcbd7a25d92",
    academicDepartment: "65b00fb010b74fcbd7a25d8e",
  },
};

const CreateStudent = () => {
  const [addStudent, { data, error }] = useAddStudentMutation();
  console.log(data, error);
  const { data: sData } = useGetAllSemestersQuery(undefined);
  const { data: dData } = useGetAcademicDepartmentsQuery(undefined);

  const semesterOptions = sData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} - ${item.year}`,
  }));
  const departmentOptions = dData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name}`,
  }));
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const studentData = {
      password: "student123",
      student: data,
    };
    console.log(studentData);
    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData));
    formData.append("file", data.image);
    addStudent(formData);
  };
  return (
    <JpUniForm onSubmit={onSubmit}>
      <Divider>Personal Information</Divider>
      <Row gutter={8}>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniInput type="text" label="First Name" name="name.firstName" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniInput type="text" label="Middle Name" name="name.middleName" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniInput type="text" label="Last Name" name="name.lastName" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniSelect label="Gender" name="gender" options={genderOptions} />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniDatePicker label="Date Of Birth" name="dateOfBirth" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniSelect
            label="Blood Group"
            name="bloogGroup"
            options={bloodGroupOptions}
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <Controller
            name="image"
            render={({ field: { onChange, value, ...field } }) => (
              <Form.Item label="Upload Image">
                <Input
                  type="file"
                  {...field}
                  value={undefined} // Prevent React warning
                  onChange={(e) => onChange(e.target.files?.[0])}
                />
              </Form.Item>
            )}
          />
        </Col>
      </Row>
      <Divider>Contact Information</Divider>
      <Row gutter={8}>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniInput type="email" label="Email" name="email" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniInput type="text" label="Contact Number" name="contactNo" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniInput
            type="text"
            label="Emergency Contact Number"
            name="emergencyContactNo"
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniInput
            type="text"
            label="Present Address"
            name="presentAddress"
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniInput
            type="text"
            label="Permanent Address"
            name="permanentAddress"
          />
        </Col>
      </Row>
      <Divider>Guardian Information</Divider>
      <Row gutter={8}>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniInput
            type="text"
            label="Father Name"
            name="guardian.fatherName"
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniInput
            type="text"
            label="Father Occupation"
            name="guardian.fatherOccupation"
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniInput
            type="number"
            label="Father Contact Number"
            name="guardian.fatherContactNo"
          />
        </Col>

        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniInput
            type="text"
            label="Mother Name"
            name="guardian.motherName"
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniInput
            type="text"
            label="Mother Occupation"
            name="guardian.motherOccupation"
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniInput
            type="number"
            label="Mother Contact Number"
            name="guardian.motherContactNo"
          />
        </Col>
      </Row>
      <Divider>Local Guardian Information</Divider>
      <Row gutter={8}>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniInput type="text" label=" Name" name="localGuardian.name" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniInput
            type="text"
            label=" Occupation"
            name="localGuardian.occupation"
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniInput
            type="number"
            label=" Contact Number"
            name="localGuardian.contactNo"
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniInput
            type="text"
            label=" Address"
            name="localGuardian.address"
          />
        </Col>
      </Row>
      <Divider>Academic Information</Divider>
      <Row gutter={8}>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniSelect
            label=" Admission Semester"
            name="admissionSemester"
            options={semesterOptions}
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <JpUniSelect
            label=" Academic Department"
            name="academicDepartment"
            options={departmentOptions}
          />
        </Col>
      </Row>

      <Button htmlType="submit">Create Student</Button>
    </JpUniForm>
  );
};

export default CreateStudent;
