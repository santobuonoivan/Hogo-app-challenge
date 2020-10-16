/**
 *  @swagger
 *  /tarifas:
 *    post:
 *      tags:
 *        - tarifas
 *      parameters:
 *        - in: body
 *          name: tarifa
 *          description: The tarifa to create.
 *          schema:
 *            type: object            
 *            properties:
 *              type:
 *                type: string
 *              importe:
 *                type: number
 *      description: Use to create a new tarifa.
 *      responses:
 *        '200':
 *          description: A new Tarifa object
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