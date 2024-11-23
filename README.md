# 🌟 Social Sellers: Turn Social Media into Optimized Product Listings  

**Social Sellers** is your ultimate tool to transform social media content into professional, e-commerce-ready product listings. By harnessing the power of **Generative AI** and advanced data processing, it converts posts from Instagram and X into compelling, Amazon-compatible listings effortlessly.  

### 🚀 Why Social Sellers?  
- Save **time** with automated workflows.  
- Boost **sales** with optimized listings tailored to Amazon’s standards.  
- Enjoy a seamless experience powered by cutting-edge AI.  

---

## ✨ Key Features  

- **🤖 AI-Powered Automation**: Converts raw social media content into enriched product listings.  
- **🔍 Amazon-Specific SEO**: Optimizes titles, descriptions, and metadata for maximum visibility.  
- **⏱ Streamlined Workflow**: Requires minimal user input for maximum output.  
- **🛡 Robust Validation**: Handles errors gracefully to keep your workflow smooth.  

---

## 🛠 Workflow  

Here’s how **Social Sellers** works its magic:  

1. **Input**: Simply provide the URL of a social media post (Instagram/X).  
2. **Scraping**: Content (text, images, and metadata) is extracted via APIs.  
3. **AI Data Enrichment**:  
   - Text is analyzed using **Gemini LLM** to extract details (e.g., title, price, attributes).  
   - Listings are formatted with dimensions, weights, and descriptions.  
4. **Validation**: Checks for errors in inputs or API responses.  
5. **Output**: A structured, ready-to-use JSON product listing is created.  

![Workflow Diagram](https://github.com/user-attachments/assets/4386c22f-faf4-4a8a-ae3d-821f2540ed33)  

---

## 🌐 How It Works  

- **User Interaction**: Allow manual adjustments when needed.  
- **AI Powerhouse**: **Gemini LLM** enriches data, categorizes products, and generates descriptions.  
- **Error Handling**: Robust mechanisms ensure smooth API communications and recover gracefully from errors.  

![Detailed Architecture](https://github.com/user-attachments/assets/309f23a2-9e23-43e7-9a8e-b0bb152bd9c6)  

---

## 🔧 Technical Stack  

- **Frontend**: Built with Next.js for a responsive and modern interface.  
- **Backend**: Powered by Flask for fast and scalable API interactions.  
- **AI Integration**:  
  - **Gemini LLM** for intelligent data enrichment.  
  - **spaCy/NLTK** for natural language processing.  
- **Image Processing**: OpenCV ensures images meet Amazon’s standards.  
- **Deployment**: Docker for scalability and reliability.  

---


## Installation and Setup

### Prerequisites

- **Node.js** (for Next.js frontend)
- **Python 3.9+** (for Flask backend)
- **Docker** (optional, for containerization)

### Installation

#### 1. Clone the Repository
``
git clone https://github.com/BhattAnsh/SocialSellers.git
cd SocialSellers``
## 2. Install Dependencies
  
### Frontend:
``
cd frontend
npm install``

### Backend:
``bash
cd backend
pip install -r requirements.txt``


## Running the Application

### 1. Configure Environment Variables
Create `.env` files in the `frontend` and `backend` directories with your API keys:
- X_IG_APP_ID
- X API

---

### 2. Run the Application Locally

#### Frontend:
``
cd frontend
npm run dev``

### Backend:
``
cd backend
python app.py``

---

## 📈 Success Metrics

- **⏱ Time Efficiency**: Demonstrates significant reductions in the time required for creating product listings, enabling sellers to scale their operations quickly and focus on customer engagement.  
- **🎯 Listing Quality**: Consistent and professional listings that align with Amazon’s standards, boosting visibility and sales.  
- **🤝 User Satisfaction**: Intuitive workflows lead to high adoption rates and positive feedback.  
- **📊 Scalability**: Robust performance even as the number of users and data volume increases.  

---

## 🌟 Why Choose Us?

With **Social Sellers**, we’re not just offering a tool—we’re redefining how sellers transform their social media presence into actionable sales opportunities.  

- Save **time**. Scale your **business**. Focus on your **customers**.  
- Backed by the **power of AI** and designed for **e-commerce excellence**.

