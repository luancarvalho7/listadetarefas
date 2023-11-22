import './fullTask.css'
import { useNavigate } from 'react-router-dom';
export function FullTask({ task }) {

    const navigate = useNavigate();

    return (
        <section className="fullTask">
            <div className={task.done ? "statusGreen" : "status"}>{task.done ? 'Concluído' : 'Pendente'}</div>

            <h1 className="title">{task.title}</h1>
            <h2 className="description">{task.details}</h2>

            <div className="ExtraInfo">
                <h2 className="creation">Criado em: {task.creation}</h2>

                <h2 className="due">Feito até: {task.due}</h2>
            </div>

            <button id='voltarbtn' onClick={() => {
                navigate('/');
            }}> Voltar </button>
        </section>
    )
}