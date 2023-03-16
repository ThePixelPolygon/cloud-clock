import kotlinx.serialization.Serializable

@Serializable
data class Employee (val name: String, val user_id: String){
    companion object {
        const val path = "/employees"
    }
}

@Serializable
data class TimeEvent (val eventEmployee: Employee, val eventType: Int, val dateTime: String) {

    companion object {
        const val path = "/eventlog"
    }
}