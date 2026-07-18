from flask import send_from_directory
from flask_cors import CORS
from flask_session import Session
from utils.misc import db, bcrypt
from utils.app_builder import AppBuilder
from config import Config

from controllers.auth_controller import auth_bp
from controllers.pedido_controller import pedido_bp
from controllers.user_controller import user_bp

from waitress import serve
import os

app = (
    AppBuilder()
        .create_app(file=__name__)
            .set_static_folder("../client/dist")
            .set_static_url_path("/")
        .configure(object=Config)
        .register_bp(auth_bp, url_prefix="/api/auth")
        .register_bp(pedido_bp, url_prefix="/api/pedidos")
        .register_bp(user_bp, url_prefix="/api/auth")
        .build()
)

bcrypt.init_app(app)
CORS(app, supports_credentials=True)
server_session = Session(app)

db.init_app(app)

# ruta pagina principal
@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/<path:path>")
def soporte(path):
    # verificar si archivos fisicos existen en dist
    if os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, "index.html")

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    # antes: app.run(debug=True)
    serve(app, host='0.0.0.0', port=5000)