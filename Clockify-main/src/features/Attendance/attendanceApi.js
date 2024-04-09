import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const attendanceApi=createApi({
    reducerPath:'attendance',
    baseQuery:fetchBaseQuery({baseUrl:`http://localhost:3000/api/`,
    prepareHeaders: (headers, { getState }) => {
        const token = localStorage.getItem('token');
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
      }

}),
    tagTypes:[`Attendance`],
   
    endpoints:(builder)=>({
        createCheckIn:builder.mutation({
            query:(user_id)=>({
                url:`attendance/in/${user_id}`,
                method:`POST`

            }),
            invalidatesTags:['Attendance']
        }),

        createCheckOut:builder.mutation({
            query:(user_id)=>({
                url:`/attendance/out/${user_id}`,
                method:`PATCH`
            }),
            invalidatesTags:[`Attendance`]
        }),
        getAttendanceforAUser:builder.query({
            query:()=>({
                url:`/attendance/user`,
                method:`GET`
            }),
            providesTags:[`Attendance`]
        }),
        getAllAttendanceRecords:builder.query({
            query:()=>({
                url:`/attendance`,
                method:`GET`
            }),
            providesTags:[`Attendance`]
        }),

        getAttendanceReportStatistics:builder.query({
            query:()=>({
                url:`/attendance/report`,
                method:`GET`
            }),
            providesTags:[`Attendance`]
        }),

        getAttendanceReportStatisticsByUser:builder.query({
            query:(user_id)=>({
                url:`/attendance/user/report/${user_id}`,
                method:`GET`
            }),
            providesTags:[`Attendance`]
        })


        

    })

})

export const{useCreateCheckInMutation,useCreateCheckOutMutation,useGetAllAttendanceRecordsQuery,useGetAttendanceforAUserQuery,useGetAttendanceReportStatisticsQuery, useGetAttendanceReportStatisticsByUserQuery}=attendanceApi