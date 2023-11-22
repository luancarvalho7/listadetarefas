import './taskCard.css'
import { useNavigate } from 'react-router-dom';


export function TaskCard({ index, editTask, deleteTask, updateTaskStatus, task, setSelectedTask }) {


    const navigate = useNavigate();

    return (


        <div className="taskCard">



            <div className="buttonsGroup">
                <button onClick={() => editTask(index)}>Editar</button>
                <button onClick={() => deleteTask(index)}>Deletar</button>
            </div>
            <div className="left">
                <h2 className='taskTitle'>{task.title}</h2>
                <p>{`Para: ${task.due}`}</p>
            </div>

            <p style={{ color: (task.done ? "#70ff65" : "#ff1c1c") }}>{` ${task.done ? 'Concluída' : 'Pendente'}`}</p>


            <div className="buttonsGroup">
                <button onClick={() => { setSelectedTask(task)
                navigate('/detalhes');
}}>
                    Ver Detalhes
                </button>
                <button onClick={() => updateTaskStatus(index)}>
                    {task.done ? 'Retomar' : 'Finalizar '}
                </button>
            </div>



        </div>
    )
}