import '../styles/main.css';

interface REPLHistoryProps{
    // TODO: Fill with some shared state tracking all the pushed commands
    // CHANGED
    history: String
}
export function REPLHistory(props : REPLHistoryProps) {
    return (
        <div className="repl-history">
          <label>diagnosis: {"\n"}</label>
            {/* This is where command history will go */}
            {/* TODO: To go through all the pushed commands... try the .map() function! */}
            {/* CHANGED */}
            <p>{props.history}</p>
        </div>
    );
}