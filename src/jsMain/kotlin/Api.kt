

import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import org.w3c.files.Blob
import org.w3c.files.File

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

suspend fun getEmployee(id: String): Employee? {
    return jsonClient.get(Employee.path + "/$id").body()
}

suspend fun deleteEmployee(id: String) {
    jsonClient.delete(Employee.path + "/$id")
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

suspend fun updateEmployee(oldEmployee: Employee, newEmployee: Employee) {
    jsonClient.put(Employee.path) {
        contentType(ContentType.Application.Json)
        setBody(listOf(oldEmployee, newEmployee))
    }
}

suspend fun getSpreadsheet(exportParams: ExportParams): String {
    val request = jsonClient.post(ExportParams.path) {
        contentType(ContentType.Application.Json)
        setBody(exportParams)
    }
    return request.body()
}