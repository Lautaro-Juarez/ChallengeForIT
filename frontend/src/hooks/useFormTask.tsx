import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";

import { CreateTask, CreateErrors, Task } from "../models/Task.model";
import { TasksContext } from "../context/TaskContext";

export const useFormTask = (initialValues: CreateTask, onValidate: (form: CreateTask) => CreateErrors, editValues?:Task) => {
    const { createTask, updateTask } = useContext(TasksContext);

    const [form, setForm] = useState<CreateTask | Task>(initialValues);
    const [loading, setLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<CreateErrors>({});

    useEffect(() => {
        if (editValues) {
            setForm(editValues)
        }
    }, [editValues]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const error = onValidate(form);

        if (Object.keys(error).length === 0) {
            setLoading(true);
            if ((form as Task).id) {
                await updateTask((form as Task).id, form as Task);
            } else {
                await createTask(form as CreateTask);
            }
            setLoading(false);
        } else {
            setErrors(error);
        }
    };

    return { form, errors, loading, handleChange, handleSubmit };
};