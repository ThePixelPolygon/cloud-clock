
import csstype.ClassName
import kotlinx.browser.document
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.datetime.LocalDateTime
import org.w3c.dom.HTMLFormElement
import react.FC
import react.Props
import react.dom.events.FormEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.useEffectOnce
import react.useState

private val scope = MainScope()

const val ENTER = 1
const val EXIT = 2

var employees by useState(emptyList<Employee>())
var events by useState(emptyList<TimeEvent>())

val ClockPage = FC<Props> { props ->
    useEffectOnce {
        scope.launch {
            employees = getEmployees()
            events = getEvents()
        }
    }
    var idText = ""

    val submitHandler: FormEventHandler<HTMLFormElement> = {
        var message = document.getElementById("message")!!
        message.innerHTML = ""
        val employeeId: Long? = idText.toLong()

        if (employeeId is Long) {
            var success: Boolean = false
            scope.launch {
                success = LogEvent(employeeId)
            }
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
    }

    form {
        label {
            htmlFor = "empid"
            +("Employee ID")
        }
        input {
            className = ClassName("form-control form-control-lg")
            placeholder = "Employee ID"
            id = "empid"
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
    }

}

suspend fun LogEvent(id: Long): Boolean {
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

    val dateTime = LocalDateTime.toString()

    postEvent(TimeEvent(id, eventType, dateTime))

    return true
}