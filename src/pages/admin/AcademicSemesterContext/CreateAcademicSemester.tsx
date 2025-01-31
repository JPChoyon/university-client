import { Button, Col, Flex } from "antd";
import JpUniForm from "../../../component/form/JpUniForm";
import JpUniSelect from "../../../component/form/JpUniSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { monthOptions } from "../../../constance/global";
import { semesterOptions } from "../../../constance/semester";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicSemester";
import { useAddAcademicSemesterMutation } from "../../../redux/feature/admin/academicMangement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";
const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating ...");
    const name = semesterOptions[Number(data.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    try {
      const res = (await addAcademicSemester(semesterData)) as TResponse;
      console.log(res);
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success("Academic Semester Created Successfully", {
          id: toastId,
        });
      }
    } catch {
      toast.error("something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <JpUniForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
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
