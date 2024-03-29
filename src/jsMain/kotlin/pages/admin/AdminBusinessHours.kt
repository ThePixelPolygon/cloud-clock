package pages.admin

import BusinessDay
import csstype.ClassName
import getHours
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.datetime.toLocalTime
import org.w3c.dom.HTMLFormElement
import org.w3c.dom.HTMLInputElement
import putHour
import react.FC
import react.Props
import react.StateSetter
import react.dom.events.ChangeEventHandler
import react.dom.events.FormEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.dom.html.ReactHTML.p
import react.useState

val mainScope = MainScope()
external interface BusinessDayProps : Props {
    var day: Int
    var openTime: String
    var closeTime: String
    var closed: Boolean
}

fun writeChange(businessDay: BusinessDay) {
    println("Saving...")
    mainScope.launch {
        putHour(businessDay)
        println("Done.")
    }
}

val regularHourComponent = FC<BusinessDayProps> { props ->
    var (opTime, opTimeChange) = useState(props.openTime)
    var (clTime, clTimeChange) = useState(props.closeTime)
    val (isClosed: Boolean, isClosedChange: StateSetter<Boolean>) = useState(props.closed)
    var businessHour = BusinessDay(props.day, isClosed, opTime.toLocalTime(), clTime.toLocalTime())
    val openChangeHandler: ChangeEventHandler<HTMLInputElement> = {
        opTimeChange(it.target.value)
        businessHour.openTime = opTime.toLocalTime()
        writeChange(businessHour)
    }
    val closeChangeHandler: ChangeEventHandler<HTMLInputElement> = {
        clTimeChange(it.target.value)
        businessHour.closeTime = clTime.toLocalTime()
        writeChange(businessHour)
    }
    val closedHandler: ChangeEventHandler<HTMLInputElement> = {
        isClosedChange.invoke(!isClosed)
        businessHour.closed = !isClosed
        println(!isClosed)
        writeChange(businessHour)
    }
    val day = deserializeDay(props.day)
        label {
            className = ClassName("form-label")
            htmlFor = day
            +day
        }
        div {
            className = ClassName("d-flex flex-row")
            input {
                id = day
                type = InputType.time
                value = opTime
                onChange = openChangeHandler
                required = true
            }
            label {
                htmlFor = "$day-close"
                +("to")
            }
            input {
                type = InputType.time
                id = "$day-close"
                onChange = closeChangeHandler
                value = clTime
                required = true
            }
            div {
                className = ClassName("form-check form-swtich")
                input {
                    className = ClassName("form-check-input")
                    type = InputType.checkbox
                    id = "$day-is-closed"
                    checked = isClosed
                    onChange = closedHandler
                }
                label {
                    className = ClassName("form-check-label")
                    htmlFor = "$day-is-closed"
                    +("Closed")
                }
            }
        }
}

val regularHoursList = FC<Props> {
    var regularHours by useState(emptyList<BusinessDay>())
    mainScope.launch {
        regularHours = getHours()
    }
    val submitHandler: FormEventHandler<HTMLFormElement> = {
        it.preventDefault()
    }
    h1 {
        +("Business Hours")
    }
    p {
        +("Changes are saved automatically.")
    }
    form {
        onSubmit = submitHandler
        for (hour in regularHours) {
            regularHourComponent {
                day = hour.day
                openTime = hour.openTime.toString()
                closeTime = hour.closeTime.toString()
                closed = hour.closed
            }
        }
    }

}

private fun deserializeDay(day: Int): String {
    return when (day) {
        0 -> "Sunday"
        1 -> "Monday"
        2 -> "Tuesday"
        3 -> "Wednesday"
        4 -> "Thursday"
        5 -> "Friday"
        6 -> "Saturday"
        else -> "undefined"
    }
}