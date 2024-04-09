# BusTravel

Dokumentimi : Trello

frontend Framework: React.
backend Framework: Spring Boot.
SQL Database: PostgresSQL.
NoSQL database: MongoDB.

Additional Requirements:
1.Microservices Architecture:
2.Authentication and Authorization (with keycloak): 
3.Real-Time Notifications: 

//shtes me tentu me i marr 91+ pik edhe nese deshton najnjana ose marrum pik ma pak te 3 7 kushtet e para;
4.Online Payment Integration:

//shtes nese dojm me implementu livechat
5.Real-Time Communication using WebSockets: -//per komunikimin e userit ose agjensionit me suportin e kompanis ton;
6.Real-Time Communication using WebRTC: -//per komunikimin e userit me suportine  agjensionit;

## Repository

The source code for this project is hosted on GitHub: [albinabazi/BusTravel](https://github.com/albinabazi/BusTravel)

## Prerequisites

Before running the Docker Compose setup, ensure you have the following installed on your system:

- Docker
- Docker Compose

## Getting Started

To set up the Bus Travel infrastructure, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/albinabazi/BusTravel
   ```

2. Navigate to the cloned repository:

   ```bash
   cd BusTravel/infrastructure
   ```

3. Run the `prerun.sh` script to create the required external volumes and network:

   ```bash
   ./prerun.sh
   ```

4. Run Docker Compose to start the services:

   ```bash
   docker-compose up -d
   ```

5. Access the services using the following URLs:

   - PostgreSQL: [http://localhost:5432](http://localhost:5432)
   - pgAdmin: [http://localhost:85](http://localhost:85)
   - Keycloak: [http://localhost:8080](http://localhost:8080)

## Configuration

The `docker-compose.yml` file defines the services and their configurations.

## Usage

- The services will automatically restart if the containers are stopped or the system restarts, ensuring continuous availability.

- Ensure that the Docker volumes `btpostgres` and `btpgadmin` are external or persisted to avoid data loss.

## Team Members

Diellza Neziri 
Albin Abazi
Fatbardha sylejmani
Arlinda Haxha
Fake Coti

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests for any improvements or enhancements to the infrastructure setup.

## License

This project is licensed under the [MIT License](LICENSE).