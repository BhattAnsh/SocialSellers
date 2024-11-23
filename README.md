
# Social Sellers: Automating Product Listings from Social Media

**Social Sellers** is a tool designed to help e-commerce sellers turn social media content into optimized product listings. Using Generative AI and advanced image/text processing, the system extracts data from social media posts (Instagram/X), analyzes it, and transforms it into detailed, Amazon-compatible product listings.

This project leverages **Gemini LLM** for data categorization and formatting, ensuring enriched and actionable content ready for listings. The entire pipeline is designed for seamless user interaction and high-quality results.

---

## Features

- **AI-Powered Automation**: Automatically transforms social media posts into Amazon-optimized listings.
- **Amazon-Specific SEO**: Titles, descriptions, and metadata optimized for visibility.
- **Streamlined Workflow**: Simplifies listing creation with minimal user input.
- **Error Handling**: Robust validation and exception management.

---

## Workflow

### Key Steps in the Process

1. **Input**: User provides the URL of a social media post (Instagram/X).
2. **Scraping**: Content is extracted using APIs and refined with **Gemini LLM**.
3. **Data Enrichment**:
   - Extract text, images, and metadata (e.g., title, price, attributes).
   - Format data into product listing standards (dimensions, weight, descriptions).
4. **Validation**: The system checks for API errors, malformed inputs, or exceptions.
5. **Listing Creation**:
   - If validation passes, a structured JSON response with enriched data is created.
   - Optionally, users can override suggestions.
6. **Output**: Listings are uploaded to the consumer portal via curated API.

Here’s an expanded workflow diagram to illustrate the process:
![Screenshot 2024-11-22 210129](https://github.com/user-attachments/assets/4386c22f-faf4-4a8a-ae3d-821f2540ed33)


- **User Interaction**: Allows for manual adjustments or overrides when necessary.
- **LLM Integration**: Enhances the extracted data by identifying product categories, generating descriptions, and ensuring data usability.
- **API Communication**: Robust error handling for scraping APIs (Instagram/Twitter) and Consumer Portal API.
![Screenshot 2024-11-22 210102](https://github.com/user-attachments/assets/309f23a2-9e23-43e7-9a8e-b0bb152bd9c6)


---

## Technical Stack

1. **Frontend**: Next.js
2. **Backend**: Flask
3. **APIs**:  X API, Personally curated API for consumer portal
4. **AI Models**:
   - **Gemini LLM**: For categorization and formatting.
   - **NLP Libraries**: spaCy and NLTK for text processing.
5. **Image Processing**: OpenCV for refining product images.
6. **Deployment**: Docker for scalability.

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

## Success Metrics

- **Time Efficiency**: Demonstrates significant reductions in the time required for creating product listings, enabling sellers to scale their operations quickly and focus on customer engagement.  
- **Listing Quality and Consistency**: Ensures all listings meet Amazon's standards for SEO, formatting, and image quality, resulting in increased visibility and higher conversion rates.  
- **User Satisfaction and Adoption**: Tracks positive feedback from users, highlighting ease of use, seamless integration, and time saved. High adoption rates indicate the tool’s value for a broad audience of sellers.  
- **Scalability**: Measures the system's performance and responsiveness as the number of users and volume of processed data grow, ensuring reliability for sellers of all sizes.  
