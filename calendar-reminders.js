// Calendar Reminder System for Weekly Resources

// Generate ICS calendar file for week reminders
function generateWeekCalendar(weekNum, week) {
  const today = new Date();
  const monday = getNextMonday(today);
  
  // Create reminders for Monday-Friday at key times
  const reminders = [
    {
      day: 0, // Monday
      hour: 9,
      minute: 0,
      title: `Week ${weekNum}: ${week.theme} - Begin with Thanks`,
      description: `${week.practices[0]}\n\n"${week.mondayPrayer}"\n\n${week.verse}`
    },
    {
      day: 1, // Tuesday
      hour: 9,
      minute: 0,
      title: `Week ${weekNum}: ${week.theme}`,
      description: `Today's practice: ${week.practices[1]}\n\nReflection: ${week.subtitle}\n\n${week.verse}`
    },
    {
      day: 2, // Wednesday
      hour: 12,
      minute: 0,
      title: `Week ${weekNum}: ${week.theme} - Midweek Check`,
      description: `${week.practices[2]}\n\nRemember: ${week.subtitle}\n\n${week.verse}`
    },
    {
      day: 3, // Thursday
      hour: 9,
      minute: 0,
      title: `Week ${weekNum}: ${week.theme}`,
      description: `Reflection: ${week.reflection.substring(0, 200)}...\n\n${week.verse}`
    },
    {
      day: 4, // Friday
      hour: 16,
      minute: 0,
      title: `Week ${weekNum}: ${week.theme} - Week Review`,
      description: `How did you live out this week's theme?\n\nReflect on: ${week.subtitle}\n\n${week.verse}`
    }
  ];

  let icsContent = 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//The Carpenter//Weekly Reminders//EN\r\nCALSCALE:GREGORIAN\r\n';

  reminders.forEach(reminder => {
    const eventDate = new Date(monday);
    eventDate.setDate(monday.getDate() + reminder.day);
    eventDate.setHours(reminder.hour, reminder.minute, 0, 0);

    const uid = `${weekNum}-${reminder.day}@thecarpenter.com`;
    const startDate = formatICSDate(eventDate);
    const endDate = formatICSDate(new Date(eventDate.getTime() + 5 * 60000)); // 5 minutes

    icsContent += 'BEGIN:VEVENT\r\n';
    icsContent += `UID:${uid}\r\n`;
    icsContent += `DTSTART:${startDate}\r\n`;
    icsContent += `DTEND:${endDate}\r\n`;
    icsContent += `SUMMARY:${escapeICS(reminder.title)}\r\n`;
    icsContent += `DESCRIPTION:${escapeICS(reminder.description)}\r\n`;
    icsContent += `BEGIN:VALARM\r\n`;
    icsContent += `TRIGGER:-PT0M\r\n`;
    icsContent += `ACTION:DISPLAY\r\n`;
    icsContent += `DESCRIPTION:Reminder\r\n`;
    icsContent += `END:VALARM\r\n`;
    icsContent += 'END:VEVENT\r\n';
  });

  icsContent += 'END:VCALENDAR\r\n';

  return icsContent;
}

