from utils.misc import db, get_uuid

class Pedido(db.Model):
    __tablename__ = "pedidos"

    id = db.Column(db.String(32), primary_key=True, default=get_uuid)
    user_id = db.Column(db.String(32), db.ForeignKey('users.id'), nullable=False)
    
    tema = db.Column(db.String(150))
    tamaño = db.Column(db.String(10))
    fecha_entrega = db.Column(db.Text)
    direccion = db.Column(db.String(150))
    contacto = db.Column(db.Text)
    especificaciones = db.Column(db.Text)
    relleno = db.Column(db.Boolean, default=False)
    precio_total = db.Column(db.Float)
    
    user = db.relationship("User", back_populates="pedidos")