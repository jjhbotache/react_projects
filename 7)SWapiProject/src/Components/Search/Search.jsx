import { SearchContainer } from "./customStyles"

export default function Search({value, onChange, suggestions, above}) {
    return(
        <SearchContainer $above={above}>
            <h1>STAR WARS</h1>
            <div>
                <input list="suggestions" type="text" value={value} onChange={onChange} />
                {suggestions && (
                        <datalist id="suggestions">
                    {suggestions.map((s) => (
                        <option key={s}>{s.toLowerCase()}</option>
                        ))}
                    </datalist>
                )}
            </div>
        </SearchContainer>
    )
};
