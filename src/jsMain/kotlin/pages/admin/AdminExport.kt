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
import react.dom.html.ReactHTML.label

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
            label {
                className = ClassName("form-label")
                htmlFor = "from"
                +("From")
            }
            input {
                className = ClassName("form-control")
                id = "from"
                type = InputType.date
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
            }
            input {
                className = ClassName("btn btn-primary")
                type = InputType.submit
            }
        }
    }
}