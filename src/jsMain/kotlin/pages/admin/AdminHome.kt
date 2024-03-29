package pages.admin
import ENTER
import EXIT
import Employee
import TimeEvent
import csstype.ClassName
import getEmployees
import getEvents
import kotlinx.coroutines.launch
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.table
import react.dom.html.ReactHTML.tbody
import react.dom.html.ReactHTML.td
import react.dom.html.ReactHTML.th
import react.dom.html.ReactHTML.thead
import react.dom.html.ReactHTML.tr
import react.useState
import scope

val logTable = FC<Props>{ props ->
    var employees by useState(emptyList<Employee>())
    var events by useState(emptyList<TimeEvent>())
    scope.launch {
        employees = getEmployees()
        events = getEvents()
    }
    div {
        h1 {
            +("Event Log")
        }
        className = ClassName("container")
        table {
            thead {
                tr {
                    th {
                        +("ID")
                    }
                    th {
                        +("Name")
                    }
                    th {
                        +("Event")
                    }
                    th {
                        +("Date")
                    }
                    th {
                        +("Time")
                    }
                }
            }
            tbody {
                for (event: TimeEvent in events) {
                    tr {
                        td {
                            +(event.eventEmployee.user_id)
                        }
                        td {
                            +(event.eventEmployee.name)
                        }
                        td {
                            +(when(event.eventType) {
                                ENTER -> "In"
                                EXIT -> "Out"
                                else -> "?"
                            })
                        }
                        td {
                            +(event.date.toString())
                        }
                        td {
                            +(event.time.toString())
                        }
                    }
                }
            }
            className = ClassName("table")
            id = ("thetable")
        }
    }
}

fun getName(employees: List<Employee>, id: String): String {
    for (employee: Employee in employees) {
        if (employee.user_id == id) {
            return employee.name
        }
    }
    return "?"
}