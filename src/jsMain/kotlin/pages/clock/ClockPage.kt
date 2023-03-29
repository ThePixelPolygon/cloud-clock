package pages.clock
import ENTER
import EXIT
import Employee
import TimeEvent
import csstype.ClassName
import getEmployee
import getEmployees
import getEvents
import kotlinx.browser.document
import kotlinx.coroutines.launch
import kotlinx.datetime.Clock
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import org.w3c.dom.HTMLFormElement
import org.w3c.dom.HTMLInputElement
import postEvent
import react.FC
import react.Props
import react.dom.events.ChangeEventHandler
import react.dom.events.FormEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML
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
            var success: Boolean = false
            scope.launch {
                success = LogEvent(idText, events)
                if (success) {
                    var name = ""
                    for (employee: Employee in employees) {
                        if (employee.user_id == idText) {
                            name = employee.name
                        }
                    }
                    message.innerHTML = "<p>Thank you, ${name}!</p>"
                } else {

                    message.innerHTML =
                        "<p>No employee with that ID exists. If the problem persists, please see your supervisor.</p>"
                }
            }
    }

    val changeHandler: ChangeEventHandler<HTMLInputElement> = {
        otherText(it.target.value)
    }

    form {
        className = ClassName("mx-3 vstack gap-3")
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
        div {
            className = ClassName("d-flex flex-row-reverse")
            input {

                className = ClassName("btn btn-primary")
                type = InputType.submit
                value = "Submit"
            }
        }

    }
    div {
        id = "message"
        className = ClassName("container")
    }
}

val Clock = FC<Props> {
    div {
        className = ClassName("background")
        div {
            className = ClassName("container flex-row my-5")
            div {
                id = "login-box"
                ReactHTML.h1 {
                    className = ClassName("text-center")
                    id = "login-field-text"
                    +("Login")
                }
                ClockPage { }
            }
        }
    }
}

suspend fun LogEvent(id: String, events: List<TimeEvent>): Boolean {
    val employee: Employee? = getEmployee(id)
    if (employee !is Employee) {
        return false
    }
    var eventType = ENTER

    for (lastEvent: TimeEvent in events.reversed()) {
        val lastId = lastEvent.eventEmployee.user_id
        if (id == lastId) {
            if (lastEvent.eventType == ENTER) {
                eventType = EXIT
            }
            break
        }
    }

    val dateTime = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault())

    postEvent(TimeEvent(employee, eventType, dateTime.date, dateTime.time))

    return true
}
