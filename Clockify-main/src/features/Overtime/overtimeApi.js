import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";





export const overtimeApi=createApi({
    reducerPath:'overtimeApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3000/api'}),
    tagTypes:['Overtime'],
    endpoints:(builder)=>({
        createNewOverTime:builder.mutation({
            query:(overtime)=>({
                url:`/overtime`,
                method:`POST`,
                body:overtime
            }),
            invalidatesTags:[`Overtime`]
        }),
        getAllOvertime:builder.query({
            query:()=>({
                url:`/overtime`,
                method:'GET'
            }),
            providesTags:[`Overtime`]
        }),
        editOvertime:builder.mutation({
            query:(overtime)=>({
                url:`/overtime/${overtime.user_id}`,
                method:'PUT',
                body:overtime
            }),
            invalidatesTags:[`Overtime`]
        })
    })
})

export const {useCreateNewOverTimeMutation,useGetAllOvertimeQuery, useEditOvertimeMutation}=overtimeApi