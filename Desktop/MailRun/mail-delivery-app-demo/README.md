
# Mail Delivery App Demo

This is a demo app for scheduling and delivering mail using React Native (Expo) for the frontend and Express for the backend. It features live map tracking and basic job scheduling logic.

## Setup Instructions

### 1. Backend

```bash
cd backend
npm install
node server.js
```

Runs on http://localhost:3001

### 2. Frontend

```bash
cd frontend
npm install
expo start
```

Test with Expo Go on your mobile device.

## Features

- Sender mode: schedule a pickup
- Deliverer mode: view available jobs and accept
- Live map tracking using device GPS
