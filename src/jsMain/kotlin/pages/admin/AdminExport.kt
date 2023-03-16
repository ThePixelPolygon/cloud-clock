package pages.admin

import csstype.ClassName
import org.w3c.dom.HTMLFormElement
import react.FC
import react.Props
import react.dom.events.FormEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.input

val exportForm = FC<Props> {
    div {
        className = ClassName("container")
        h1 {
            +("Export Timesheet")
        }
        form {
            val submitHandler: FormEventHandler<HTMLFormElement> = {
                it.preventDefault()
                js("alert(\"This function currently doesn't work right now.\")")
            }
            onSubmit = submitHandler
            input {
                className = ClassName("form-control")
                type = InputType.date
            }
            input {
                className = ClassName("form-control")
                type = InputType.date
            }
            input {
                className = ClassName("btn btn-primary")
                type = InputType.submit
            }
        }
    }
}