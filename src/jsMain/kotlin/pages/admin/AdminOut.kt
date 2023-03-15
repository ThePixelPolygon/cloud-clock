package pages.admin

import csstype.ClassName
import react.FC
import react.Props
import react.dom.aria.AriaCurrent
import react.dom.aria.ariaCurrent
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.li
import react.dom.html.ReactHTML.nav
import react.dom.html.ReactHTML.ul
import react.router.Outlet

val adminOutlet = FC<Props> {
    div {
        className = ClassName("container-fluid")
        nav {
            ul {
                className = ClassName("nav nav-tabs")
                li {
                    className = ClassName("nav-item")
                    a {
                        className = ClassName("nav-link")
                        ariaCurrent = AriaCurrent.page
                        href = "/admin"
                        +("Home")
                    }
                }
                li {
                    className = ClassName("nav-item")
                    a {
                        className = ClassName("nav-link")
                        ariaCurrent = AriaCurrent.page
                        href = "/admin/employees"
                        +("Employees")
                    }
                }
                li {
                    className = ClassName("nav-item")
                    a {
                        className = ClassName("nav-link")
                        ariaCurrent = AriaCurrent.page
                        href = "/admin/hours"
                        +("Business Hours")
                    }
                }
                li {
                    className = ClassName("nav-item")
                    a {
                        className = ClassName("nav-link")
                        ariaCurrent = AriaCurrent.page
                        href = "/admin/export"
                        +("Export Timesheet")
                    }
                }
            }
        }
        div {
            className = ClassName("container-fluid mt-2")
            Outlet()
        }
    }
}