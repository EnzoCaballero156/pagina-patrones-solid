from utils.misc import db
from models.pedido import Pedido
from .ipedido_repository import IPedidoRepository

class PedidoRepository(IPedidoRepository):
    def get_all(self):
        return Pedido.query.all()
    
    def get_by_id(self, id):
        return Pedido.query.filter_by(id=id).all()

    def get_by_user_id(self, user_id):
        return Pedido.query.filter_by(user_id=user_id).all()
    
    def save(self, pedido):
        db.session.add(pedido)
        db.session.commit()
        return pedido