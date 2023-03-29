
import kotlinx.browser.document
import kotlinx.coroutines.MainScope
import org.w3c.dom.Element
import react.FC
import react.Props
import react.create
import react.dom.client.createRoot
import react.router.Route
import react.router.Routes
import react.router.dom.BrowserRouter

var container: Element? = null

var scope = MainScope()

const val ENTER = 1
const val EXIT = 2

fun App(): FC<Props> {
    var router = FC<Props> {
        BrowserRouter {
            Routes {
                Route {
                    index = true
                    element = pages.homePage.create()
                }
                Route {
                    path = "clock"
                    element = pages.clock.Clock.create()
                }
                Route {
                    path = "admin"
                    element = pages.admin.adminOutlet.create()
                    Route {
                        index = true
                        element = pages.admin.logTable.create()
                    }
                    Route {
                        path = "employees"
                        element = pages.admin.employeeManagement.create()
                    }
                    Route {
                        path = "hours"
                        element = pages.admin.regularHoursList.create()
                    }
                    Route {
                        path = "export"
                        element = pages.admin.exportForm.create()
                    }
                }
                Route {
                    path = "*"
                    element = pages.pageNotFound.create()
                }
            }
        }
    }
    return router
}

fun main() {
    val root = document.getElementById("root")?.let { createRoot(it) }
    if (root != null) {
        root.render(App().create())
    }
}
