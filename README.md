# ADAMAS (Athletic Data Analytics & Management System)

![ADAMAS](https://via.placeholder.com/150x150.png?text=ADAMAS) 
*<!-- Replace with your own logo later -->*

ADAMAS is a full-stack web application designed for athletes, coaches, and sports managers to centralize training data, derive actionable insights, and build better training plans. It enables the ingestion, management, and analysis of heterogeneous sports data through a modern, data-centric platform.

This project serves as the capstone for my Computer Science studies and a cornerstone of my professional portfolio for data analytics and full-stack development roles.

## 🚀 Live Demo

*Coming soon! The application will be deployed on Vercel.*
<!-- Once deployed, add the link here: [https://adamas.vercel.app](https://adamas.vercel.app) -->

## 🧪 Related Repositories
*Coming soon! The application will be deployed on Vercel.*
*   **Data Processing & ML Pipelines (Python):** 
[adamas-data-pipeline](https://github.com/your-username/adamas-data-pipeline) *<!-- Recommended separate repo for analytics -->*

## 🛠️ Tech Stack

### Frontend
*   **Framework:** [Next.js 14](https://nextjs.org/) (App Router) with React 18
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Library:** [Material-UI (MUI)](https://mui.com/)
*   **Data Fetching:** [TanStack Query v4](https://tanstack.com/query/v4)
*   **State Management:** [Zustand](https://github.com/pmndrs/zustand)
*   **Charts:** [Recharts](https://recharts.org/) / [Victory](https://formidable.com/open-source/victory/)
*   **Styling:** [Emotion](https://emotion.sh/docs/introduction) (with MUI) & [Tailwind CSS](https://tailwindcss.com/)

### Backend
*   **Runtime:** [Node.js](https://nodejs.org/en/)
*   **Framework:** [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
*   **Authentication:** [Next-Auth.js](https://next-auth.js.org/)
*   **API Paradigm:** RESTful API

### Database & Data Processing
*   **Primary Database:** [PostgreSQL](https://www.postgresql.org/) with `JSONB` for flexible metric storage (hosted on [Supabase](https://supabase.com/) or [Neon](https://neon.tech/))
*   **Analytics Database:** [ClickHouse](https://clickhouse.com/) (for high-performance aggregations)
*   **Data Processing:** [Python](https://www.python.org/), [Pandas](https://pandas.pydata.org/), [NumPy](https://numpy.org/)
*   **Machine Learning:** [Scikit-learn](https://scikit-learn.org/stable/)
*   **Notebooks:** [Jupyter](https://jupyter.org/)

### Deployment & DevOps
*   **Hosting:** [Vercel](https://vercel.com/) (Frontend & Serverless Functions)
*   **Containerization:** [Docker](https://www.docker.com/)
*   **Version Control:** [Git](https://git-scm.com/)

## ✨ Core Features

### For Athletes
*   **Dashboard:** View key metrics from recent activities and overall trends.
*   **Data Ingestion:** Manually log activities or upload files (e.g., .FIT, .GPX) from wearables like Garmin, Whoop, etc.
*   **Activity Overview:** Visualize activity data with interactive charts and maps.
*   **Progress Tracking:** Monitor personal progress over time with customizable reports.

### For Coaches & Managers
*   **Team Management:** Create teams and manage athletes.
*   **Training Plan Builder:** Create and assign detailed training plans.
*   **Group Analytics:** Analyze aggregated team data to identify trends, monitor workload, and prevent injuries.
*   **Insight Generation:** Receive AI-powered suggestions for athlete improvement based on their data.

## 🗺️ Project Roadmap

- [x] **Phase 0:** Project Scoping & Tech Stack Selection
- [ ] **Phase 1:** MVP (Minimum Viable Product)
    - [ ] Set up Next.js project with TypeScript and MUI.
    - [ ] Design and implement PostgreSQL database schema.
    - [ ] Implement user authentication with Next-Auth.js.
    - [ ] Build core CRUD pages for Users, Activities, and Training Plans.
    - [ ] Create basic data visualization dashboard.
- [ ] **Phase 2:** Analytics Engine
    - [ ] Implement ETL pipeline to ClickHouse.
    - [ ] Build advanced, interactive dashboards with Recharts.
    - [ ] Develop basic analytics functions in Python (Pandas).
- [ ] **Phase 3:** Advanced Features & Polish
    - [ ] File upload and parsing for common wearable formats.
    - [ ] Machine Learning model for injury risk prediction (Scikit-learn).
    - [ ] Real-time notifications.
    - [ ] Public API access.

## 📦 Installation & Local Development

Want to run ADAMAS locally? Follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/adamas.git
    cd adamas
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root directory and add your secrets:
    ```bash
    # Database
    DATABASE_URL="your_postgresql_connection_string"

    # Next-Auth
    NEXTAUTH_SECRET="your_nextauth_secret"
    NEXTAUTH_URL="http://localhost:3000"

    # OAuth Providers (e.g., Google)
    GOOGLE_CLIENT_ID="your_google_client_id"
    GOOGLE_CLIENT_SECRET="your_google_client_secret"
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

This is a personal portfolio project. While not open for public contributions, feedback and suggestions are always welcome! Please feel free to open an issue to discuss ideas or bugs.

---

**Disclaimer:** ADAMAS is a portfolio project. It is not intended for actual medical or professional athletic advice. Always consult with a certified professional before making training decisions.
