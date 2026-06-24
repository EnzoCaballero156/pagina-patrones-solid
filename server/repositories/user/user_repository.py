from misc import db
from models.user import User
from .iuser_repository import IUserRepository

class UserRepository(IUserRepository):
    def get_all(self):
        return User.query.all()
    
    def get_by_id(self, id):
        return User.query.filter_by(id=id).first()
    
    def get_by_email(self, email):
        return User.query.filter_by(email=email).first()
    
    def save(self, user):
        db.session.add(user)
        db.session.commit()
        return user