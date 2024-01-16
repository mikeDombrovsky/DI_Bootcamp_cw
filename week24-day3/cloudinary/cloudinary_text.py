# https://res.cloudinary.com/demo/image/upload/sheep.jpg
import json
import cloudinary.api
import cloudinary.uploader
import cloudinary

from dotenv import load_dotenv
load_dotenv()


cloudinary.config(
    cloud_name="dy50ahths",
    api_key="473369483676458",
    api_secret="***************************",
    secure=True
)

# CloudinaryImage("sheep.jpg").image()
