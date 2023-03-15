package pages.admin

import Employee
import csstype.ClassName
import getEmployee
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.form

val scope = MainScope()

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

val employeeManagement = FC<Props> {
    div {
        className = ClassName("container")
        div {
            className = ClassName("row")
            div {
                className = ClassName("list-group col-md-4")
                div {
                    className = ClassName("list-group-item list-group-item-action active")
                    id = "it1"
                    +("Item")

                }
                div {
                    className = ClassName("list-group-item list-group-item-action")
                    id = "it2"
                    +("Item 2")
                }
            }
            div {

            }
        }
    }
}