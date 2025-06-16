# Survey Script Generator Application

## Overview

This is a modern full-stack web application built for Microformas to generate survey scripts for technical support incidents. The application features a clean, professional interface with a multi-step form wizard that guides users through collecting incident data and generating standardized survey scripts.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter (lightweight React router)
- **State Management**: React hooks with TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js 20 with Express.js
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for fast production bundling

### Data Storage Solutions
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL 16 (configured for production)
- **Development Storage**: In-memory storage implementation for development
- **Migrations**: Drizzle Kit for database schema management

## Key Components

### Frontend Components
1. **WelcomeScreen**: Landing page with company branding and entry point
2. **SurveyScriptGenerator**: Multi-step form wizard for incident data collection
3. **UI Components**: Comprehensive shadcn/ui component library including:
   - Forms, inputs, and validation
   - Navigation and layout components
   - Feedback components (toasts, dialogs)
   - Data display components

### Backend Components
1. **Express Server**: RESTful API server with middleware for logging and error handling
2. **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
3. **Vite Integration**: Development server with HMR and production static file serving
4. **User Management**: Basic user schema with authentication preparation

### Shared Components
1. **Database Schema**: Centralized TypeScript definitions for data models
2. **Type Safety**: End-to-end TypeScript with shared types between client and server

## Data Flow

1. **User Journey**: Welcome screen → Multi-step form wizard → Script generation
2. **Form Processing**: Step-by-step data collection with validation at each stage
3. **Script Generation**: Dynamic survey script creation based on collected incident data
4. **Copy Functionality**: One-click script copying for immediate use

## External Dependencies

### Core Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connectivity
- **UI Library**: Radix UI primitives with shadcn/ui styling
- **Form Management**: React Hook Form with Hookform resolvers
- **Validation**: Zod for runtime type checking and validation
- **Date Handling**: date-fns for date manipulation
- **Styling**: Tailwind CSS with class-variance-authority for component variants

### Development Tools
- **TypeScript**: Full type safety across the stack
- **Vite**: Fast development server with HMR
- **PostCSS**: CSS processing with Tailwind CSS
- **ESBuild**: Fast production bundling

## Deployment Strategy

### Environment Configuration
- **Development**: Local development with Vite dev server and in-memory storage
- **Production**: Compiled Express server serving static files with PostgreSQL database
- **Database**: Environment-based configuration with DATABASE_URL

### Build Process
1. **Frontend Build**: Vite compiles React app to static files in `dist/public`
2. **Backend Build**: ESBuild compiles TypeScript server to `dist/index.js`
3. **Database Setup**: Drizzle migrations applied to PostgreSQL instance

### Replit Configuration
- **Runtime Modules**: Node.js 20, Web, PostgreSQL 16
- **Auto-deployment**: Configured for autoscale deployment target
- **Port Configuration**: Local port 5000 mapped to external port 80

## Changelog

Changelog:
- June 16, 2025. Initial setup
- June 16, 2025. Added corporate welcome screen with Microformas branding
- June 16, 2025. Integrated official Microformas logo from corporate URL
- June 16, 2025. Updated Configuration Items mapping with complete HW/SW/RED/USUARIO categories
- June 16, 2025. Added logo to survey script generator header for brand consistency

## User Preferences

Preferred communication style: Simple, everyday language.