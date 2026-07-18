class UserService:
    def __init__(self, repository):
        self.repository = repository
    
    def obtener_usuarios(self):
        return self.repository.get_all()
    
    def obtener_usuario_por_id(self, id):
        return self.repository.get_by_id(id)