# Base Image
FROM python:3.10-slim

# Set Working Directory
WORKDIR /app

# Copy Files
COPY . .

# Install Dependencies
RUN pip install -r requirements.txt

# Expose Port
EXPOSE 8000

# Command to Run Application
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "app:app"]