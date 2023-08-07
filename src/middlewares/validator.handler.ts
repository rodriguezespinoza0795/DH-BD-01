import { Request, RequestHandler } from 'express'
import Joi from 'joi'
import boom from '@hapi/boom'

const validatorHandler = (
  schema: Joi.ObjectSchema,
  property: keyof Request = 'body',
): RequestHandler => {
  return (req, res, next) => {
    const data = req?.[property]
    const { error } = schema.validate(data, { abortEarly: false })
    if (error) next(boom.badRequest(error))
    next()
  }
}

export default validatorHandler
