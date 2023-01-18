FROM python:3
RUN apt update -y 
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 80 8080 8000
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]