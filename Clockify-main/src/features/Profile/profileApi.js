import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem('token');


export const profileApi=createApi({
    reducerPath:'profileApi',
    baseQuery:fetchBaseQuery({
        baseUrl:`http://localhost:3000/api`,
       
    }),

    tagTypes:[`Profile`],
    endpoints:(builder)=>({
        updateUserProfile:builder.mutation({
            query:(details)=>({
                url:`/user/${details.user_id}`,
                method:`PUT`,
                body:details
            })
        })
    })

})

export const {useUpdateUserProfileMutation}=profileApi