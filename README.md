# 🎫 TicketFlow — Ticket Management System

A **robust, full-featured ticket management web app** built with React.  
Includes authentication, dashboard analytics, and complete CRUD operations — all wrapped in a beautiful, responsive UI.

## ✨ Features

- 🎨 **Beautiful Landing Page** with wavy SVG backgrounds  
- 🔐 **Secure Authentication** (login/signup) with session management  
- 📊 **Dashboard Analytics** showing real-time ticket statistics  
- 📝 **Full CRUD Operations** for ticket management  
- ✅ **Inline Form Validation** and descriptive error messages  
- 🔔 **Toast Notifications** for success and error feedback  
- 📱 **Fully Responsive** (mobile, tablet, desktop)  
- 🎯 **Status-based Color Coding**
  - 🟢 Open — Green  
  - 🟡 In Progress — Amber  
  - ⚪ Closed — Gray  
- 🔒 **Protected Routes** (session-based authorization)  
- 💾 **LocalStorage Persistence** for sessions and ticket data  

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 16.0.0  
- **npm** ≥ 7.0.0 or **yarn**

### Installation

**Clone or download the repository**

   ```bash
   https://github.com/blessing986/ticket-management-react.git
   ```
**Install dependencies**

   ```bash
   npm install
   ```
**Run the development server**
   ```bash
   npm run dev
   ```
Open your browser:
Navigate to http://localhost:5173

## 📁 Project Structure

```
TICKECT-WEB-APP/
├── 📂 public/
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 📄 Toast.jsx              # Toast notification component
│   │   ├── 📄 Footer.jsx             # Reusable footer component
│   │   ├── 📄 LandingPage.jsx        # Landing page with hero section
│   │   ├── 📄 AuthPage.jsx           # Login/Signup pages
│   │   ├── 📄 Dashboard.jsx          # Dashboard with statistics
│   │   └── 📄 TicketManagement.jsx   # Ticket CRUD interface
│   ├── 📂 utils/
│   │   ├── 📄 auth.js                # Authentication utilities
│   │   └── 📄 storage.js             # LocalStorage utilities
│   ├── 📄 App.jsx                    # Main app component with routing
│   ├── 📄 main.jsx                   # Entry point
│   └── 📄 index.css                  # Global styles with Tailwind
├── 📄 index.html
├── 📄 package.json
├── 📄 tailwind.config.js
├── 📄 vite.config.js
└── 📄 README.md
```

## 🎯 Usage Guide

### 1️⃣ Landing Page

Navigate to the homepage to view:
- App features and benefits
- Call-to-action buttons

**Actions:**
- Click **"Get Started"** → Sign up page
- Click **"Login"** → Login page

### 2️⃣ Authentication

#### Sign Up (New Users)

1. Click **"Get Started"** or **"Sign Up"**
2. Enter your details:
   - **Name**: Your full name
   - **Email**: Valid email (e.g., `user@example.com`)
   - **Password**: Minimum 6 characters
3. Click **"Sign Up"**

#### Login (Existing Users)

1. Click **"Login"**
2. Enter credentials:
   - **Email**: Any valid email
   - **Password**: Minimum 6 characters
3. Click **"Login"**

> **💡 Demo Credentials:**  
> Email: `demo@ticketflow.com`  
> Password: `demo123`

> **ℹ️ Note:** Authentication is simulated using localStorage for demonstration purposes.

### 3️⃣ Dashboard

After successful login, view:

| Metric | Description |
|--------|-------------|
| 📊 **Total Tickets** | Count of all tickets |
| 🟢 **Open Tickets** | Tickets with "Open" status |
| 🟡 **In Progress** | Tickets currently being worked on |
| ⚪ **Resolved** | Closed tickets |

**Navigation:**
- Click **"Manage Tickets"** → Ticket management page
- Click **"Logout"** → Return to login page

---

### 4️⃣ Ticket Management (CRUD)

#### ➕ Create Ticket

1. Click **"Create Ticket"** button
2. Fill in the form:
   - **Title** (required): Brief description
   - **Description** (optional): Detailed information (max 500 chars)
   - **Status** (required): `Open`, `In Progress`, or `Closed`
   - **Priority** (optional): `Low`, `Medium`, or `High`
3. Click **"Create Ticket"**
4. ✅ Success toast appears

#### 👁️ View Tickets

Tickets are displayed as cards with:
- **Title** and **Description**
- **Status badge** (color-coded):
  - 🟢 Green = Open
  - 🟡 Amber = In Progress  
  - ⚪ Gray = Closed
- **Priority level**
- **Action buttons** (Edit, Delete)

#### ✏️ Edit Ticket

1. Click **Edit** (pencil icon) on any ticket
2. Modify form fields
3. Click **"Update Ticket"**
4. ✅ Success toast appears

#### 🗑️ Delete Ticket

1. Click **Delete** (trash icon) on any ticket
2. Confirm in the modal popup
3. Click **"Delete"**
4. ✅ Success toast appears

## 📐 Design Specifications

### Layout

| Property | Value |
|----------|-------|
| Max Width | `1440px` |
| Mobile | `< 768px` |
| Tablet | `768px - 1024px` |
| Desktop | `> 1024px` |

## 🔒 Security & Validation

### Form Validation Rules

| Field | Rules |
|-------|-------|
| **Title** | Required, non-empty string |
| **Status** | Required, must be: `open`, `in_progress`, or `closed` |
| **Description** | Optional, max 500 characters |
| **Email** | Required, valid email format |
| **Password** | Required, minimum 6 characters |
| **Priority** | Optional, must be: `low`, `medium`, or `high` |

### Error Handling

- ✅ Inline error messages below form fields
- ✅ Toast notifications for success/error actions
- ✅ Descriptive error messages
- ✅ Unauthorized access redirects to login
- ✅ Session expiration handling

### LocalStorage Keys

| Key | Type | Description |
|-----|------|-------------|
| `ticketapp_session` | Object | User session with token and user data |
| `tickets` | Array | All tickets data |


Built with ❤️ using React and Tailwind CSS
