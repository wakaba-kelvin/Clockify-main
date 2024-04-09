import {configureStore} from '@reduxjs/toolkit'
import { registerApi } from '../features/Register/registerApi.js'
import {setupListeners} from '@reduxjs/toolkit/query'
import { positionApi } from '../features/Position/positionApi.js'
import { scheduleApi } from '../features/Schedule/scheduleApi.js'
import { employeeListingApi } from '../features/EmployeeListing/EmployeeListing.js'
import { loginApi } from '../features/Login/loginApi.js'
import { deductionApi } from '../features/Deductions/deductionsApi.js'
import { cashAdvancesApi } from '../features/CashAdvances/cashAdvancesApi.js'
import { overtimeApi } from '../features/Overtime/overtimeApi.js'
import { payrollApi } from '../features/Payroll/payrollApi.js'
import { attendanceApi } from '../features/Attendance/attendanceApi.js'
import { profileApi } from '../features/Profile/profileApi.js'




export const store =configureStore({
    reducer:{
        [registerApi.reducerPath]:registerApi.reducer,
        [positionApi.reducerPath]:positionApi.reducer,
        [scheduleApi.reducerPath]:scheduleApi.reducer,
        [employeeListingApi.reducerPath]:employeeListingApi.reducer,
        [loginApi.reducerPath]:loginApi.reducer,
        [deductionApi.reducerPath]:deductionApi.reducer,
        [cashAdvancesApi.reducerPath]:cashAdvancesApi.reducer,
        [overtimeApi.reducerPath]:overtimeApi.reducer,
        [payrollApi.reducerPath]:payrollApi.reducer,
        [attendanceApi.reducerPath]:attendanceApi.reducer,
        [profileApi.reducerPath]:profileApi.reducer,
        


    },
    middleware:(getDefaultMidddleware)=>
    getDefaultMidddleware().concat(
        registerApi.middleware,
        positionApi.middleware,
        scheduleApi.middleware,
        employeeListingApi.middleware,
        loginApi.middleware,
        deductionApi.middleware,
        cashAdvancesApi.middleware,
        overtimeApi.middleware,
        payrollApi.middleware,
        attendanceApi.middleware,
        profileApi.middleware
    ),

})

setupListeners(store.dispatch)