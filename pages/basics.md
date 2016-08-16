---
layout: default
title: API Basics
nav: basics
permalink: /basics/
---

### _Under Construction_

_This site is a pilot project.  If you have feedback or questions, [let us know](https://github.com/18F/ED-Developer-Hub/issues)!_

### API basics

#### [College Scorecard API](https://collegescorecard.ed.gov/data/documentation/)  

A robust API for financial aid data from higher education.

#### Teacher Salaries 

_Estimated average annual salary of teachers in public elementary and secondary schools, by state: Selected years, 1969-70 through 2014-15. For more information and the raw dataset, [see here](https://nces.ed.gov/programs/digest/d15/tables/dt15_211.60.asp?current=yes)._

*Endpoint*: [https://api.18f.gov/ed/data/teacher-salary-2?api_key=DEMO_KEY1](https://api.18f.gov/ed/data/teacher-salary-2?api_key=DEMO_KEY1)

*Query Parameters*:    
* By Year - `?year=`  ([example](https://api.18f.gov/ed/data/teacher-salary-2?api_key=DEMO_KEY1&year=1999-2000))   
* By State - `?state=`  ([example](https://api.18f.gov/ed/data/teacher-salary-2?api_key=DEMO_KEY1&state=alaska))    

#### High School Dropout Rates (Public, average freshman graduation rate)

_Public high school averaged freshman graduation rate (AFGR), by state or jurisdiction: Selected years, 1990-91 through 2012-13. For more information and the raw dataset, [see here](https://nces.ed.gov/programs/digest/d15/tables/dt15_219.35.asp?current=yes)._ 

*Endpoint*: [https://api.18f.gov/ed/data/public-hs-afgr?api_key=DEMO_KEY1](https://api.18f.gov/ed/data/public-hs-afgr?api_key=DEMO_KEY1)  

*Query Parameters*:    
* By Year - `?year=`  ([example](https://api.18f.gov/ed/data/public-hs-afgr?api_key=DEMO_KEY1&year=1999-2000))   
* By State - `?state=`  ([example](https://api.18f.gov/ed/data/public-hs-afgr?api_key=DEMO_KEY1&state=alaska))    


#### [Legacy API Program](https://pages.18f.gov/ED-Developer-Hub/legacy/)

Representing an earlier drive to provide APIs, these web services will stay live but are no longer actively supported.  

<body id="basics"></body>
