# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the Gradle build files
COPY build.gradle settings.gradle gradlew ./
COPY gradle gradle

# Grant execution permission to Gradle wrapper
RUN chmod +x gradlew

# Resolve dependencies (this helps with caching layers)
RUN ./gradlew dependencies --no-daemon

# Copy the application source
COPY src src

# Build the application
RUN ./gradlew build -x test --no-daemon

# Run the Spring Boot application
CMD ["java", "-jar", "build/libs/busFeedback-0.0.1-SNAPSHOT.jar"]