// Get next Monday from given date
function getNextMonday(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? 1 : (day === 1 ? 7 : 8 - day);
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

// Format date for ICS file
function formatICSDate(date) {
  const pad = (n) => n.toString().padStart(2, '0');
  return date.getFullYear() +
    pad(date.getMonth() + 1) +
    pad(date.getDate()) + 'T' +
    pad(date.getHours()) +
    pad(date.getMinutes()) +
    pad(date.getSeconds());
}

// Escape special characters for ICS
function escapeICS(str) {
  return str.replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
}

// Download ICS file
function downloadWeekReminders(weekNum) {
  const week = weeklyResources[weekNum];
  if (!week) return;

  const icsContent = generateWeekCalendar(weekNum, week);
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `week-${weekNum}-${week.theme.toLowerCase().replace(/\s+/g, '-')}-reminders.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Add all unlocked weeks reminders
function addAllWeeksReminders(timeOfDay = 'all') {
  const currentWeek = getWeekNumber();
  let icsContent = 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//The Carpenter//All Weeks Reminders//EN\r\nCALSCALE:GREGORIAN\r\n';

  // Loop through all unlocked weeks
  for (let weekNum = 1; weekNum <= currentWeek; weekNum++) {
    const week = weeklyResources[weekNum];
    if (!week) continue;

    const weekStart = new Date();
    weekStart.setDate(weekStart.getDate() + ((weekNum - 1) * 7));
    const monday = getNextMonday(weekStart);

    if (timeOfDay === 'all') {
      // Add full week reminders for each unlocked week
      const reminders = [
        {
          day: 0,
          hour: 9,
          minute: 0,
          title: `Week ${weekNum}: ${week.theme} - Begin with Thanks`,
          description: `${week.practices[0]}\n\n"${week.mondayPrayer}"\n\n${week.verse}`
        },
        {
          day: 2,
          hour: 12,
          minute: 0,
          title: `Week ${weekNum}: ${week.theme} - Midweek Check`,
          description: `${week.practices[1]}\n\nRemember: ${week.subtitle}\n\n${week.verse}`
        },
        {
          day: 4,
          hour: 16,
          minute: 0,
          title: `Week ${weekNum}: ${week.theme} - Week Review`,
          description: `How did you live out this week's theme?\n\nReflect on: ${week.subtitle}\n\n${week.verse}`
        }
      ];

      reminders.forEach((reminder, idx) => {
        const eventDate = new Date(monday);
        eventDate.setDate(monday.getDate() + reminder.day);
        eventDate.setHours(reminder.hour, reminder.minute, 0, 0);

        const uid = `all-${weekNum}-${idx}@thecarpenter.com`;
        const startDate = formatICSDate(eventDate);
        const endDate = formatICSDate(new Date(eventDate.getTime() + 5 * 60000));

        icsContent += 'BEGIN:VEVENT\r\n';
        icsContent += `UID:${uid}\r\n`;
        icsContent += `DTSTART:${startDate}\r\n`;
        icsContent += `DTEND:${endDate}\r\n`;
        icsContent += `SUMMARY:${escapeICS(reminder.title)}\r\n`;
        icsContent += `DESCRIPTION:${escapeICS(reminder.description)}\r\n`;
        icsContent += `BEGIN:VALARM\r\n`;
        icsContent += `TRIGGER:-PT0M\r\n`;
        icsContent += `ACTION:DISPLAY\r\n`;
        icsContent += `DESCRIPTION:Reminder\r\n`;
        icsContent += `END:VALARM\r\n`;
        icsContent += 'END:VEVENT\r\n';
      });
    } else {
      // Add specific time reminder for all weeks
      let hour, minute, title, description;
      
      switch(timeOfDay) {
        case 'morning':
          hour = 9;
          minute = 0;
          title = `Week ${weekNum}: ${week.theme}`;
          description = `${week.mondayPrayer}\n\nPractice: ${week.practices[0]}\n\n${week.verse}`;
          break;
        case 'lunch':
          hour = 12;
          minute = 0;
          title = `Week ${weekNum}: ${week.theme}`;
          description = `Midday reflection: ${week.subtitle}\n\n${week.verse}`;
          break;
        case 'afternoon':
          hour = 15;
          minute = 0;
          title = `Week ${weekNum}: ${week.theme}`;
          description = `Practice: ${week.practices[1]}\n\n${week.verse}`;
          break;
        case 'endofday':
          hour = 17;
          minute = 0;
          title = `Week ${weekNum}: ${week.theme}`;
          description = `Reflect: ${week.subtitle}\n\n${week.verse}`;
          break;
      }

      // Add Mon-Fri for this week
      for (let i = 0; i < 5; i++) {
        const eventDate = new Date(monday);
        eventDate.setDate(monday.getDate() + i);
        eventDate.setHours(hour, minute, 0, 0);

        const uid = `all-${timeOfDay}-${weekNum}-${i}@thecarpenter.com`;
        const startDate = formatICSDate(eventDate);
        const endDate = formatICSDate(new Date(eventDate.getTime() + 5 * 60000));

        icsContent += 'BEGIN:VEVENT\r\n';
        icsContent += `UID:${uid}\r\n`;
        icsContent += `DTSTART:${startDate}\r\n`;
        icsContent += `DTEND:${endDate}\r\n`;
        icsContent += `SUMMARY:${escapeICS(title)}\r\n`;
        icsContent += `DESCRIPTION:${escapeICS(description)}\r\n`;
        icsContent += `BEGIN:VALARM\r\n`;
        icsContent += `TRIGGER:-PT0M\r\n`;
        icsContent += `ACTION:DISPLAY\r\n`;
        icsContent += `DESCRIPTION:Reminder\r\n`;
        icsContent += `END:VALARM\r\n`;
        icsContent += 'END:VEVENT\r\n';
      }
    }
  }

  icsContent += 'END:VCALENDAR\r\n';

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `all-weeks-${timeOfDay}-reminders.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Add all reminders for a single week (all times Mon-Fri)
function addAllRemindersSingleWeek(weekNum) {
  const week = weeklyResources[weekNum];
  if (!week) return;

  const today = new Date();
  const monday = getNextMonday(today);
  
  let icsContent = 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//The Carpenter//Week All Reminders//EN\r\nCALSCALE:GREGORIAN\r\n';

  // Define all reminder times
  const reminderTimes = [
    { hour: 9, minute: 0, label: 'Morning', description: `${week.mondayPrayer}\n\nPractice: ${week.practices[0]}` },
    { hour: 12, minute: 0, label: 'Lunch', description: `Midday reflection: ${week.subtitle}\n\nPractice: ${week.practices[1]}` },
    { hour: 15, minute: 0, label: 'Afternoon', description: `Keep focus: ${week.practices[2] || week.practices[1]}` },
    { hour: 17, minute: 0, label: 'End of Day', description: `Reflect on today: How did you live out ${week.subtitle}?` }
  ];

  // Create reminders for Mon-Fri at all times
  for (let dayOffset = 0; dayOffset < 5; dayOffset++) {
    reminderTimes.forEach((time, timeIdx) => {
      const eventDate = new Date(monday);
      eventDate.setDate(monday.getDate() + dayOffset);
      eventDate.setHours(time.hour, time.minute, 0, 0);

      const uid = `week${weekNum}-all-day${dayOffset}-time${timeIdx}@thecarpenter.com`;
      const startDate = formatICSDate(eventDate);
      const endDate = formatICSDate(new Date(eventDate.getTime() + 5 * 60000));

      icsContent += 'BEGIN:VEVENT\r\n';
      icsContent += `UID:${uid}\r\n`;
      icsContent += `DTSTART:${startDate}\r\n`;
      icsContent += `DTEND:${endDate}\r\n`;
      icsContent += `SUMMARY:${escapeICS(`Week ${weekNum}: ${week.theme} - ${time.label}`)}\r\n`;
      icsContent += `DESCRIPTION:${escapeICS(time.description + '\n\n' + week.verse)}\r\n`;
      icsContent += `BEGIN:VALARM\r\n`;
      icsContent += `TRIGGER:-PT0M\r\n`;
      icsContent += `ACTION:DISPLAY\r\n`;
      icsContent += `DESCRIPTION:Reminder\r\n`;
      icsContent += `END:VALARM\r\n`;
      icsContent += 'END:VEVENT\r\n';
    });
  }

  icsContent += 'END:VCALENDAR\r\n';

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `week-${weekNum}-all-reminders.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Add custom reminder
function addCustomReminder(weekNum, timeOfDay) {
  const week = weeklyResources[weekNum];
  if (!week) return;

  const today = new Date();
  const monday = getNextMonday(today);
  
  let hour, minute, title, description;
  
  switch(timeOfDay) {
    case 'morning':
      hour = 9;
      minute = 0;
      title = `Morning: ${week.theme}`;
      description = `${week.mondayPrayer}\n\nPractice: ${week.practices[0]}`;
      break;
    case 'lunch':
      hour = 12;
      minute = 0;
      title = `Lunch Break: ${week.theme}`;
      description = `Midday reflection: ${week.subtitle}\n\n${week.verse}`;
      break;
    case 'afternoon':
      hour = 15;
      minute = 0;
      title = `Afternoon: ${week.theme}`;
      description = `Practice: ${week.practices[1]}\n\n${week.verse}`;
      break;
    case 'endofday':
      hour = 17;
      minute = 0;
      title = `End of Day: ${week.theme}`;
      description = `Reflect on today: How did you live out ${week.subtitle}?\n\n${week.verse}`;
      break;
  }

  let icsContent = 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//The Carpenter//Custom Reminder//EN\r\n';
  
  // Create 5 events (Mon-Fri)
  for (let i = 0; i < 5; i++) {
    const eventDate = new Date(monday);
    eventDate.setDate(monday.getDate() + i);
    eventDate.setHours(hour, minute, 0, 0);

    const uid = `${weekNum}-custom-${timeOfDay}-${i}@thecarpenter.com`;
    const startDate = formatICSDate(eventDate);
    const endDate = formatICSDate(new Date(eventDate.getTime() + 5 * 60000));

    icsContent += 'BEGIN:VEVENT\r\n';
    icsContent += `UID:${uid}\r\n`;
    icsContent += `DTSTART:${startDate}\r\n`;
    icsContent += `DTEND:${endDate}\r\n`;
    icsContent += `SUMMARY:${escapeICS(title)}\r\n`;
    icsContent += `DESCRIPTION:${escapeICS(description)}\r\n`;
    icsContent += `BEGIN:VALARM\r\n`;
    icsContent += `TRIGGER:-PT0M\r\n`;
    icsContent += `ACTION:DISPLAY\r\n`;
    icsContent += `DESCRIPTION:Reminder\r\n`;
    icsContent += `END:VALARM\r\n`;
    icsContent += 'END:VEVENT\r\n';
  }

  icsContent += 'END:VCALENDAR\r\n';

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `week-${weekNum}-${timeOfDay}-reminder.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

