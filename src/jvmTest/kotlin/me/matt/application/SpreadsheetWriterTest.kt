package me.matt.application

import Employee
import TimeEvent
import kotlinx.datetime.LocalDate
import kotlinx.datetime.LocalTime
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

internal class SpreadsheetWriterTest {
    private val employee = Employee("Test Employee", "999")
    private val sampleData: List<TimeEvent> = listOf(
        TimeEvent(employee, 0, LocalDate(2023, 3, 24), LocalTime(9, 0)),
        TimeEvent(employee, 1, LocalDate(2023, 3, 24), LocalTime(17, 0)),
        TimeEvent(employee, 0, LocalDate(2023, 3, 26), LocalTime(9, 0)),
        TimeEvent(employee, 1, LocalDate(2023, 3, 26), LocalTime(17, 0))
    )

    @Test
    fun testOneDate() {
        val sample = sampleData.subList(0, 2)
        val expected: MutableMap<LocalDate, MutableList<LocalTime>> = mutableMapOf(
            Pair(LocalDate(2023, 3, 24),
                mutableListOf(LocalTime(9, 0), LocalTime(17, 0))
            )
        )
        val spreadsheetWriter = SpreadsheetWriter()
        assertEquals(expected, spreadsheetWriter.eventListToMap(sample))
    }

    @Test
    fun testMultipleDates() {
        val expected: MutableMap<LocalDate, MutableList<LocalTime>> = mutableMapOf(
            Pair(LocalDate(2023, 3, 24),
                mutableListOf(LocalTime(9, 0), LocalTime(17, 0))
            ),
            Pair(LocalDate(2023, 3, 26),
                mutableListOf(LocalTime(9, 0), LocalTime(17, 0))
            )
        )
        val spreadsheetWriter = SpreadsheetWriter()

        assertEquals(expected, spreadsheetWriter.eventListToMap(sampleData))
    }
}