package me.matt.application

import Employee
import TimeEvent
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.http.content.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.html.*

fun HTML.index() {
    head {
        title("Hello from Ktor!")
    }
    body {
        div {
            +"Hello from Ktor"
        }
        div {
            id = "root"
        }
        script(src = "/static/cloud-clock.js") {}
    }
}

val employees = mutableListOf(Employee("Matthew Ganotisi", 1),
    Employee("Joaquin Pacia", 2))
val events = mutableListOf<TimeEvent>()

fun main() {
    embeddedServer(Netty, port = 8080, host = "127.0.0.1", module = Application::myApplicationModule).start(wait = true)
}

fun Application.myApplicationModule() {
    install(ContentNegotiation) {
        json()
    }
    install(CORS) {
        allowMethod(HttpMethod.Get)
        allowMethod(HttpMethod.Post)
        allowMethod(HttpMethod.Delete)
    }
    routing {
        route(Employee.path) {
            get {
                call.respond(employees)
            }
            post {
                employees += call.receive<Employee>()
                call.respond(HttpStatusCode.OK)
            }
            delete("/{id}") {
                val id = call.parameters["id"]?.toLong() ?: error("No employee exists with that ID")
                employees.removeIf { it.id == id }
                call.respond(HttpStatusCode.OK)
            }
        }
        route(TimeEvent.path) {
            get {
                call.respond(events)
            }
            post {
                events += call.receive<TimeEvent>()
                call.respond(HttpStatusCode.OK)
            }
        }
        get("/") {
            call.respondText(this::class.java.classLoader.getResource("index.html")!!.readText(),
                ContentType.Text.Html)
        }
        get("/admin") {
            call.respondText(this::class.java.classLoader.getResource("console.html")!!.readText(),
                ContentType.Text.Html)
        }
        get("/clock") {
            call.respondText(this::class.java.classLoader.getResource("clock.html")!!.readText(),
                ContentType.Text.Html)
        }
        static("") {
            resources("")
        }
        static("/static") {
            resources()
        }
    }
}