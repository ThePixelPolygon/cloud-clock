package pages.admin

import Employee
import ExportParams
import csstype.ClassName
import getEmployees
import getSpreadsheet
import kotlinx.browser.document
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.datetime.toLocalDate
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLFormElement
import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.dom.events.ChangeEventHandler
import react.dom.events.FormEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.useState

val scope = MainScope()

val exportForm = FC<Props> {
    val (startDate, startDateInit) = useState("")
    val (endDate, endDateInit) = useState("")

    val startChangeHandler: ChangeEventHandler<HTMLInputElement> = {
        startDateInit(it.target.value)
    }
    val endChangeHandler: ChangeEventHandler<HTMLInputElement> = {
        endDateInit(it.target.value)
    }
    val submitHandler: FormEventHandler<HTMLFormElement> = {
        it.preventDefault()
        val startDate = startDate.toLocalDate()
        val endDate = endDate.toLocalDate()
        var employeeList: List<Employee> = listOf()
        val exportParams = ExportParams(employeeList, startDate, endDate)
        scope.launch {
            employeeList = getEmployees()
            val spreadsheet = getSpreadsheet(exportParams)
            val linkElement = document.createElement("a") as HTMLElement
            linkElement.setAttribute("href", "/sheet")
            document.body!!.appendChild(linkElement)
            linkElement.click()
            document.body!!.removeChild(linkElement)
        }
    }
    div {
        className = ClassName("container")
        h1 {
            +("Export Timesheet")
        }
        form {

            onSubmit = submitHandler
            label {
                className = ClassName("form-label")
                htmlFor = "from"
                +("From")
            }
            input {
                className = ClassName("form-control")
                id = "from"
                type = InputType.date
                onChange = startChangeHandler
                required = true
            }
            label {
                className = ClassName("form-label")
                htmlFor = "To"
                +("To")
            }
            input {
                className = ClassName("form-control")
                id = "to"
                type = InputType.date
                onChange = endChangeHandler
                required = true
            }
            input {
                className = ClassName("btn btn-primary")
                id = "submitbtn"
                value = "Export"
                type = InputType.submit
            }
        }
    }
}