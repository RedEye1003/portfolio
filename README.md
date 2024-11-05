# Step-by-Step Guide to SQL Injection: Finding Vulnerabilities and Dumping Data

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
</div>

## STEP 1 - Identify a URL with Input Parameters
Start by locating a URL on the target site that includes input parameters. <br>
For instance: https://www.hicas.ac.in/pg-course?link=mca
 <div class="container">
                <img src="./assets/images/blog 2/sql 1.jpg" style="width: 70%;">
            </div>

## STEP 2 - Generate an Error Using This URL
To test for errors, experiment with various input values:

Alphanumeric Values <br>
Example: https://www.hicas.ac.in/pg-course?link=abcd1234

Large Numbers <br>
Example: https://www.hicas.ac.in/pg-course?link=999999999999

Special Characters <br>
Try symbols like ', ", #, %, &, *, -, and +. <br>
Example: https://www.hicas.ac.in/pg-course?link=mca'"

### If you see an error like:
<div class="container">
                <img src="./assets/images/blog 2/sql 2.jpg" style="width: 70%;">
            </div>

## STEP 3 - Eliminate the Error to Balance the Query
Use spacing and comment indicators like --+ to balance the query structure effectively.
 <div class="container">
                <img src="./assets/images/blog 2/sql 3.jpg" style="width: 70%;">
            </div>

## STEP 4 - Inject SQL Code

Insert SQL commands in the space created in Step 4. Start by using ORDER BY to determine the number of columns in the database:

Example: https://www.hicas.ac.in/pg-course?link=mca' order by 31--+ <br>
If this produces an error such as Unknown column '31' in 'order clause', reduce the number and test again.
 <div class="container">
                <img src="./assets/images/blog 2/sql 4.jpg" style="width: 70%;">
            </div>

Example: https://www.hicas.ac.in/pg-course?link=mca' order by 30--+ <br>
Once you no longer receive an error, you’ll have identified the number of columns—here, 30.
<div class="container">
                <img src="./assets/images/blog 2/sql 5.jpg" style="width: 70%;">
            </div>

## STEP 5 - Identify Vulnerable Columns with UNION SELECT

To locate vulnerable columns among the 30, use UNION ALL SELECT. The result may indicate specific vulnerable columns, such as columns 5, 10, 11, 12, and 13.
<div>
   <img src="./assets/images/blog 2/sql 6.jpg" style="width: 70%;">
</div>

## STEP 6 - Dump the Entire Database Using Vulnerable Columns

With the identified vulnerable columns, you can now retrieve data. For instance, retrieve the database version with @@version.
<div class="container">
                <img src="./assets/images/blog 2/sql 7.jpg" style="width: 70%;">
            </div>

## STEP 7 - Dump the Current Database Name

To obtain the name of the current database, use database().
<div class="container">
                <img src="./assets/images/blog 2/sql 8.jpg" style="width: 70%;">
            </div>

# ⚠️ **Disclaimer:**
This blog post is intended for educational and informational purposes only. The techniques described here were conducted on a live production application with proper authorization and have since been responsibly disclosed and patched. Unauthorized testing or exploitation of vulnerabilities on any application without explicit permission is illegal and unethical. Always ensure you have the necessary permissions before conducting security testing.

