package me.matt.application

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
        title("Hello from Ktor!")
        link(rel = "stylesheet", href = "/static/css/bootstrap.css")

    }
    body {
        div {

        }
        div {
            id = "root"
        }
        script(src = "/static/js/cloud-clock.js") {}
        script(src = "/static/cloud-clock.js") {}
    }
}


val connectionString: ConnectionString? = System.getenv("MONGODB_URI")?.let {
    ConnectionString("$it?retryWrites=false")
}

val client = if (connectionString != null) KMongo.createClient(connectionString).coroutine
    else KMongo.createClient().coroutine
val database = client.getDatabase("cloudclock")
val employees = database.getCollection<Employee>("employee")

val events = database.getCollection<TimeEvent>("events")

fun main() {
    val port = System.getenv("PORT")?.toInt() ?: 8080
    val host = System.getenv("HOST")?.toString() ?: "127.0.0.1"
    embeddedServer(Netty, port, host = host, module = Application::myApplicationModule).start(wait = true)
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
        }
        static("{...}") {
            resources(".")
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
                employees.findOneAndDelete("{ user_id: $id }")
                call.respond(HttpStatusCode.OK)
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
//        get("/") {
//            call.respondText(this::class.java.classLoader.getResource("index.html")!!.readText(),
//                ContentType.Text.Html)
//        }
////        get("/admin") {
////            call.respondText(this::class.java.classLoader.getResource("index.html")!!.readText(),
////                ContentType.Text.Html)
////        }
////        get("/admin/employees") {
////            call.respondText(this::class.java.classLoader.getResource("index.html")!!.readText(),
////                ContentType.Text.Html)
////        }

    }
}

