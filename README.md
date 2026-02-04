📘 RFID Attendance System with ESP32 + Google Sheets + OLED + Buzzer

This is a smart IoT attendance system built using an ESP32 microcontroller, MFRC522 RFID reader, 0.91″ SSD1306 OLED display, and a buzzer. When a user scans an RFID tag, the system:

Reads the RFID card UID using the RC522 module.

Displays scan status on the OLED screen (e.g., “Present”, “Already Marked”, “Error”).

Sends attendance data (UID + timestamp) over Wi-Fi to a Google Sheets spreadsheet.

Provides audio feedback using a buzzer.

Stores all attendance logs in a Google Sheet via a deployed Google Apps Script web app.

📊 The Google Sheet becomes the cloud database — no local server required. This makes the system lightweight, scalable, and suitable for classrooms, labs, workshops, or offices.

| Component                | Purpose                    |
| ------------------------ | -------------------------- |
| ESP32                    | Main controller with Wi-Fi |
| RC522 RFID reader        | Reads RFID card UID        |
| 0.91″ SSD1306 OLED (I2C) | Shows scan feedback        |
| Buzzer                   | Audio notification         |
| Wi-Fi + Google Sheets    | Logs attendance online     |

📡 Workflow

ESP32 connects to a Wi-Fi network.

RFID card is presented to the RC522 reader.

UID is read and displayed on the OLED.

An HTTP POST sends UID + timestamp to a Google Apps Script URL.

Google Apps Script writes the data into a Google Sheet as a new row.

The buzzer confirms scan success or failure.

🛠️ Wiring Summary

RFID RC522 → ESP32:
| RC522 Pin | ESP32 |
| --------- | ----- |
| SDA       | D5    |
| SCK       | D18   |
| MOSI      | D23   |
| MISO      | D19   |
| RST       | D27   |
| 3.3V      | 3.3V  |
| GND       | GND   |

0.91 OLED (I2C) → ESP32:
| OLED Pin | ESP32 |
| -------- | ----- |
| VCC      | 3.3V  |
| GND      | GND   |
| SDA      | D21   |
| SCL      | D22   |

Buzzer → ESP32:

| Buzzer + | D26 |
| Buzzer – | GND |
