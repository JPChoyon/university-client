import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/feature/admin/academicMangement.api";
import { TAcademicSemester } from "../../../types/academicSemester.type";

// type TData = {
//   name: string;
//   year: number;
//   startMonth: string;
//   endMonth: string;
// };
type TTableData = Pick<
  TAcademicSemester,
  "name" | "startMonth" | "endMonth" | "year"
>;
interface Semester {
  _id: string;
  name: string;
  year: number;
  startMonth: string;
  endMonth: string;
}
const AcademicSemester = () => {
  const { data: semesterData } = useGetAllSemestersQuery(undefined);

  const tableData =
    semesterData?.data?.map(
      ({ _id, name, year, startMonth, endMonth }: Semester) => ({
        _id,
        name,
        year,
        startMonth,
        endMonth,
      })
    ) || [];

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <Table<TTableData>
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default AcademicSemester;
