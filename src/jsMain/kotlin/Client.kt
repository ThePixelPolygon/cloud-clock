
import csstype.ClassName
import kotlinx.browser.document
import org.w3c.dom.Element
import react.Fragment
import react.create
import react.dom.client.createRoot
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1

var container: Element? = null

fun main() {
    val modes = listOf("root", "clockroot", "adminroot")
    val mode = getmode(modes)

    if (mode == 0) {
        document.body!!.appendChild(container!!)
        createRoot(container!!).render(Fragment.create {
            div() {
                className = ClassName("container")
                h1 {
                    +("Home Mode")
                }
            }
        })
    }
    else if (mode == 1) {
        document.body!!.appendChild(container!!)
        createRoot(container!!).render(Fragment.create {
            div() {
                className = ClassName("container")
                h1 {
                    +("Login")
                }
                ReactHTML.p {
                    +("Please enter your employee ID.")
                }
            }
        })
    }
}

fun getmode(modes: List<String>): Int {
    var cnt = 0
    while (container == null || cnt < modes.size) {
        container = document.getElementById(modes[cnt])
        cnt++
    }
    return cnt - 1
}

fun home() {

}

fun clock() {

}