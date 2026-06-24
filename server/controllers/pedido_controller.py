from flask import Blueprint, request, jsonify, session
from repositories.pedido.pedido_repository import PedidoRepository
from repositories.user.user_repository import UserRepository
from services.user_service import UserService
from services.pedido_service import PedidoService

pedido_bp = Blueprint('pedido_bp', __name__)

pedido_repository = PedidoRepository()
user_repository = UserRepository()
user_service = UserService(user_repository)
pedido_service = PedidoService(pedido_repository, user_service)

@pedido_bp.get('/')
def obtener_pedidos():
    pedidos = pedido_service.obtener_pedidos()
    return jsonify([{
        "id": pedido.id,
        "tema": pedido.tema,
        "tamaño": pedido.tamaño,
        "fechaEntrega": pedido.fecha_entrega,
        "especificaciones": pedido.especificaciones,
        "relleno": pedido.relleno,
        "precioTotal": pedido.precio_total
    } for pedido in pedidos])

@pedido_bp.get('/mis-pedidos')
def mis_pedidos():
    user_id = session.get("user_id")
    if user_id is None:
        return jsonify({"error": "No autorizado."}), 401
    
    pedidos = pedido_service.obtener_pedidos_usuario(user_id)
    return jsonify([{
        "id": pedido.id,
        "tema": pedido.tema,
        "tamaño": pedido.tamaño,
        "fechaEntrega": pedido.fecha_entrega,
        "especificaciones": pedido.especificaciones,
        "relleno": pedido.relleno,
        "precioTotal": pedido.precio_total
    } for pedido in pedidos])

@pedido_bp.post('/realizar-pedido')
def realizar_pedido():
    user_id = session.get("user_id")
    if user_id is None:
        return jsonify({"error": "No autorizado."}), 401
    
    tema = request.json['tema']
    tamaño = request.json['tamaño']
    fecha_entrega = request.json['fechaEntrega']
    especificaciones = request.json['especificaciones']
    relleno = request.json['relleno']
    precio_total = request.json['precioTotal']

    nuevo_pedido = pedido_service.realizar_pedido(user_id, tema, tamaño, fecha_entrega, especificaciones, relleno, precio_total)

    return jsonify({
        "id": nuevo_pedido.id,
        "tema": nuevo_pedido.tema,
        "tamaño": nuevo_pedido.tamaño,
        "fechaEntrega": nuevo_pedido.fecha_entrega,
        "especificaciones": nuevo_pedido.especificaciones,
        "relleno": nuevo_pedido.relleno,
        "precioTotal": nuevo_pedido.precio_total
    })