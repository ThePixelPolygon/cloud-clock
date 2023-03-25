package me.matt.application

import BusinessDay
import Employee
import TimeEvent
import com.mongodb.ConnectionString
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.html.*
import io.ktor.server.http.content.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.html.*
import org.litote.kmongo.coroutine.coroutine
import org.litote.kmongo.reactivestreams.KMongo

fun HTML.index() {
    head {
        title("Cloud Clock")
        link(rel = "stylesheet", href = "/static/css/bootstrap.css")
        link(rel = "stylesheet", href = "https://fonts.googleapis.com/icon?family=Material+Icons")
        link(rel = "stylesheet", href = "/static/css/style.css")
        meta("viewport", "width=device-width, initial-scale=1")
    }
    body {
        nav {
            classes = setOf("navbar", "navbar-expand-md", "navbar-light", "bg-light")
            div {
                classes = setOf("container-fluid")
                button {
                    classes = setOf("navbar-toggler")
                    type = ButtonType.button
                    attributes["data-bs-toggle"] = "collapse"
                    attributes["data-bs-target"] = "#navbarnav"
                    attributes["aria-controls"] = "navbarnav"
                    attributes["aria-expanded"] = "false"
                    attributes["aria-label"] = "Toggle navigation"
                    span("navbar-toggler-icon")
                }
                div {
                    classes = setOf("collapse", "navbar-collapse")
                    id = "navbarnav"
                    ul {
                        classes = setOf("navbar-nav")
                        li {
                            classes = setOf("nav-item")
                            a {
                                classes = setOf("nav-link")
                                href = "/clock"
                                +("Clock")
                            }
                        }
                        li {
                            classes = setOf("nav-item")
                            a {
                                classes = setOf("nav-link")
                                href = "/admin"
                                +("Administrator Console")
                            }
                        }
                    }
                }
            }
        }
        div {

        }
        div {
            classes = setOf("mt-5")
            id = "root"
        }
        script(src = "/static/js/bootstrap.bundle.js") {}
        script(src = "/static/cloud-clock.js") {}
    }
}


val connectionString: ConnectionString? = System.getenv("MONGODB_URI")?.let {
    ConnectionString("$it?retryWrites=false")
}

val client = if (connectionString != null) KMongo.createClient(connectionString).coroutine
    else KMongo.createClient().coroutine

val database = client.getDatabase("cloudclock-debug")
val employees = database.getCollection<Employee>("employee")

val events = database.getCollection<TimeEvent>("events")

fun main() {
    val port = System.getenv("PORT")?.toInt() ?: 8080
    val host = System.getenv("HOST")?.toString() ?: "127.0.0.1"
    embeddedServer(Netty, port, module = Application::myApplicationModule).start(wait = true)
}

fun Application.myApplicationModule() {
    install(ContentNegotiation) {
        json()
    }
    install(CORS) {
        allowMethod(HttpMethod.Get)
        allowMethod(HttpMethod.Post)
        allowMethod(HttpMethod.Delete)
        allowMethod(HttpMethod.Put)
    }
    routing {
        route("/") {
            get("{...}") {
                call.respondHtml(HttpStatusCode.OK, HTML::index)
            }
            get() {
                call.respondHtml(HttpStatusCode.OK, HTML::index)
            }
        }
        static("/static") {
            resources(".")
            resource("cloud-clock.js")
        }
        static("{...}") {
            resources(".")
            resource("cloud-clock.js")
        }
        route(Employee.path) {
            get {
                call.respond(employees.find().toList())
            }
            post {
                val emp = call.receive<Employee>()
                employees.insertOne(emp)
                call.respond(HttpStatusCode.OK)
            }
            delete("/{id}") {
                val id = call.parameters["id"]
                employees.findOneAndDelete("{ user_id: '$id' }")
                call.respond(HttpStatusCode.OK)
            }
            get("/{id}") {
                val id = call.parameters["id"]
                var user = employees.findOne("{ user_id: '$id'}")
                var response = user ?: "User not found"
                call.respond(response)
            }
            put {
                val emp = call.receive<List<Employee>>()
                employees.replaceOne("{ user_id: '${emp[0].user_id}' }", emp[1])
            }
        }
        route(TimeEvent.path) {
            get {
                call.respond(events.find().limit(10).toList())
            }
            post {
                val event = call.receive<TimeEvent>()
                events.insertOne(event)
                call.respond(HttpStatusCode.OK)
            }
        }
        route(BusinessDay.path) {
            get {

            }
            get("/{day}") {

            }
        }
//        get("/") {
//            call.respondText(this::class.java.classLoader.getResource("index.html")!!.readText(),
//                ContentType.Text.Html)
//        }
//        get("/clock") {
//            call.respondText(this::class.java.classLoader.getResource("index.html")!!.readText(),
//                ContentType.Text.Html)
//        }
//        get("/admin") {
//            call.respondText(this::class.java.classLoader.getResource("index.html")!!.readText(),
//                ContentType.Text.Html)
//        }
//        static("/") {
//            resources("")
//        }
//        static("/static") {
//            resources(".")
//        }
    }
}