const { contactService } = require('../Services');

class contactController {

  static getAll(req, res, next) {
    contactService.getAll(req)
      .then(result => res.status(result.status).json(result))
      .catch(err => next(err));
  }

  static add(req, res, next) {
    contactService.add(req)
      .then(result => res.status(result.status).json(result))
      .catch(err => next(err));
  }

  static details(req, res, next) {
    contactService.details(req)
      .then(result => res.status(result.status).json(result))
      .catch(err => next(err));
  }

  static update(req, res, next) {
    contactService.update(req)
      .then(result => res.status(result.status).json(result))
      .catch(err => next(err));
  }

  static destroy(req, res, next) {
    contactService.destroy(req)
      .then(result => res.status(result.status).json(result))
      .catch(err => next(err));
  }

}

module.exports = contactController