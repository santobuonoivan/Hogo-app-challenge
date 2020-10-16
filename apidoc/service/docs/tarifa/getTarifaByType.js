/**
 *  @swagger
 *  /tarifas/{type}:
 *    get:
 *      tags:
 *        - tarifas
 *      parameters:
 *        - in: path
 *          name: type
 *          required: true
 *          type: string
 *          description: Car type. 
 *      description: Use to request tarifa by car type.
 *      responses:
 *        '200':
 *          description: A tarifa Object
 *          schema:
 *            type: object
 *            properties:
 *              _id:
 *                type: string
 *                example: 5f891c127897d8002a75094a
 *              type:
 *                type: string
 *                example: residencial
 *              importe:
 *                type: number
 *                example: 0.05
 *              createdAt:
 *                type: string
 *                example: 2020-10-16T04:05:38.191Z
 *              updatedAt:
 *                type: string
 *                example: 2020-10-16T04:05:38.191Z 
 */