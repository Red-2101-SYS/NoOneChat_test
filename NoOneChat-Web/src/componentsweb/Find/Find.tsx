

type Props ={
    value: string
    onChange: (value: string) => void
}
export const Find = ({ value, onChange }: Props) => {
    return(
        <input
            type="text"
            placeholder='Поиск...'
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )      
}
