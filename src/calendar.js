import React from "react";
import moment from "moment";
import Nav from "./Nav";
import Footer from "./Footer";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Calendar() {
  const navigate = useNavigate();
  // Set the start date to the first day of June 2023
  const startDate = moment("2023-06-01").startOf("month").startOf("week");
  // Set the end date to the last day of June 2023
  const endDate = moment("2023-06-30").endOf("month").endOf("week");
  const days = [];
  const currentDate = startDate.clone();

  while (currentDate.isSameOrBefore(endDate, "day")) {
    days.push(currentDate.clone());
    currentDate.add(1, "day");
  }

  // Render the calendar UI
  return (
    <div>
      <Nav />
      <div className="container2">
        <div className="iconBack">
          <h1 onClick={() => navigate("/Appointment")}>
            <FaArrowLeft />
          </h1>
        </div>
        <center>
          <h2 className="calendarTitle">Availability of June</h2>
        </center>
        <table className="calendar">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>{renderWeeks(days)}</tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
function renderWeeks(days) {
  const weeks = [];
  let week = [];

  days.forEach((day) => {
    week.push(day);

    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });

  return weeks.map((week, index) => (
    <tr key={index}>
      {week.map((day) => (
        <td
          key={day.format("YYYY-MM-DD")}
          className={`calendar-cell ${isWeekend(day) ? "weekend" : ""} ${
            isNotJune(day) ? "other-month" : ""
          } ${isNotAvailable(day) ? "not-available" : ""}`}
        >
          {day.format("D")}
        </td>
      ))}
    </tr>
  ));
}
function isWeekend(day) {
  const dayOfWeek = day.day();
  return dayOfWeek === 0 || dayOfWeek === 6;
}

function isNotJune(day) {
  return !day.isSame(moment("2023-06"), "month"); // Check if the day is not in June
}

function isNotAvailable(day) {
  return day.date() === 12; // Change to your logic for determining not available days
}

export default Calendar;
