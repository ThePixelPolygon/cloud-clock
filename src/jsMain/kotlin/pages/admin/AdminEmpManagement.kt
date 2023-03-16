package pages.admin

import Employee
import csstype.ClassName
import deleteEmployee
import getEmployee
import getEmployees
import kotlinx.browser.document
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLAnchorElement
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLFormElement
import org.w3c.dom.HTMLInputElement
import postEmployee
import react.*
import react.dom.client.createRoot
import react.dom.events.ChangeEventHandler
import react.dom.events.FormEventHandler
import react.dom.events.MouseEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.em
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.span
import react.dom.html.ReactHTML.strong
import scope
import updateEmployee

private class EditForm : Component<Props, State> {
    var empId: String
    var empName: String
    var oldId: String = ""

    constructor() : super() {
        this.empId = ""
        this.empName = ""
        this.oldId = ""
    }

    constructor(empId: String, empName: String) : super() {
        this.empId = empId
        this.empName = empName
        this.oldId = empId
    }

    private suspend fun submit(newName: String, newID: String) {
        val newEmployee = Employee(newName, newID)
        if (this.oldId != "") {
            val oldEmployee = getEmployee(oldId)
            updateEmployee(oldEmployee!!, newEmployee)
            document.getElementById("nameHeading")!!.innerHTML = newName
            js("alert(\"Changes updated successfully.\")")
        } else {
            postEmployee(newEmployee)
            js("alert(\"Employee created successfully.\")")
        }
    }

    private suspend fun delete(idToDelete: String) {
        document.getElementById("FormRenderer")!!.innerHTML = ""
        deleteEmployee(idToDelete)
    }

    override fun render(): ReactNode? {
        return FC<Props> {
            val (initName, dynamicName) = useState(empName)
            val (initID, dynamicID) = useState(empId)

            val nameTextChangeEventHandler: ChangeEventHandler<HTMLInputElement> = {
                dynamicName(it.target.value)
            }

            val idChangeEventHandler: ChangeEventHandler<HTMLInputElement> = {
                dynamicID(it.target.value)
            }

            val submitHandler: FormEventHandler<HTMLFormElement> = {
                it.preventDefault()
                if (!(initName == "" || initID == "")) {
                    scope.launch {
                        submit(initName, initID)
                    }
                }
            }

            val deleteHandler: MouseEventHandler<HTMLInputElement> = {
                val willDelete: Boolean = js("confirm(\"Are you sure you would like to delete this user?\")")
                if (willDelete) {
                    scope.launch {
                        delete(empId)
                    }
                }
            }

            h1 {
                id = "nameHeading"
                if (empName != "") {
                    +(empName)
                } else {
                    +("New Employee")
                }

            }
            form {
                onSubmit = submitHandler
                className = ClassName("d-flex flex-column")
                label {
                    className = ClassName("form-label")
                    htmlFor = "name"
                    +("Name")
                }
                input {
                    required = true
                    className = ClassName("form-control")
                    id = "name"
                    placeholder = "name"
                    type = InputType.text
                    value = initName
                    onChange = nameTextChangeEventHandler
                }
                label {
                    className = ClassName("form-label")
                    htmlFor = "employeeid"
                    +("ID Number")
                }
                input {
                    required = true
                    className = ClassName("form-control")
                    id = "employeeid"
                    type = InputType.text
                    value = initID
                    onChange = idChangeEventHandler

                }
                div {
                    className = ClassName("d-flex justify-content-around")
                    if (empName != "") {
                        input {
                            type = InputType.button
                            className = ClassName("btn btn-outline-danger")
                            value = "Delete"
                            onClick = deleteHandler
                        }
                    }
                    input {
                        type = InputType.submit
                        className = ClassName("btn btn-primary")
                        value = "Save"
                    }
                }

            }
        }.create()
    }
}

fun jsDialog(): Boolean {
    return js("confirm('Are you sure you want to delete this user?\\n\\nThis option cannot be undone.\\n" +
            "All related events will be deleted.')")
}

val empListComponent = FC<EmployeeProps> {props ->

    val handler: MouseEventHandler<HTMLAnchorElement> = {
        it.preventDefault()

        val formRoot = document.getElementById("FormRenderer")!!.let { createRoot(it) }
        val component = EditForm(props.empId, props.empName)
//        formRoot.unmount()
        formRoot.render(component.render())

    }

    a {
        href = ""
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
        onClick = handler
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
    val newEmployeeEventHandler: MouseEventHandler<HTMLButtonElement> = {
        val formRoot = document.getElementById("FormRenderer")!!.let { createRoot(it) }
        val component = EditForm()
//        formRoot.unmount()
        formRoot.render(component.render())
    }
    div {
        className = ClassName("container-fluid")
        h1 {
            +("Employee Management")
        }
        div {
            className = ClassName("row")
            div {
                className = ClassName("col-md-4")
                div {
                    ClassName("d-flex justify-content-evenly")
                    h2 {
                        +("Employees")
                    }
                    button {
                        className = ClassName("btn btn-primary")
                        span {
                            className = ClassName("material-icons")
                            +("add")
                        }
                        +("New")

                        onClick = newEmployeeEventHandler
                    }
                }
                div {
                    className = ClassName("list-group")

                    empList { }
                }
            }
            div {
                className = ClassName("col-md-7")
                id = "FormRenderer"
            }
        }
    }
}

external interface EmployeeProps : Props {
    var empId: String
    var empName: String
}



