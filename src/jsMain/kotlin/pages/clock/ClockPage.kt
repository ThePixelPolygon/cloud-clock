package pages.clock
import ENTER
import EXIT
import Employee
import TimeEvent
import csstype.ClassName
import getEmployees
import getEvents
import kotlinx.browser.document
import kotlinx.coroutines.launch
import kotlinx.datetime.Clock
import org.w3c.dom.HTMLFormElement
import org.w3c.dom.HTMLInputElement
import postEvent
import react.FC
import react.Props
import react.dom.events.ChangeEventHandler
import react.dom.events.FormEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.useState
import scope


val ClockPage = FC<Props> { props ->
    val (idText, otherText) = useState("")
    var employees by useState(emptyList<Employee>())
    var events by useState(emptyList<TimeEvent>())
    scope.launch {
        employees = getEmployees()
        events = getEvents()
    }
    val submitHandler: FormEventHandler<HTMLFormElement> = {
        it.preventDefault()
        var message = document.getElementById("message")!!
        message.innerHTML = ""
        val employeeId: Long? = idText?.toLong()

        if (employeeId is Long) {

            var success: Boolean = false
            scope.launch {
                success = LogEvent(employeeId, employees, events)
                if (success) {
                    var name = ""
                    for (employee: Employee in employees) {
                        if (employee.id == employeeId) {
                            name = employee.name
                        }
                    }
                    message.innerHTML = "<p>Thank you, ${name}!</p>"
                } else {

                    message.innerHTML =
                        "<p>No employee with that ID exists. If the problem persists, please see your supervisor.</p>"
                }
            }

        } else {
            println("Long conversion failed.")
            message.innerHTML =
                "<p>Please enter a valid employee ID.</p>"
        }
    }

    val changeHandler: ChangeEventHandler<HTMLInputElement> = {
        otherText(it.target.value)
    }

    form {
        className = ClassName("container")
        onSubmit = submitHandler
        label {
            htmlFor = "empid"
            +("Employee ID")
        }
        input {
            className = ClassName("form-control form-control-lg")
            placeholder = "Employee ID"
            id = "empid"
            onChange = changeHandler
            type = InputType.text
            value = idText
        }
        input {
            className = ClassName("btn btn-primary")
            type = InputType.submit
            value = "Submit"
        }
    }
    div {
        id = "message"
        className = ClassName("container")
    }
}
suspend fun LogEvent(id: Long, employees: List<Employee>, events: List<TimeEvent>): Boolean {
    var found: Boolean = false
    for (employee: Employee in employees) {
        if (employee.id == id) {
            found = true
            break
        }
    }
    if (!found) {
        return false
    }
    var eventType = ENTER

    for (lastEvent: TimeEvent in events.reversed()) {
        val lastId = lastEvent.id
        if (id == lastId) {
            if (lastEvent.eventType == ENTER) {
                eventType = EXIT
            }
            break
        }
    }

    val dateTime = Clock.System.now().toString()

    postEvent(TimeEvent(id, eventType, dateTime))

    return true
}
