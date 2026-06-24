from flask import Flask
from flask_cors import CORS
from flask_session import Session
from misc import db, bcrypt
from config import Config

from controllers.auth_controller import auth_bp
from controllers.pedido_controller import pedido_bp
from controllers.user_controller import user_bp

app = Flask(__name__)
app.config.from_object(Config)

bcrypt.init_app(app)
CORS(app, supports_credentials=True)
server_session = Session(app)

db.init_app(app)

app.register_blueprint(auth_bp, url_prefix="/api/auth")
app.register_blueprint(pedido_bp, url_prefix="/api/pedidos")
app.register_blueprint(user_bp, url_prefix="/api/users")

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)