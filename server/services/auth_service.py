from models.user import User

class AuthService:
    def __init__(self, repository):
        self.repository = repository

    def usuario_existe(self, email):
        return self.repository.get_by_email(email) is not None

    def cargar_sesion(self, user_id):
        return self.repository.get_by_id(user_id)

    def registrar_usuario(self, nombre, apellido, telefono, email, password):
        nuevo_usuario = User(nombre=nombre, apellido=apellido, telefono=telefono, email=email, password=password)
        return self.repository.save(nuevo_usuario)
    
    def iniciar_sesion(self, email):
        usuario_encontrado = self.repository.get_by_email(email)
        return usuario_encontrado