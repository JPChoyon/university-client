import { baseApi } from "../../api/BaseApi";

const studentManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllSemesters: builder.query({
    //   query: () => ({
    //     url: "/academic-semesters",
    //     method: "GET",
    //   }),
    // }),
    addStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddStudentMutation } = studentManagement;
