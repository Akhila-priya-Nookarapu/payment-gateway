# Payment Gateway – Async Processing Project

## 📌 Overview
This project demonstrates a **simple async payment gateway system** using Docker.  
It includes an API service, a background worker, a dashboard UI, and a checkout SDK.

The goal of this project is to show:
- Async processing with a worker
- Proper Docker setup
- Required API endpoints
- Job status verification

---

## 🏗 Project Structure

payment-gateway/
├── api/
│ ├── index.js
│ ├── worker.js
│ ├── db.js
│ ├── package.json
│ └── package-lock.json
│
├── dashboard/
│ └── index.html
│
├── checkout/
│ └── checkout.js
│
├── docker-compose.yml
├── submission.yml
└── README.md


---

## ⚙️ Services

| Service    | Description                          | Port |
|-----------|--------------------------------------|------|
| API       | Payment & job status endpoints       | 8000 |
| Worker    | Background async processing          | —    |
| Dashboard | Webhook configuration UI             | 3000 |
| Checkout  | Embeddable checkout SDK              | 3001 |

---

## ▶️ How to Run the Project

### 1️⃣ Install dependencies (one time)
```bash
cd api
npm install
cd ..
2️⃣ Start all services
docker-compose up -d

🧪 Verification (Important)
Job Status Endpoint
curl http://localhost:8000/api/v1/test/jobs/status
Expected response:
{
  "pending": 1,
  "processing": 1,
  "completed": 5,
  "failed": 0,
  "worker_status": "running"
}
🔌 API Endpoints
Create Payment
POST /api/v1/payments

Capture Payment
POST /api/v1/payments/{payment_id}/capture

Create Refund
POST /api/v1/payments/{payment_id}/refunds

Get Refund

GET /api/v1/refunds/{refund_id}
Job Status (Test)
Copy code
GET /api/v1/test/jobs/status
🖥 Dashboard
Open in browser:

Copy code
http://localhost:3000
Includes required test identifiers:

data-test-id="webhook-config"

data-test-id="webhook-logs-table"

💳 Checkout SDK

Open in browser:

http://localhost:3001


The SDK exposes:

window.PaymentGateway
🐳 Docker

All services are managed using docker-compose.

Stop services:

docker-compose down

📄 Submission

submission.yml is included for automated evaluation

Project verified locally using Docker

Code pushed to GitHub as required

✅ Status

✔ Docker setup verified
✔ API & worker running
✔ Required endpoint returns HTTP 200
✔ Ready for submission


---

### ✅ NEXT STEP
After pasting this:
```bash
git add README.md
git commit -m "Update README"
git push
