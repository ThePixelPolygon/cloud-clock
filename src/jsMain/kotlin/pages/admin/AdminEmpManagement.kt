package pages.admin

import Employee
import csstype.ClassName
import getEmployee
import getEmployees
import kotlinx.coroutines.launch
import react.FC
import react.Props
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.em
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.strong
import react.useState
import scope

fun editForm(empId: String = "0") : FC<Props> {
    var employee: Employee? = null
    scope.launch {
        employee = getEmployee(empId)
    }
    return FC<Props>{
        form {

        }
    }
}


val empListComponent = FC<EmployeeProps> {props ->
    a {
        className = ClassName("list-group-item list-group-item-action")
        id = "emp${props.empId}"
        div {
            className = ClassName("d-flex flex-column")
            p {
                strong {
                    +(props.empName)
                }
            }
            p {
                em {
                    +(props.empId)
                }
            }
        }
    }
}

val empList = FC<Props> {
    var employees by useState(emptyList<Employee>())
    scope.launch {
        employees = getEmployees()
    }
    for (employee in employees) {
        empListComponent {
            empId = employee.user_id
            empName = employee.name
        }
    }
}



val employeeManagement = FC<Props> {
    div {
        className = ClassName("container-fluid")
        div {
            className = ClassName("row")
            div {
                className = ClassName("list-group col-md-4")

                empList { }
            }
            div {

            }
        }
    }
}

external interface EmployeeProps : Props {
    var empId: String
    var empName: String
}



