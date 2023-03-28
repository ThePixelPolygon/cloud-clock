import kotlinx.datetime.LocalTime
import kotlinx.serialization.Serializable

@Serializable
data class BusinessDay(val day: Int, val closed: Boolean, val openTime: LocalTime, val closeTime: LocalTime) {
    companion object {
        const val path = "/businesshours"
        val days = mapOf(
            Pair("sun", 0),
            Pair("mon", 1),
            Pair("tue", 2),
            Pair("wed", 3),
            Pair("thu", 4),
            Pair("fri", 5),
            Pair("sat", 6)
        )
    }
}