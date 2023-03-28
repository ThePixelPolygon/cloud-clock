package me.matt.application

import Employee
import TimeEvent
import io.ktor.events.*
import kotlinx.datetime.LocalDate
import kotlinx.datetime.LocalTime
import org.apache.poi.ss.usermodel.Cell
import org.apache.poi.ss.usermodel.Workbook
import org.apache.poi.xssf.usermodel.XSSFWorkbook
import java.io.FileOutputStream
import java.io.IOException

class SpreadsheetWriter {
    private fun getEvents(employee: Employee, events: List<TimeEvent>) : List<TimeEvent> {
        return events.filter { it.eventEmployee.name == employee.name }
    }
    fun eventListToMap(events: List<TimeEvent>): MutableMap<LocalDate, MutableList<LocalTime>> {
        val sortedEvents = events.sortedBy { it.date }
        var dateList: MutableMap<LocalDate, MutableList<LocalTime>> = mutableMapOf()

        var date: LocalDate = LocalDate(1970, 1, 1)
        var timeList: MutableList<LocalTime> = mutableListOf()
        for (event in sortedEvents) {
            if (date != event.date) {
                date = event.date
                timeList = mutableListOf()
                dateList.put(date, timeList)
            }
            timeList.add(event.time)
        }
        return dateList
    }
    private fun writeTime(events: List<TimeEvent>, workbook: Workbook, employee: Employee) {
        val sheet = workbook.createSheet()
        val dateStyle = workbook.createCellStyle()
        dateStyle.dataFormat = workbook.creationHelper.createDataFormat().getFormat("m/d/yy")
        val timeStyle = workbook.createCellStyle()
        timeStyle.dataFormat = workbook.creationHelper.createDataFormat().getFormat("h:mm")

        var row = sheet.createRow(0)

        // Sheet headers
        row.createCell(1).setCellValue("Name")
        row.createCell(2).setCellValue(employee.name)

        var counter = 2
        row = sheet.createRow(1)

        // Remap all events as maps by date
        val eventMap = eventListToMap(events)
        val listLengths: MutableList<Int> = mutableListOf()
        for (date in eventMap.keys) {
            listLengths.add(eventMap[date]!!.size)
        }

        // Determine how many columns are needed to account for all time events
        val maxCols: Int = listLengths.max() / 2
        row.createCell(0).setCellValue("Date")

        // Time headers
        for (col in 1..maxCols + 1) {
            row.createCell(col).setCellValue("IN")
            row.createCell(col + 1).setCellValue("OUT")
        }

        // Populating empty cells with times
        for (date in eventMap.keys) {
            val timeList: MutableList<LocalTime>? = eventMap[date]
            row = sheet.createRow(counter)
            var hCounter = 1
            val dateCell: Cell = row.createCell(0)
            dateCell.setCellValue(date.toJavaLocalDate())
            dateCell.cellStyle = dateStyle

            for (time in timeList!!) {
                val timeCell = row.createCell(hCounter)

                timeCell.setCellValue(time.toString())
                timeCell.cellStyle = timeStyle

                hCounter++
            }

            counter++
        }
    }
    @Throws(IOException::class)
    fun writeSpreadsheet(outputStream: FileOutputStream, employees: List<Employee>, events: List<TimeEvent>) {
        val workbook = XSSFWorkbook()
        for (employee in employees) {
            writeTime(events, workbook, employee)
        }
        workbook.write(outputStream)
        outputStream.close()
    }
}