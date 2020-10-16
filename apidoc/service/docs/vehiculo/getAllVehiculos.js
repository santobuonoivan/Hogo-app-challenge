/**
 *  @swagger
 *  /vehiculos:
 *    get:
 *      tags:
 *        - vehiculos
 *      description: Use to request all Vihiculos
 *      responses:
 *        '200':
 *          description: A Vihiculos Array
 *          schema:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                  example: 5f891c127897d8002a75094a
 *                type:
 *                  type: string
 *                  example: residencial
 *                color:
 *                  type: string
 *                  example: rojo
 *                marca:
 *                  type: string
 *                  example: BMW
 *                placa:
 *                  type: string
 *                  example: ABC123
 *                createdAt:
 *                  type: string
 *                  example: 2020-10-16T04:05:38.191Z
 *                updatedAt:
 *                  type: string
 *                  example: 2020-10-16T04:05:38.191Z 
 *        
 */