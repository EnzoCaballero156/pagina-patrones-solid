from utils.misc import db, get_uuid

class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.String(32), primary_key=True, default=get_uuid)

    nombre = db.Column(db.String(50), nullable=False)
    apellido = db.Column(db.String(50), nullable=False)
    telefono = db.Column(db.Text, nullable=False)
    email = db.Column(db.Text, unique=True, nullable=False)
    password = db.Column(db.Text, nullable=False)

    pedidos = db.relationship("Pedido", back_populates="user", cascade="all, delete-orphan")