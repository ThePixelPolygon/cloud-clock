# CloudClock

CloudClock is a web-based time clock app aimed at small businesses.

# Setup

## Required

- Java 8
- MongoDB

## MongoDB Database

You will need a database "cloudclock-debug" with the following collections:
- employee
- events
- reghrs

reghrs must be pre-populated with entries for each day of the week, as follows:

     "day": [0-6],
     "openTime": "",
     "closeTime": "",
     "closed": false

Where [0-6] represents each day of the week.

## Running From a Distribution File

1. Navigate to /bin
2. Use the environment variable MONGODB_URI=[YOUR_CONNECTION_STRING] to connect to your database. Note that the connection string must end with a '/'.
3. Run cloud-clock or cloud-clock.bat depending on your operating system.

## Compiling From Source
1. Clone this repository
2. Run gradlew or gradlew.bat depending on your operation system
