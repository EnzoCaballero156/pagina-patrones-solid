from flask import Blueprint, jsonify
from repositories.user.user_repository import UserRepository
from services.user_service import UserService

user_bp = Blueprint('user_bp', __name__)

user_repository = UserRepository()
user_service = UserService(user_repository)

@user_bp.get('/')
def obtener_usuarios():
    usuarios = user_service.obtener_usuarios()
    
    return jsonify([{
        "id": usuario.id,
        "nombre": usuario.nombre,
        "apellido": usuario.apellido,
        "email": usuario.email
    } for usuario in usuarios])
    
@user_bp.get('/<id>')
def obtener_usuario_por_id(id):
    usuario = user_service.obtener_usuario_por_id(id)

    if usuario is None:
        return jsonify({"error": "Usuario no encontrado."}), 404
    
    return jsonify({
        "id": usuario.id,
        "nombre": usuario.nombre,
        "apellido": usuario.apellido,
        "email": usuario.email
    })