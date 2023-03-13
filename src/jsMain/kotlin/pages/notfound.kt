package pages

import react.FC
import react.Props
import react.dom.html.ReactHTML.h1

val pageNotFound = FC<Props> {
    h1 {
        +"Page Not Found"
    }
}