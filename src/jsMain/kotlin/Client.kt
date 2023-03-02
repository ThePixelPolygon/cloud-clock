
import csstype.ClassName
import kotlinx.browser.document
import org.w3c.dom.Element
import react.Fragment
import react.create
import react.dom.client.createRoot
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.p

var container: Element? = null

fun main() {
    val modes = listOf("root", "clockroot", "adminroot")
    val mode = getmode(modes)
    when(mode) {
        1 -> home(container!!)
        2 -> clock(container!!)
    }
}

fun getmode(modes: List<String>): Int {
    var cnt = 0
    while (container == null || cnt < modes.size) {
        container = document.getElementById(modes[cnt])
        cnt++
    }
    return cnt
}

fun home(container: Element) {
    document.body!!.appendChild(container)
    createRoot(container).render(Fragment.create {
        div() {
            className = ClassName("container")
            h1 {
                +("Home Mode")
            }
        }
    })
}

fun clock(container: Element) {
    document.body!!.appendChild(container)
    createRoot(container).render(Fragment.create {
        div() {
            className = ClassName("container")
            h1 {
                +("Login")
            }
            p {
                +("Please enter your employee ID.")
            }
        }
    })
}