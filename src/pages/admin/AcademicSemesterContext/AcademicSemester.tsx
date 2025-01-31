import { useGetAllSemestersQuery } from "../../../redux/feature/admin/academicMangement.api";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);
  return <div>this is academic semester.</div>;
};

export default AcademicSemester;
