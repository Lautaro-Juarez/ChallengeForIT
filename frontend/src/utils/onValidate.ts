import { CreateErrors, CreateTask } from "../models/Task.model";

export  const onValidate = (form: CreateTask) => {

        const errors: CreateErrors = {};

        if (form.title.trim() === '') {
            errors.title = 'El campo no puede estar vacío';
        }
        if (form.title.length > 100) {
            errors.title = 'El campo no puede tener más de 100 caracteres';
        }
        if (form.description.trim() === '') {
            errors.description = 'El campo no puede estar vacío';
        }
        if (form.description.length > 200) {
            errors.description = 'El campo no puede tener más de 200 caracteres';
        }
        return errors
    }