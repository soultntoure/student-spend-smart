# StudentSpendSmart

Effortless financial awareness and control for students, built for their budget and their lifestyle.

## 🚀 Project Purpose

StudentSpendSmart aims to empower students to take control of their finances by providing an intuitive, automated, and insightful mobile application. We address the unique financial challenges faced by students—often characterized by fluctuating income, tight budgets, and a need for clear, actionable guidance—by offering a user-friendly platform that simplifies expense tracking, promotes saving habits, and provides accessible financial literacy content.

## 🎯 Market Gap Analysis & Tech Stack Rationale

Our analysis revealed significant gaps in the student financial management market:

1.  **Lack of Effortless Automation:** Competitors like Goodbudget rely heavily on manual entry, which is time-consuming and prone to errors, a significant barrier for busy students. Mint, while automated, is shutting down and often overly complex for basic student needs.
2.  **Insufficient Simplified Insights:** Existing tools can overwhelm users with data, failing to translate complex financial information into actionable steps relevant to a student's life.
3.  **Absence of Student-Specific Focus:** General finance apps lack tailored categorization, budgeting advice, and financial literacy content geared towards student income streams (part-time jobs, loans, allowances) and spending patterns (tuition, rent, social activities, textbooks).
4.  **High Cost & Steep Learning Curve:** Powerful tools like YNAB are expensive and complex, making them inaccessible and intimidating for students.

Our chosen technology stack directly addresses these gaps and supports our Unique Selling Proposition (USP):

*   **Frontend: React Native**
    *   **Rationale:** Enables development of a single codebase deployable on both iOS and Android, significantly reducing development time and cost, aligning with our "accessible pricing" goal. Its component-based architecture and familiar JavaScript/React paradigm contribute to a faster development cycle and a smooth, native-like user experience, reducing the "steep learning curve" barrier.
    *   **Market Gap Addressed:** Effortless user experience, accessible pricing (via cross-platform efficiency), no steep learning curve.

*   **Backend: Node.js with Express.js**
    *   **Rationale:** Node.js's asynchronous, event-driven nature is ideal for handling background tasks required for automated data fetching from Plaid and potential real-time notifications. Express.js provides a robust and minimalist framework for building efficient APIs that power the mobile app and community features.
    *   **Market Gap Addressed:** Effortless automation (enabling background processing), efficient API development for community features.

*   **Database: PostgreSQL**
    *   **Rationale:** A powerful, reliable, and scalable relational database. It ensures data integrity for financial transactions, supports complex queries needed for generating insightful reports and analytics, and can handle growth as our user base expands. Its maturity and robust feature set make it suitable for financial applications.
    *   **Market Gap Addressed:** Simplified insights (through robust data querying), scalability for future growth.

*   **Bank Aggregation API: Plaid**
    *   **Rationale:** Plaid is the industry standard for securely connecting bank accounts. It automates the fetching of transaction data, eliminating the need for manual entry and providing the foundation for our "effortless automation" USP.
    *   **Market Gap Addressed:** Effortless automation.

*   **Cloud Infrastructure: AWS (EC2, RDS, S3, Lambda, CloudFront, Amplify)**
    *   **Rationale:** AWS offers a comprehensive suite of scalable, reliable, and cost-effective cloud services.
        *   `EC2`: For hosting the Node.js backend API.
        *   `RDS`: Managed PostgreSQL instance for reliable database operations.
        *   `S3`: For storing static assets (images, potentially user uploads).
        *   `Lambda`: For serverless functions, potentially for event-driven tasks (e.g., data processing, notifications).
        *   `CloudFront`: CDN for faster delivery of frontend assets.
        *   `Amplify`: Streamlines deployment and hosting for frontend applications and backend APIs.
    *   **Market Gap Addressed:** Accessible pricing (pay-as-you-go scaling), reliability, and scalability.

*   **Financial Literacy Content Management: Headless CMS (e.g., Strapi, Contentful)**
    *   **Rationale:** A headless CMS allows us to manage and update financial literacy articles, tips, and guides independently from the core application code. This flexibility ensures content remains fresh, relevant, and easily tailored to student needs without requiring app updates.
    *   **Market Gap Addressed:** Tailored financial literacy, agility in content updates.

*   **Community Features: Custom Backend APIs & Frontend Components**
    *   **Rationale:** Building custom backend APIs allows us to implement unique community features (e.g., anonymous sharing of budgeting tips, peer challenges) tailored specifically to the student demographic, fostering a supportive ecosystem. These APIs will integrate seamlessly with the React Native frontend.
    *   **Market Gap Addressed:** Community aspect, student-specific features.

## 🏗️ Project Structure Overview

The project is organized into distinct directories for the frontend (mobile application) and backend (API services), along with infrastructure and documentation:

*   `/backend`: Contains the Node.js/Express.js API. Includes configurations, controllers, database models, routes, services (business logic, Plaid integration), and middleware.
*   `/frontend`: Houses the React Native mobile application. Organized into `src` containing assets, reusable UI components, screen definitions, navigation logic, state management, API services, styles, and utility functions.
*   `/infrastructure`: Defines the cloud infrastructure using Infrastructure as Code (IaC) tools, primarily for AWS.
*   `/docs`: Stores additional project documentation, design specifications, and user guides.
*   `/scripts`: Contains utility scripts for development, building, and deployment tasks.
*   Root Files: Configuration files (`.gitignore`, `package.json`, `tsconfig.json`, etc.), README, Docker configurations.

## 🏁 Getting Started

*(Placeholder for detailed setup instructions - commands to clone, install dependencies, set up environment variables, run backend/frontend, etc.)*

## 🤝 Contributing

*(Placeholder for contribution guidelines)*

## ⚖️ License

*(Placeholder for license information)*