package pages.admin

import csstype.ClassName
import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.dom.events.ChangeEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label

external interface BusinessDayProps : Props {
    var day: Int
}

val regularHourComponent = FC<BusinessDayProps> { props ->
    val day = deserializeDay(props.day)
    val changeHandler: ChangeEventHandler<HTMLInputElement> = {

    }
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
            }
            label {
                htmlFor = "$day-close"
                +("to")
            }
            input {
                type = InputType.time
                id = "$day-close"
            }
            div {
                className = ClassName("form-check form-swtich")
                input {
                    className = ClassName("form-check-input")
                    type = InputType.checkbox
                    id = "$day-is-closed"
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
    form {
        for (i in 0..6) {
            regularHourComponent {
                day = i
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