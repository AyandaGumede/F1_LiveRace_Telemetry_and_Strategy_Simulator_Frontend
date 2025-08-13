# F1 Live Race Telemetry & Strategy Simulator - Frontend

A modern, real-time dashboard for Formula 1 race telemetry and strategy simulation.  
This React application provides live telemetry visualization, pit stop strategy insights, and historical race replay capabilities, offering users an immersive racing data experience.



## Project Overview

As a **Computer Science student** with a deep passion for Formula 1, I wanted to combine my technical skills with my love for racing by building the **F1 Live Race Telemetry & Strategy Simulator**. The idea came from my fascination with how teams analyze telemetry in real time to make split-second decisions — I wanted to recreate that experience in a web application.

This project is built with **React and TypeScript** and demonstrates my ability to develop a **full-stack, real-time application**. I use WebSockets to stream live telemetry data, REST APIs for race and strategy information, and a component-driven UI to display complex data clearly.

Through this project, I aimed to **learn and showcase**:  
- Real-time data handling and visualization  
- Integration of predictive algorithms for strategy insights  
- Building maintainable, scalable React applications  
- Combining domain knowledge (F1 racing) with practical software engineering

It’s a portfolio project that reflects both my **technical capabilities** and my **passion for motorsport**, creating an immersive and educational experience for users.


## Features

- **Real-Time Telemetry:** Speed, tyre temperature, brake temperature, gear, and lap data updated via WebSockets.  
- **Interactive Track Map:** Visualize car positions on a 2D track using Leaflet.  
- **Pit Strategy Engine:** Display predicted pit stops and estimated race outcomes.  
- **Historical Replay:** Replay races with full telemetry data, including play/pause controls and timeline navigation.  
- **User Authentication:** JWT-based login to protect dashboard and replay routes.  
- **Responsive UI:** Modular, component-driven React architecture for scalability and maintainability.



## Technical Stack

- **Frontend:** React, TypeScript, Tailwind (V.3), Chart.js, Leaflet  
- **State Management:** React hooks, Context API  
- **Backend Integration:** REST API + WebSocket (Spring Boot backend)  
- **Authentication:** JWT stored in `localStorage`  
- **DevOps Ready:** Docker-ready for containerized deployments, CI/CD compatible

# Getting Started

### Prerequisites

- Node.js >= 16  
- npm >= 8  

### Installation

```bash
# Clone the repository
git clone https://github.com/AyandaGumede/F1_LiveRace_Telemetry_and_Strategy_Simulator_Frontend.git
cd F1_LiveRace_Telemetry_and_Strategy_Simulator_Frontend

# Install dependencies
npm install

# Run the development server
npm run dev
