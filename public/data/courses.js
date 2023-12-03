const courses = {
    "schools": [
        {
            "id": "college",
            "start-date": "20 August 2022 00:00:00 GMT",
            "end-date": "09 May 2026 00:00:00 GMT",
            "course-list": [
                {
                    "name": "FY 1100",
                    "full-name": "The Great Problems Seminar",
                    "type": "Humanities",
                    "term": "2022 Fall A Term",
                    "start": "24 August 2022 00:00:00 GMT",
                    "end": "13 October 2022 00:00:00 GMT",
                    "grade": "A",
                    "notable": false
                },
                {
                    "name": "CS 1102",
                    "full-name": "Accelerated Introduction To Program Design",
                    "type": "Computer Science",
                    "term": "2022 Fall A Term",
                    "start": "24 August 2022 00:00:00 GMT",
                    "end": "13 October 2022 00:00:00 GMT",
                    "grade": "B",
                    "notable": false
                },
                {
                    "name": "MA 1023",
                    "full-name": "Calculus III",
                    "type": "Math",
                    "term": "2022 Fall A Term",
                    "start": "24 August 2022 00:00:00 GMT",
                    "end": "13 October 2022 00:00:00 GMT",
                    "grade": "A",
                    "notable": false
                },
                {
                    "name": "FY 1101",
                    "full-name": "The Great Problems Seminar",
                    "type": "Humanities",
                    "term": "2022 Fall B Term",
                    "start": "24 October 2022 00:00:00 GMT",
                    "end": "16 December 2022 00:00:00 GMT",
                    "grade": "A",
                    "notable": false
                },
                {
                    "name": "MA 1024",
                    "full-name": "Calculus IV",
                    "type": "Math",
                    "term": "2022 Fall B Term",
                    "start": "24 October 2022 00:00:00 GMT",
                    "end": "16 December 2022 00:00:00 GMT",
                    "grade": "B",
                    "notable": false
                },
                {
                    "name": "CS 2103",
                    "full-name": "Accelerated Object-Oriented Design Concepts",
                    "type": "Computer Science",
                    "term": "2022 Fall B Term",
                    "start": "24 October 2022 00:00:00 GMT",
                    "end": "16 December 2022 00:00:00 GMT",
                    "grade": "A",
                    "notable": true
                },
                {
                    "name": "MA 2621",
                    "full-name": "Probability for Applications",
                    "type": "Math",
                    "term": "2023 Spring C Term",
                    "start": "10 January 2023 00:00:00 GMT",
                    "end": "3 March 2023 00:00:00 GMT",
                    "grade": "A",
                    "notable": false
                },
                {
                    "name": "CS 2303",
                    "full-name": "Systems Programming Concepts",
                    "type": "Computer Science",
                    "term": "2023 Spring C Term",
                    "start": "10 January 2023 00:00:00 GMT",
                    "end": "3 March 2023 00:00:00 GMT",
                    "grade": "A",
                    "notable": false
                },
                {
                    "name": "HI 2335",
                    "full-name": "Topics In The History Of American Science And Technology",
                    "type": "Humanities",
                    "term": "2023 Spring C Term",
                    "start": "10 January 2023 00:00:00 GMT",
                    "end": "3 March 2023 00:00:00 GMT",
                    "grade": "A",
                    "notable": false
                },
                {
                    "name": "HI 2315",
                    "full-name": "The Shaping Of Post-1920 America",
                    "type": "Humanities",
                    "term": "2023 Spring D Term",
                    "start": "13 March 2023 00:00:00 GMT",
                    "end": "3 May 2023 00:00:00 GMT",
                    "grade": "A",
                    "notable": false
                },
                {
                    "name": "MA 2611",
                    "full-name": "Applied Statistics I",
                    "type": "Math",
                    "term": "2023 Spring D Term",
                    "start": "13 March 2023 00:00:00 GMT",
                    "end": "3 May 2023 00:00:00 GMT",
                    "grade": "A",
                    "notable": false
                },
                {
                    "name": "CS 2011",
                    "full-name": "Introduction To Machine Organization And Assembly Language",
                    "type": "Computer Science",
                    "term": "2023 Spring D Term",
                    "start": "13 March 2023 00:00:00 GMT",
                    "end": "3 May 2023 00:00:00 GMT",
                    "grade": "A",
                    "notable": true
                },
                {
                    "name": "CS 2022",
                    "full-name": "Discrete Mathematics",
                    "type": "Math",
                    "term": "2023 Summer Session I",
                    "start": "22 May 2023 00:00:00 GMT",
                    "end": "27 June 2023 00:00:00 GMT",
                    "grade": "B",
                    "notable": false
                },
                {
                    "name": "PE 1099",
                    "full-name": "Healthy Alternative",
                    "type": "PE",
                    "term": "2023 Summer Session II",
                    "start": "10 July 2023 00:00:00 GMT",
                    "end": "11 August 2023 00:00:00 GMT",
                    "grade": "A",
                    "notable": false
                },
                {
                    "name": "MA 2071",
                    "full-name": "Matrices And Linear Algebra I",
                    "type": "Math",
                    "term": "2023 Fall A Term",
                    "start": "24 August 2023 00:00:00 GMT",
                    "end": "13 October 2023 00:00:00 GMT",
                    "grade": "A",
                    "notable": false
                },
                {
                    "name": "ECE 2010",
                    "full-name": "Introduction To Electrical And Computer Engineering",
                    "type": "Engineering",
                    "term": "2023 Fall A Term",
                    "start": "24 August 2023 00:00:00 GMT",
                    "end": "13 October 2023 00:00:00 GMT",
                    "grade": "B",
                    "notable": true
                },
                {
                    "name": "PY 2719",
                    "full-name": "Philosophy of Science",
                    "type": "Humanities",
                    "term": "2023 Fall A Term",
                    "start": "24 August 2023 00:00:00 GMT",
                    "end": "13 October 2023 00:00:00 GMT",
                    "grade": "A",
                    "notable": false
                },
                {
                    "name": "CS 3133",
                    "full-name": "Foundations Of Computer Science",
                    "type": "Computer Science",
                    "term": "2023 Fall B Term",
                    "start": "23 October 2023 00:00:00 GMT",
                    "end": "15 December 2023 00:00:00 GMT",
                    "grade": "N/A",
                    "notable": false
                },
                {
                    "name": "CS 3043",
                    "full-name": "Social Implications Of Information Processing",
                    "type": "Computer Science",
                    "term": "2023 Fall B Term",
                    "start": "23 October 2023 00:00:00 GMT",
                    "end": "15 December 2023 00:00:00 GMT",
                    "grade": "N/A",
                    "notable": false
                },
                {
                    "name": "CS 3516",
                    "full-name": "Computer Networks",
                    "type": "Computer Science",
                    "term": "2023 Fall B Term",
                    "start": "23 October 2023 00:00:00 GMT",
                    "end": "15 December 2023 00:00:00 GMT",
                    "grade": "N/A",
                    "notable": true
                },
                {
                    "name": "CS 3431",
                    "full-name": "Database Systems I",
                    "type": "Computer Science",
                    "term": "2024 Spring C Term",
                    "start": "10 January 2024 00:00:00 GMT",
                    "end": "1 March 2024 00:00:00 GMT",
                    "grade": "N/A",
                    "notable": true
                },
                {
                    "name": "WPE 1012",
                    "full-name": "Basketball",
                    "type": "PE",
                    "term": "2024 Spring C Term",
                    "start": "10 January 2024 00:00:00 GMT",
                    "end": "1 March 2024 00:00:00 GMT",
                    "grade": "N/A",
                    "notable": false
                },
                {
                    "name": "DS 1010",
                    "full-name": "Data Science I: Introduction To Data Science",
                    "type": "Data Science",
                    "term": "2024 Spring C Term",
                    "start": "10 January 2024 00:00:00 GMT",
                    "end": "1 March 2024 00:00:00 GMT",
                    "grade": "N/A",
                    "notable": false
                },
                {
                    "name": "ECE 2049",
                    "full-name": "Embedded Computing In Engineering Design",
                    "type": "Engineering",
                    "term": "2024 Spring D Term",
                    "start": "11 March 2024 00:00:00 GMT",
                    "end": "1 May 2024 00:00:00 GMT",
                    "grade": "N/A",
                    "notable": true
                },
                {
                    "name": "PH 1120",
                    "full-name": "General Physics-Electricity And Magnetism",
                    "type": "Physics",
                    "term": "2024 Spring D Term",
                    "start": "11 March 2024 00:00:00 GMT",
                    "end": "1 May 2024 00:00:00 GMT",
                    "grade": "N/A",
                    "notable": false
                },
                {
                    "name": "CS 2223",
                    "full-name": "Algorithms",
                    "type": "Computer Science",
                    "term": "2024 Spring D Term",
                    "start": "11 March 2024 00:00:00 GMT",
                    "end": "1 May 2024 00:00:00 GMT",
                    "grade": "N/A",
                    "notable": true
                }
            ]
        }
    ]
};