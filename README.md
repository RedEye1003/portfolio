# Hariharasuthan's SQL Injection Blog Page

<div style="display: flex; align-items: center;">
  <!-- Text on the right side -->
  <div style="flex: 2; padding-left: 20px;">
    <p>
      A SQL injection attack consists of the insertion or “injection” of a SQL query via the input data from the client to the application. 
      A successful SQL injection exploit can read sensitive data from the database, modify database data (Insert/Update/Delete), execute 
      administration operations on the database (such as shutting down the DBMS), retrieve files, and in some cases, execute commands 
      on the operating system. SQL injection attacks are a type of injection attack in which SQL commands are injected into data-plane input 
      to influence the execution of predefined SQL commands.
    </p>
  </div>
    <!-- Image on the left side -->
  <div style="flex: 1;">
    <img src="assets/images/blog1_image-removebg-preview.png" style="height: 375px; width: 340px;" alt="animae">
  </div>

</div>

## STEP 1 - Identify a URL with Input Parameters
Start by locating a URL on the target site that includes input parameters. For instance: https://www.hicas.ac.in/pg-course?link=mca

## STEP 2 - Generate an Error Using This URL
To test for errors, experiment with various input values:

Alphanumeric Values
Example: https://www.hicas.ac.in/pg-course?link=abcd1234

Large Numbers
Example: https://www.hicas.ac.in/pg-course?link=999999999999

Special Characters
Try symbols like ', ", #, %, &, *, -, and +.
Example: https://www.hicas.ac.in/pg-course?link=mca'"
