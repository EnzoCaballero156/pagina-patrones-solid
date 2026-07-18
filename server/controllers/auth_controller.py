from flask import Blueprint, request, jsonify, session
from repositories.user.user_repository import UserRepository
from services.auth_service import AuthService
from utils.misc import bcrypt

auth_bp = Blueprint('auth_bp', __name__)

user_repository = UserRepository()
auth_service = AuthService(user_repository)

@auth_bp.get('/@me')
def get_current_session():
    user_id = session.get("user_id")

    if user_id is None:
        return jsonify({"error": "No autorizado."}), 401
    
    user = auth_service.cargar_sesion(user_id)

    return jsonify({
        'id': user.id,
        'nombre': user.nombre,
        'apellido': user.apellido,
        'email': user.email
    }) 

@auth_bp.post('/register')
def registrar_usuario():
    nombre = request.json['nombre']
    apellido = request.json['apellido']
    telefono = request.json['telefono']
    email = request.json['email']
    password = request.json['password']

    if auth_service.usuario_existe(email): 
        return jsonify({'error': 'El usuario ya existe.'}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    nuevo_usuario = auth_service.registrar_usuario(nombre, apellido, telefono, email, hashed_password)

    session['user_id'] = nuevo_usuario.id
    session.modified = True

    return jsonify({
        "id": nuevo_usuario.id,
        "nombre": nuevo_usuario.nombre,
        "apellido": nuevo_usuario.apellido,
        "email": nuevo_usuario.email
    })
    
@auth_bp.post('/login')
def iniciar_sesion():
    email = request.json['email']
    password = request.json['password']
    usuario = auth_service.iniciar_sesion(email)

    if usuario is None or not bcrypt.check_password_hash(usuario.password, password):
        return jsonify({"error": "No autorizado."}), 401

    session['user_id'] = usuario.id
    session.modified = True

    return jsonify({
        "id": usuario.id,
        "nombre": usuario.nombre,
        "apellido": usuario.apellido,
        "email": usuario.email
    })