from mongoengine import Document, StringField, DateTimeField
import datetime
import re
from mongoengine.errors import ValidationError

# Optional: You can create a custom validation function for the mobile field
def validate_mobile(value):
    if not re.match(r'^[0-9]{10}$', value):
        raise ValidationError("Mobile number must be exactly 10 digits.")

class User(Document):
    firstName = StringField(required=True, trim=True)
    lastName = StringField(required=True, trim=True)
    mobile = StringField(required=True, trim=True, validation=validate_mobile)
    username = StringField(required=True, unique=True, lowercase=True, trim=True)
    password = StringField(required=True)
    createdAt = DateTimeField(default=datetime.datetime.utcnow)
