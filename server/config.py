from dotenv import load_dotenv
import os
import redis

load_dotenv()

# ruta base de config.py
base_dir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SECRET_KEY = os.environ['SECRET_KEY']

    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True # en produccion mejor ponerlo en False

    if os.environ.get("RENDER"):
        SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
    else:
        SQLALCHEMY_DATABASE_URI = fr"sqlite:///{os.path.join(base_dir, "db.sqlite")}"

    SESSION_TYPE = "redis"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True

    REDIS_URL = os.environ.get("REDIS_URL", "redis://127.0.0.1:6379?protocol=2")
    SESSION_REDIS = redis.from_url(REDIS_URL)