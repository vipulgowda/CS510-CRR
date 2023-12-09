# CS510 - CODE READING AND REVIEW GRADUATE PROJECT

## Table of Contents

- [Introduction](#introduction)
- [Contributors](#contributors)
- [Project Description](#project-description)
- [Updates](#updates)
- [Getting Started](#getting-started)

## Introduction

This is the README for Graduate Project of CS510:TOP - Code Reading and Review. Here we will be working mainly on updating code on the basis of software design principles and clean code principles. 

## Contributors

- Vipul Puttaswamy Gowda ([vipulp@pdx.edu](mailto:vipulp@pdx.edu))
- Raghuram Gudemaranahalli Nataraja ([raghuram@pdx.edu](mailto:raghuram@pdx.edu))
- Smriti Basnet ([esmeb@pdx.edu](mailto:esmeb@pdx.edu))

## Project Description

The project structure comprises two main directories: 'client' and 'server.' The 'client' directory encapsulates all frontend components developed using TypeScript and React.js, while the 'server' directory has all the backend elements implemented with JavaScript and Node.js. The application is a web-based SQL editor, equipped with a plug-and-play mechanism for connecting to diverse databases, executing SQL queries, and seamlessly integrating data visualisation into the workflow.
We actively engaged in addressing and resolving issues identified during the initial assessment phase. This encompassed debugging, refactoring, and optimising code segments to align with established principles of code quality and maintainability. The collaborative use of Git and GitHub facilitated streamlined version control, allowing for seamless integration of individual contributions into the project.

## Updates

List the updates done to the project.

- Code Maintainability
- Encapsulation
- Functional Abstraction
- Naming Conventions
- Comments
- Unit Testing
- Error Handling

## Getting Started

# SQLPad

A web app for writing and running SQL queries and visualizing the results. Supports Postgres, MySQL, SQL Server, ClickHouse, Crate, Vertica, Trino, Presto, SAP HANA, Cassandra, Google BigQuery, SQLite, TiDB and many more via [ODBC](https://github.com/sqlpad/sqlpad/wiki/ODBC).

![SQLPad Query Editor](https://user-images.githubusercontent.com/303966/99915755-32f78e80-2ccb-11eb-9f74-b18846d6108d.png)

## Project Status

SQLPad is a legacy project in maintenance mode. If evaluating SQLPad, please consider a [potential alternative](https://getsqlpad.com/en/introduction/#alternatives) or forking the project and making it your own.

Maintenance releases for security and dependency updates will continue as possible.

**As of version 7, semver is no longer followed**. Going forward patch updates may require major Node.js version updates, or contain removal of functionality.

## Docker Image

The docker image runs on port 3000 and uses `/var/lib/sqlpad` for the embedded database directory.

See [docker-examples](https://github.com/sqlpad/sqlpad/tree/master/docker-examples) for docker-compose examples.

## Project Documentation

Documentation located at [https://getsqlpad.com](https://getsqlpad.com).

## Development

For instructions on installing/running SQLPad from git repo see [DEVELOPER-GUIDE.md](https://github.com/sqlpad/sqlpad/blob/master/DEVELOPER-GUIDE.md)

## License

MIT
