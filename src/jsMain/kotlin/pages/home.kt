package pages

import csstype.ClassName
import react.FC
import react.Props
import react.dom.html.ReactHTML.b
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.p

val homePage = FC<Props> {
    div {
        className = ClassName("container")
        div {
            className = ClassName("row")
            div {
                className = ClassName("col-12 col-lg-6")
                h1 {
                    className = ClassName("page-header")
                    +("CloudClock")
                }
                p {
                    +("Welcome to ")
                    b {
                        className = ClassName("page-header")
                        +("CloudClock")
                    }
                    +(", the web-based application for time tracking and employee management!")
                }
                p {
                    +("Easily track employee hours. Manage employees from the employee list." +
                            " Set business hours and cross-check them with employee hours. " +
                            "Export time sheets for selected employees.")
                }
                p {
                    +("Choose CloudClock for the ultimate time tracking and employee management solution for your" +
                            "business.")
                }
            }
            div {
                className = ClassName("col-12 col-lg-6")
                img {
                    className = ClassName("img-fluid")
                    src = "/static/img/clock.png"
                    alt = "A clock."
                }
            }
        }
    }
}