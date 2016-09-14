---
layout: default
title: API Basics
permalink: /basics/
---

### API Listing

* [College Scorecard API](#college-scorecard-api)  
* [APIs for My Brother's Keeper Datasets](#apis-for-my-brothers-keeper-datasets)
  * [High School Dropout Rate](#high-school-dropout-rate)  
  * [College Enrollment Rate](#college-enrollment-rate)  
  * [College Graduation Rate](#college-graduation-rate)  
  * [Disconnected Youth](#disconnected-youth)  
  * [Labor Force Participation Rates](#labor-force-participation-rates)  
  * [Imprisonment Rates](#imprisonment-rates)  
* [Legacy APIs](#legacy-apis)  
  
### College Scorecard API

The [College Scorecard API](https://collegescorecard.ed.gov/data/documentation/){:target="_blank"} provides a robust set of web services to query financial aid data for higher education.  The project site offers [further information and bulk downloads of the data](https://collegescorecard.ed.gov/data/){:target="_blank"}.  

  
  
### APIs for My Brother's Keeper Datasets  

Each of the APIs for the My Brother's Keeper Datasets have similar query options:  

* Select Number of Results Per Page - `?per_page=`  ([example](https://api.ed.gov/data/less-than-highschool_2015?api_key=DEMO_KEY1&per_page=30))    
* Select Results Page - `?page=`  ([example](https://api.ed.gov/data/less-than-highschool_2015?api_key=DEMO_KEY1&page=2))  
* Sort By _Columnx_ - `?sort=Columnx` or `?sort=-Columnx` ([example1](https://api.ed.gov/data/less-than-highschool_2015?api_key=DEMO_KEY1&sort=Year)) ([example2](https://api.ed.gov/data/less-than-highschool_2015?api_key=DEMO_KEY1&sort=-Year)) 
* Return a Single Record - `/_index_number_` ([example](https://api.ed.gov/data/less-than-highschool_2015/15?api_key=DEMO_KEY1))  
* Filter by _ColumnX_ - `?Columnx=` ([example](https://api.ed.gov/data/less-than-highschool_2015?Sex=Males&api_key=DEMO_KEY1))  
* Filter by _ColumnX_ and _ColumnY_ - `?Columnx=[]&ColumnY=` ([example](https://api.ed.gov/data/less-than-highschool_2015?Sex=Males&Year=2004&api_key=DEMO_KEY1)) 
* Filter by multiple values in _ColumnX_ - `?Columnx=[]&ColumnX=` ([example](https://api.ed.gov/data/less-than-highschool_2015?Sex=Males&Sex=Females&api_key=DEMO_KEY1)) 

#### High School Dropout Rate

_Percentage of 18- to 24-year-olds who have not completed high school by sex and race/ethnicity, 2000–2014. For more information and the raw dataset, [see here](http://www2.ed.gov/rschstat/statistics/surveys/mbk/index.html)._

**Endpoint**: [https://api.ed.gov/data/less-than-highschool_2015?api_key=DEMO_KEY1](https://api.ed.gov/data/less-than-highschool_2015?api_key=DEMO_KEY1)


#### College Enrollment Rate

_Percentage of 18- to 24-year-olds enrolled in 2- and 4-year colleges by sex and race/ethnicity, 2000–2013. For more information and the raw dataset, [see here](http://www2.ed.gov/rschstat/statistics/surveys/mbk/index.html)._ 

**Endpoint**: [https://api.ed.gov/data/college-enrollment-rates_2015?api_key=DEMO_KEY1](https://api.ed.gov/data/college-enrollment-rates_2015?api_key=DEMO_KEY1)  

#### College Graduation Rate

_Percentage of 18- to 24-year-olds who have completed a bachelor’s or higher degree by sex and race/ethnicity, 2000–2014. For more information and the raw dataset, [see here](http://www2.ed.gov/rschstat/statistics/surveys/mbk/index.html)._ 

**Endpoint**: [https://api.ed.gov/data/bachelors-or-higher-degrees-among-young-adults_2015?api_key=DEMO_KEY1](https://api.ed.gov/data/bachelors-or-higher-degrees-among-young-adults_2015?api_key=DEMO_KEY1)  


#### Disconnected Youth

_Percentage of 18- to 24-year-olds who were neither enrolled in school nor working by sex and race/ethnicity, 2000–2014 (so-called disconnected youth). For more information and the raw dataset, [see here](http://www2.ed.gov/rschstat/statistics/surveys/mbk/index.html)._ 

**Endpoint**: [https://api.ed.gov/data/youth-neither-enrolled-in-school-nor-working_2015?api_key=DEMO_KEY1](https://api.ed.gov/data/youth-neither-enrolled-in-school-nor-working_2015?api_key=DEMO_KEY1)  


#### Labor Force Participation Rates

_Labor force participation rates for young adults ages 18–24 by age, sex, and race/ethnicity, 1980–2013 annual averages. For more information and the raw dataset, [see here](http://www2.ed.gov/rschstat/statistics/surveys/mbk/index.html)._ 

**Endpoint**: [https://api.ed.gov/data/lfpr_rates_verfied_2014_0731_1335?api_key=DEMO_KEY1](https://api.ed.gov/data/lfpr_rates_verfied_2014_0731_1335?api_key=DEMO_KEY1)  


#### Imprisonment Rates

_Imprisonment rates of 18- to 24-year-olds sentenced to more than 1 year under the jurisdiction of state correctional authorities per 100,000 by sex and race/ethnicity, 2000–2012. For more information and the raw dataset, [see here](http://www2.ed.gov/rschstat/statistics/surveys/mbk/index.html)._ 

**Endpoint**: [https://api.ed.gov/data/userssharedsdfimprisonmentratesof1824yosre20002012?api_key=DEMO_KEY1](https://api.ed.gov/data/userssharedsdfimprisonmentratesof1824yosre20002012?api_key=DEMO_KEY1)  



  
### Legacy APIs

Representing an earlier drive to provide APIs, [these legacy web services](https://pages.18f.gov/ED-Developer-Hub/legacy/) will stay live but are no longer actively supported.  
