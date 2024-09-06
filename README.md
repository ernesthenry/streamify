# Streamify Dashboard

A frontend application that displays an analytics dashboard for a fictional music streaming service called "Streamify." The dashboard presents key metrics and data visualizations, allowing the service's management team to gain insights into user activity, revenue, and content performance. The application is built with React and TailwindCSS, providing a modern, responsive, and visually appealing user interface.

## Features

### Dashboard Overview
The dashboard includes the following sections:

- **Key Metrics**
  - **Total Users**: Displays the total number of registered users on the platform.
  - **Active Users**: Shows the number of users who have streamed at least one song in the last 30 days.
  - **Total Streams**: Displays the total number of song streams on the platform.
  - **Revenue**: Shows the total revenue generated from subscriptions and advertisements.
  - **Top Artist**: Displays the artist with the most streams in the past 30 days.

- **Data Visualization**
  - **User Growth Chart**: A line chart that shows the growth in the number of total users and active users over the past 12 months.
  - **Revenue Distribution**: A pie chart that shows the breakdown of revenue from different sources (e.g., Subscriptions, Ads).
  - **Top 5 Streamed Songs**: A bar chart that displays the top 5 most-streamed songs over the past 30 days.

- **Data Table**
  - A table that lists detailed information about recent streams with the following columns:
    - Song Name
    - Artist
    - Date Streamed
    - Stream Count
    - User ID

### User Interaction
- **Sorting and Filtering**: The data table includes sorting and filtering functionalities, allowing users to sort by date or stream count, and filter by artist or song name.
- **Chart Interactions**: Users can interact with the charts, such as hovering over points on the line chart to see exact numbers or clicking on a segment of the pie chart to filter the data table by that revenue source.

### Design & UX
- The dashboard is responsive and adapts to various screen sizes.
- It follows a modern design language with a focus on usability and clarity, utilizing TailwindCSS for styling.

## Project Setup

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (version 14 or later)
- **npm** (Node Package Manager) or **yarn**

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/streamify-dashboard.git
   cd streamify-dashboard
   npm install
    # or
    yarn install
