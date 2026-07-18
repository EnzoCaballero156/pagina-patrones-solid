from abc import abstractmethod
from ..base.repository import Repository

class IPedidoRepository(Repository):
    @abstractmethod
    def get_by_user_id(self, user_id):
        pass