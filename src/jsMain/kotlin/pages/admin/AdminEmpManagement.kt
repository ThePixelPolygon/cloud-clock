package pages.admin

import csstype.ClassName
import csstype.HtmlAttributes
import kotlinx.browser.document
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import org.w3c.dom.*
import react.dom.html.DataHTMLAttributes
import react.dom.html.ReactHTML.data
import react.dom.html.ReactHTML.datalist

val employeeManagement = FC<Props> {
    div {
        className = ClassName("container")
        div {
            className = ClassName("list-item")
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
    }
    val empList = listOf(document.getElementById("it1"), document.getElementById("it2"))
    for (it in empList) {
        if (it is Element) {
            it.setAttribute("data-bs-toggle", "list")
        }
    }
}