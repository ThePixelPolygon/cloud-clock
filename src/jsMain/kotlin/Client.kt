
import csstype.ClassName
import kotlinx.browser.document
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.datetime.LocalDateTime
import org.w3c.dom.Element
import org.w3c.dom.HTMLFormElement
import org.w3c.dom.HTMLInputElement
import react.Fragment
import react.create
import react.dom.client.createRoot
import react.dom.events.ChangeEventHandler
import react.dom.events.FormEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.useEffectOnce
import react.useState

var container: Element? = null

var scope = MainScope()

const val ENTER = 1
const val EXIT = 2



fun main() {
    val modes = listOf("root", "clockroot", "adminroot")
    val mode = getmode(modes)
    println("Operating in mode $mode")
    when (mode) {
        0 -> home()
        1 -> clock()
        2 -> admin()
    }
}

fun getmode(modes: List<String>): Int {
    var cnt = 0
    while (container !is Element && cnt < modes.size) {
        container = document.getElementById(modes[cnt])
        cnt++
    }
    return cnt - 1
}

fun home() {
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

fun clock() {
    document.body!!.appendChild(container!!)

    createRoot(container!!).render(ClockPage.create())
}

fun admin() {
    document.body!!.appendChild(container!!)
    createRoot(container!!).render(logTable.create())
}
