from models.pedido import Pedido

class PedidoService:
    def __init__(self, repository, user_service):
        self.repository = repository
        self.user_service = user_service
    
    def obtener_pedidos(self):
        return self.repository.get_all()
    
    def obtener_pedidos_usuario(self, user_id):
        return self.repository.get_by_user_id(user_id)
    
    def realizar_pedido(
            self, user_id, tema, tamaño, fecha_entrega, direccion, contacto, especificaciones, relleno, precio_total
        ):
        user = self.user_service.obtener_usuario_por_id(user_id)
        nuevo_pedido = Pedido(
            user=user, tema=tema, tamaño=tamaño, fecha_entrega=fecha_entrega, direccion=direccion, 
            contacto=contacto, especificaciones=especificaciones, relleno=relleno, precio_total=precio_total
        )
        return self.repository.save(nuevo_pedido)