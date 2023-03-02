import kotlinx.serialization.Serializable

@Serializable
data class Employee (val name: String, val id: Long){
    companion object {
        const val path = "/employees"
    }
}

@Serializable
data class TimeEvent (val id: Long, val eventType: Int, val dateTime: String) {

    companion object {
        const val path = "/eventlog"
    }
}