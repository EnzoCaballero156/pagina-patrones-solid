from abc import abstractmethod
from ..base.repository import Repository

class IUserRepository(Repository):
    @abstractmethod
    def get_by_email(self, email):
        pass