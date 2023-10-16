import React from "react";
import Employee from "./Employee"
const EmployeeList = () => {

    return (
            <div>
                <Employee id='1' name='Mohana' salary='5000'/>

                <Employee id='2' name='Ram' salary='10000'/>

                <Employee id='3' name='Rahul' salary='7000'/>

                <Employee id='4' name='Ravi' salary='5500'/>
                <Employee id='5' name='Ramu' salary='6550'/>
            </div>
    )
}
export default EmployeeList