# CAT_DBMS
<b>This repository serves to house the modern recreation of Community Association Title's legacy database management system.</b>

New System Functionality Gif:
![alt-text](currentEx.gif)

<b>New System Solution:</b>
<ul>
  <li>SaaS Web Application utilizing MySQL, Express, Semantic UI, and Node.js tech stack</li>
  <li>MySQL ACID relational database implementation</li>
  <li>All database tables implement ID's with proper foreign key relations (reducing complexity of table interactions)</li>
  <li>Authentication implemented with a traditional email/password hash combo utilizing bcrypt & Passport.js</li>
  <li>Tiered access to prevend unwanted record addition/deletion: ReadOnlyUser --> CreateOnlyUser --> Admin</li>
  <li>User management for the addition/removal/access-tier-level of users</li>
  <li>Isolated record searching via topbar search</li>
  <li>Intuitive UI with colorscheme matching company logo</li>
</ul>


<b>Legacy System Overview & Problems:</b>
<ul>
  <li>Native software application that required user credentials to login and view records</li>
  <li>Several different interlinking "databases" with multiple child tables</li>
  <li>Once authenticated, any user was able to delete records</li>
  <li>Unreliable overall system that periodically dropped records</li>
  <li>Database lacks ACID practices</li>
  <li>Database must be reset every few days to support new record additions</li>
  <li>Application is difficult to understand and navigate</li>
  <li>Scrolling with a scrollwheel or trackpad results a new record being loaded and modifications to current record being abandoned</li>
</ul>

<b>Example screenshot of the 25+-year-old legacy system:</b>
<img src="https://i.imgur.com/nbJ7C1U.png" alt="Legacy Example Pic" width="750" height="620">

<b>Legacy Database Relations: (Unique IDs are rare and links between tables tend to involve multiple text fields)</b>
<img src="https://i.imgur.com/65XUMAz.jpg" alt="Legacy Database Relations">



<b>Development Progress: (A full trello board of completed tasks, backlogged items, and bugs can be found here: https://trello.com/b/tDJ2lLe4/backlog-bugs)</b>
<ul>
  <li>Authentication - [DONE]</li>
  <li>User Management - [90% complete]</li>
  <li>Master Association List - [95% complete]</li>
  <li>Master Manager List - [Not started]</li>
  <li>Report Generator (Raw text to steralized SQL query) - [Not started]</li>
  <li>Record Update Tracking (via table hooks) - [Not started]</li>
  <li>Migrating Legacy Data - [Not started]</li>
  <li>Additional Features may be added at a later date!</li>
</ul>


<i>This application's sourcecode is made public at my request for educational purposes.</i>
