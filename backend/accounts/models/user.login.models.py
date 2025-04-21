from mongoengine import Document, StringField, DateTimeField
import datetime

class User(Document):
    email = StringField(required=True, unique=True)
    password = StringField(required=True)
    createdAt = DateTimeField(default=datetime.datetime.utcnow)
