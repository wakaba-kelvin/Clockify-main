import { createApi ,fetchBaseQuery} from "@reduxjs/toolkit/query/react";



export const deductionApi=createApi({
    reducerPath:'dedcutionApi',
    baseQuery:fetchBaseQuery({baseUrl:`http://localhost:3000/api/`}),
    tagTypes:[`Deductions`],
    endpoints:(builder)=>({
        createNewDeduction:builder.mutation({
            query:(deduction)=>({
                url:`deduction`,
                method:`POST`,
                body:deduction
            }),
            invalidatesTags:[`Deductions`]
        }),

        getAllDeduction:builder.query({
            query:()=>({
                url:`deduction`,
                method:`GET`,
                
            }),
            providesTags:[`Deductions`]
        }),

        editDeduction:builder.mutation({
            query:(deduction)=>({
                url:`deduction/${deduction.user_id}`,
                method:`PUT`,
                body:deduction
            }),
            invalidatesTags:[`Deductions`]
        })
    })
})


export const {useCreateNewDeductionMutation,useGetAllDeductionQuery,useEditDeductionMutation}=deductionApi