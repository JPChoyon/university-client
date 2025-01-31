import { Button, Col, Flex } from "antd";
import JpUniForm from "../../../component/form/JpUniForm";
import JpUniSelect from "../../../component/form/JpUniSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { monthOptions } from "../../../constance/global";
import { semesterOptions } from "../../../constance/semester";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    const name = semesterOptions[Number(data.name) - 1]?.label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <JpUniForm onSubmit={onSubmit}>
          <JpUniSelect label=" Name" name="name" options={semesterOptions} />
          <JpUniSelect label=" Year" name="year" options={yearOptions} />
          <JpUniSelect
            label=" Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <JpUniSelect
            label=" End Month"
            name="endMonth"
            options={monthOptions}
          />
          <Button htmlType="submit">Create Semester</Button>
        </JpUniForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
