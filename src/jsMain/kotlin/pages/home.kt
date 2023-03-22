package pages

import csstype.ClassName
import react.FC
import react.Props
import react.dom.html.ReactHTML.b
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.p

val homePage = FC<Props> {
//    div {
//        className = ClassName("flex-row")
//        div {
//            id = "logo"
//            className = ClassName("flex-md-column")
////            src = index.html
//            img {
//                className = ClassName("img-fluid")
//                src = "img/logo.png"
//                alt = "ClockCloud Logo"
//            }
//            b {
//                className = ClassName("logo")
//                +("CloudClock")
//            }
//        }
//        div {
//            className = ClassName("flex-md-column")
//            h3 {
//                +("About Us")
//            }
//        }
//        div {
//            className = ClassName("flex-md-column")
//            h3 {
//                +("Contact")
//            }
//        }
//        div {
//            className = ClassName("flex-md-column")
//            h3 {
//                +("Pricing")
//            }
//        }
//        div {
//            className = ClassName("flex-md-column")
//            h3 {
//                +("How It Works")
//            }
//        }
//        div {
//            className = ClassName("col")
//        }
//        div {
//            className = ClassName("flex-md-column")
//            div {
//                className = ClassName("btn")
//                id = "login"
//                h3 {
//                    id = "login-text"
//                    +("Login")
//                }
//            }
//        }
//    }
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
                    +("Choose ")
                    b {
                        className = ClassName("page-header")
                        +("CloudClock")
                    }
                    +("for the ultimate time tracking and employee management solution for your" +
                            "business.")
                }
                div {
                    className = ClassName("btn")
                    id = "learn-more-btn"
                    h3 {
                        id = "learn-more"
                        +("Learn More")
                    }
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

