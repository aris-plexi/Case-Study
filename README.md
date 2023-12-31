# Case Study Exercise

# Quickstart

I have included both Projects within one repository for ease of use. \
Spring Boot application will run by default on **http://localhost:8080** and will connect to \
a running MariaDB server on **http://localhost:3306**. Please make sure to adjust the password to match your running DB instance. \
Furthermore, The project requires **Java SDK 21** or higher and uses **Spring Boot v. 3.2.1**

To run the Angular project, simply cd into the working directory and execute: 
``ng serve``

The execution will be done on the default port **http://localhost:4200/**
Please do not change the port, as Spring boot is configured to ignore Cors Policy there via `ConfigureCorsPolicy.java`.

