# Honda Portal

Honda Portal is a comprehensive web application for managing Honda vehicle information, customer data, and administrative functions. Built with Next.js, TypeScript, and Prisma, it provides a modern and scalable solution for Honda dealerships and administrators.

## Features

- **User Management**: Role-based access control with admin, manager, and user roles
- **Vehicle Catalog**: Comprehensive brand and model management system
- **Customer Management**: Individual and corporate customer data management
- **Package & Accessories**: Vehicle package and accessory management
- **Real-time Monitoring**: Comprehensive monitoring and alerting system
- **API Documentation**: Complete OpenAPI/Swagger documentation
- **Responsive Design**: Modern UI with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: JWT-based authentication
- **Monitoring**: Prometheus, Grafana, AlertManager
- **Logging**: Loki, Promtail
- **Containerization**: Docker, Docker Compose

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Docker and Docker Compose (for monitoring stack)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd honda-portal-2
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your database and other configuration
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Monitoring Stack

The project includes a comprehensive monitoring and alerting system:

### Starting the Monitoring Stack

```bash
# Start all monitoring services
docker-compose -f docker-compose.monitoring.yml up -d
```

### Monitoring Services

- **Grafana**: [http://localhost:3001](http://localhost:3001) (admin/admin)
- **Prometheus**: [http://localhost:9090](http://localhost:9090)
- **AlertManager**: [http://localhost:9093](http://localhost:9093)
- **Loki**: [http://localhost:3100](http://localhost:3100)
- **Jaeger**: [http://localhost:16686](http://localhost:16686)

### Key Metrics Monitored

- Application health and uptime
- HTTP request rates and response times
- Database performance and connections
- System resources (CPU, memory, disk)
- Business metrics (users, customers, models)
- Error rates and security events

## API Documentation

The API is fully documented using OpenAPI 3.0 specification:

- **API Documentation**: Available at `/docs/api/openapi.yaml`
- **Interactive Documentation**: Use tools like Swagger UI or Postman
- **Health Check**: `GET /api/health`
- **Metrics**: `GET /api/metrics`

### Key API Endpoints

- **Authentication**: `/api/auth/*`
- **Users**: `/api/users/*`
- **Brands**: `/api/brands/*`
- **Models**: `/api/models/*`
- **Customers**: `/api/customers/*`

## Database Schema

The application uses Prisma ORM with the following main entities:

- **User**: System users with role-based access
- **Brand**: Vehicle brands (Honda, etc.)
- **Model**: Vehicle models with pricing and specifications
- **Customer**: Individual and corporate customers
- **Package**: Vehicle packages and options
- **Accessory**: Individual accessories and add-ons

## Development

### Database Management

```bash
# View database in Prisma Studio
npx prisma studio

# Reset database
npx prisma db reset

# Generate Prisma client
npx prisma generate
```

### Code Quality

```bash
# Run linting
npm run lint

# Run type checking
npm run type-check

# Run tests
npm run test
```

## Deployment

### Production Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

### Docker Deployment

```bash
# Build and run with Docker
docker build -t honda-portal .
docker run -p 3000:3000 honda-portal
```

### Environment Variables

Key environment variables required:

- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_SECRET`: JWT secret key
- `NEXTAUTH_URL`: Application URL
- `REDIS_URL`: Redis connection string (optional)

## Monitoring and Alerting

The monitoring system provides:

- **Real-time Dashboards**: Grafana dashboards for system and business metrics
- **Alerting Rules**: Automated alerts for system issues and anomalies
- **Log Aggregation**: Centralized logging with Loki and Promtail
- **Distributed Tracing**: Request tracing with Jaeger
- **Health Checks**: Automated health monitoring for all services

### Alert Categories

- **Infrastructure**: System resources, database, Redis
- **Application**: HTTP errors, response times, uptime
- **Business**: User activity, data integrity, security events
- **Performance**: Memory usage, CPU utilization, disk space

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the API documentation for technical details
