import { useGetAllSemestersQuery } from "../../../redux/feature/AcademicSemester/AcademicSemesterApi";


const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);
  return (
    <div>
      this is academic semester.
    </div>
  );
};

export default AcademicSemester;