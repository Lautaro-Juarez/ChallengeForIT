/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           description: El id de la tarea
 *         title: 
 *           type: string
 *           description: El titulo de la tarea
 *         description: 
 *           type: string
 *           description: La descripción de la tarea
 *         completed: 
 *           type: boolean
 *           description: El estado de la tarea
 *         createdAt: 
 *           type: date
 *           description: La fecha en que se creó la tarea
 *       required:
 *         - title
 *         - description
 *         - completed
 *       example:
 *         id: "1234"
 *         title: "Pasear al perro"
 *         description: "Llevar a Toby al parque a eso de las 19pm"
 *         completed: false
 *     TaskNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: La tarea no fue encontrada
 *       example:
 *         msg: La tarea no fue encontrada
 *     CreateTask:
 *       type: object
 *       properties:
 *         title: 
 *           type: string
 *           description: El titulo de la tarea
 *         description: 
 *           type: string
 *           description: La descripción de la tarea
 *         completed: 
 *           type: boolean
 *           description: El estado de la tarea
 *   parameters:
 *     TaskId:
 *       name: id
 *       in: path
 *       description: ID de la tarea
 *       required: true
 *       schema:
 *         type: string
 *      
 * /tasks:
 *   get:
 *     summary: Retorna una lista de tareas
 *     tags: [Task]
 *     responses: 
 *       200: 
 *         description: La lista de tareas
 *         content: 
 *           application/json: 
 *             schema: 
 *               type: array
 *               items: 
 *                 $ref: '#/components/schemas/Task'
 *       404:
 *          description: No hay Tareas
 *       500: 
 *          description: Error interno del servidor     
 */

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: Encontrar una tarea
 *    tags: [Task]
 *    parameters:
 *      - $ref: '#/components/parameters/TaskId'
 *    responses:
 *      200:
 *        description: Tarea encontrada
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: La tarea no se ha encontrado
 *        content: 
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/TaskNotFound'
 *      500: 
 *        description: Error interno del servidor  
 */

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: Crear una nueva tarea
 *    tags: [Task]
 *    requestBody: 
 *      required: 
 *      content: 
 *       application/json: 
 *        schema: 
 *          $ref: '#/components/schemas/CreateTask'
 *    responses:
 *      200:
 *        description: Tarea creada correctamente
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      400:
 *        description: Ya hay una tarea con este Id
 *      500: 
 *        description: Error interno del servidor  
 */

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: Editar una tarea
 *    tags: [Task]
 *    parameters:
 *      - $ref: '#/components/parameters/TaskId'
 *    requestBody: 
 *     required: 
 *     content: 
 *      application/json: 
 *       schema: 
 *         $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: Tarea editada correctamente
 *      404:
 *        description: La tarea no se ha encontrado
 *        content: 
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/TaskNotFound'
 *      500: 
 *        description: Error interno del servidor  
 */

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: Eliminar una tarea
 *    tags: [Task]
 *    parameters:
 *      - $ref: '#/components/parameters/TaskId'
 *    responses:
 *      200:
 *        description: Tarea eliminada correctamente
 *      404:
 *        description: La tarea no se ha encontrado
 *        content: 
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/TaskNotFound'
 *      500: 
 *        description: Error interno del servidor  
 */
