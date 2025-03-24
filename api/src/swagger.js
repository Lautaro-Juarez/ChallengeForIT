export const swaggerSpec = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Challenge ForIT",
        description: "API para consultas y manejo tareas",
        version: "1.0.0",
      },
      servers: [
        {
          url: "http://localhost:3000/api",
        },
      ],
    },
    apis: ["./src/docs/*.js"]
  };
   