import React from 'react'

// добавить в проект иконки и импортировать
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}


// =====
const DownIcon = () => (
    <svg width="7" height="5" viewBox="0 0 7 5" fill="none"
         xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.4641 4.5L1.90735e-06 0L6.92821 0L3.4641 4.5Z"
            fill="black"
        />
    </svg>
)
const UpIcon = () => (
    <svg width="7" height="5" viewBox="0 0 7 5" fill="none"
         style={{transform: 'rotate(180deg)'}}
         xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.4641 4.5L1.90735e-06 0L6.92821 0L3.4641 4.5Z"
            fill="black"
        />
    </svg>
)

// =====
export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === '') return down
    if (sort === down) return up
    if (sort === up) return ''
    return down
}

const SuperSort: React.FC<SuperSortPropsType & { children: React.ReactNode }> = (
    { sort, value, onChange, children, id = 'hw15' }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon =
        sort === up ? <UpIcon /> :
            <DownIcon />

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
            }}
        >
            {children}
            {icon}
        </span>
    )
}


export default SuperSort
