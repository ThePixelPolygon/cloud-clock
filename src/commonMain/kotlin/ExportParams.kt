import kotlinx.datetime.LocalDate
import kotlinx.serialization.Serializable

@Serializable
data class ExportParams (val employees: List<Employee>, val startDate: LocalDate, val endDate: LocalDate) {
    companion object {
        const val path = "/exportsheet"
    }
}