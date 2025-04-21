# backend/db.py
from mongoengine import connect

# Replace with your actual MongoDB URI
connect(
    db="your_database_name",
    host="mongodb+srv://<username>:<password>@<cluster-url>/your_database_name?retryWrites=true&w=majority",
)
