// Busca por entregadores -- Sign mobile

import Deliveryman from '../models/Deliveryman';

class SignDelivery {
  async index(req, res) {
    const { id } = req.params;

    const deliveryman = await Deliveryman.findOne({
      where: { id },
    });

    if (!deliveryman) {
      return res.status(401).json({ ERRO: 'Deliveryman não encontrado!' });
    }

    return res.json(deliveryman);
  }
}

export default new SignDelivery();
