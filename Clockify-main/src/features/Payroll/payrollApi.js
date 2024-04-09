import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const payrollApi=createApi({
    reducerPath:'payrollApi',
    baseQuery:fetchBaseQuery({baseUrl:`http://localhost:3000/api/`}),
    tagTypes:['Payroll'],
    endpoints:(builder)=>({
        getPayRollRecords:builder.query({
            query:()=>({
                url:`payroll`,
                method:`GET`
            }),
            providesTags:[`Payroll`]
        }),
        getPayRollRecordsforAUser:builder.query({
            query:(user_id)=>({
                url:`payroll/user/${user_id}`,
                method:`GET`
            }),
            providesTags:[`Payroll`]
        })
    })
})

export const {useGetPayRollRecordsQuery,useGetPayRollRecordsforAUserQuery}=payrollApi