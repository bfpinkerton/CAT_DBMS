# CAT_DBMS
<b>This repository serves to house the modern recreation of Community Association Title's legacy database management system.</b>

<b>Legacy System Overview & Problems:</b>
<ul>
  <li>Native software application that required user credentials to login and view records</li>
  <li>Several different interlinking "databases" with multiple child tables</li>
  <li>Once authenticated, any user was able to delete records</li>
  <li>Unreliable overall system that periodically drops records</li>
  <li>Database must be reset every few days to support new record additions</li>
  <li>Application is difficult to understand and navigate</li>
  <li>Scrolling with a scrollwheel or trackpad results a new record being loaded and modifications to current record being abandoned</li>
</ul>

Example screenshot of the 25+-year-old legacy system:
<img src="https://i.imgur.com/nbJ7C1U.png" alt="Legacy Example Pic" width="750" height="620">

<b>Legacy Database Relations: (Unique IDs are rare and links between tables tend to involve multiple text fields)</b>
<img src="https://i.imgur.com/65XUMAz.jpg" alt="Legacy Database Relations">

<b>New System Solution:</b>
<ul>
  <li>SaaS Web Application utilizing MySQL, Express, Semantic UI, and Node.js tech stack</li>
  <li>Authentication implemented with a traditional email/password hash combo utilizing bcrypt & Passport.js</li>
  <li>Tiered Access to prevend unwanted record addition/deletion: ReadOnlyUser --> CreateOnlyUser --> Admin</li>
  <li>Intuitive UI whose colorscheme matches the company</li>
  <li></li>
</ul>

New System Functionality Gif:
![alt-text](https://s7.gifyu.com/images/Aug-22-2020-16-27-27.gif)

<b>Development Progress: (A full trello board of completed tasks, backlogged items, and bugs can be found here: https://trello.com/b/tDJ2lLe4/backlog-bugs)</b>
<ul>
  <li>Authentication - [DONE]</li>
  <li>User Management - [90% complete]</li>
  <li>Master Association List - [95% complete]</li>
  <li>Master Manager List - [Not started]</li>
  <li>Report Generator (Raw text to steralized SQL query) - [Not started]</li>
  <li>Migrating Legacy Data - [Not started]</li>
  <li>Additional Features may be added at a later date!</li>
</ul>

This application's sourcecode is made public at my request for educational purposes.
