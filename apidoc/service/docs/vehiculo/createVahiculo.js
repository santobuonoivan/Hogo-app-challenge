/**
 *  @swagger
 *  /vehiculos:
 *    post:
 *      tags:
 *        - vehiculos
 *      parameters:
 *        - in: body
 *          name: vehiculo
 *          description: The tarifa to create.
 *          schema:
 *            type: object            
 *            properties:
 *              type:
 *                type: string
 *              placa:
 *                type: string
 *              marca:
 *                type: string
 *              color:
 *                type: string
 *      description: Use to create a new Vehiculo.
 *      responses:
 *        '201':
 *          description: A new Vehiculo object
 *          schema:
 *            type: object
 *            properties:
 *              _id:
 *                type: string
 *                example: 5f891c127897d8002a75094a
 *              type:
 *                type: string
 *                example: residencial
 *              color:
 *                type: string
 *                example: rojo
 *              marca:
 *                type: string
 *                example: BMW
 *              placa:
 *                type: string
 *                example: ABC123
 *              createdAt:
 *                type: string
 *                example: 2020-10-16T04:05:38.191Z
 *              updatedAt:
 *                type: string
 *                example: 2020-10-16T04:05:38.191Z 
 */