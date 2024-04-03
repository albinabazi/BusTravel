# Bus Travel Gradle Project

This repository contains the Gradle project for Bus Travel, an application developed by Zero Gravity Solutions.

## Repository

The source code for this project is hosted on GitHub: [albinabazi/BusTravel](https://github.com/albinabazi/BusTravel)

## Gradle Setup

To integrate this Gradle project into your development environment, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/albinabazi/BusTravel
   ```

2. Navigate to the cloned repository:

   ```bash
   cd BusTravel/bustravel
   ```

3. Build the project using Gradle:

   ```bash
   ./gradlew build
   ```

4. Import the project into your preferred IDE.

## Running and Updating the Project

To run the Spring Boot application through Gradle, you can use the `bootRun` task:

```bash
./gradlew bootRun
```

This command will compile the project and start the Spring Boot application.

To clean the project, you can use the `clean` task:

```bash
./gradlew clean
```

This command will delete the build directory and clean the project. It's useful for removing temporary files and artifacts generated during the build process.

## Project Structure

The project structure follows standard Gradle conventions:

- `src/main/java`: Contains the main Java source code.
- `src/main/resources`: Contains the main resources.
- `src/test/java`: Contains the test Java source code.
- `src/test/resources`: Contains the test resources.
- `build.gradle`: Defines project configuration, dependencies, and tasks.

## Dependencies

This project utilizes several dependencies managed by Gradle:

- Spring Boot for web application development.
- Spring Data JPA for data access.
- PostgreSQL driver for connecting to a PostgreSQL database.

## Contributing

Contributions to this project are welcome! If you encounter any issues or have suggestions for improvements, feel free to submit a pull request or open an issue on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.