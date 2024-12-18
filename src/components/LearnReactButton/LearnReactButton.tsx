import style from "./LearnReactButton.module.scss"

export const LearnReactButton = () => {
    return (
        <div>
            <div className={style.dick}>
                Хуй Я не <div className={style.knowWord}>знаю</div> больше тексат 
            </div>
            <a
                className={style.learnButton}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Изучить реакт 
            </a>
        </div>
        
    )
} 

