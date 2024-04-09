# Clockify

Attendance and Payroll System 

## Design-Figma


[https://www.figma.com/file/F8fNhftlOgkTwzYRLdV3HZ/Attendance-and-Payroll-Systeme-Design?type=design&mode=design&t=ZD2M6riJ3RoFtSft-0][link to the figma design]



[https://www.figma.com/file/KuSJ3vfhwlSIz1K722V4aI/Attendance-and-Payroll-System?type=design&node-id=0-1&mode=design&t=cXUzvFeBs1RpQp8f-0](link to the figma wireframe)


## Database-Design

![Database Design](src/assets/drawSQL-image-export-2024-03-19.png)

## Project Description
This project is aimed at simplifying the management of employee attendance, payroll, and related functionalities within a company. It will be developed using React.js for the front end, Express.js for the backend, and Microsoft SQL for the database.

Project Structure:

Frontend (React.js):

· Common Features:

o Login/Logout for Admin and Employee

o Dashboard (Different views for Admin and Employee)

o Profile Management (View, Edit, Change Password, Upload Photo)

· Admin Specific Features:

o Employee Management (Add, Edit, Remove, View)

o Upon employee Registration, send an email notification.

o Attendance Reports (View Monthly Attendance, Attendance Statistics in Bar Graph, export reports as a pdf file)

o Overtime Management (Add, Edit, View)

o Advance Cash Management (Add, View)

o Schedule Management (Add, Edit, View)

o Deduction Management (Add, Edit, View)

o Position Management (Add, Edit, View)

o Payroll Management (Generate, View)

· Employee Specific Features:

o Time In/Time Out

o View Own Attendance

o View Payroll

Backend (Express.js):

· Authentication:

o Login Authentication

o Token Generation and Validation

· Employee Management:

o CRUD Operations for Employee Details

· Attendance Management:

o Record Time In/Time Out

o Generate Attendance Reports

· Overtime, Advance Cash, Schedules, Deductions, and Positions:

o CRUD Operations for Each

· Payroll Management:

o Automatic Payroll Calculation

o Generate Payroll Reports

Database (Microsoft SQL):

· Tables:

o Employees: Stores employee details (ID, First Name, Last Name, Address, Birth Date, Contact Info, Gender, Position, Schedule, Photo URL, Email)

o Attendance: Logs of employee time in and time out (Employee ID, Date, Time In, Time Out)

o Overtime: Details of overtime hours (Employee ID, Date, Hours, Minutes, Rate)

o Advance Cash: Records of cash advances (Employee ID, Date, Amount)

o Schedules: Employee schedules (Employee ID, Start Time, End Time, Days)

o Deductions: Types of deductions (Deduction ID, Description, Amount)

o Positions: Job positions (Position ID, Title)

o Payroll: Payroll records (Employee ID, Gross Pay, Deductions, Net Pay, Payroll Date)

· Use Other necessary tables if possible.
## Login Page
![Login Page](<src/assets/Screenshot 2024-03-19 170823.png>)
## Sign up Page 
![Register page](<src/assets/Screenshot 2024-03-19 171204.png>)
