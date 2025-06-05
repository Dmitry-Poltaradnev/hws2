import s from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={s.loader}>
            <svg viewBox="0 0 100 100" width="90" height="90">
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#512DE4"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="283"
                    strokeDashoffset="75"
                    strokeLinecap="round"
                    className={s.spinner}
                />
            </svg>
        </div>
    );
};





