📘 RFID Attendance System using ESP32 + Google Sheets + OLED + Buzzer

A smart IoT-based attendance system built using ESP32, MFRC522 RFID reader, 0.91″ SSD1306 OLED display, and a buzzer, with Google Sheets as a cloud database.

This project eliminates the need for a local server by using Google Apps Script Web App to store and manage attendance data in real time.

🚀 Features

📡 Wi-Fi enabled attendance logging

🪪 RFID card scanning using RC522

🟢 OLED display feedback

Student Name

Attendance Status (Registered / Duplicate / Unknown)

🔔 Buzzer audio feedback

☁️ Google Sheets as cloud database

🚫 Duplicate attendance prevention (once per day)

📅 Automatic date & time logging

⚡ Lightweight, fast, and scalable

🧠 How It Works

ESP32 connects to a Wi-Fi network.

An RFID card is scanned using the RC522 module.

The UID is read and shown on the OLED display.

ESP32 sends the UID to a Google Apps Script Web App via HTTP.

Google Apps Script:

Verifies the UID from the registered card list

Prevents duplicate entries for the same day

Logs Date, Time, UID, and Name into Google Sheets

OLED displays the result and buzzer provides feedback.

📊 Google Sheets acts as the cloud backend — no server required.

🧰 Components Used
| Component                | Purpose                    |
| ------------------------ | -------------------------- |
| ESP32                    | Main controller with Wi-Fi |
| MFRC522 RFID Reader      | Reads RFID card UID        |
| 0.91″ SSD1306 OLED (I2C) | Displays status messages   |
| Buzzer                   | Audio feedback             |
| Google Sheets            | Cloud attendance database  |
| Google Apps Script       | Backend automation         |

📡 System Workflow
RFID Card → RC522 → ESP32 → Wi-Fi → Google Apps Script → Google Sheets
                           ↓
                      OLED + Buzzer

🛠️ Wiring Connections
🔹 RFID RC522 → ESP32
| RC522 Pin | ESP32 Pin |
| --------- | --------- |
| SDA       | D5        |
| SCK       | D18       |
| MOSI      | D23       |
| MISO      | D19       |
| RST       | D27       |
| 3.3V      | 3.3V      |
| GND       | GND       |

🔹 OLED Display (I²C) → ESP32
| OLED Pin | ESP32 Pin |
| -------- | --------- |
| VCC      | 3.3V      |
| GND      | GND       |
| SDA      | D21       |
| SCL      | D22       |

🔹 Buzzer → ESP32
Buzzer	ESP32
+	D26
–	GND
📦 Required Arduino Libraries

Install these from Arduino Library Manager:

WiFi.h

HTTPClient.h

MFRC522

Adafruit SSD1306

Adafruit GFX

ArduinoJson

☁️ Google Sheets Setup

Create a Google Sheet with:

Sheet 1: CardHolders (UID, Name)

Sheet 2: Attendance (Date, Time, UID, Name)

Open Extensions → Apps Script

Paste the provided Apps Script code

Deploy as Web App

Execute as: Me

Access: Anyone

Copy the Web App URL into the ESP32 code

🖥️ OLED Status Messages

Welcome <Name> → Attendance marked

Already Marked → Duplicate scan

Unknown Card → UID not registered

Ready | Scan Card → Idle state

🎯 Applications

Classrooms & colleges

Laboratories

Offices

Workshops & events

Secure access logging

🔮 Future Improvements

📱 Mobile dashboard

🧑‍🎓 Student ID photos

📶 Offline data caching

📊 Attendance analytics

🔐 HTTPS authentication

🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first.

📜 License

This project is licensed under the MIT License.

⭐ If you like this project

Give it a ⭐ on GitHub — it really helps!
