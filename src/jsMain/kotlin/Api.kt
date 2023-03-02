

import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*

val jsonClient = HttpClient {
    install(ContentNegotiation) {
        json()
    }
}

suspend fun getEvents(): List<TimeEvent> {
    return jsonClient.get(TimeEvent.path).body()
}

suspend fun getEmployees(): List<Employee> {
    return jsonClient.get(Employee.path).body()
}

suspend fun postEvent(timeEvent: TimeEvent) {
    jsonClient.post(TimeEvent.path) {
        contentType(ContentType.Application.Json)
        setBody(timeEvent)
    }
}

suspend fun postEmployee(employee: Employee) {
    jsonClient.post(Employee.path) {
        contentType(ContentType.Application.Json)
        setBody(employee)
    }
}

